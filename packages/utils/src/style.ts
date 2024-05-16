import { isNumber, isString, isStringNumber } from './type'
import { debugWarn } from './warn'

const SCOPE = 'style'

export function addUnit(value?: string | number, unit = 'px') {
  if (!value) return ''
  if (isNumber(value) || isStringNumber(value)) return `${value}${unit}`
  if (isString(value)) return value

  debugWarn(SCOPE, 'binding value must be a string or number')
}
