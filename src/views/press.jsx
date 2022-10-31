import React, {useState, useEffect} from 'react';
import Data from '../gameData.js'
import config from '../config.js';

const contentful = require('contentful');
const client = contentful.createClient({
  space: config.contentful.space,
  accessToken: config.contentful.accessToken,
});



// const [images, setImages] = useState([]);
// useEffect( () => {
//
// });

function Press() {
  const [logo, setLogo] = useState();
  client.getAsset("6sdYPXQLxEpRkV636nKqka").then( function(entry) {
    setLogo("https:"+entry.fields.file.url);
  })
  const [images, setImages] = useState();
  client.getAsset("4oPVyvhq1MJosBTm0jAl7R").then( function(entry) {
    setImages("https:"+entry.fields.file.url);
  })
  return (
    <main className="container flex mTop">
      <div className="postBack">
        <div id='desc'>
          <h2>Description</h2>
          <p>Bone's Café is a fast paced, 1-4 Players couch co-op, cooking game. Customize the layout of your kitchen to guarantee your success. Specialize your menu in ingredients and recipes to design your ultimate restaurant. Put your necromancy skills to the test and raise your own undead kitchen staff.</p>
        </div>

        <div id='feat'>
          <h2>Features</h2>
          <ul className="xPadding">
            <li>Start discovering all (100+) recipes available using a wide variety of ingredients.</li>
            <li>Design your menu around a concept, a taste, or whatever you'd like your restaurant to serve.</li>
            <li>Get creative and customize the layout of your cafe for maximum cooking efficiency.</li>
            <li>Play with friends! (4-player local co-op)</li>
            <li>Put your necromancy skills to the test and summon some undead assistants.</li>
			<li>Challenge the leaderboards and test yourself against other players.</li>

          </ul>
        </div>

        <div id='vide'>
          <h2>Videos</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ONIoYeiY7W0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div id='imag'>
          <h2>Images</h2>
          <p><a className="blogLink" href={images} download>Download all images</a></p>
        </div>

        <div id='log'>
          <h2>Logos</h2>
          <p><a className="blogLink" href={logo} download>Download all logos</a></p>
        </div>

        <div id='cred' className="flex credits">
          <div className="xPadding">
            <h2>Credits</h2>
            <div className="xPadding">
              <h3>Developer:</h3>
              <p>AcuteOwlStudio</p>

              <h3>Publisher:</h3>
              <p>AcuteOwlStudio</p>
            </div>
          </div>
          <div>
            <h2>Contact</h2>
            <div className="xPadding">
              <h3>Inquiries:</h3>
              <p>SarahCRichmond @ gmail.com</p>

              <h3>Website:</h3>
              <p>https://acuteowlstudio.github.io/#/</p>
            </div>
          </div>

        </div>

      </div>

      <br/>


    </main>
  );
}

export default Press;
