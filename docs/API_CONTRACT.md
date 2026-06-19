# API Contract: Submissions

## Request

*   **Method:** `POST`
*   **Endpoint:** `/api/submissions`
*   **Payload:**
```json
{
  "name": "string"
  "email": "string"
}
```

## Responses

### 1. Success (201 Created)
```json
{
  "status": "success",
  "message": "Interest recorded successfully."
}
```

### 2. Client Error (400 Bad Request)
 _Trigger: Missing or empty 'name' field._
```json
{
  "status": "error",
  "message": "Name and Email required"
}
```
### 3. Server Error (500 Internal Server Error)
_Trigger: Database connection failure._
```json
{
  "status": "error",
  "message": "Internal server error. Please try again later."
}
```
