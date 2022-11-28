

export const saveUser = async(email, name, type ,setUserEmail) => {
    const user = { email, name, type }
    console.log(user);
    fetch('http://localhost:5000/users', {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(userData => {
        console.log(userData);
        if(userData.acknowledged){
            setUserEmail(email);
        }
    })
    // axios.post("http://localhost:5000/users", user)
    //     .then(res => {
    //         console.log(res);
    //         if (res.data.acknowledged) {                    
    //             setUserEmail(email);
    //         }
    //     })
    //     .catch(err => console.log(err))
}