import './MediumArticleFooter.scss'
import MediumArticleSocial from '../MediumArticleSocial/MediumArticleSocial'
import MediumArtibleTagBar from '../MediumArticleTagBar/MediumArticleTagBar'

function MediumArticleFooter({ articleData }) {
  return (
    <footer className='medium-article__footer'>
      <MediumArtibleTagBar tagList={articleData ? articleData.tags : []}></MediumArtibleTagBar>
      <MediumArticleSocial socialInfo={articleData ? articleData.social : null}></MediumArticleSocial>
    </footer>
  )
}

export default MediumArticleFooter
