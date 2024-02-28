import './App.scss'
import SearchBar from './components/SearchBar/SearchBar'
import MediumIcon from './components/MediumIcon/MediumIcon'
import Article from './components/Article/Article'
function App() {
  return (
    <>
      <header className='top-header'>
        <section className='top-header__wrapper'>
          <MediumIcon></MediumIcon>
          <SearchBar></SearchBar>
        </section>
        <nav>
          <button>write</button>
          <button>Sign up</button>
          <button>Sign in</button>
          <button>avatar</button>
        </nav>
      </header>
      <main>
        <Article></Article>
        <section className='more-about'>
          <section className='more-about__author'>Author info</section>
          <section className='more-about__author-articles'>More from author</section>
        </section>
      </main>
      <footer>footer</footer>
    </>
  )
}

export default App
