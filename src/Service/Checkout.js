export const CheckoutController = {
    Checkout : async(checkout)=>{
        const res = fetch(`${process.env.REACT_APP_URL_BACK}/auth/checkout`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(checkout),
            credentials:"include"
        })

       return res
    }
}