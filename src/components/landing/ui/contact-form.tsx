"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  business: string;
  monthlyBudget: string;
  notes: string;
};

type ContactFormProps = {
  redirectHref?: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  business: "",
  monthlyBudget: "",
  notes: "",
};

export function ContactForm({ redirectHref }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message);
      }

      if (redirectHref) {
        window.location.assign(redirectHref);
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            className="w-full rounded-2xl border border-[#dce5f6] bg-[#f7faff] px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            placeholder="Your full name"
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            className="w-full rounded-2xl border border-[#dce5f6] bg-[#f7faff] px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            placeholder="you@company.com"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Business
          <input
            required
            value={form.business}
            onChange={(event) =>
              setForm({ ...form, business: event.target.value })
            }
            className="w-full rounded-2xl border border-[#dce5f6] bg-[#f7faff] px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            placeholder="Business name"
          />
        </label>
        <label className="space-y-2 text-sm font-semibold text-foreground">
          Monthly Ad Budget
          <input
            required
            value={form.monthlyBudget}
            onChange={(event) =>
              setForm({ ...form, monthlyBudget: event.target.value })
            }
            className="w-full rounded-2xl border border-[#dce5f6] bg-[#f7faff] px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            placeholder="Example: $1,500"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-semibold text-foreground">
        What are you trying to sell?
        <textarea
          rows={4}
          value={form.notes}
          onChange={(event) => setForm({ ...form, notes: event.target.value })}
          className="w-full rounded-2xl border border-[#dce5f6] bg-[#f7faff] px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
          placeholder="Share your offer, current challenge, and lead goal."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(29,78,216,0.28)] transition hover:-translate-y-0.5 hover:bg-primary-strong disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Book a Call"}
      </button>
      <p className="text-sm text-muted">
        Takes less than a minute. You will continue on WhatsApp after submit.
      </p>
      {message ? (
        <p
          className={`text-sm font-medium ${status === "success" ? "text-success" : "text-[#b91c1c]"}`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
