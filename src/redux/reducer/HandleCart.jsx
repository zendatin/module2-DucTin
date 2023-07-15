const cart=[];
export const handleCart=(state=cart,action)=>{
    const product=action.payload
    switch(action.type){
        case 'ADD_ITEM':
            const existingProduct=state.find((x)=>x.id==action.payload.id)
            if(existingProduct){
                return state.map((x)=>x.id===product.id?{...x,quantity:x.quantity+1}:x)
            }else{
                return [...state,{...product, quantity: 1}]
            }
            break;
            case 'DELETE_ITEM':
                const existingProduct1=state.find((x)=>x.id==product.id)
                if (existingProduct1.quantity==1){
                    return state.filter((item)=>(item.id!==product.id))
                }
                else{
                    return state.map((x)=>x.id==product.id?{...x,quantity:x.quantity-1}:x)
                }

            break;
            case 'UPDATE_QUANTITY':
                return ([...state])
            
            default:
                return state
            
    }
}