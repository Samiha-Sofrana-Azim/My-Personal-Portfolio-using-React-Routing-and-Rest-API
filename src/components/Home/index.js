import { Link} from "react-router-dom";
import image from './Samiha Sofrana Azim.png'; 
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Samiha Sofrana Azim</p>
          <p>Full Stack developer</p>
        </h1>
        <Link to="about">
          <button>Click For Details</button>
        </Link>
      </div>
      <div className="person">
      <img
              src={image}
              alt="person"
            />
      </div>
    </div>
  );
};

export default Home;