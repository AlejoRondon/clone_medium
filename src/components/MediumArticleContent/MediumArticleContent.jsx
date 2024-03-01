import './MediumArticleContent.scss'
import 'prismjs/themes/prism.css'
import Prism from 'prismjs'
import { useEffect } from 'react'

function MediumArticleContent({ articleData }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <section className='medium-article__content'>
      <div dangerouslySetInnerHTML={{ __html: articleData ? articleData.content : 'loading' }} />
    </section>
  )
}

export default MediumArticleContent
