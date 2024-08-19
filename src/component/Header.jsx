import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import AOS from'aos'
import 'aos/dist/aos.css';

const Header = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
           // Whether animation should happen only once
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
  <div className="nav" data-aos='fade-up'>
    <h3 className="logo">
    {props.myName}
    </h3>
    <ul className="nav-list">
      <a href=""><li>Work</li></a>
      <a href="">
        <li>
          About
        </li>
      </a>
      <a href=""><li>Contact</li></a>
    </ul>
    
  </div>
    
  );
}
export default Header