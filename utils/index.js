export const convertDate = date => {
  return date.replace(/-|T/g, '.').slice(0, 16)
}

export const txtEncode = txt => {
  return JSON.stringify(txt)
}
