import { createStore, combineReducers } from "redux";


let initial = {
    products:[],
    currentCart: null,
    currentCat: null,
    cartList:[],
    userlog: {},
    userRlog: {},
    tottalQnt:{},
    page: 0,
}


function productSection(oldData = initial, newData){

 

   if(newData.type == "ADD_PRODUCT"){
    oldData.products = newData.payload;
   } else if (newData.type == "SLECT_CART") {

    oldData.currentCart = newData.payload;
   console.log("select" , oldData.currentCart)
} else if (newData.type == "LOGINCOM"){
    oldData.userlog = newData.payload
    console.log("user" , oldData.userlog)


}
else if (newData.type == "LOGOUTE"){
  oldData.userlog = {}
  console.log("user" , oldData.userlog)


}
else if (newData.type == "LOGINCOMR"){
    oldData.userRlog = newData.payload   
}else if (newData.type == "CARTSELECT"){

    oldData.cartList.push(newData.payload  ) 
    console.log("cartStore" , oldData.cartList)
}else if (newData.type == "TOTTAL"){
    oldData.tottalQnt += +newData.payload.adQnt
    console.log("tottla" , oldData.tottalQnt)
}else if (newData.type == "OCOMPLETE"){
    oldData.cartList = [];
    console.log("dont")

}else if (newData.type == "DELETE"){
    console.log("id" ,newData.payload.adId )
    oldData.cartList = oldData.cartList.filter((product)=> product.adId != newData.payload.adId);
    console.log(oldData.cartList)

}else if (newData.type == "QUNT"){
    console.log("adQ" , newData.payload.adQ )
    let someIndex = oldData.cartList.findIndex(product=>product.adId == newData.payload.adId);
    oldData.cartList[someIndex].adQ = newData.payload.adQ;
    console.log("tottla" , oldData.cartList)


}else if (newData.type === "PRICE") {
  console.log("price", newData.payload.adP);
  const updatedCartList = oldData.cartList.map((product) => {
    if (product.adId === newData.payload.adId) {
      return {
        ...product,
        subP: newData.payload.subP
      };
    }
    return product;
  });
  oldData.cartList = updatedCartList;
  console.log("updated cartList", updatedCartList);
  // Perform the necessary action with the updatedCartList
}else if (newData.type === "QUNT") {
  console.log("adQ" , newData.payload.adQ )
  const updatedCartList = oldData.cartList.map((product) => {
    if (product.adId === newData.payload.adId) {
      return {
        ...product,
        adQ : newData.payload.adQ
      };
    }
    return product;
  });
  oldData.cartList = updatedCartList;
  console.log("updated cartList", updatedCartList);
  // Perform the necessary action with the updatedCartList
}else if (newData.type === "PAGE") {
  const updatedCartList   = {
    ...oldData,
    page: newData.payload,
  };
oldData.page = updatedCartList;
  console.log("select", oldData.page);
}



   return {...oldData};
 
}

let data = combineReducers({ productSection});

export let meraStore = createStore(data);