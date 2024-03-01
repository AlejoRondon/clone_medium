import React from 'react'

function MediumArticleInfo({ articleData }) {
  return (
    <section className='medium-article__info'>
      <p>
        <strong>Rafael Rojas</strong> - <span>Follow</span>
      </p>
      <p>
        <span>
          <em>Published</em> in <strong>Globant</strong>
        </span>{' '}
        - <span>21 mins read</span> - <span>Jan 16, 2024</span>
      </p>
    </section>
  )
}

export default MediumArticleInfo
