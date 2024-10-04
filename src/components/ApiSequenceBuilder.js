import React, { useState } from 'react';
import axios from 'axios';

const ApiSequenceBuilder = () => {
  const [response, setResponse] = useState(null);
  const [postBody, setPostBody] = useState({ title: '', body: '', userId: '' });

  const handleApiCall = async () => {
    try {
      
      const userResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
      const userId = userResponse.data[0].id;

      
      const postResponse = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: postBody.title,
        body: postBody.body,
        userId: userId,
      });

      setResponse(postResponse.data);
    } catch (error) {
      console.error('API Chain Error:', error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6">
     
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add API sequence</h2>
        
       
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">API</label>
          <select
            className="w-full p-2 border border-gray-700 rounded-md text-white bg-gray-900"
          >
            <option>Create Coupon API</option>
            <option>Add Product To Cart API</option>
          </select>
        </div>

      
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition duration-200 w-full"
        >
          + Add API
        </button>
      </div>

      
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Request</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={postBody.title}
            onChange={(e) => setPostBody({ ...postBody, title: e.target.value })}
            className="w-full p-2 border border-gray-700 rounded-md text-white bg-gray-900"
            placeholder="Enter title..."
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Body</label>
          <input
            type="text"
            value={postBody.body}
            onChange={(e) => setPostBody({ ...postBody, body: e.target.value })}
            className="w-full p-2 border border-gray-700 rounded-md text-white bg-gray-900"
            placeholder="Enter body content..."
          />
        </div>

        <button
          onClick={handleApiCall}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-semibold transition duration-200 w-full"
        >
          Execute API Chain
        </button>
      </div>

     
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Expected Response</h2>

        {response && (
          <div className="mt-6 p-4 bg-gray-900 rounded-md">
            <pre className="bg-gray-800 p-3 rounded-md text-sm text-green-400 overflow-x-auto">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiSequenceBuilder;
