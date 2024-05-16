import { isString } from './type'

class AicsUiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AicsUiError'
  }
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope) ? new AicsUiError(`[${scope}] ${message}`) : scope as Error
    console.warn(error)
  }
}
