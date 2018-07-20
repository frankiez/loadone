let fnHandle = () => {}
let onLoadedHandle = () => {
  document.removeEventListener('DOMContentLoaded', onLoadedHandle)
  fnHandle()
}

function loadone (fn) {
  fnHandle = fn
  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    onLoadedHandle()
  } else {
    document.addEventListener('DOMContentLoaded', onLoadedHandle)
  }
}

export default {
  loadone
}
