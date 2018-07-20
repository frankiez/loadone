'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fnHandle = function fnHandle() {};
var onLoadedHandle = function onLoadedHandle() {
  document.removeEventListener('DOMContentLoaded', onLoadedHandle);
  fnHandle();
};

function loadone(fn) {
  fnHandle = fn;
  if (document.readyState === 'complete' || document.readyState !== 'loading') {
    onLoadedHandle();
  } else {
    document.addEventListener('DOMContentLoaded', onLoadedHandle);
  }
}

exports.default = {
  loadone: loadone
};