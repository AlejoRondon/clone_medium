import './IconTextButton.scss'
import '../../App.scss'
function IconTextButton({ faIcon, text, className }) {
  return (
    <div className={`icon-text-button`}>
      {faIcon ? (
        <span className='icon-text-button__icon'>
          <i className={`fas ${faIcon}`}></i>
        </span>
      ) : (
        ''
      )}
      {text ? <span className={`icon-text-button__text ${className}`}>{text}</span> : ''}
    </div>
  )
}

export default IconTextButton
