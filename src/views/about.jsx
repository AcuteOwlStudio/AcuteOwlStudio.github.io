import React from 'react';

function About() {
  return (
    <div>
      <main className="container">
      <br/>
      <br/>

      <h2 className="centerAndLeftAlign">Acute Owl Studio is a small indie game development team, currently working on Bone's Cafe.</h2>

      <br/>
      <hr/>
      <br/>
      <div className="profile">
        <img className="avatar" src="./headshots/sarah.jpg" />
        <div className="profileDesc">
          <h3>Sarah Richmond - Lead Developer</h3>
          <p>Hi, I'm Sarah! I enjoy playing AND making games. I also like to go hiking in nature, working in my garden, or reading a book.</p>
          <p>
            Some of my favorite games/series are:
            <li>Shadow of the Colossus</li>
            <li>Pikmin</li>
            <li>Monster Hunter</li>
            <li>Final Fantasy Crystal Chronicles</li>
            <li>Animal Crossing</li>
            <li>Legend of Zelda (especially Wind Waker)</li>
            <li>Harvest Moon (especially the N64 and PS1 versions)</li>
            <li>RimWorld</li>
            <li>Don't Starve</li>
          </p>
        </div>
      </div>

      <br/>
      <hr/>
      <br/>

      <div className="profile">
        <img className="avatar" src="./headshots/Tim.jpg" />
        <div className="profileDesc">
          <h3>Timothy Kidwell - Software Developer and Artist</h3>
          <p>Ranyo7 here! I'm an avid hiker, a board game enthusiast, and video game player.</p>
          <p>
            Some of my favorite games/series are:
            <li>Diablo</li>
            <li>Chrono Trigger</li>
            <li>Monster Hunter</li>
            <li>Pokemon</li>
            <li>Stardew Valley</li>
            <li>Legend of Zelda</li>
            <li>Suikoden</li>
          </p>
        </div>
      </div>

      <br/>
      <hr/>
      <br/>

      <div className="profile">
        <img className="avatar flipImage" src="./headshots/gimli.png" />
        <div className="profileDesc">
          <h3>Gimli - Studio Security and HR Manager</h3>
          <p>"Ruff Ruff"</p>
        </div>
      </div>

      <br/>
      <br/>

      </main>
    </div>
  );
}

export default About;
