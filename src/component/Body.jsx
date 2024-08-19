import image from "../assets/myimage.jpg"
import dashboard from"../assets/mydashboard.png"
import portfolio from"../assets/portfolio.png"
import telvida from"../assets/telvidaweb.png"
const Body = (props) => {
  return (
    <div data-aos='fade-up'  data-aos-duration="3000">
      <div className="cards">
        <div className="intro" >
          <h1>HI I AM<br/>{props.myName}</h1>
          <h4>A Nigeria based front-end developer passionate about building accessible and user friendly websites</h4><br/>
          
          <a href="#contact"><button className="contact-btn">CONTACT ME <i class="ri-circle-fill"></i></button></a>
          <a href="https://www.linkedin.com/in/saheed-barakat-513311282/"target="blank"><i class="ri-linkedin-fill"></i></a>
          <a href="https://github.com/Oyinlomo123" target="blank"><i class="ri-github-fill"></i></a>
        </div>
        <div className="profile-img" data-aos='fade-up'>
          <img src={image} />
        </div>
      </div>
      <hr className="thin-line"/>
      <div className="features" data-aos='fade-up'>
        <h1 className="features-h1">FEATURES PROJECTS</h1>
        <h5 className="features-h2" >Here are some of the selected project that showcase my passion 
          for <br/>front-end development.
        </h5>
        <div className="first-proj"data-aos='fade-up'>
          <div className="project-img"data-aos='zoom-in' >
            <img src={dashboard}alt="" />
          </div>
          <div className="proj-info">
            <h1>Interactive Dashboard </h1>
            <h6>This dashboard appears to be a centralized platform for monitoring and managing social media presence across multiple platform. It purpose is to track, analize and optimize your social media.</h6><br/>
            <h4>PROJECT INFO</h4>
            <h4>Year <span className="info-span">2024</span></h4>
            <h4 >Role <span className="info-span">Front-end Developer</span></h4>
            <div className="live">
            <h4><a href="http://dashboard-ui99.vercel.app/"target="blank">LIVE DEMO <i class="ri-arrow-right-up-line"></i></a></h4>
            <h4 className="git-span"><a href="https://github.com/Oyinlomo123/dashboard"target="blank"> SEE ON GITHUB <i class="ri-github-fill"></i></a></h4>
            
            </div>
          </div>
          
        </div>
        <div className="first-proj ">
          <div className="project-img"  data-aos='zoom-in'>
            <img src={portfolio} alt="" />
          </div>
          <div className="proj-info" >
            <h1>Portfolio</h1>
            <h6>This portfolio website serves as a digital showcase of my skills, experience, and projects. It is designed to provide potential clients, employers, and collaborators with a comprehensive view of my work in web design, development, and other creative endeavor</h6><br/>
            <h4>PROJECT INFO</h4>
            <h4>Year <span className="info-span">2023</span></h4>
            <h4 >Role <span className="info-span">Front-end Developer</span></h4>
            <div className="live">
            <h4><a href="#">LIVE DEMO <i class="ri-arrow-right-up-line"></i></a></h4>
            <h4 className="git-span"><a href="https://github.com/Oyinlomo123/my-portfolio"> SEE ON GITHUB <i class="ri-github-fill"></i></a></h4>
            </div>
          </div>
          
        </div>
        <div className="first-proj ">
          <div className="project-img" data-aos='zoom-in'>
            <img src={telvida} alt="" />
          </div>
          <div className="proj-info" >
            <h1>Telvida</h1>
            <h6>Redesign the Telvida website to enhance user experience, improve accessibility, and align with the company's updated branding. The goal was to create a modern, responsive site that effectively communicates Telvida’s services and values while providing an intuitive navigation experience</h6><br/>
            <h4>PROJECT INFO</h4>
            <h4>Year <span className="info-span">2023</span></h4>
            <h4 >Role <span className="info-span">Front-end Developer</span></h4>
            <div className="live">
            <h4><a href="#">LIVE DEMO <i class="ri-arrow-right-up-line"></i></a></h4>
            <h4 className="git-span"><a href="#"> SEE ON GITHUB <i class="ri-github-fill"></i></a></h4>
            </div>
          </div>
          
        </div><hr className="thin-line"/>
        <div className="aboutme " >
          <div className="about" >
            <h1>ABOUT&nbsp;ME</h1>
          </div>
          <div className="about-content"  >
            <h3>I am a front-end developer based in Nigeria.<br/> Has a Graphic design background.</h3>
            <h6>
              I am a front-end devel0per based in nigeria looking for exciting opportunities. Has a Graphics Design background. Likes to focus on accessinility when developing. Passionate and curious about solving problems. Currently. i'm exploring Reactjs, webflow and a bit of Designing. While i am not programming, i enjoy watching movies,listening to music. lerning more to improve skill.
            </h6>
          </div>
        </div><hr className="thin-line"/>
        <div className="aboutme ">
          <div className="about"  >
            <h1>MY CAPABILITIES</h1>
          </div>
          <div className="about-content"  >
            <h6>
            I am always looking to add more skills, staying ahead of industry trends and continuously refining my expertise to deliver innovative and cutting-edge solutions that enhance user experiences. 
            </h6>
            <ul>
              <li>HTML</li>
              <li>JAVASCRIP</li>
              <li>ACCESSIBILITY</li>
              <li>FIGMA</li>
            </ul>
          </div>
        </div><hr className="thin-line"/>
        <div className="aboutme ">
          <div className="about" >
            <h1>MY&nbsp;EXPERIENCE</h1>
          </div>
          <div className="about-content">
            <h3>Front-End intern <span>March 2024 - present </span></h3>
            <h4>Telvida NG</h4>
            <h6>
              I am a front-end devel0per based in nigeria looking for exciting opportunities. Has a Graphics Design background. Likes to focus on accessinility when developing. Passionate and curious about solving problems. Currently. i'm exploring Reactjs, webflow and a bit of Designing. While i am not programming, i enjoy watching movies,listening to music. lerning more to improve skill.
            </h6>
          </div>
        </div><hr className="thin-line"/>
      </div>
    </div>
  );
  
}

export default Body