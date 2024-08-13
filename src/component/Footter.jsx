
const Footter = () => {
  return (
    <div>
       <div className="connect">
          <div className="let-connect">
            <h1>LET'S CONNECT</h1>
            <h6>Say hello at <a href="gmail">saheedbarakat24@gmail.com</a> <br/> For more info, here's my <a href="#">resume</a> </h6>
            <a href="www.linkedin.com/in/
              saheed-barakat-513311282
              "target="blank"><i class="ri-linkedin-fill"></i></a>
            <a href="ttps://github.com/"target="blank"><i class="ri-github-fill"></i></a>
            <a href=""target="blank"><i class="ri-twitter-x-fill"></i></a>
            <a href="https://www.linkedin.com/in/saheed-barakat-513311282/" target="blank"><i class="ri-instagram-line"></i></a>
          </div>
          <div className="connect-form">
            <form action="">
              <label htmlFor="">Name</label><br/>
              <input  type="text" name="" id="" /><br/>
              <label htmlFor="">Email </label><br/>
              <input type="email" /><br/>
              <label htmlFor="">subject</label><br/>
              <input type="text" /><br/>
              <label htmlFor="">Message</label><br/>
              <textarea className="message" type="text"rows="8"
              cols="63"  /><br/><br/>
              <input className="submit" type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>
    </div>
    
  );
}

export default Footter