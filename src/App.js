import "./styles/app.scss";
import qr from "./images/image-qr-code.png";
function App() {
  return (
    <div className="qr-container">
      <div className="img-container">
        <img src={qr} alt="qr-code" />
      </div>
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
}

export default App;
