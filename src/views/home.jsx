import React from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';


function Home() {
  const Cosmic = require('cosmicjs')({
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbnlvbm9zaG93QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJFlGQVRZaS5KOTd2V1BqV1g5dWEua09rSDFWYkptSk0zeDQxZmxxZjRrcTVlNk5JZG5KcTRpIiwiaWF0IjoxNjQ5Nzk3NDc0fQ.ekvduU-IQljzXvq-y56HSBQecfUCBDH84y0rCHM0Pzk"
  });
  Cosmic.getBuckets()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    });
  return (
    <div>
      <main className="container">
        Home
      </main>
    </div>
  );
}

export default Home;
