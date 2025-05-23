import styles from "../page.module.css";
 
import Image from "next/image";
import Logo from "../assets/FiTech.png"
import U1 from "../assets/ui1.png";
import U2 from "../assets/u2.png";
import U3 from "../assets/u3.png";
import U4 from "../assets/ui4.png";
import U5 from "../assets/ui5.png";
import U6 from "../assets/ui6.png";
 
 

export default function About(){
 
  
    return(
        <div id = "About" className = {styles.page} style = {{backgroundColor:"black", justifyContent:"center", alignItems:"flex-start"}}>
           <div 
           style = {{
            justifyContent:"space-evenly",
            width:"100vw",
            alignItems:"center", 
            backgroundColor:"rgb(25, 25, 25)",
            
             flexDirection:"row",
             display:"flex",
            overflow:"show",
        
             paddingBlock: 34,
             position:"relative", 
             columnGap: 100,
             top: -47
             }}>

        
<div>
    <Image height= {500} style= {{}} src = {U1}/>
</div>
 
     <div>

<Image height={500} style= {{}} src = {U4}/>
</div>
        <div>    
            <Image height={500} style= {{}} src = {U2}/>
                </div>

                        <div>    
            <Image height={500} style= {{}} src = {U5}/>
                </div>   
 
                        <div>    
            <Image height={500} style= {{}} src = {U6}/>
                </div>   
 
      
        </div>
        </div>
    )
}