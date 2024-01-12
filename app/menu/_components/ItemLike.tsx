'use client'
import styles from '../Menu.module.scss'
import { useState } from 'react'
import { likeItem } from 'actions/firestore'

const LikesNumber = (likes: number | undefined) => {
  let likesString
  if (likes === undefined || likes === 0) {
    likesString = ''
    return likesString
  }
  if (likes > 999) {
    const num = likes / 1000
    likesString = num.toFixed(0).toString() + 'k+'
  }
  if (likes > 999999) {
    const num = likes / 1000000
    likesString = num.toFixed(0).toString() + 'm+'
  }
  if (likes < 1000) {
    likesString = likes.toString()
  }
  return likesString
}

const ItemLike = ({ likes, itemName }: { likes: number; itemName: string }) => {
  const [liked, setLiked] = useState(false)
  const [currLikes, setCurrLikes] = useState(likes)
  const likeHandler = async () => {
    if (liked === false) {
      setLiked(true)
      animateLike()
      await likeItem(itemName)
      setCurrLikes(currLikes + 1)
    }
  }

  const animateLike = () => {
    const heart = document.getElementById(`${itemName}Likes`)
    if (heart) {
      heart.classList.add(styles.animateLike)
    }
  }

  return (
    <div
      className={styles.likes}
      onClick={() => {
        likeHandler()
      }}
      id={`${itemName}Likes`}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="heart"
          d="M 10,30
               A 20,20 0,0,1 50,30
               A 20,20 0,0,1 90,30
               Q 90,60 50,90
               Q 10,60 10,30 z"
          fill={liked ? '#E2007B' : 'none'}
          stroke="#E2007B"
          strokeWidth="5"
        />
      </svg>
      <div
        className={styles.likesNumber}
        style={{
          color: liked ? '#000000' : '#E2007B',
        }}
      >
        {LikesNumber(currLikes)}
      </div>
    </div>
  )
}

export default ItemLike
