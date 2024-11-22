import video from "../../image/video.mp4.mp4";  
import './video.scss'; 

function Video() {  
  return (  
    <div className="video">  
      <video width="100%" autoPlay loop muted className="video-element">  
        <source src={video} type="video/mp4" />  
      </video>  
      <div className="overlay">  
        <h1 className="overlay-text">Analysis and prediction of the digital economy of continents</h1> 
        <div className="date">22 November 2024</div>
        <div className="desc-text">Market analysis, analysis and prediction of the world's digital economy</div>
        <div className="from-text">In-Person & Digital | Ha Dong, Ha Noi, VietNam | #FTcyber</div>
      </div>  
    </div>  
  );  
}  

export default Video;