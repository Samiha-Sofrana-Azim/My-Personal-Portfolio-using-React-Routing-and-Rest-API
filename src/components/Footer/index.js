import "./style.css";
import image from './gmail.png'; 
import img from './facebook.png'; 
import photo from './linkedIn.png'; 
import pic from './github.png'; 
const Footer = () => {
  return (
    <footer>
     <a href="mailto:samihasofrana125@gmail.com" >
        <img
          src={image}
          alt="gmail-icon"
        />
      </a>
      <a href="https://www.facebook.com/samihasofranaazim" >
        <img
          src={img}
          alt="Facebook-icon"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/samiha-sofrana-azim-67189816a">
       
        <img
          src={photo}
          alt="LinkedIn-icon"
        />
      </a>
      <a href="https://github.com/Samiha-Sofrana-Azim" >
        <img
          src={pic}
          alt="Github-icon"
        />
      </a>
    </footer>
  );
};

export default Footer;