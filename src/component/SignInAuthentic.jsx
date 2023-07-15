import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
/* import { setInfor } from "../redux/reducer/SetInFor";
import { addInfor } from "../redux/action/ActionRegister"; */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateInfor } from "../redux/action/ActionRegister";
import { useEffect } from "react";
import axios from "axios";
import { updateAccount } from "../redux/action/UpdateAccount";

export default function SignInAuthentic() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const [data,setData]=useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  /* const signIn = useSelector((state) => state.setInfor);
  console.log('after',signIn); */
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/register");
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
console.log(axios.CancelToken.source);
    return () => {
      const source = axios.CancelToken.source();
      
      source.cancel("Operation canceled by the user.");
    };
  }, []);
  /* useEffect(()=>axios.get('http://localhost:3000/register')
  .then((res)=>{
    setData(res.data);
    console.log(res.data)} )) */
  

  const handleSignInAuthentic = () => {
    const payload = data.find(
      (x) => x.username == user && x.password == password
      
    );
    dispatch(updateAccount(payload))
    console.log(payload);
    if (payload) {
      setAlert("Your request was successful");

      navigate("/");
    } else {
      setAlert("Please enter again!");
     
    }
  };
  return (
    <div>
      <section className="vh-100">
      {alert && (<div
        className={`alert ${alert.includes('success')?'alert-success':'alert-danger'}`} role='alert'>
          {alert}
        </div>)}
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example13"
                    className="form-control form-control-lg"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <label className="form-label" for="form1Example13">
                    UserName
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" for="form1Example23">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handleSignInAuthentic}
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>

                <a
                  className="btn btn-primary btn-lg btn-block mb-3"
                  /*     */
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-facebook-f me-2"></i>Continue with
                  Facebook
                </a>
                <a
                  className="btn btn-primary btn-lg btn-block facebook-icon"
                  href="#!"
                  role="button"
                >
                  <i className="fa fa-twitter me-2"></i>Continue with Twitter
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
