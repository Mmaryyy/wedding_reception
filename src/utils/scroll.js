export const disableScroll = () => {
  document.body.style.cssText = `
    top: -${window.scrollY}px;
    overflow-y: hidden;
    width: 100%;
  `
}

export const enableScorll = () => {
  const scrollY = document.body.style.top
  document.body.style.cssText = ``
  window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
}
