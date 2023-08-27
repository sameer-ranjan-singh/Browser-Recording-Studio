import { Typography } from "@mui/material"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { userEmailState } from "../store/selectors/userEmail";
import { useRecoilValue } from "recoil";


function Landing(){
  const userEmail =  useRecoilValue(userEmailState)
  const navigate = useNavigate()

    setTimeout(() => {
        window.scrollTo(0, window.innerHeight); 
      }, 1000);

    if (userEmail){
        return <>
        <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        // backgroundColor:"#000000",
        alignItems:"center",
        height:"100vh",
        width:"100vw",
    }}>
        <div>
        <Typography style={{
            flexShrink: 0,
            width: "80vw",
            height: "auto", /* 176px */
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            wordBreak: "break-word",
            position: "relative",
            fontStyle: "normal",
            fontFamily: `"Gloock", "Gloock Placeholder", serif`,
            color: "#CC5803",
            fontSize: 50,
            letterSpacing: "0em",
            lineHeight: 1.1,
            textAlign: "center",
        }}>The easiest way to <br />Record Live Stream</Typography>
        </div>

        <div style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              gap:20,
              paddingTop:50,
              width:"100vw"
              }}>
        <Button
        variant={"outlined"}
        onClick={() => {
            navigate("/courses")
        }}
        color = "error" 
        style={{
            // backgroundColor:"#000000",
            border:"1px solid #CC5803",
            padding:"10px 20px 10px 20px",
            Size:"large",
            letterSpacing:"4px",
            width:250,
            transition: "transform 0.2s",
            }}
        >Record Screen</Button>
        <Button 
        onClick={() => {
            navigate("/recording")
        }}
        variant={"outlined"}
        color = "error"
        style={{
            // backgroundColor:"#000000",
            border:"1px solid #CC5803",
            padding:"10px 20px 10px 20px",
            Size:"large",
            letterSpacing:"4px",
            width:250,
            transition: "transform 0.2s",
            }}
        >PENDING..</Button>    
        
        </div>
    </div>
        </>
    }
   return <>
    <div style={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        // backgroundColor:"#000000",
        alignItems:"center",
        height:"100vh",
        width:"100vw",
    }}>
        <div>
        <Typography style={{
            flexShrink: 0,
            width: "80vw",
            height: "auto", /* 176px */
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            wordBreak: "break-word",
            position: "relative",
            fontStyle: "normal",
            fontFamily: `"Gloock", "Gloock Placeholder", serif`,
            color: "#CC5803",
            fontSize: 50,
            letterSpacing: "0em",
            lineHeight: 1.1,
            textAlign: "center",
        }}>A professional live stream<br />recording studio in your browser.</Typography>
        </div>

        <div style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              gap:20,
              paddingTop:50,
              width:"100vw"
              }}>
        <Button
        variant={"outlined"}
        onClick={() => {
            navigate("/signup")
        }}
        color = "error" 
        style={{
            // backgroundColor:"#000000",
            border:"1px solid #CC5803",
            padding:"10px 20px 10px 20px",
            Size:"large",
            letterSpacing:"4px",
            width:250,
            transition: "transform 0.2s",
            }}
        >Create Account</Button>
        <Button 
        onClick={() => {
            navigate("/signin")
        }}
        variant={"outlined"}
        color = "error"
        style={{
            // backgroundColor:"#000000",
            border:"1px solid #CC5803",
            padding:"10px 20px 10px 20px",
            Size:"large",
            letterSpacing:"4px",
            width:250,
            transition: "transform 0.2s",
            }}
        >Login</Button>    
        
        </div>
    </div>
   </>
}

export default Landing