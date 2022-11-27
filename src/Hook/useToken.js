import {  useEffect, useState } from "react";


const useToken = (email) => {
    const [token, setToken] = useState("");
    console.log(email);
    useEffect( () => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("accessToken",data.accessToken);
            setToken(data.accessToken);
        })
        .catch(err => console.log(err))
    },[email])
    return [token];
}

export default useToken;