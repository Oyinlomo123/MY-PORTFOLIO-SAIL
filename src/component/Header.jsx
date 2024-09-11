import { Link } from "react-router-dom";
import React,{useEffect} from "react";
import AOS from'aos'
import 'aos/dist/aos.css';
import Body from "./Body";




const Header = (props) => {
  useEffect(() => {
    AOS.init({
     once:true,
    });
  }, []);
  
 function mode() {
  document.body.classList.toggle('darktheme')
  
 }
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
        <button onClick={mode} id="mode" className="mode">
        <i class="ri-moon-fill"></i>
        
        </button>
      </div>
    <div>
   
    </div>
  </>  
  );
}
export default Header