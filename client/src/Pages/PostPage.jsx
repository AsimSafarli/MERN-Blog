import React from 'react'
import Post from '../Components/Post/Post'

function PostPage() {
  return (
    <div className='flex flex-col gap-y-12'>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default PostPage
