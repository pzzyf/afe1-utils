// src/modules/string.ts
function str_ensure_prefix(s: string, prefix: string) {
  return s.startsWith(prefix) ? s : `${prefix}${s}`
}

function str_ensure_suffix(s: string, suffix: string) {
  return s.endsWith(suffix) ? s : `${s}${suffix}`
}

export {
  str_ensure_prefix,
  str_ensure_suffix,
}
