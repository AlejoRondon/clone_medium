import './MediumArticleHeader.scss'
import MediumArticleInfo from '../MediumArticleInfo/MediumArticleInfo'
import MediumArticleSocial from '../MediumArticleSocial/MediumArticleSocial'
import { useEffect, useState } from 'react'

const MediumArticleHeader = ({ articleData }) => {
  return (
    <>
      <header className='medium-article__header'>
        <h1 className='medium-article__title'>{articleData ? articleData.title : 'loading'}</h1>
        <MediumArticleInfo articleData={articleData}></MediumArticleInfo>
        <MediumArticleSocial socialInfo={articleData ? articleData.social : null}></MediumArticleSocial>
      </header>
    </>
  )
}

export default MediumArticleHeader
