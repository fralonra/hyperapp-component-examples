import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

const sizeMap = {
  small: 24,
  normal: 36,
  large: 64
}

/**
 * avatar
 * @param {string}          src  - src
 * @param {string | number} size - size
 * @param {string}          type - type
 */
const Avatar = ({
  src = '',
  size = 'normal',
  type = 'normal',
  ...attributes
}) => {
  const sizeInPx = typeof size === 'number' ? size : (sizeMap[size] || 36)
  const roundRadius = Math.round(sizeInPx / 8)
  const styles = StyleSheet.create({
    avatar: {
      overflow: 'hidden',
      width: `${sizeInPx}px`,
      height: `${sizeInPx}px`
    },
    round: {
      borderRadius: `${roundRadius}px`
    },
    circle: {
      borderRadius: '50%'
    }
  })
  const classAvatar = css(
    styles.avatar,
    type === 'round' && styles.round,
    type === 'circle' && styles.circle
  )
  return (
    <img class={classAvatar} src={src} {...attributes} />
  )
}

export default Avatar