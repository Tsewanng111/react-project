import react from "react";
import { Fragment } from "react";
export default function MySkills(){
    return(
        <>
        <div className="myskill">
            <h1>My Skills</h1>
        </div>
        <div className="my-skills-detail">
           <div className="front-end">
            <img src="./front-end.jpg" alt="" />
            <h3>Front-End</h3>
            <p>
             A front-end developer builds the front-end portion of websites and web applications—the part users see and interact with. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript that allow users to access and interact with the site or app.</p>
        
           </div>
           <div className="front-end">
            <div className="front-end-img"><img src="./back-end.webp" alt="" /></div>
            <h3>Back-End</h3>
            <p>
               Back-end developers are usually responsible for writing the web services and APIs used by front-end developers and mobile application developers. A back-end web developer is responsible for server-side web application logic as well as the integration of the front-end part.</p>
            <img src="./" alt="" />
           </div>
           <div className="front-end">
            <img src="./ui-ux.jpg" alt="" />
            <h3>UI & UX Design</h3>
            <p>UI design focuses on the visual elements of product interfaces, and includes everything from color palettes and typography to fine-tuning the layout and overall aesthetic. In order to create impactful designs, UX designers need a baseline of visual and user interface (UI) design skills.</p>
            <img src="./" alt="" />
           </div>
           <div className="front-end">
            <img src="./web-flow.jpg" alt="" />
            <h3>Web-flow Development</h3>
            <p>
               Technical skills in HTML and JavaScript, as well as a strong understanding of design and usability concepts are key for someone in this role. Many web developers get a degree in computer science. But bootcamps and online courses have become more popular due to lower costs and more time flexibility.</p>
            <img src="./" alt="" />
           </div>
         
        </div>
        </>
);
}




    

    