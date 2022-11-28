

export const saveUser = async(email, name, type ,setUserEmail) => {
    const user = { email, name, type }
    console.log(user);
    fetch('https://mobile-garage-server.vercel.app/users', {
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
    // axios.post("https://mobile-garage-server.vercel.app/users", user)
    //     .then(res => {
    //         console.log(res);
    //         if (res.data.acknowledged) {                    
    //             setUserEmail(email);
    //         }
    //     })
    //     .catch(err => console.log(err))
}