import { handleCart } from "./HandleCart";
import { combineReducers } from "redux";
import { setInfor } from "./SetInFor";
import { account } from "./Account";
export const rootReducers=combineReducers({
    handleCart,
    setInfor,
    account
})