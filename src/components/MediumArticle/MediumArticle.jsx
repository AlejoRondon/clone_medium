import './MediumArticle.scss'
import MediumArticleHeader from '../MediumArticleHeader/MediumArticleHeader'
import MediumArticleImage from '../MediumArticleImage/MediumArticleImage'
import MediumArticleContent from '../MediumArticleContent/MediumArticleContent'
import MediumArticleFooter from '../MediumArticleFooter/MediumArticleFooter'

function Article({ articleData }) {
  return (
    <article className='medium-article'>
      <section className='medium-article__content-wrapper'>
        <MediumArticleHeader articleData={articleData}></MediumArticleHeader>
        <section className='medium-article__body'>
          <MediumArticleImage image_url={articleData ? articleData.image_url : ''} />
          <MediumArticleContent articleData={articleData}></MediumArticleContent>
        </section>
        <MediumArticleFooter articleData={articleData}></MediumArticleFooter>
      </section>
    </article>
  )
}

export default Article
