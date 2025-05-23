import styles from "../page.module.css";
import "../globals.css"; 
import Image from "next/image";
import Logo from "../assets/FiTech.png"

export default function ModelPreview(){
    return(
        <div className={styles.page} style={{backgroundColor:"black", alignItems:"center", justifyContent:"center"}}>
            
            <div style = {{ paddingBlock: 25,rowGap: 25, flexDirection:"column", display:"flex", textAlign:"center", justifyContent:"right", alignItems:"center", width: "100vw", backgroundColor:"rgb(25, 25, 25)", paddingInline: 50}}> 
            <h3 style= {{fontSize:"2.5vw"}}>Model Preview</h3>
                <div style = {{justifyContent:"center", alignItems:"center", height: "24vw", width:"50vw", overflow:"hidden", position:"relative"}}>
                               <iframe style= {{ borderWidth: "0px", width: "50vw", height: "27vw", position:"relative", top: "-1.25vw"}} src="https://drive.google.com/file/d/1kfjBVGDl6tKZt2v8t_gaGrckNSqAfxka/preview"/>
                </div>

            </div>
            </div>
    )
}