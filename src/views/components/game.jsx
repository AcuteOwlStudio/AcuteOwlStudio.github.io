import React from "react";
import {Link, Outlet} from 'react-router-dom';

function Game(props) {
  let dataSet = props.dataSet;
  return (
    <div className={`gameCard ${dataSet.id}`} data-visible="false">

      <a id={`${dataSet.id}toggle`} className="cursor" onClick={handleClick} aria-controls={`${dataSet.id}`}>
        <img className="cardImage" src={dataSet.images.card} alt={dataSet.name} aria-expanded="false"/>
      </a>

      <div id={`${dataSet.id}`} className="cardDesc" data-visible="false">
        <h1>{dataSet.name}</h1>
        <p>{dataSet.tags[0]} / {dataSet.tags[1]} / {dataSet.tags[2]}</p>
        <iframe height="250" src={dataSet.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <p>{dataSet.description}</p>
      </div>

    </div>
  );

  function handleClick() {

    const card = document.querySelector("#"+dataSet.id);
    const cardToggle = document.querySelector("#"+dataSet.id + "toggle");
    const gameCard = document.querySelector("."+dataSet.id);

    if(card.getAttribute('data-visible') === "false"){
      card.setAttribute('data-visible', true);
      cardToggle.setAttribute("aria-expanded", true);
      gameCard.setAttribute('data-visible', true);
      card.scrollIntoView({behavior:"smooth"});
    }
    else {
      card.setAttribute('data-visible', false);
      cardToggle.setAttribute("aria-expanded", false);
      gameCard.setAttribute('data-visible', false);
    }

  }
}

export default Game;
