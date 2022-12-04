import "./leftBar.scss";
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ExploreSharpIcon from '@mui/icons-material/ExploreSharp';
import MessageSharpIcon from '@mui/icons-material/MessageSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchIcon from '@mui/icons-material/Search';


const LeftBar = () => {
  return (
    <div class ="vl">
    <div className="leftBar">
      
      <div className="container">
        
        <div className="menu">
        <div className="user">
          <img src="https://txt.1001fonts.net/img/txt/dHRmLjY2LjAwMDAwMC5RbXhwYm1zLjI/great-vibes.regular.webp" alt=""/>
        </div>
            
          

           <div className="item">
            <HomeSharpIcon fontSize="medium" />
            <span>Home</span>
           </div>
           <div className="item">
            <SearchIcon fontSize="medium"/>
            <span>Search</span>
           </div>
           <div className="item">
            <ExploreSharpIcon fontSize="medium"/>
            <span>Explore</span>
           </div>
           <div className="item">
            <MessageSharpIcon  fontSize="medium"/>
            <span>Messages</span>
           </div>
           <div className="item">
            <NotificationsSharpIcon fontSize="medium"/>
            <span>Notifications</span>
           </div>
           <div className="item">
            <AddBoxSharpIcon fontSize="medium"/>
            <span>Create</span>
           </div>
           <div className="item">
            <AccountCircleSharpIcon fontSize="medium"/>
            <span>Profile</span>
           </div>
        </div>
      </div>
    </div>
      </div>
  
  )
}

export default LeftBar
