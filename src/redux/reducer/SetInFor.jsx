import { logDOM } from "@testing-library/react";
import React from "react";
import { useSelector } from "react-redux";
const infor = [
  { userName: "tin", email: "ngdtin1994@gmail.com", password: "12345" },
];
export const setInfor = (state = infor, action) => {
  console.log(state);
  const detail = action.payload;
  switch (action.type) {
    case "ADD_INFOR":
      return [...state, detail];
    case "UPDATE_INFOR":
      return [...state,...detail];
    default:
      return state;
  }
};
