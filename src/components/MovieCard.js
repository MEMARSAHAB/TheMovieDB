import { Link } from 'react-router-dom';

import '../styles/MovieCard.css';

const def = require('../assets/poster5.jpg');
const image = 'https://image.tmdb.org/t/p/w440_and_h660_face';

export default function MovieCard({ data }) {
  return (
    <Link to='/' className='card_cont'>
      <img src={data?.poster_path ? image + data?.poster_path : def} />
      <h2>{data?.original_title || data?.original_name}</h2>
      <p>{data?.release_date || data?.first_air_date}</p>
      <p>{data?.vote_average} ⭐</p>
    </Link>
  );
}
