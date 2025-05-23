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
                flexDirection:"column",
                rowGap: 25
                }}>
              
                <div style = {{ backgroundColor:"", width: "15vw", position:"relative", }}>
                <Image alt="" layout="responsive" src = {img} objectFit="contain" />
                </div>

                
                <h1 style = {{color: "black", fontSize: "150%"}}>{name}</h1>
                <h1 style = {{color: "black", fontSize: "150%"}}>{descr}</h1>
 
             
            </div>
        )
    }


  return(
    <div className={styles.page} style = {{ alignItems:"center", backgroundColor:"transparent", }}>
 <h3 style = {{fontSize: "150%", color:"black", textDecoration:"underline", }}>FOUNDERS</h3>
<div style = {{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
        width:"100%",
    alignItems:"center",
    backgroundColor:"transparent",
    

}}>
 <Profile name={"Anderson Blanco"} img={Logo } descr={" "} />
<Profile name={"Esteban Cubides"} img={Logo } descr={" "} />
</div>

<div className={styles.footer} style = {{
    backgroundColor:"black",
    width:"100%",
    textAlign:"center",
    justifyContent:"center",
    alignItems:"center",
  marginTop: 100,
    height: "100%",
    flexDirection:"column",
    display:"flex",
}}>
    <div style = {{display:"felx", flexDirection:"row", justifyContent:"space-between"}}>
        {/*contacts 1*/}
        {/*contacts 2*/}
    </div>

     <h1 style = {{fontSize: "150%"}}>More coming soon!</h1>
     <br/>
      <h3 style = {{fontSize:"110%%"}}>copyright FiTech 2025</h3>

    </div>

    </div>

  )
}