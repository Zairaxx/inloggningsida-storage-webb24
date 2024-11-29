import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
const StartPage = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const navigate = useNavigate();
    
    
    useEffect(() => {
        if(sessionStorage.getItem("currentUser")){
            setCurrentUser(JSON.parse(sessionStorage.getItem("currentUser")))
        } else {
            navigate("/");
        }
        
    },[])


    const logout = () => {
        sessionStorage.clear();
        navigate("/")
    }

    return(<div>
        <h2>Welcome {currentUser?.username}!</h2>
        <button onClick={logout}>Log out</button>
    </div>)
}

export default StartPage