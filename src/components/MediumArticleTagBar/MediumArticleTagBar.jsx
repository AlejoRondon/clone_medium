import './MediumArticleTagBar.scss'
import MediumArticleTag from '../MediumArticleTag/MediumArticleTag'
function MediumArtibleTagBar({ tagList }) {
  return <div className='medium-article__tag-bar'>{tagList ? tagList.map((e, i) => <MediumArticleTag key={i} text={e}></MediumArticleTag>) : ''}</div>
}

export default MediumArtibleTagBar
