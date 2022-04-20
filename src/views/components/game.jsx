import React from "react";

function Game(props) {
  let dataSet = props.dataSet;
  return (
    <div className={`gameCard ${dataSet.id}`} data-visible="false">

      <a id={`${dataSet.id}toggle`} className="cursor" aria-controls={`${dataSet.id}`}>
        <img className="cardImage" src={dataSet.images.card} alt={dataSet.name} aria-expanded="false"/>
      </a>

      <div id={`${dataSet.id}`} className="cardDesc" data-visible="false">
        <div className="gameCardOrientation">

          <div>
            <h1>{dataSet.name}</h1>
            <p>{dataSet.tags[0]} / {dataSet.tags[1]} / {dataSet.tags[2]}</p>
          </div>

          <div className="gameButtons">
            <a className="gameCardButton" href="https://discord.com/invite/rDfrqNykzM" target="_blank">
              <i className="fa-brands fa-discord"></i><span className="sr-only">Discord</span>
              <span className="hideDesktop"> Discord </span>
            </a>
            <a className="gameCardButton" href={dataSet.steam} target="_blank">
              <i className="fa-brands fa-steam"></i><span className="sr-only">Steam</span>
              <span> Steam</span>
            </a>
          </div>

        </div>


        <iframe height="250" src={dataSet.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>{dataSet.description}</p>
        <a href={dataSet.audio} target="_blank" className="github button"><i className="fa-brands fa-bandcamp"></i><span> Sound Track</span></a>
        <br/>
        <br/>
        <br/>

      </div>

    </div>
  );
  //
  // function handleClick() {
  //
  //   const card = document.querySelector("#"+dataSet.id);
  //   const cardToggle = document.querySelector("#"+dataSet.id + "toggle");
  //   const gameCard = document.querySelector("."+dataSet.id);
  //
  //   if(card.getAttribute('data-visible') === "false"){
  //     card.setAttribute('data-visible', true);
  //     cardToggle.setAttribute("aria-expanded", true);
  //     gameCard.setAttribute('data-visible', true);
  //     card.scrollIntoView({behavior:"smooth"});
  //   }
  //   else {
  //     card.setAttribute('data-visible', false);
  //     cardToggle.setAttribute("aria-expanded", false);
  //     gameCard.setAttribute('data-visible', false);
  //   }
  //
  // }
}

export default Game;
