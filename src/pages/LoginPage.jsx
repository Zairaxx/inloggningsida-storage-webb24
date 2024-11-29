import { useState } from "react"
import { useNavigate } from "react-router-dom";
const LoginPage = () => {

    const navigate = useNavigate();

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    //Register inputs
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const handleRegister = () => {
        let newUser = {
            username: registerUsername,
            password: registerPassword
        }
        //kolla om det finns users i localStorage
        if(localStorage.getItem("users")){
            //Hämta users, och lägg till ny user
            let users = JSON.parse(localStorage.getItem("users"));
            users.push(newUser)
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            let users = JSON.stringify([newUser]);
            localStorage.setItem("users", users)
        }

    }

    const handleLogin = () => {
        let users = JSON.parse(localStorage.getItem("users"));
        //Kolla om det finns en användare med username+password
        let loggedInUser = users.find( user => {return user.username === loginUsername && user.password === loginPassword})
       if(loggedInUser){
            sessionStorage.setItem("currentUser", JSON.stringify(loggedInUser));
            navigate("/home")
       } else {
        alert("User not registered!")
       }
    }
    return(<div>
        <h2>Login</h2>
        <input type="text" placeholder="Username" onChange={(e) => setLoginUsername(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
        <h3>Not a user yet? Register here:</h3>
        <input type="text" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)}/>
        <input type="text" placeholder="Password" onChange={(e) => setRegisterPassword(e.target.value)}/>
        <button onClick={handleRegister}>Register</button>
       
    </div>)
}

export default LoginPage