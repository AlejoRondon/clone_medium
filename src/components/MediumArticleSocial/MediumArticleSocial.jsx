import './MediumArticleSocial.scss'
import IconTextButton from '../IconTextButton/IconTextButton'
function MediumArticleSocial({ socialInfo }) {
  return (
    <section className='medium-article__social'>
      <section className='medium-article__social-wrapper'>
        <IconTextButton faIcon='fa-thumbs-up' text={socialInfo ? socialInfo.likes : '--'}></IconTextButton>
        <IconTextButton faIcon='fa-comment' text={socialInfo ? socialInfo.comments : '--'}></IconTextButton>
      </section>
      <section className='medium-article__social-wrapper'>
        <IconTextButton faIcon='fa-thumbs-up'></IconTextButton>
        <IconTextButton faIcon='fa-bookmark'></IconTextButton>
        <IconTextButton faIcon='fa-share-alt'></IconTextButton>
      </section>
    </section>
  )
}

export default MediumArticleSocial
