import styles from "../page.module.css";
 
import Image from "next/image";
import Logo from "../assets/FiTech.png"
import U1 from "../assets/ui1.png";
import U2 from "../assets/u2.png";
import U3 from "../assets/u3.png";
import U4 from "../assets/ui4.png";
import U5 from "../assets/ui5.png";
import U6 from "../assets/ui6.png";
 
 

export default function MobApp(){
 
  
    return(
        <div id = "About" className = {styles.page} style = {{backgroundColor:"black", justifyContent:"center", alignItems:"center", paddingBlock: 50}}>
           <div 
           
           style = {{
            justifyContent:"space-evenly",
            width:"100vw",
            alignItems:"center", 
            backgroundColor:"rgb(25, 25, 25)",
            
             flexDirection:"row",
             display:"flex",
            overflowX:"show",
           overflow: "scroll",
            whiteSpace:"nowrap", 
             paddingBlock: 34,
             paddingInline: 10, 
             position:"relative", 
             columnGap: 25,
             scrollbarGutter:"stable",
            scrollbarWidth:"none",
             }}>

                                         <div style= {{minWidth: "150px", maxWidth: "250px"}}>    
            <Image  layout = {"responsive"} height={100} style= {{}} src = {U6}/>
                </div>   

 
     
        <div style= {{minWidth: "170px", maxWidth: "270px"}}>    
            <Image   layout = {"responsive"}  height={100} style= {{}} src = {U2}/>
                </div>
 <div style= {{minWidth: "200px", maxWidth: "300px", backgroundColor: "transparent"}}>

<Image layout = {"responsive"}  height={100} style= {{}} src = {U3}/>
</div>    

 


 
 <div className={styles.iframe1_container} style = {{backgroundColor:"transparent", overflow: "hidden", minWidth: "200px", maxWidth: "300px", width: "10vw", overflowY:"hidden",justifyContent:"center", alignItems:"center", height: "61vh", width:"50vw", overflow:"hidden", position:"relative"}}>

            <iframe allowtransparency className={styles.iframe1} style = {{borderWidth:0, backgroundColor: "transparent", position:"absolute", left: "-130%",}} src="https://drive.google.com/file/d/1qudC8qPXAyvBLSN7JfD6PZrzAws5h2EM/preview" allow="autoplay" title="FiTech App"/>

 </div>
     
 
<div style= {{minWidth: "170px", maxWidth: "270px"}}>
    <Image  layout = {"responsive"}  height= {100} style= {{}} src = {U1}/>
</div>
 
                        <div style= {{minWidth: "150px", maxWidth: "250px"}}>    
            <Image layout = {"responsive"}  height={100} style= {{}} src = {U5}/>
                </div>   
 
 
        </div>
    
      
        </div>
    )
}