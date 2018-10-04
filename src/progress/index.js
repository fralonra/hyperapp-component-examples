import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

/**
 * progress
 * @param {string} color      - color
 * @param {number} percentage - percentage
 */
const Progress = ({
  color = '#6aae2a',
  percentage = 0,
  ...attributes
}) => {
  const styles = StyleSheet.create({
    progress: {
      position: 'relative'
    },
    outer: {
      display: 'inline-block',
      position: 'relative',
      width: '85px',
      height: '12px',
      marginRight: '12px',
      background: '#eaeaea'
    },
    inner: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      background: color
    },
    text: {
      display: 'inline-block',
      color,
      verticalAlign: 'middle',
      fontWeight: 'bold'
    }
  })
  return (
    <div class={css(styles.progress)} {...attributes}>
      <div class={css(styles.outer)}>
        <div class={css(styles.inner)} style={{ width: percentage + '%' }}></div>
      </div>
      <div class={css(styles.text)}>{percentage || 0}%</div>
    </div>
  )
}

export default Progress