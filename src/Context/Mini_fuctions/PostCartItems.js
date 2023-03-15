export const postCartItems=async(email,user,addToCart)=>{
    try {
        const res=await fetch(`${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_CART_API}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              `bearer ${process.env.REACT_APP_API_TOKEN}` ,
          },
          
          body: JSON.stringify({
            data:{
              email:"anurag1@gmail.com",
              user:"anurag1",
              cart:addToCart
            }
          })
          })
          const jsonRes=await res.json()
          console.log(`${jsonRes} this is json res`)
          return jsonRes
      } catch (error) {
        console.log(error.message)
        console.log('can not be saved in cart')
        return error
      }
}