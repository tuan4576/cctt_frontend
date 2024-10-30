import React, { useState } from 'react'
import { useTheme } from '../../ThemeContext'
import { FaStar, FaUser, FaReply, FaThumbsUp, FaThumbsDown, FaEllipsisV } from 'react-icons/fa'

function Description() {
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState([
    { id: 1, text: 'Điện thoại đẹp quá!', rating: 5, user: 'Nguyễn Văn A', date: '6 ngày trước', replies: [], likes: 0, dislikes: 0 },
    { id: 2, text: 'Chất lượng tuyệt vời, rất đáng mua.', rating: 4, user: 'Trần Thị B', date: '5 ngày trước', replies: [], likes: 0, dislikes: 0 }
  ])
  const [rating, setRating] = useState(0)
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState('')
  const [showReplies, setShowReplies] = useState({})
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [showOptions, setShowOptions] = useState({})
  const [showReplyOptions, setShowReplyOptions] = useState({})
  const { theme } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment.trim()) {
      const currentDate = new Date().toISOString().split('T')[0]
      const newComment = { id: comments.length + 1, text: comment, rating, user: 'Người dùng', date: currentDate, replies: [], likes: 0, dislikes: 0 }
      setComments([...comments, newComment])
      setComment('')
      setRating(0)
      setShowReviewForm(false)
    }
  }

  const handleReply = (commentId) => {
    if (replyText.trim()) {
      const updatedComments = comments.map(c => {
        if (c.id === commentId) {
          return {
            ...c,
            replies: [...c.replies, { id: Date.now(), user: 'Người dùng', text: replyText, date: new Date().toISOString().split('T')[0], likes: 0, dislikes: 0 }]
          }
        }
        return c
      })
      setComments(updatedComments)
      setReplyingTo(null)
      setReplyText('')
    }
  }

  const handleLike = (commentId) => {
    const updatedComments = comments.map(c => {
      if (c.id === commentId) {
        return { ...c, likes: c.likes + 1 }
      }
      return c
    })
    setComments(updatedComments)
  }

  const handleDislike = (commentId) => {
    const updatedComments = comments.map(c => {
      if (c.id === commentId) {
        return { ...c, dislikes: c.dislikes + 1 }
      }
      return c
    })
    setComments(updatedComments)
  }

  const handleReplyLike = (commentId, replyId) => {
    const updatedComments = comments.map(c => {
      if (c.id === commentId) {
        const updatedReplies = c.replies.map(reply => {
          if (reply.id === replyId) {
            return { ...reply, likes: (reply.likes || 0) + 1 }
          }
          return reply
        })
        return { ...c, replies: updatedReplies }
      }
      return c
    })
    setComments(updatedComments)
  }

  const handleReplyDislike = (commentId, replyId) => {
    const updatedComments = comments.map(c => {
      if (c.id === commentId) {
        const updatedReplies = c.replies.map(reply => {
          if (reply.id === replyId) {
            return { ...reply, dislikes: (reply.dislikes || 0) + 1 }
          }
          return reply
        })
        return { ...c, replies: updatedReplies }
      }
      return c
    })
    setComments(updatedComments)
  }

  const toggleReplies = (commentId) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }))
  }

  const toggleOptions = (commentId) => {
    setShowOptions(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }))
  }

  const toggleReplyOptions = (commentId, replyId) => {
    setShowReplyOptions(prev => ({
      ...prev,
      [`${commentId}-${replyId}`]: !prev[`${commentId}-${replyId}`]
    }))
  }

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(c => c.id !== commentId)
    setComments(updatedComments)
    setShowOptions(prev => ({
      ...prev,
      [commentId]: false
    }))
  }

  const handleDeleteReply = (commentId, replyId) => {
    const updatedComments = comments.map(c => {
      if (c.id === commentId) {
        return {
          ...c,
          replies: c.replies.filter(reply => reply.id !== replyId)
        }
      }
      return c
    })
    setComments(updatedComments)
    setShowReplyOptions(prev => ({
      ...prev,
      [`${commentId}-${replyId}`]: false
    }))
  }

  return (
    <div className={`mt-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
      <h3 className="text-xl font-semibold mb-4">Đánh giá và Bình luận</h3>
      {!showReviewForm ? (
        <button
          onClick={() => setShowReviewForm(true)}
          className={`px-4 py-2 mb-4 text-sm rounded-full ${
            theme === 'dark'
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-blue-500 hover:bg-blue-600'
          } text-white transition duration-300`}
        >
          Viết đánh giá
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex mb-2">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1
              return (
                <FaStar
                  key={i}
                  className="cursor-pointer"
                  color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                  size={20}
                  onClick={() => setRating(ratingValue)}
                />
              )
            })}
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={`w-full p-2 rounded-lg text-sm ${
              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
            } border ${
              theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
            }`}
            rows="3"
            placeholder="Nhập đánh giá của bạn..."
          ></textarea>
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className={`px-3 py-1 text-sm rounded-full ${
                theme === 'dark'
                  ? 'bg-blue-600 hover:bg-blue-700'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white transition duration-300 mr-2`}
            >
              Gửi đánh giá
            </button>
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className={`px-3 py-1 text-sm rounded-full ${
                theme === 'dark'
                  ? 'bg-gray-600 hover:bg-gray-700'
                  : 'bg-gray-400 hover:bg-gray-500'
              } text-white transition duration-300`}
            >
              Hủy
            </button>
          </div>
        </form>
      )}
      <div>
        <h4 className="text-lg font-semibold mb-2">Các đánh giá:</h4>
        {comments.length > 0 ? (
          comments.map((c) => (
            <div
              key={c.id}
              className={`p-3 mb-2 rounded-lg text-sm ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center mr-2">
                  <FaUser className="text-white" />
                </div>
                <span className="font-semibold mr-2">{c.user}</span>
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    color={i < c.rating ? "#ffc107" : "#e4e5e9"}
                    size={16}
                  />
                ))}
                <span className="ml-auto text-xs text-gray-500">{c.date}</span>
                <div className="relative ml-2">
                  <button
                    onClick={() => toggleOptions(c.id)}
                    className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    <FaEllipsisV />
                  </button>
                  {showOptions[c.id] && (
                    <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
                      <button
                        onClick={() => handleDeleteComment(c.id)}
                        className={`block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-200 hover:text-gray-900 w-full text-left ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-600 hover:text-white' : ''}`}
                      >
                        Xóa bình luận
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p>{c.text}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => setReplyingTo(c.id)}
                  className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center mr-4`}
                >
                  <FaReply className="mr-1" /> Trả lời
                </button>
                <button
                  onClick={() => handleLike(c.id)}
                  className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center mr-4`}
                >
                  <FaThumbsUp className="mr-1" /> Thích ({c.likes})
                </button>
                <button
                  onClick={() => handleDislike(c.id)}
                  className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center mr-4`}
                >
                  <FaThumbsDown className="mr-1" /> Không thích ({c.dislikes})
                </button>
                {c.replies.length > 0 && (
                  <button
                    onClick={() => toggleReplies(c.id)}
                    className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center`}
                  >
                    {showReplies[c.id] ? 'Ẩn trả lời' : `Xem ${c.replies.length} trả lời`}
                  </button>
                )}
              </div>
              {replyingTo === c.id && (
                <div className="mt-2">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className={`w-full p-2 rounded-lg text-sm ${
                      theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                    } border ${
                      theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                    }`}
                    rows="2"
                    placeholder="Nhập trả lời của bạn..."
                  ></textarea>
                  <div className="flex justify-end mt-2">
                    <button
                      onClick={() => handleReply(c.id)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === 'dark'
                          ? 'bg-blue-600 hover:bg-blue-700'
                          : 'bg-blue-500 hover:bg-blue-600'
                      } text-white transition duration-300`}
                    >
                      Gửi trả lời
                    </button>
                  </div>
                </div>
              )}
              {showReplies[c.id] && c.replies.map((reply) => (
                <div key={reply.id} className={`mt-2 ml-4 p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}>
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-500 flex items-center justify-center mr-2">
                      <FaUser className="text-white text-xs" />
                    </div>
                    <span className="font-semibold text-xs mr-2">{reply.user}</span>
                    <span className="text-xs text-gray-500">{reply.date}</span>
                    <div className="relative ml-auto">
                      <button
                        onClick={() => toggleReplyOptions(c.id, reply.id)}
                        className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                      >
                        <FaEllipsisV />
                      </button>
                      {showReplyOptions[`${c.id}-${reply.id}`] && (
                        <div className={`absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
                          <button
                            onClick={() => handleDeleteReply(c.id, reply.id)}
                            className={`block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-gray-200 hover:text-gray-900 w-full text-left ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-600 hover:text-white' : ''}`}
                          >
                            Xóa trả lời
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-1 text-sm">{reply.text}</p>
                  <div className="flex items-center mt-1">
                    <button
                      onClick={() => handleReplyLike(c.id, reply.id)}
                      className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center mr-4`}
                    >
                      <FaThumbsUp className="mr-1" /> Thích ({reply.likes || 0})
                    </button>
                    <button
                      onClick={() => handleReplyDislike(c.id, reply.id)}
                      className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} flex items-center`}
                    >
                      <FaThumbsDown className="mr-1" /> Không thích ({reply.dislikes || 0})
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>Chưa có đánh giá nào.</p>
        )}
      </div>
    </div>
  )
}
export default Description
