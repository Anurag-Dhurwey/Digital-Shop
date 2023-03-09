export const getProductApi = async () => {

  try {
    const res = await fetch(`${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_PRODUCT_API}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "bearer f23f8b86977a7cacfb30a8aa5a9661b0a66afe1f34152ffb018cd7025e660aba516ce093fac21c4e613408446b5d075c0ec8ca038eb024190d2aa8baf4940e51faaed368195824dd288c8ef0c140189470839514270fe0472aa38c5927dbb9c0bc89075f3b387bafdc090c105a1e8e6c21a3c9ef11bad59defaa08fd38f06e79",
      },
    });
  
    const jsonRes = await res.json();
  
    return jsonRes;
  } catch (error) {
    console.log(error.message)
    return error
  }
};
