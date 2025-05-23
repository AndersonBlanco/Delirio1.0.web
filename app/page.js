import Logo from "./assets/FiTech.png"
import styles from "./page.module.css";
import "./globals.css"; 
import Link from 'next/link'
import Image from "next/image";
import HomeImg from "./assets/img1.png"; 
import { Arrow } from "./assets/svgs";
import Founders from "./founders/page";
import About from "./mobapp/page";

export default function Home() {
  const ratio = (700/370),
        r = 25; 

   
  return (
    <>
    <div className={styles.page} >

      <div>
   
   <div className = {styles._header}>
    <div className={[styles.row]}>
      <div></div>
      <Image src={Logo} style={{position:"relative", right: "40vw", width: 50, height: 50}}/>
    <h1 style = {{fontSize: 31, color: "black", position:"relative", left: "-10px" }}>FiTech</h1>
    </div>
   </div>




       <div style = {{ top: "150px", justifyContent:"center", alignItems:"center", display:"flex", flexDirection:"row", position:"relative", left: "45px"}}>
               <div style = {{position:"relative", top: "100%"}}>
                {Arrow}
                </div>
                <ul 
                className={styles._ul}
                style = {{
                  color:"black",
                  listStyleType:"none",

                }}>
                  <li><Link href = "#About" scroll = {true}><h1>LEARN</h1></Link></li>
                  <li><h1>DEVELOP</h1></li>
                  <li  ><h1>APPLY</h1></li>
                </ul>

                <div style = {{position:"relative", top: "-50px", width: "650px", backgroundColor: "transparent"}}> 
                 <Image src={HomeImg} objectFit="cover" layout="responsive" />
                </div>
          </div>

          <h1 style = {{ width: "100%",   textAlign:"center", textTransform:"uppercase", color: "black", position:"relative", top: "270px"}}>Learn & Get Fit With Tech</h1>

</div>
 
    </div>
    <About/>
    <Founders/>
    </>
  );
}
