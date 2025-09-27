import { useState, useEffect } from 'react'
import './Cart.css'

function Card({ image, title, description }) {
  const storageKey = `liked-${title}`

  // هل اليوزر عامل لايك ولا لأ
  const [liked, setLiked] = useState(() => {
    const saved = localStorage.getItem(storageKey)
    return saved ? JSON.parse(saved) : false
  })

  // عدد اللايكات (بنخزنه كمان)
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem(`likes-count-${title}`)
    return savedLikes ? JSON.parse(savedLikes) : 0
  })

  // تحديث التخزين كل مرة يتغير فيها اللايك
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(liked))
    localStorage.setItem(`likes-count-${title}`, JSON.stringify(likes))
  }, [liked, likes, storageKey])

  // لما يضغط على الزر
  const toggleLike = () => {
    if (liked) {
      setLiked(false)
      setLikes(likes - 1)
    } else {
      setLiked(true)
      setLikes(likes + 1)
    }
  }

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button 
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={toggleLike}
        >
          {liked ?  '👍 Like':'💔 Like' } {likes}
        </button>
      </div>
    </div>
  )
}

export default Card