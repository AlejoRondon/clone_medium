import './MoreAboutAuthor.scss'

function MoreAboutAuthor({ articleData }) {
  return (
    <section className='more-about-author'>
      <section className='more-about-author__content-wrapper'>
        <h2>Written by Rafael Rojas</h2>
        <p>
          <span>36 Followers</span> -{' '}
          <span>
            Writer for <strong>Globant</strong>
          </span>
        </p>
        <a href='https://www.linkedin.com/in/RafaelRojasCov'>https://www.linkedin.com/in/RafaelRojasCov</a>
      </section>
    </section>
  )
}

export default MoreAboutAuthor
