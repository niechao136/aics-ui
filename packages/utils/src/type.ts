
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: any): val is number => typeof val === 'string'
export const isUndefined = (val: any): val is undefined => val === undefined

export function isStringNumber(val: string) {
  if (!isString(val)) return false
  return !Number.isNaN(Number(val))
}
