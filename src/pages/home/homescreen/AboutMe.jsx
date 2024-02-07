import Navbar from "./Navbar"
function About(){
    return <h1>
        <Navbar/>
        <div className="about">
            <div className="about-img">
                <img src="./about.jpg" alt="" />
               
            </div>

        <div className="list"> <span>Howday,</span><br /> I'm Chhewang. <br /> I'm student at aadim <br /> national college. Studing <br />BCA(Bachloer in Computer <br /> Applicatio).  Because I'm <br /> interested in building <br /> carrier in the IT sector.</div>
        
        
        </div>
        Education details:
        <table>
            <tr>
                <th>Level</th>
                <th>School/College</th>
                <th>Grade</th>
            </tr>
            
            <tr>

            
                <td>BLE</td>
                <td>Shree melamchi ghyang sec.school</td>
                <td>A+</td>
            </tr>
            <tr>

            
                <td>SEE</td>
                <td>Shree melamchi ghyang sec.school</td>
                <td>A+</td>
            </tr>
            <tr>

            
                <td>+2</td>
                <td>Aadim national college</td>
                <td>A</td>
            </tr>
            <tr>

            
                <td>Bachelor</td>
                <td>Aadim national college</td>
                <td></td>
            </tr>
            
        </table>

        
        </h1>
        


  
}
export default About;