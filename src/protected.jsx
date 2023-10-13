import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({Componet}) {
const navigate=useNavigate()
    useEffect(()=>{
        let token=localStorage.getItem("token")
        console.log(token);
        if(!token){
            navigate("/auth")
        }
    })
  return <Componet />
}
export default Protected;