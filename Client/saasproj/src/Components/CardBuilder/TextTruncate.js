export const truncateText = (text, maxLength) => {
  // console.log('In truncate text', text)
  if (text.length >= maxLength) {
    return text.substring(0, maxLength) + '...'
  } else {
    return text
  }
}
