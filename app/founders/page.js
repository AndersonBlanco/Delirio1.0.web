import styles from "../page.module.css";
import "../globals.css"; 
import Image from "next/image";
import Logo from "../assets/FiTech.png"
export default function Founders(){
    const Profile  = ({img, name, descr}) =>{
        return(
            <div style = {{ 
                textAlign:"center", 
                alignItems:"center", 
                justifyContent:"center",
                display:"flex",
                flexDirection:"column"}}>
              
                <div style = {{ backgroundColor:"", width: "15vw", position:"relative", }}>
                <Image alt="" layout="responsive" src = {img} objectFit="contain" />
                </div>

                
                <h1 style = {{color: "black", fontSize: "150%"}}>{name}</h1>
                <h1 style = {{color: "black", fontSize: "150%"}}>{descr}</h1>
 
             
            </div>
        )
    }


  return(
    <div className={styles.page} style = {{ backgroundColor:"transparent", paddingTop: 300}}>

<div style = {{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    columnGap: 50,
    alignItems:"center",

}}>
 <Profile name={"Anderson Blanco"} img={Logo } descr={"BU Class of 2028"} />
<Profile name={"Anderson Blanco"} img={Logo } descr={"BU Class of 2028"} />
</div>

<div className={styles.footer} style = {{
    backgroundColor:"black",
    width:"100%",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
  
    height: "100%"
}}>
    <div style = {{display:"felx", flexDirection:"row", justifyContent:"space-between"}}>
        {/*contacts 1*/}
        {/*contacts 2*/}
    </div>

      <h3>copyright FiTech 2025</h3>

    </div>

    </div>

  )
}