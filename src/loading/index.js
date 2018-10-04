import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

const rotateKeyframes = {
  '100%': {
    transform: 'rotate(360deg)'
  }
}

const loadingDashKeyframes = {
  '0%': {
    strokeDasharray: '1, 200',
    strokeDashoffset: 0,
  },
  '50%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-40px',
  },
  '100%': {
    strokeDasharray: '90, 150',
    strokeDashoffset: '-120px',
  }
}

/**
 * loading
 * @param {string} background - background
 * @param {string} color      - color
 */
const Loading = ({
  background = 'rgba(255, 255, 255, .9)',
  color = '#e60027',
  ...attributes
}) => {
  const styles = StyleSheet.create({
    loading: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 99,
      background
    },
    circular: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '50px',
      height: '50px',
      marginTop: '-25px',
      marginLeft: '-25px',
      textAlign: 'center',
      animationName: [rotateKeyframes],
      animationDuration: '2s',
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
    },
    path: {
      animationName: [loadingDashKeyframes],
      animationDuration: '1.5s',
      animationTimingFunction: 'ease-in-out',
      animationIterationCount: 'infinite',
      strokeDasharray: '90, 150',
      strokeDashoffset: 0,
      strokeWidth: 2,
      stroke: color,
      strokeLinecap: 'round',
    }
  })
  return (
    <div class={css(styles.loading)} {...attributes}>
      <svg class={css(styles.circular)} viewBox="25 25 50 50">
        <circle class={css(styles.path)} cx="50" cy="50" r="20" fill="none"/>
      </svg>
    </div>
  )
}

export default Loading