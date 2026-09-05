import { useState, type FormEvent } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { eventTypes, foodPreferences, guestRanges, serviceTypes, waLink } from "@/data/siteData";
import { btnPrimary, btnWhatsApp, btnOutline } from "@/components/common/buttons";

type Values = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  location: string;
  foodPreference: string;
  serviceType: string;
  notes: string;
};

const field =
  "min-h-11 w-full rounded-xl border border-input bg-card px-3.5 text-[16px] text-foreground placeholder:text-muted-foreground/70 focus-visible:border-gold";

const labelCls = "mb-1.5 block text-sm font-medium text-foreground";

function buildWhatsAppMessage(v: Values) {
  return [
    "Hello Sri Kousalya,",
    "I would like to enquire about catering.",
    "",
    `Name: ${v.name}`,
    `Phone: ${v.phone}`,
    v.email ? `Email: ${v.email}` : null,
    `Event: ${v.eventType}`,
    `Date: ${v.eventDate}`,
    `Guests: ${v.guests}`,
    `Location: ${v.location}`,
    v.foodPreference ? `Food Preference: ${v.foodPreference}` : null,
    v.serviceType ? `Service: ${v.serviceType}` : null,
    v.notes ? `Requirements: ${v.notes}` : null,
    "",
    "Thank you.",
  ]
    .filter(Boolean)
    .join("\n");
}

export function QuoteForm({
  initial = {},
}: {
  initial?: {
    eventType?: string | undefined;
    guests?: string | undefined;
    serviceType?: string | undefined;
  };
}) {
  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    email: "",
    eventType: initial.eventType ?? "",
    eventDate: "",
    guests: initial.guests ?? "",
    location: "",
    foodPreference: "",
    serviceType: initial.serviceType ?? "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  function validate() {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e["name"] = "Please enter your name.";
    if (!/^[0-9+\s-]{10,15}$/.test(values.phone.trim()))
      e["phone"] = "Please enter a valid phone number.";
    if (!values.eventType) e["eventType"] = "Please choose an event type.";
    if (!values.eventDate) e["eventDate"] = "Please choose the event date.";
    if (!values.guests) e["guests"] = "Please tell us the number of guests.";
    if (!values.location.trim()) e["location"] = "Please enter the event location.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (validate()) {
      setSubmitted(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/40 bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
        <h2 className="mt-4 font-display text-3xl text-foreground">
          Thank you, {values.name.split(" ")[0]}!
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Your enquiry is ready to send. Tap below and it will open in WhatsApp with all your event
          details filled in — we'll reply with a quote.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={waLink(buildWhatsAppMessage(values))}
            target="_blank"
            rel="noopener noreferrer"
            className={btnWhatsApp}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Continue on WhatsApp
          </a>
          <button type="button" onClick={() => setSubmitted(false)} className={btnOutline}>
            Edit details
          </button>
        </div>
        <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-muted p-4 text-left text-xs text-muted-foreground">
          {buildWhatsAppMessage(values)}
        </pre>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
      <Field id="name" label="Name" required error={errors["name"]}>
        <input
          id="name"
          className={field}
          value={values.name}
          onChange={set("name")}
          autoComplete="name"
        />
      </Field>

      <Field id="phone" label="Phone Number" required error={errors["phone"]}>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          className={field}
          value={values.phone}
          onChange={set("phone")}
          autoComplete="tel"
          placeholder="98xxxxxxxx"
        />
      </Field>

      <Field id="email" label="Email (optional)">
        <input
          id="email"
          type="email"
          className={field}
          value={values.email}
          onChange={set("email")}
          autoComplete="email"
        />
      </Field>

      <Field id="eventType" label="Event Type" required error={errors["eventType"]}>
        <select
          id="eventType"
          className={field}
          value={values.eventType}
          onChange={set("eventType")}
        >
          <option value="">Select</option>
          {eventTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field id="eventDate" label="Event Date" required error={errors["eventDate"]}>
        <input
          id="eventDate"
          type="date"
          className={field}
          value={values.eventDate}
          onChange={set("eventDate")}
        />
      </Field>

      <Field id="guests" label="Number of Guests" required error={errors["guests"]}>
        <select id="guests" className={field} value={values.guests} onChange={set("guests")}>
          <option value="">Select</option>
          {guestRanges.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </Field>

      <Field id="location" label="Event Location" required error={errors["location"]} full>
        <input
          id="location"
          className={field}
          value={values.location}
          onChange={set("location")}
          placeholder="Venue or area in Visakhapatnam"
        />
      </Field>

      <Field id="foodPreference" label="Food Preference (optional)">
        <select
          id="foodPreference"
          className={field}
          value={values.foodPreference}
          onChange={set("foodPreference")}
        >
          <option value="">Select</option>
          {foodPreferences.map((f) => (
            <option key={f}>{f}</option>
          ))}
        </select>
      </Field>

      <Field id="serviceType" label="Service Type (optional)">
        <select
          id="serviceType"
          className={field}
          value={values.serviceType}
          onChange={set("serviceType")}
        >
          <option value="">Select</option>
          {serviceTypes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>

      <Field id="notes" label="Additional Requirements (optional)" full>
        <textarea
          id="notes"
          rows={4}
          className={`${field} py-3`}
          value={values.notes}
          onChange={set("notes")}
          placeholder="Sessions, live counters, specific dishes…"
        />
      </Field>

      <div className="sm:col-span-2">
        <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}>
          Request Catering Quote
        </button>
        <p className="mt-3 text-xs text-muted-foreground">
          We use your details only to prepare your catering quote.
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  children,
  required,
  error,
  full,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string | undefined;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className={labelCls}>
        {label}
        {required && <span className="text-terracotta"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
