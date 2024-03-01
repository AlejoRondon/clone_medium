import './MediumArticleImage.scss'

function MediumArticleImage({ image_url }) {
  return (
    <div className='medium_article__image'>
      <img src={image_url} />
    </div>
  )
}

export default MediumArticleImage
