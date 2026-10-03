// Lead delivery via Google Apps Script (free) — see google-apps-script/Code.gs.
// Each submission sends TWO emails from your own Gmail:
//   1. the lead details  → SITE.leadEmail
//   2. a confirmation    → the customer ("Our team will contact you shortly")
// Setup: deploy Code.gs as a Web app and paste its /exec URL into
// src/site.js → SITE.leadScriptUrl.
import { SITE } from '../site.js'

const LABELS = {
  first: 'First name', last: 'Last name', name: 'Name', email: 'Email',
  phone: 'Phone', subject: 'Subject', service: 'Service', message: 'Message',
}

function format(fields) {
  return Object.entries(fields)
    .filter(([k, v]) => !k.startsWith('_') && k !== 'botcheck' && v && String(v).trim())
    .map(([k, v]) => `${LABELS[k] || k}: ${v}`)
    .join('\n')
}

// Pull a plain object of values from a <form> (drops the honeypot field).
export const formValues = (form) => {
  const o = Object.fromEntries(new FormData(form).entries())
  if (o.botcheck) o.__bot = true // honeypot ticked → a bot, not a person
  delete o.botcheck
  return o
}

export function mailtoLead(subject, fields) {
  const body = `New enquiry from the KN Builders website:\n\n${format(fields)}`
  return `mailto:${SITE.leadEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// Async submit. Returns { ok } or { ok: false, error }.
export async function submitLead(fields, { subject = 'Website enquiry' } = {}) {
  if (fields.__bot) return { ok: true } // silently drop spam bots
  if (!SITE.leadScriptUrl) {
    return { ok: false, error: `Our form is being set up. Please call or WhatsApp us on ${SITE.phone}.` }
  }

  const payload = { _formName: subject }
  for (const [k, v] of Object.entries(fields)) {
    if (!k.startsWith('_') && v && String(v).trim()) payload[k] = String(v).trim()
  }

  try {
    // text/plain avoids a CORS preflight, which Apps Script cannot answer.
    const res = await fetch(SITE.leadScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    if (data.success) return { ok: true }
    return { ok: false, error: data.message || 'Submission failed. Please try again or call us.' }
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' }
  }
}
