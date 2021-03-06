/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  showToast(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_message = quick_object.message
    const quick_duration = quick_object.duration || 0
    let swan_duration
    if (quick_duration === 0) {
      swan_duration = 1500
    } else {
      swan_duration = 3000
    }
    const swan_object = {
      title: quick_message,
      duration: swan_duration
    }
    swan.showToast(swan_object)
  },

  showDialog(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_title = quick_object.title || ''
    const quick_message = quick_object.message || ''
    const quick_buttons = quick_object.buttons
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    if (quick_buttons.length === 1) {
      const confirmText = quick_buttons[0].text
      const confirmColor = quick_buttons[0].color
      PROMISE((SUCCESS) => {
        swan.showModal({
          title: quick_title,
          content: quick_message,
          confirmText,
          confirmColor,
          success: swan_res => {
            let quick_res
            if (swan_res.confirm) {
              quick_res = {
                index: 0
              }
            } else {
              quick_res = {
                index: 1
              }
            }
            SUCCESS(quick_res)
          }
        })
      }, quick_success, quick_fail, quick_complete)
    }
    if (quick_buttons.length === 2 || quick_buttons.length === 3) {
      const cancelText = quick_buttons[0].text
      const cancelColor = quick_buttons[0].color
      const confirmText = quick_buttons[1].text
      const confirmColor = quick_buttons[1].color
      PROMISE((SUCCESS) => {
        swan.showModal({
          title: quick_title,
          content: quick_message,
          cancelText,
          cancelColor,
          confirmText,
          confirmColor,
          success: swan_res => {
            let quick_res
            if (swan_res.confirm) {
              quick_res = {
                index: 0
              }
            } else {
              quick_res = {
                index: 1
              }
            }
            SUCCESS(quick_res)
          }
        })
      }, quick_success, quick_fail, quick_complete)
    }
  },

  showContextMenu(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_itemList = quick_object.itemList
    const quick_itemColor = quick_object.itemColor || '#000000'
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      swan.showActionSheet({
        itemList: quick_itemList,
        itemColor: quick_itemColor,
        success: swan_res => {
          const quick_res = {
            index: swan_res.tapIndex
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
