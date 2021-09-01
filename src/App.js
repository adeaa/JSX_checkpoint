import imageInSrc from "./space.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw",backgroundColor:"#f6f6f6"}}>
      <h1 className="title red">Adam</h1>
      <br />
      <img src={imageInSrc} style={{width:"80vw"}} alt="space 1"/>
      <br />
      <img src="/imageInPublic.png" style={{width:"80vw"}} slr="space 2"/>
      </div>

      <video width="80%" alt="stars video" controls >
      <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
