export const convertDate = date => {
  return date.replace(/-|T/g, '.').slice(0, 16)
}
