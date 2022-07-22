import { useEffect, useState } from 'react';

import '../styles/Home.css';

import Slider from '../components/Slider';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/trending/all/day?api_key=ab2ea070f9aa3c1aa576539e31964dd5';

export default function Home() {
  const [searchtxt, setSearchtxt] = useState('');
  const [stream, setStream] = useState(true);
  const [movies, setMovies] = useState([]);
  const [tvshoes, setTvShoes] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const handleChange = (e) => {
    setSearchtxt(e.target.value.trim());
    if (e.target.value.trim().length == 0) {
      setShowResult(false);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (searchtxt.length > 0) {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=ab2ea070f9aa3c1aa576539e31964dd5&language=en-US&query=${searchtxt}&page=1&include_adult=false`
        );
        setSearchResult(res?.data?.results);
        console.log(res?.data?.results);
        setShowResult(true);
      } catch (error) {
        setShowResult(false);
        console.log(error);
      }
    }
  };

  useEffect(() => {
    async function fetchdata() {
      try {
        const res = await axios.get(url);
        const data = res?.data?.results;
        setMovies(data.filter((item) => item.media_type == 'movie'));
        setTvShoes(data.filter((item) => item.media_type == 'tv'));
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  return (
    <div className='home_page'>
      <Slider>
        <h2 className='tag_line_1'>Welcome to the weekend watch</h2>
        <p className='tag_line_2'>Millions of Movies, TV Shoes and many more</p>
        <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      </Slider>

      {searchtxt.length > 0 && showResult ? (
        <div className='search_result'>
          <div className='section_title'>
            <h2>Search result for "{searchtxt}"</h2>
          </div>

          <div className='result_list'>
            {searchResult.map((item, ind) => (
              <MovieCard key={ind} data={item} />
            ))}
          </div>
        </div>
      ) : null}

      <div className='home_list'>
        <div className='section_title'>
          <h2>What's Popular</h2>
          <div className='section_switch'>
            <button onClick={() => setStream(!stream)} className={stream ? 'active' : 'off'}>
              Streaming
            </button>
            <button onClick={() => setStream(!stream)} className={stream ? 'off' : 'active'}>
              On Tv
            </button>
          </div>
        </div>

        <div className='items_list'>
          {stream
            ? movies.map((item, ind) => <MovieCard key={ind} data={item} />)
            : tvshoes.map((item, ind) => <MovieCard key={ind} data={item} />)}
        </div>
      </div>
    </div>
  );
}
