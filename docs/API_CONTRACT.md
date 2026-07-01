# API Contract: Submissions

## Health check

**Method:** `GET`  
**Endpoint:** `/api/health`

### Success response — 200 OK

```json
{
  "status": "ok"
}
```

## Create submission

**Method:** `POST`  
**Endpoint:** `/api/submissions`

### Payload

```json
{
  "name": "string",
  "email": "user@example.com",
  "consent": true
}
```

All fields are required. Extra fields are rejected. Email addresses are normalized to lowercase before being stored.

### Success response — 201 Created

```json
{
  "id": 1,
  "name": "string",
  "email": "user@example.com",
  "consent": true,
  "created_at": "2027-01-01T12:00:00+00:00"
}
```

### Duplicate response — 409 Conflict

```json
{
  "detail": {
    "message": "This email is already registered.",
    "code": "duplicate_email"
  }
}
```

### Consent required response — 400 Bad Request

```json
{
  "detail": {
    "message": "Consent is required to register interest.",
    "code": "consent_required"
  }
}
```

### Rate limit response — 429 Too Many Requests

```json
{
  "detail": {
    "message": "Too many submissions. Please try again later.",
    "code": "rate_limited"
  }
}
```

### Validation response — 422 Unprocessable Entity

Returned when required fields are missing, email is invalid, or extra fields are submitted.

## Count submissions

**Method:** `GET`  
**Endpoint:** `/api/submissions/quantity`

### Success response — 200 OK

```json
{
  "quantity": 1
}
```

## Admin: list submissions

**Method:** `GET`  
**Endpoint:** `/api/admin/submissions`  
**Auth:** `Authorization: Bearer <ADMIN_TOKEN>`

### Success response — 200 OK

```json
[
  {
    "id": 1,
    "name": "string",
    "email": "user@example.com",
    "consent": true,
    "created_at": "2027-01-01T12:00:00+00:00"
  }
]
```

## Admin: export submissions CSV

**Method:** `GET`  
**Endpoint:** `/api/admin/submissions/export.csv`  
**Auth:** `Authorization: Bearer <ADMIN_TOKEN>`

Returns a CSV file with:

```text
id,name,email,consent,created_at
```
