import './MediumArticleTag.scss'

function MediumArticleTag({ text }) {
  text = text || 'default'
  return (
    <span className='medium-article__tag'>
      <a href={`#${text}`}>{text}</a>
    </span>
  )
}

export default MediumArticleTag
