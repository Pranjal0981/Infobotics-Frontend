import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPostBlog } from '../store/actions/blogAction';

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('userId', user._id);

    dispatch(asyncPostBlog(formData));

    setTitle('');
    setImage(null);
    setDescription('');
    setCategory('');
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8 bg-white shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Post Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-800 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter the title of your blog"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-lg font-medium text-gray-800 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-800 mb-2">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description of your blog"
            rows="5"
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="category" className="block text-lg font-medium text-gray-800 mb-2">
            Select Category
          </label>
          <select
            id="category"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="sports">Sports</option>
            <option value="entertainment">Entertainment</option>
            <option value="breaking-news">Breaking News</option>
            <option value="technology">Technology</option>
            <option value="others">Others</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Post Blog
        </button>
      </form>
    </div>
  );
  }
export default PostBlog;
