import Homepage from '../images/wallpapers/seminar3.jpg';

import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <img src={Homepage} alt="" className="home-img" style={{ width:"100%", height:"100%" }}/>
    </div>
  )
}

export default Home;
