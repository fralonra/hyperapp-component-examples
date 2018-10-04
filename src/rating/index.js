import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  ratingWrapper: {},
  ratingChar: {
    color: 'grey',
    cursor: 'pointer',
    userSelect: 'none'
  },
  ratingCharActive: {
    color: 'yellow'
  }
})

/**
 * rating
 * @param {number}   min      - min
 * @param {number}   max      - max
 * @param {string}   char     - char
 * @param {string}   value    - value
 * @param {boolean}  disabled - disabled
 * @param {function} onClick  - onCLick
 */
const Rating = ({
  min = 0,
  max = 5,
  char = '★',
  value = 0,
  disabled = false,
  onChange = i => {}
}) => {
  return (
    <div class={css(styles.ratingWrapper)}>
      {Array(max).fill(0).map((_, i) => (
        <span
          class={css(
            styles.ratingChar,
            value > i && styles.ratingCharActive
          )}
          onclick={() => {
            if (!disabled) onChange(i + 1)
          }}
        >{char}</span>
      ))}
    </div>
  )
}

export default Rating