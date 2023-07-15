export const addItem=(data)=>{
    return {
 type:'ADD_ITEM',
 payload: data
    }
}
export const deleteItem=(data)=>{
    return {
 type:'DELETE_ITEM',
 payload: data
    }
}
export const updateQuantity=(data)=>{
    return {
        type:"UPDATE_QUANTITY",
        payload:data
    }
}

