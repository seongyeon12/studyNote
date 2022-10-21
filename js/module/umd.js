(function (root, factory) {
  if (typeof exports === 'object' && module.exports) {
    // CommonJS
    module.exports = factory(require('module'))
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(['module'], function (module) {})
  } else {
    // 전역 공간
    root.global = factory(root.module)
  }
} (this, function (module) {
  // 실제 모듈
})
)