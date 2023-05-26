import React, { useState, useEffect } from 'react';
import './../../styles/Community.css';

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPostData = {
      id: new Date().getTime(),
      content: newPost,
      likes: 0,
    };

    setPosts([newPostData, ...posts]);
    setNewPost('');
  };

  const handleDeletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  const handleLikePost = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className='community'>
      <h2>Community</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows='4'
          placeholder='Write a post...'
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          required></textarea>
        <button type='submit'>Post</button>
      </form>

      <div className='post-list'>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <li key={post.id} className='post-item'>
                <p>{post.content}</p>
                <div className='post-actions'>
                  <button onClick={() => handleLikePost(post.id)}>{post.likes} Likes</button>
                  <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Community;
