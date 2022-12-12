import { NavLink } from "react-router-dom";

import Homepage from '../images/wallpapers/seminar3.jpg';

import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="bg">
        <img src={Homepage} alt="" className="home-img" style={{ width:"100vw", height: "100vh"  }}/>
      </div>
      <div className="home-title">
        <h1>SY 2022 - 2023</h1>
      </div>
      <div className='home-content'>
        <h1>Seminars and Fieldtrips</h1>
        <p>Josh Ivan C. Lanuevo</p>
        <NavLink to="/about" className="home-btn">About</NavLink>
      </div>
    </div>
  )
}

export default Home;
