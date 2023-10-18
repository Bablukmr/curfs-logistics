import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Protected({Componet}) {
const navigate=useNavigate()
const location=useLocation()

    useEffect(()=>{
       
        const path=location.pathname
        const search=location.search
        const pathurl=path+search
        localStorage.setItem("path",pathurl)
        // console.log({path,search})
        let token=localStorage.getItem("token")
        console.log(token)
        if(!token){
            navigate("/auth")
        }
    })
  return <Componet/>
}
export default Protected;