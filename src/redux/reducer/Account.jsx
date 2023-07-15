
import { updateAccount } from "../action/UpdateAccount";
const initialState = {};
export const account=(state=initialState,action)=>{
                switch(action.type){
                    case "UPDATE_ACCOUNT":
                        return action.payload
                        break;
                        default:return state;
                }
}