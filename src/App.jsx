import './App.scss'
// import 'normalize.css'
// import './reset.css'
// import 'normalize.css'
import MediumIcon from './components/MediumIcon/MediumIcon'
function App() {
  return (
    <>
      <header class='main-header'>
        <section>
          <MediumIcon></MediumIcon>
          <input type='text'></input>
        </section>
        <nav>
          <button>write</button>
          <button>Sign up</button>
          <button>Sign in</button>
          <button>avatar</button>
        </nav>
      </header>
      <main>
        <article>
          <header>
            <h1>React & Javascript Optimization Techniques</h1>
          </header>
          <section>Author data & date</section>
          <section>Like & Share section</section>
          <section>Image and source</section>
          <section>Content</section>
          <footer>
            <section>tags</section>
            <section>Like & Share section</section>
          </footer>
        </article>
        <section>
          <section>Author info</section>
          <section>More from author</section>
        </section>
      </main>

      <footer>footer</footer>
    </>
  )
}

export default App
