import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

/**
 * radio-box
 * @param {string}   label   - label
 * @param {any}      value   - value
 * @param {boolean}  checked - checked
 * @param {string}   color   - color
 * @param {function} onClick - onClick
 */
const RadioBox = ({
  label = '',
  value = null,
  checked = false,
  color,
  onClick = arg => {}
}) => {
  const styles = StyleSheet.create({
    radioBox: {
      float: 'left',
      marginRight: '12px'
    },
    radioInput: {
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      outline: 'none',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      verticalAlign: 'middle'
    },
    radioInputInner: {
      display: 'inline-block',
      position: 'relative',
      width: '18px',
      height: '18px',
      marginRight: '10px',
      border: '1px solid #bcbcbc',
      borderRadius: '100%',
      boxSizing: 'border-box',
      cursor: 'pointer',
      ':after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%,-50%) scale(0)',
        width: '6px',
        height: '6px',
        background: color,
        borderRadius: '100%',
      }
    },
    radioInputInnerChecked: {
      ':after': {
        transform: 'translate(-50%,-50%) scale(1)'
      }
    },
    radioLabel: {
      color: '#333',
      fontSize: '14px'
    }
  })
  const classInputInner = css(
    styles.radioInputInner,
    checked && styles.radioInputInnerChecked
  )
  return (
    <div class={css(styles.radioBox)}>
      <span class={css(styles.radioInput)}>
        <span class={classInputInner} onclick={() => onClick(value)}></span>
      </span>
      <span class={css(styles.radioLabel)}>{label}</span>
    </div>
  )
}

export default RadioBox