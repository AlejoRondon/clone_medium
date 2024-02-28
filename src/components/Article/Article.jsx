import './Article.scss'

function Article() {
  return (
    <article className='article'>
      <section className='article__content-wrapper'>
        <header className='article__header'>
          <h1 className='article__title'>React & Javascript Optimization Techniques</h1>
          <section>Author data & date</section>
          <section className='article_like-share-bar'>Like & Share section</section>
        </header>
        <section className='article__body'>
          <section className='main_article_image'>Image and source</section>
          <section className='main_article_content'>Content</section>
        </section>
        <footer className='article__footer'>
          <section className='article__tags'>tags</section>
          <section className='article_like-share-bar'>Like & Share section</section>
        </footer>
      </section>
    </article>
  )
}

export default Article
