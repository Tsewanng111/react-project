import { Link } from "react-router-dom";


 export default function Navbar(){
return(
    
   <section id="navsection" className="nav-bar" >
            <div className="logo">
                <img src="./logo192.png" className="logo-img" alt="" width={30} height={30}/>
                <span className="logo-name">DNC BOYS</span>
            </div>
            <div className="nav-options">
                <Link to="/">Home</Link>
                <Link to="/Portfolio">Portfolio</Link>
                <Link to="/About">About Me</Link>
               
                <button className="btn"> <a href="Contact">Contact me</a></button>
            </div>

    

    </section>
);   
}

