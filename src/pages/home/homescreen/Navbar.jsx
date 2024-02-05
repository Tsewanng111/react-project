

 export default function Navbar(){
return(
    
   <section id="navsection" className="nav-bar" >
            <div className="logo">
                <img src="./logo192.png" className="logo-img" alt="" width={30} height={30}/>
                <span className="logo-name">DNC BOYS</span>
            </div>
            <div className="nav-options">
                <a href="/Home">Home</a>
                <a href="/Portfolio">Portfolio</a>
                <a href="/About">About Me</a>
               
                <button className="btn"> <a href="Contact">Contact me</a></button>
            </div>

    

    </section>
);   
}

