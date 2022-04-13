import './index.css';
import React from 'react';
import useSWR from 'swr';
import Cosmic from 'cosmicjs';

import Header from './views/components/header.jsx';
import Main from './views/main.jsx';
import Footer from './views/components/footer.jsx';

const api = Cosmic();
const bucket = api.bucket({
  slug: "acute-owl-studio-production",
  read_key: 'WloiX24Ge3tts629dUaH6KzhSDuAgTMDtRUdxC4TgIhM340lnc'
})
const fetchPosts = async () => {
  const data = await bucket.getObjects({
    query: {
      type: 'posts'
    },
    props: 'slug,title,metadata'
  })
  return data
}

function App() {
  const { data, error } = useSWR('fetch-posts', fetchPosts);
  if(!data) {
    return <div>Loading...</div>;
  }
  const posts = data.objects;
  console.log(posts);

  return (
    <div>
      <Header/>

      {posts.map(post => {
        <div key={post.slug} style={{ marginBottom: 20 }}>
          <div>{post.title}</div>
        </div>
      })}

      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
