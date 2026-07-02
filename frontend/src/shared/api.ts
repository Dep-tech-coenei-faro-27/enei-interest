import { apiBaseUrl } from './env'

export type InterestPayload = {
  name: string
  email: string
  consent: boolean
}

type ApiErrorBody = {
  detail?: string | {
    message?: string
    code?: string
  }
}

function errorMessageFromResponse(status: number, body: ApiErrorBody): string {
  if (typeof body.detail === 'object' && body.detail?.message) {
    return body.detail.message
  }

  if (typeof body.detail === 'string') {
    return body.detail
  }

  if (status === 409) return 'Este email já foi registado.'
  if (status === 400) return 'Tens de aceitar os termos para registar interesse.'
  if (status === 422) return 'Verifica se o nome, email e consentimento estão corretos.'
  if (status === 429) return 'Demasiadas tentativas. Tenta novamente mais tarde.'

  return 'Não foi possível registar o interesse. Tenta novamente mais tarde.'
}

export async function submitInterest(payload: InterestPayload): Promise<void> {
  const response = await fetch(`${apiBaseUrl()}/api/submissions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (response.status === 201) return

  let body: ApiErrorBody = {}
  try {
    body = await response.json()
  } catch {
    body = {}
  }

  throw new Error(errorMessageFromResponse(response.status, body))
}
