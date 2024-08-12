import "./Carousel.css";
import Video from "../assets/non-chrome.webm";

function Carousel() {
  return (
    <>
      <div>
        <div className="text1">The fast way to do <br/>things online</div>
      </div>

      <div className="carousel-container">
        <div className="background-div">
          <p>Prioritise<br/> performance</p>

          <p className="text-p">
            Chrome is built for performance. Optimise your experience with
            features like Energy Saver and Memory Saver.<br/>
            <span style={{color:"blue"}}>Learn more about Memory and Energy Saver</span>
          </p>
        </div>

        <div className="overlay-div">
  <video autoPlay muted loop className="video-background">
    <source src={Video} type="video/webm"/>
    Your browser does not support the video tag.
  </video>
</div>

      </div>
    </>
  );
}

export default Carousel;
