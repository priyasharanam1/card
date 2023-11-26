import { getPosts } from './api';
import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPosts().then((posts) => setData(posts))
  }, [])
  return (
    <div className="App">
    {data? 
    <div className='card'>
      <div className='lines'></div>
      <div className='imgBx'>
      <img className='img' src={data.results[0].picture.large} alt='profile'/>
      </div>
      <div className='content'>
        <div className='details'>
        <h2 className='name'>{data.results[0].name.first}{" "}{data.results[0].name.last}</h2>
      <div className='data'>
        <h2 className='gender'>{data.results[0].gender}</h2>
        <h2 className='phone'>{data.results[0].phone}</h2>
      </div>
      
        </div>
      </div>
    </div>
     : <p>loading...</p>}
    </div>
  );
}

export default App;
