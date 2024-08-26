import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import AOS from'aos'
import 'aos/dist/aos.css';




const Header = (props) => {
  useEffect(() => {
    AOS.init({
     once:true,
    });
  }, []);
  
  return (
    <>
      <div className="nav" data-aos='fade-up'>
        <h3 className="logo">
        {props.myName}
        </h3>
        <ul className="nav-list" id="nav">
          <a href="#work"><li>Work</li></a>
          <a href="#about">
            <li>
              About
            </li>
          </a>
          <a href="#contact"><li>Contact</li></a>
          
        </ul>
        
      </div>
    <div>
   
    </div>
  </>  
  );
}
export default Header