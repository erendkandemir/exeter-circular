export interface EnquiryFields {
  business: string;
  name: string;
  email: string;
  sector: string;
  interest: string;
  message: string;
}

export function makeEnquiryDraft(fields: EnquiryFields): string {
  return [
    "Hello Exeter Circular – Sustainable Business Network,",
    "",
    "I would like to enquire about joining or supporting the network.",
    "",
    `Business: ${fields.business}`,
    `Contact: ${fields.name}`,
    `Email: ${fields.email}`,
    `Business type: ${fields.sector}`,
    `Interested in: ${fields.interest}`,
    "",
    fields.message,
    "",
    "I am happy to be contacted about this enquiry. Publishing our business details or logo requires separate permission.",
  ].join("\n");
}

export function makeMailto(
  email: string,
  subject: string,
  body: string,
): string {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function safeWebsite(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" ? parsed.href : undefined;
  } catch {
    return undefined;
  }
}
