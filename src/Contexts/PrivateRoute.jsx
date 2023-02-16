import { useState } from "react"
import { Navigate } from "react-router-dom"

const Private = ({ children }) => {

    const [logado, setLogado] = useState(true)
    
    if (logado === false){
        return <Navigate to="/Login" />
    }
    return children

}

export default Private