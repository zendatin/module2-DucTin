import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setInfor } from "../redux/reducer/SetInFor";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert,setAlert]=useState('')
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const signIn = useSelector((state) => state.setInfor);
  console.log(signIn);

  const handleSignIn = () => {
    const payload = signIn.find(  
      (x) => x.email == email && x.password == password
    );
    if (payload) {
      setAlert('Your request was successful');
      
      navigate('/');
    } else {
      setAlert('Please enter again!')
    }
  };

  return (
    <div>
      <form className="d-flex col-md-12 flex-column align-items-center">
        {alert && (<div
        className={`alert ${alert.includes('success')?'alert-success':'alert-danger'}`} role='alert'>
          {alert}
        </div>)}
        <div class="form-group">
          <label for="inputEmail">Email:</label>
          <input
            type="email"
            class="form-control"
          
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="inputPassword">Password:</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button class="btn btn-primary" onClick={handleSignIn}>
          Sign-in
        </button>
      </form>
    </div>
  );
}
