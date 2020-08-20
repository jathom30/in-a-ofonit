import React, { useState } from 'react'
import { PageFlip } from './PageFlip'
import { words, extraWords } from '../helpers/words'

const TitlePage: React.FC<{toPage: () => void}> = ({toPage}) => {
  return (
    <div className="TitlePage">
      <h1 className="title-Book">In A Ofonit</h1>
      <div className="author-Book">
        <h4>by</h4>
        <p>Jeff Thomas and Audra Whitaker</p>
      </div>
      <div className="press-Book">
        <p>Thomaker and Co., Limited</p>
        <h4>2020</h4>
      </div>
      <PageFlip changePage={toPage} />
    </div>
  )
}

const Page: React.FC<{toTitle: () => void}> = ({ toTitle }) => {
  const wordCount = 1750

  const createPage = () => {
    const wordsArray = Array.from(Array(wordCount), (_,i) => {
      const randomNumber = Math.floor(Math.random() * words.length)
      if (i === 0) {
        const firstWord = words[randomNumber] 
        return firstWord.charAt(0).toUpperCase() + firstWord.slice(1) + ' '
      }
      if (i === wordCount - 1) return `${words[randomNumber]}.`
      return words[randomNumber] + ' '
    })
    const randomInterject = Math.floor(Math.random() * wordsArray.length - 2) + 1
    const randomWordInterject = extraWords[Math.floor(Math.random() * extraWords.length)]
    wordsArray.splice(randomInterject, 0, randomWordInterject,' ')
    console.log(randomWordInterject)
    return wordsArray
  }

  return (
    <div className="Page">
      <div className="container-Page">
        <p>
          {createPage().map((word: string, i) => (
            <span key={i}>{word}</span>
          ))}
        </p>
      </div>
      <PageFlip back changePage={toTitle} />
    </div>
  )
}

export const Book = () => {
  const [titlePage, setTitlePage] = useState(true)

  return (
    <div className="Book">
      {titlePage ? <TitlePage toPage={() => setTitlePage(false)} /> : <Page toTitle={() => setTitlePage(true)} />}
    </div>
  )
}