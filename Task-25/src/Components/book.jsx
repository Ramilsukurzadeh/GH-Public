import React from 'react'
import Author from "./bookAuthor.jsx"
import BookName from './bookname.jsx'
import BookPrice from './bookPrice.jsx'
import BookImage from "../assets/images/BookImage.jpg"
function Book() {
  return (
    <>
      <Author/>
      <BookName/>
      <BookPrice/>
      <img src={BookImage} alt="" />
    </>
  )
}

export default Book
