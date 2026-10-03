/**
 * KN Builders — website form mailer (Google Apps Script, free).
 *
 * For every form submission on the website this script sends TWO emails
 * from your own Gmail account:
 *   1. Lead details  → OWNER_EMAIL (you)
 *   2. Confirmation  → the customer ("Our team will contact you shortly")
 * Both emails carry the KN Builders logo + brand colours of the website.
 *
 * Setup (one time):
 *   1. Go to https://script.google.com → New project → paste this whole file.
 *   2. Click Deploy → New deployment → type "Web app".
 *        Execute as:      Me
 *        Who has access:  Anyone
 *   3. Click Deploy → Authorize access → choose your Gmail → Allow.
 *   4. Copy the "Web app URL" (ends with /exec) and paste it into
 *      src/site.js → SITE.leadScriptUrl in the website code.
 *
 * If you edit this file later: Deploy → Manage deployments → Edit (pencil)
 * → Version: "New version" → Deploy. (The /exec URL stays the same.)
 *
 * Gmail free limit: about 100 emails per day (each lead uses 2).
 */

/* ===================== Business details ===================== */
const OWNER_EMAIL = 'nancykkl96@gmail.com';
const BUSINESS_NAME = 'KN Builders';
const TAGLINE = 'Construction Excellence in Tambaram';
const BUSINESS_PHONE = '+91 824 847 4364';
const PHONE_LINK = 'tel:+918248474364';
const WHATSAPP_LINK = 'https://wa.me/918248474364';
const WEBSITE_URL = 'https://www.knbuilders.com';
const ADDRESS = 'No. 1390, Royappa Nagar, Varadharajapuram, Chennai, Tamil Nadu 600048';
const HOURS = 'Mon – Fri 9:00 – 18:00 · Sat 10:00 – 15:00';

/* Website brand colours (tailwind.config.js) */
const C = {
  charcoal: '#2e2a26', charcoalDeep: '#1c1a17', orange: '#c9591f',
  olive: '#6b7045', cream: '#faf6ef', creamDeep: '#f4ecdd', tan: '#ede4d3',
  text: '#2e2a26', muted: '#6f6a63', white: '#ffffff', whatsapp: '#25d366',
};
const FONT = "'Plus Jakarta Sans','Poppins','Segoe UI',Arial,Helvetica,sans-serif";

/* KN monogram from the website logo (cream N + terracotta K), PNG, base64. */
const LOGO_PNG_BASE64 = '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';

const LABELS = {
  name: 'Name', first: 'First name', last: 'Last name', email: 'Email',
  phone: 'Phone', service: 'Service', subject: 'Subject', message: 'Message',
};
// Order the details appear in the emails.
const FIELD_ORDER = ['name', 'first', 'last', 'email', 'phone', 'service', 'subject', 'message'];

/* ===================== Web app endpoints ===================== */
function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Spam bots fill hidden fields — accept silently, send nothing.
    if (data._honey) return json_({ success: true });

    const email = clean_(data.email, 200);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ success: false, message: 'Please enter a valid email address.' });
    }
    const name = clean_(data.name, 100) ||
      [clean_(data.first, 60), clean_(data.last, 60)].filter(String).join(' ') ||
      'Customer';
    const formName = clean_(data._formName, 80) || 'Website enquiry';
    const rows = detailRows_(data);
    const logo = logoBlob_();

    // ---- 1. Lead details to you ----
    MailApp.sendEmail({
      to: OWNER_EMAIL,
      replyTo: email,
      name: BUSINESS_NAME + ' Website',
      subject: 'New ' + formName + ' — ' + name,
      body: 'New ' + formName + '\n\n' + rows.map(function (r) { return r[0] + ': ' + r[1]; }).join('\n'),
      htmlBody: ownerHtml_(name, email, formName, rows),
      inlineImages: { knlogo: logo },
    });

    // ---- 2. Confirmation to the customer ----
    MailApp.sendEmail({
      to: email,
      replyTo: OWNER_EMAIL,
      name: BUSINESS_NAME,
      subject: 'Thank you for contacting ' + BUSINESS_NAME + ' — we have received your details',
      body:
        'Hi ' + name + ',\n\n' +
        'Thank you for contacting ' + BUSINESS_NAME + '. Your details were received successfully.\n\n' +
        'Our team will contact you shortly.\n\n' +
        'For anything urgent, call or WhatsApp us on ' + BUSINESS_PHONE + '.\n\n' +
        'Regards,\n' + BUSINESS_NAME + '\n' + WEBSITE_URL,
      htmlBody: customerHtml_(name, rows),
      inlineImages: { knlogo: logo },
    });

    return json_({ success: true });
  } catch (err) {
    console.error(err);
    return json_({ success: false, message: 'Could not send your details. Please try again or call us.' });
  }
}

// Open the /exec URL in a browser to check the script is live.
function doGet() {
  return json_({ success: true, message: 'KN Builders form mailer is running.' });
}

