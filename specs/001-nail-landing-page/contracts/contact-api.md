# Contract: Contact API

**Endpoint**: `POST /api/contact`  
**Feature**: `001-nail-landing-page`

## Purpose

Accept appointment inquiries from the landing page contact form after validation. No online booking/calendar reservation is created.

## Request

- **Content-Type**: `application/json`
- **Body**:

```json
{
  "name": "Jordan Lee",
  "email": "jordan@example.com",
  "phone": "+1-555-0100",
  "message": "Hi, I'd like to book a gel manicure next week.",
  "preferredService": "gel-manicure",
  "website": ""
}
```

| Field | Required | Constraints |
|-------|----------|-------------|
| name | yes | 2–80 characters |
| email | yes | Valid email format |
| phone | no | 7–20 characters when provided |
| message | yes | 10–2000 characters |
| preferredService | no | Free text or known service id |
| website | no | Honeypot; if non-empty, treat as bot (return generic success without sending) |

## Responses

### 200 OK — Accepted

```json
{
  "ok": true,
  "message": "Thanks! Your inquiry was received. We'll reply within one business day."
}
```

### 400 Bad Request — Validation failure

```json
{
  "ok": false,
  "message": "Please correct the highlighted fields.",
  "errors": {
    "email": "Enter a valid email address.",
    "message": "Message must be at least 10 characters."
  }
}
```

### 429 Too Many Requests — Rate limited (optional but recommended)

```json
{
  "ok": false,
  "message": "Too many requests. Please try again shortly."
}
```

### 500/502 — Delivery failure

```json
{
  "ok": false,
  "message": "We couldn't send your message. Please call or try again."
}
```

## Behavioral rules

1. Validate on server even if client already validated.
2. Never echo stack traces or provider secrets.
3. On honeypot trip, return `200` with success shape (no email send).
4. When email provider env is missing in development, log payload (PII-minimized if possible) and return `200` so UI can be tested end-to-end.
5. CORS: same-origin only (browser form posts to same site).

## Client obligations

- Disable submit while `submitting`
- Map `errors` field keys to visible, `aria-describedby` messages
- Preserve user input on recoverable `500` responses
- Announce success/error to assistive tech (live region)
