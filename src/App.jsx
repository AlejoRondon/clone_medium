import './App.scss'
import SearchBar from './components/SearchBar/SearchBar'
import MediumIcon from './components/MediumIcon/MediumIcon'
import MediumArticle from './components/MediumArticle/MediumArticle'
import MoreAboutAuthor from './components/MoreAboutAuthor/MoreAboutAuthor'
import IconTextButton from './components/IconTextButton/IconTextButton'

import getPostDataByID from './services/db_service'
import { useEffect, useState } from 'react'

function App() {
  const [article_data, setArticleData] = useState(null)

  useEffect(() => {
    // prettier-ignore
    (async () => {
      try {
        const post = await getPostDataByID(1)
        setArticleData(post)
        console.log(post)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    })()
  }, [])

  // State to track the last scroll position
  const [lastScrollTop, setLastScrollTop] = useState(0)

  // State to track the visibility of the header
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  // Function to handle the scroll event
  const handleScroll = () => {
    // Get the current scroll position
    const currentScroll = window.scrollY || document.documentElement.scrollTop
    if (Math.abs(currentScroll - lastScrollTop) > 5) {
      // Determine the scroll direction
      if (currentScroll > lastScrollTop) {
        // Scroll down
        setIsHeaderVisible(false)
      } else {
        // Scroll up
        setIsHeaderVisible(true)
      }
    }

    // Update the last scroll position
    setLastScrollTop(currentScroll)
  }

  // Effect to add scroll event listener on component mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <header className={`top-header ${isHeaderVisible ? '' : 'hidden'}`}>
        <section className='top-header__wrapper'>
          <MediumIcon></MediumIcon>
          <SearchBar></SearchBar>
        </section>
        <nav>
          <IconTextButton faIcon={'fa-pen-square'} text={'Write'}></IconTextButton>
          <IconTextButton className={'icon-text-button--rounded bg-success-color'} text={'Sign up'}></IconTextButton>
          <IconTextButton text={'Sign in'}></IconTextButton>
          {/* <IconTextButton text={'Sign up'}>avatar</IconTextButton> */}
        </nav>
      </header>
      <main>
        <MediumArticle articleData={article_data}></MediumArticle>
        <MoreAboutAuthor articleData={article_data}></MoreAboutAuthor>
      </main>
      <footer className='main-footer'>
        <section className='main-footer__content-wrapper'>
          <nav className='main-footer__nav'>
            <ul className='main-footer__ul'>
              <li className='main-footer__li'>
                <a href='#'> help </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> Status </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> About </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> Careers </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> Blog </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> Privacy </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> Terms </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> Text to speech </a>
              </li>
              <li className='main-footer__li'>
                <a href='#'> Teams </a>
              </li>
            </ul>
          </nav>
        </section>
      </footer>
    </>
  )
}

export default App