// Run once from the editor (select "testMail" → Run) — both emails come to you.
function testMail() {
  const res = doPost({ postData: { contents: JSON.stringify({
    first: 'Priya', last: 'G', email: OWNER_EMAIL, phone: '+91 73589 36388',
    service: 'Residential Construction', subject: 'New house in Tambaram',
    message: '1,200 sq.ft plot, G+1 house. Planning to start in 3 months.',
    _formName: 'Contact form enquiry',
  }) } });
  console.log(res.getContent());
}

/* ===================== Email templates ===================== */
function customerHtml_(name, rows) {
  const firstName = esc_(name.split(' ')[0]);
  const steps = [
    ['1', 'We review your requirement', 'Our engineers go through the details you shared.'],
    ['2', 'Our team calls you', 'Usually within one business day, to understand your plans.'],
    ['3', 'Site visit & free quote', 'A transparent, itemised estimate — no obligation.'],
  ];
  const stepsHtml = steps.map(function (s) {
    return '<tr><td width="40" valign="top" style="padding:0 0 14px;">' +
      '<div style="width:28px;height:28px;line-height:28px;border-radius:14px;background:' + C.orange + ';color:#fff;font-weight:700;font-size:13px;text-align:center;">' + s[0] + '</div></td>' +
      '<td valign="top" style="padding:3px 0 14px;"><div style="font-size:14px;font-weight:700;color:' + C.text + ';">' + s[1] + '</div>' +
      '<div style="font-size:13px;color:' + C.muted + ';line-height:20px;">' + s[2] + '</div></td></tr>';
  }).join('');

  const content =
    // greeting + check badge
    '<tr><td style="padding:36px 36px 8px;text-align:center;">' +
      '<div style="display:inline-block;width:56px;height:56px;line-height:56px;border-radius:28px;background:' + C.olive + ';color:#fff;font-size:28px;font-weight:700;">&#10003;</div>' +
      '<h1 style="margin:18px 0 6px;font-size:24px;line-height:32px;color:' + C.text + ';font-weight:800;">Thank you, ' + firstName + '!</h1>' +
      '<p style="margin:0;font-size:15px;line-height:24px;color:' + C.muted + ';">Your details were received successfully.</p>' +
    '</td></tr>' +
    // highlight box
    '<tr><td style="padding:22px 36px 6px;">' +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + C.creamDeep + ';border-left:4px solid ' + C.orange + ';border-radius:10px;">' +
      '<tr><td style="padding:18px 20px;">' +
        '<div style="font-size:17px;font-weight:800;color:' + C.orange + ';">Our team will contact you shortly.</div>' +
        '<div style="margin-top:4px;font-size:13px;line-height:20px;color:' + C.muted + ';">For anything urgent, call or WhatsApp us on <b style="color:' + C.text + ';">' + BUSINESS_PHONE + '</b>.</div>' +
      '</td></tr></table>' +
    '</td></tr>' +
    // submitted details
    '<tr><td style="padding:26px 36px 4px;">' +
      sectionTitle_('Your submitted details') + detailsTable_(rows) +
    '</td></tr>' +
    // next steps
    '<tr><td style="padding:26px 36px 0;">' +
      sectionTitle_('What happens next') +
      '<table role="presentation" width="100%" cellpadding="0" cellspacing="0">' + stepsHtml + '</table>' +
    '</td></tr>' +
    // buttons
    '<tr><td style="padding:8px 36px 34px;text-align:center;">' +
      button_('Call Now', PHONE_LINK, C.orange) + '&nbsp;&nbsp;' + button_('WhatsApp Us', WHATSAPP_LINK, C.whatsapp) +
    '</td></tr>';

  return shell_('Your details were received — our team will contact you shortly.', content,
    'You received this email because you submitted a form on the ' + BUSINESS_NAME + ' website.');
}

function ownerHtml_(name, email, formName, rows) {
  const when = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const phoneRow = rows.filter(function (r) { return r[0] === 'Phone'; })[0];
  const phone = phoneRow ? phoneRow[1].replace(/[^\d+]/g, '') : '';

  const content =
    '<tr><td style="padding:30px 36px 6px;">' +
      '<span style="display:inline-block;padding:5px 12px;border-radius:20px;background:' + C.creamDeep + ';color:' + C.orange + ';font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">New lead</span>' +
      '<h1 style="margin:12px 0 4px;font-size:22px;line-height:30px;color:' + C.text + ';font-weight:800;">' + esc_(formName) + '</h1>' +
      '<p style="margin:0;font-size:13px;color:' + C.muted + ';">From <b style="color:' + C.text + ';">' + esc_(name) + '</b> · ' + esc_(when) + ' IST</p>' +
    '</td></tr>' +
    '<tr><td style="padding:20px 36px 4px;">' + detailsTable_(rows) + '</td></tr>' +
    '<tr><td style="padding:22px 36px 32px;text-align:center;">' +
      button_('Reply by Email', 'mailto:' + email, C.orange) +
      (phone ? '&nbsp;&nbsp;' + button_('Call Customer', 'tel:' + phone, C.charcoal) : '') +
    '</td></tr>';

  return shell_('New ' + formName + ' from ' + name, content,
    'Sent automatically by the ' + BUSINESS_NAME + ' website form. Reply to this email to answer the customer.');
}

