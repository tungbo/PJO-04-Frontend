export const Author = {
    Login : async (value)=>{
       const res = await fetch(`http://localhost:3001/api/login`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(value),
                credentials:"include"
            })
        const data = res.json();
        return data
       
        }
}
