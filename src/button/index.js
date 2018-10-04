import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  button: {
    display: 'inline-block',
    padding: '7px 14px',
    background: '#fff',
    border: '1px solid #d9d9d9',
    borderRadius: '4px',
    color: '#333',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 400,
    transition: 'all .3s ease',
    ':hover': {
      color: '#e60027'
    },
    ':focus': {
      outline: 0
    },
    ':active': {
      outline: 0
    }
  },
  large: {
    padding: '10px 17px'
  },
  small: {
    padding: '5px 10px'
  },
  primary: {
    background: '#e60027',
    borderColor: '#e60027',
    color: '#fff',
    ':hover': {
      background: '#f00',
      color: '#fff'
    }
  },
  secondary: {
    ':hover': {
      borderColor: '#e60027'
    }
  },
  disabled: {
    color: 'rgba(0, 0, 0, 0.25)',
    background: '#f5f5f5',
    borderColor: '#d9d9d9',
    cursor: 'not-allowed',
    ':hover': {
      color: 'rgba(0, 0, 0, 0.25)',
      background: '#f5f5f5',
      borderColor: '#d9d9d9'
    }
  }
})

/**
 * button
 * @param {string}   size     - size
 * @param {string}   type     - type
 * @param {boolean}  disabled - disabled
 * @param {function} onClick  - onClick
 */
const Button = ({
  disabled,
  size,
  type,
  onClick,
  ...attributes
}, children) => {
  const classButton = css(
    styles.button,
    size === 'large' && styles.large,
    size === 'small' && styles.small,
    type === 'primary' && styles.primary,
    type === 'secondary' && styles.secondary,
    disabled && styles.disabled
  )
  return (
    <button
      class={classButton}
      disabled={disabled}
      onclick={onClick}
      {...attributes}>{children}</button>
  )
}

export default Button