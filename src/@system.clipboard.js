/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /*  clipboard.set/// */
  set(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_text = quick_object.text
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.setClipboardData({
        data: quick_text,
        success: () => {
          const quick_res = {
            errMsg: 'set: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /* clipboard.get/// */

  get(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.getClipboardData({
        success: swan_res => {
          const quick_res = {
            text: swan_res.data
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
