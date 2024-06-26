export const CartController = {
    addCart : async (cart)=>{
        const RES = await fetch(`${process.env.REACT_APP_URL_BACK}/auth/cart`,
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json" // Đảm bảo rằng client gửi đúng định dạng JSON
                },
                body:JSON.stringify(cart),
                credentials:"include"
            }
        )
        const data = RES.json();
        return data
    },
    getAllCart :  async ()=>{
        const RES = await fetch(`${process.env.REACT_APP_URL_BACK}/auth/cart`,
            {
                method:"GET",
                // headers: {
                //     "Content-Type": "application/json" // Đảm bảo rằng client gửi đúng định dạng JSON
                // },
                credentials:"include"
            }
        )
        const data = RES.json();
        return data
    },
    UpdateCart : async (cart)=>{
        const RES = await fetch(`${process.env.REACT_APP_URL_BACK}/auth/cart`,
            {
                method:"PUT",
                headers: {
                    "Content-Type": "application/json" // Đảm bảo rằng client gửi đúng định dạng JSON
                },
                body:JSON.stringify(cart),
                credentials:"include"
            }
        )
        const data = RES.json();
        return data
    },
    DeleteCart: async (cart)=>{
        const RES = await fetch(`${process.env.REACT_APP_URL_BACK}/auth/cart`,
            {
                method:"Delete",
                headers: {
                    "Content-Type": "application/json" // Đảm bảo rằng client gửi đúng định dạng JSON
                },
                body:JSON.stringify(cart),
                credentials:"include"
            }
        )
        const data = RES.json();
        return data
    },
}