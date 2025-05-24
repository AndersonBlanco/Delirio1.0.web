import Logo from "./assets/FiTech.png"
import styles from "./page.module.css";
import "./globals.css"; 
import Link from 'next/link'
import Image from "next/image";
import HomeImg from "./assets/img1.png"; 
import Arrow from "./assets/Arrow"; 
import Founders from "./founders/page";
import About from "./mobapp/page";
import ModelPreview from "./modelPreview/page";
export default function Home() {
 
   
  return (
    <>
    <div className={styles.page} >
   
   <div className = {styles._header}  >
    <div className={styles.row} >
      <div style={{width: "3vw"}}>
      <Image objectFit="contain" layout="responsive" src={Logo} style={{position:"relative", right: "40vw",}}/>
    </div>
    <h1 style = {{fontSize: "2vw", color: "black", position:"relative", left: "-10px" }}>FiTech</h1>
    </div>
   </div>



<div style = {{display:"flex", flexDirection:"column", rowGap: 150}}> 
       <div style = {{ top: "125px", justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"row", position:"relative", columnGap: 0}}>
               <div style = {{position:"relative", top: "100%"}}>
                <Arrow style = {{height: "20vw", width: "9vw"}} />
                </div>
                <ul 
                className={styles._ul}
                style = {{
                  color:"black",
                  listStyleType:"none",

                }}>
                  <li style = {{  position:"relative", left:40}} ><h1 style = {{fontSize: "2.5vw" }}>LEARN</h1></li>
                  <li style = {{  position:"relative", left:-10}}><h1 style = {{fontSize: "2.5vw" }}>DEVELOP</h1></li>
                  <li style = {{  position:"relative", left:-51}}><h1 style = {{fontSize: "2.5vw" }}>APPLY</h1></li>
                </ul>

                <div style = {{position:"relative", top: "-61px", width: "50vw", backgroundColor: "transparent"}}> 
                 <Image src={HomeImg} objectFit="contain" layout="responsive" />
                </div>
          </div>

          <h1 style = {{ width: "100%", fontSize: "2vw", textAlign:"center", textTransform:"uppercase", color: "black", position:"relative", }}>Learn & Get Fit With Tech</h1>


    </div>
    </div>
    <About/>
    <ModelPreview/>
    <Founders/>
    </>
  );
}
