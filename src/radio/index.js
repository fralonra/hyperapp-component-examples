import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

import RadioBox from './RadioBox'

const styles = StyleSheet.create({
  radio: {
    padding: '5px 0'
  }
})

/**
 * radio
 * @param {any}      value    - value
 * @param {array}    options  - options
 * @param {string}   color    - color
 * @param {boolean}  disabled - disabled
 * @param {function} onChange - onChange
 */
const Radio = ({
  value = null,
  options = [],
  color = '#e60027',
  disabled = false,
  onChange = arg => {},
  ...attributes
}) => {
  const onClick = arg => {
    if (disabled || arg === value) return
    onChange(arg)
  }
  return (
    <div
      class={css(styles.radio)}
      {...attributes}>
      {options.map((o, i) => (
        <RadioBox
          key={i}
          label={o.name}
          value={o.key}
          checked={value === o.key}
          color={color}
          onClick={arg => onClick(arg)} />
      ))}
    </div>
  )
}

export default Radio