/* ===================== Building blocks ===================== */
// Outer layout: brand header with logo, white card, dark footer.
function shell_(preheader, contentRows, footnote) {
  return '<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"></head>' +
    '<body style="margin:0;padding:0;background:' + C.cream + ';">' +
    '<div style="display:none;max-height:0;overflow:hidden;opacity:0;">' + esc_(preheader) + '</div>' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + C.cream + ';font-family:' + FONT + ';">' +
    '<tr><td align="center" style="padding:28px 12px;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:' + C.white + ';border-radius:16px;overflow:hidden;border:1px solid ' + C.tan + ';">' +
      // header
      '<tr><td style="background:' + C.charcoal + ';padding:22px 36px;">' +
        '<table role="presentation" cellpadding="0" cellspacing="0"><tr>' +
          '<td valign="middle" style="padding-right:12px;"><a href="' + WEBSITE_URL + '" style="text-decoration:none;">' +
            '<img src="cid:knlogo" width="44" height="44" alt="KN" style="display:block;width:44px;height:44px;border:0;"></a></td>' +
          '<td valign="middle">' +
            '<a href="' + WEBSITE_URL + '" style="text-decoration:none;font-size:22px;line-height:26px;letter-spacing:-0.2px;">' +
              '<span style="color:#ffffff;font-weight:800;">KN</span> <span style="color:' + C.orange + ';font-weight:600;">Builders</span></a>' +
            '<div style="font-size:12px;line-height:18px;color:#cfc8bc;">' + TAGLINE + '</div>' +
          '</td></tr></table>' +
      '</td></tr>' +
      '<tr><td style="height:4px;line-height:4px;font-size:0;background:' + C.orange + ';">&nbsp;</td></tr>' +
      contentRows +
      // footer
      '<tr><td style="background:' + C.charcoal + ';padding:24px 36px;">' +
        '<div style="font-size:14px;font-weight:700;color:#ffffff;">' + BUSINESS_NAME + '</div>' +
        '<div style="margin-top:6px;font-size:12px;line-height:20px;color:#cfc8bc;">' +
          esc_(ADDRESS) + '<br>' +
          '<a href="' + PHONE_LINK + '" style="color:#cfc8bc;text-decoration:none;">' + BUSINESS_PHONE + '</a> · ' +
          '<a href="mailto:' + OWNER_EMAIL + '" style="color:#cfc8bc;text-decoration:none;">' + OWNER_EMAIL + '</a><br>' +
          esc_(HOURS) + '<br>' +
          '<a href="' + WEBSITE_URL + '" style="color:' + C.orange + ';text-decoration:none;font-weight:600;">' + WEBSITE_URL.replace(/^https?:\/\//, '') + '</a>' +
        '</div>' +
      '</td></tr>' +
    '</table>' +
    '<p style="max-width:560px;margin:14px auto 0;font-size:11px;line-height:17px;color:' + C.muted + ';text-align:center;">' + esc_(footnote) + '</p>' +
    '</td></tr></table></body></html>';
}

function sectionTitle_(text) {
  return '<div style="font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:' + C.orange + ';margin:0 0 10px;">' + text + '</div>';
}

function detailsTable_(rows) {
  return '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ' + C.tan + ';border-radius:10px;border-collapse:separate;overflow:hidden;">' +
    rows.map(function (r, i) {
      const border = i < rows.length - 1 ? 'border-bottom:1px solid ' + C.tan + ';' : '';
      return '<tr>' +
        '<td width="34%" valign="top" style="padding:11px 14px;background:' + C.cream + ';font-size:13px;font-weight:700;color:' + C.text + ';' + border + '">' + esc_(r[0]) + '</td>' +
        '<td valign="top" style="padding:11px 14px;font-size:14px;line-height:21px;color:' + C.text + ';' + border + '">' + esc_(r[1]).replace(/\n/g, '<br>') + '</td></tr>';
    }).join('') + '</table>';
}

function button_(label, href, bg) {
  return '<a href="' + href + '" style="display:inline-block;margin:6px 0;padding:12px 26px;border-radius:30px;background:' + bg + ';color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">' + label + '</a>';
}

/* ===================== Helpers ===================== */
// [label, value] pairs in a fixed order, then any unknown fields.
function detailRows_(data) {
  const keys = FIELD_ORDER.concat(Object.keys(data).filter(function (k) {
    return FIELD_ORDER.indexOf(k) < 0 && k.charAt(0) !== '_';
  }));
  return keys
    .filter(function (k) { return clean_(data[k]); })
    .map(function (k) { return [LABELS[k] || k, clean_(data[k])]; });
}

function logoBlob_() {
  return Utilities.newBlob(Utilities.base64Decode(LOGO_PNG_BASE64), 'image/png', 'kn-builders-logo.png');
}

function clean_(v, max) {
  return String(v == null ? '' : v).trim().slice(0, max || 3000);
}

function esc_(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
