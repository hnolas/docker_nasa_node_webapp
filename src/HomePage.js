import { useSelector } from 'react-redux';
import './App.css';
import Card from './Components/Card';
import SkeletonLoader from './Components/SkeletonLoader';

const HomePage = () => {
  let state = useSelector((state) => state?.data?.apod)
  const savedState = JSON.parse(localStorage.getItem('storedApods'))
  state = savedState ? savedState : state


  return (
    <div className='container'>
      <header>
        <h1>Spacestagram</h1>
        <p> Brought to you by NASA's Astronomy Photo of the day (APOD) API</p>
        <p className='subPara'>APOD for the last 7 days</p>
      </header>
      <main >
        {
          state ?
            Object.values(state).map((data) => {
              return (
                <Card data={data} key={data?.date} />
              )
            }) :

            <div>
              <SkeletonLoader num={5} />
            </div>
        }
      </main>
    </div>
  );
}

export default HomePage;
