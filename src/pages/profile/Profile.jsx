import "./profile.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts";


const Profile = () => {
  return (
    <div
    className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/558478/pexels-photo-558478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover"/>
        <img src="https://lastfm.freetls.fastly.net/i/u/770x0/a6233ec1278bfe9b1807d06d472da65e.jpg#a6233ec1278bfe9b1807d06d472da65e" alt="" className="profilePic"/>

      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="https://www.facebook.com/">
              <FacebookIcon fontSize="large"/>
            </a>
            <a href="https://www.facebook.com/">
              <TwitterIcon fontSize="large"/>
            </a>
            <a href="https://www.facebook.com/">
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href="https://www.facebook.com/">
              <PinterestIcon fontSize="large"/>
            </a>
          </div>
          <div className="center">
          <span> lalalalisa_m</span>
          <div className="info">
          <div className="item">
         <PlaceIcon/>
         <span>South korea</span>
          </div>
          <div className="item">
            <LanguageIcon/>
            <span>Blink</span>
             </div>
             </div>        
               <button>Follow</button></div>
          
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>
          </div></div>
       <Posts/>
       </div></div>
  )
}

export default Profile;
