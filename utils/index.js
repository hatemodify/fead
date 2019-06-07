export const convertDate = date => date.replace(/-|T/g, '.').slice(0, 16)

export const txtEncode = txt => JSON.stringify(txt)

export const errImg = e => (e.target.parentElement.classList = 'no_img')

export const replaceImgSource = src => {
  if (typeof src === 'string') {
    console.log(true)
    return src.replace('http://', '//')
  } else {
    return JSON.stringify(src).replace('http://', '//')
  }
}
