import styles from "../page.module.css";
import "../globals.css"; 
import Image from "next/image";
import Logo from "../assets/FiTech.png"
import U1 from "../assets/ui1.png";
import U2 from "../assets/u2.png";
import U3 from "../assets/u3.png";
import U4 from "../assets/ui4.png";

export default function About(){
    return(
        <div className = {styles.page} style = {{}}>
           <div>
                
                <Image style= {{width: "20%", height: "90%"}} src = {U1}/>
                <Image style= {{width: "20%", height: "90%"}} src = {U2}/>
                <Image style= {{width: "20%", height: "90%"}} src = {U4}/>
           
           <div style = {{
            backgroundColor:"red",

           }}>
         <video width="320" height="240" preload="auto" controls autoPlay>
      <source src="https://github.com/AndersonBlanco/FiTech2.0.web/blob/main/app/assets/vid2.mp4" type="video/mp4" />
  
      Your browser does not support the video tag.
    </video>
           </div>
           </div>
         
        </div>
    )
}