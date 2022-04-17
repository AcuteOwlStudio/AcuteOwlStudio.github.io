import React, {useState, useEffect} from 'react';

import Post from './components/post.jsx';
import config from '../config.js';

const contentful = require('contentful');
const client = contentful.createClient({
  space: config.contentful.space,
  accessToken: config.contentful.accessToken,
});

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    client.getEntries({limit:3, order:'-sys.createdAt'})
    .then(function (entries) {
      entries.items.forEach(function (entry) {
        setPosts( (posts) => [...posts, <Post data={entry} key={entry.sys.id}/>])
      })
    });
  }, [setPosts])

  return (
    <main className="container">
      <br/>
      <br/>
      {posts}
    </main>
  );
}

export default Blog;
