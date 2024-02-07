import Navbar from "./Navbar"
function Portfolio(){
    return <h1> 
        <Navbar/>
        <div className="main-port">
        <div className="port">
            <div className="port-right">My Portfolio</div>
            <div className="port-left"><button className="btn">viste my github</button></div>
        </div>
        
        <div className="port-img">
            <div className="port-1"><img src="./port-1.jpg" alt="" />
            <h5>Abuse</h5>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam eos voluptas perlaborum natus et explicabo consectetur.</p>
            <button><div className="btn">visite my git hub
            </div></button>
             </div>
        
            <div className="port-1"><img src="./port-2.jpg" width={430} height={250} alt="" />
            <h5>App dashbord</h5>
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam eos voluptas perferendis porro numquam laborum natus et explicabo consectetur.</p>
            <button><div className="btn">visite my git hub
            </div></button>
        </div>
       
            <div className="port-1"><img src="./port-3.png" height={257} alt="" />
            <h5>Easy return</h5>
           <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam eos voluptas perferendis porro numquam laborum natus et explicabo consectetur.</p>
            <button><div className="btn">visite my git hub
            </div></button>
        </div>
        </div>
        </div>
        <div className="feed-back-main">
        Customer feed-back""
        <div className="feed-back">
    
            <div className="feed-back-1">
              <div className="rating"><img src="./rating.jpg" width={280} alt="" /></div> 
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eius earum hic minima.</p>
                <div className="feed-1"><img src="feed-1.jpg" alt="" /></div>
               <p> nima sherpa</p>
            </div>
            <div className="feed-back-1">
              <div className="rating"><img src="./rating.jpg" width={280} alt="" /></div> 
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eius earum hic minima.</p>
                <div className="feed-1"><img src="feed-2.jpg" alt="" /></div>
               <p> jeevan khadka</p>
            </div>
            <div className="feed-back-1">
              <div className="rating"><img src="./rating.jpg" width={280} alt="" /></div> 
               <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore eius earum hic minima.</p>
                <div className="feed-1"><img src="feed-3.jpg" alt="" /></div>
               <p> dinesh tamang</p>
            </div>
        </div>
        </div>
        

    </h1>
    
}
export default Portfolio;