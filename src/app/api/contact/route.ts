import { NextResponse } from "next/server";

const REQUIRED_FIELDS = ["name", "email", "business", "monthlyBudget"] as const;
const NOTIFICATION_EMAIL = "sikumna.nepal@gmail.com";
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${NOTIFICATION_EMAIL}`;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;

    for (const field of REQUIRED_FIELDS) {
      if (!body[field]?.trim()) {
        return NextResponse.json(
          { ok: false, message: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    const payload = {
      ...body,
      submittedAt: new Date().toISOString(),
      source: "meta-ads-landing-page",
    };
    const subject = `New Meta Ads Lead: ${body.name} (${body.business})`;
    const formData = new URLSearchParams();

    formData.set("name", body.name);
    formData.set("email", body.email);
    formData.set("business", body.business);
    formData.set("monthlyBudget", body.monthlyBudget);
    formData.set("notes", body.notes ?? "");
    formData.set("submittedAt", payload.submittedAt);
    formData.set("source", payload.source);
    formData.set("_subject", subject);
    formData.set("_template", "table");
    formData.set("_captcha", "false");
    formData.set("_replyto", body.email);

    const formsubmitResponse = await fetch(FORMSUBMIT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: formData.toString(),
      cache: "no-store",
    });

    const responseText = await formsubmitResponse.text();

    if (!formsubmitResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Form submission email could not be delivered yet. Please verify the FormSubmit activation email sent to sikumna.nepal@gmail.com.",
          details: responseText,
        },
        { status: 502 },
      );
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            ok: false,
            message: "Lead captured, but webhook forwarding failed.",
          },
          { status: 502 },
        );
      }
    } else {
      console.info("Lead submission received without CONTACT_WEBHOOK_URL:", payload);
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks. Your lead request has been received.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to submit the form right now." },
      { status: 500 },
    );
  }
}
