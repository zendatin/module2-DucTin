export const addInfor = (userName, email, password) => {
  console.log("vvvvvvv",email);
  return {
    type: "ADD_INFOR",
    payload: { userName, email, password },
  };
};
export const updateInfor = (payload) => {
  
  return {
    type: "UPDATE_INFOR",
    payload,
  };
};
