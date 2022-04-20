import React, {useState, useEffect} from 'react';

import Post from './components/post.jsx';
import Data from '../gameData.js';
import config from '../config.js';

const contentful = require('contentful');
const client = contentful.createClient({
  space: config.contentful.space,
  accessToken: config.contentful.accessToken,
});

function Home() {

  const [post, setPost] = useState();
  useEffect( () => {
    client.getEntries({limit:1, order:'-sys.createdAt'})
    .then(function (entry) {
      entry.items.forEach(function (entry) {
        setPost(<Post data={entry} key={entry.sys.id}/>)
      })
    });
  }, [setPost])

  return (
    <main id="home" className="container ">
      <br/>

      <div className="bannerBack bPadding">
        <a href={Data[0].steam} target="_blank" alt="link to steam store page">
          <img alt="Bone's Cafe" className="banner" src={Data[0].images.banner}/>
        </a>
        <br/>
        <br/>
        <img alt="Bone's Cafe Logo" className="logoTitle" src={Data[0].images.logo}/>
        <p className="xPadding">{Data[0].description}</p>
        <br/>
        <a href={Data[0].steam} target="_blank" className="github button"><i className="fa-brands fa-steam"></i><span> Get it on Steam!</span></a>
        <a href={Data[0].audio} target="_blank" className="github button"><i className="fa-brands fa-bandcamp"></i><span> Sound Track </span></a>
      </div>

      <br/>

      <iframe height="250" src={Data[0].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <br/>

      <div className="homePost">
        {post}
      </div>


    </main>
  );
}

export default Home;
