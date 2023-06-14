import React, { useContext, useState } from "react";
import { authContext } from "../../../context/UserContext";
import google_logo from "../../assets/google.svg";

const Login = () => {
  const { singinWithGoole, singInWithEmail } = useContext(authContext);

  // user email and password state
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  // handel email on change
  const handelEmailOnchange = (e) => {
    setUserEmail(e.target.value);
  };
  const handelPasswordOnchange = (e) => {
    setUserPassword(e.target.value);
  };

  // singin with email and password
  const handelOnSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    console.log("click");

    // singin with email
    singInWithEmail(userEmail, userPassword)
      .then((userCrendential) => {
        const user = userCrendential.user;
        console.log(user);
        from.reset();
      })
      .catch((error) => console.log(error));
  };
  //   handel google provider login
  const handelGoolgeProviderlogin = () => {
    singinWithGoole()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="bg-[#FFE0B3] w-[500px] h-[600px] relative rounded-md">
          <div className="px-7 bg-white w-[500px] h-[600px] border-1 absolute z-50 -top-2 -right-2 border border-[#95A0A7] rounded-md">
            <h2 className="text-5xl text-center mt-5">Login</h2>
            <form action="" onSubmit={() => handelOnSubmit(event)}>
              <div className="flex flex-col mt-16">
                <label
                  htmlFor="email"
                  className="font-semibold text-lg mb-3 ps-2"
                >
                  Email
                </label>
                <input
                  onChange={handelEmailOnchange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border h-[55px] rounded-md px-2"
                />
              </div>
              <div className="flex flex-col mt-8">
                <label
                  htmlFor="password"
                  className="font-semibold text-lg mb-3 ps-2"
                >
                  Password
                </label>
                <input
                  onChange={handelPasswordOnchange}
                  type="Password"
                  name="password"
                  placeholder="Password"
                  className="border h-[55px] rounded-md px-2"
                />
              </div>
              <div className="flex flex-col mt-8">
                <button
                  type="submit"
                  className="bg-[#FFE0B3] py-3 rounded-md text-black font-semibold text-lg hover:bg-[#fed698]"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="flex flex-col mt-8">
              <button
                onClick={() => handelGoolgeProviderlogin()}
                className="flex justify-center gap-x-1 py-3 rounded-md text-black font-semibold text-lg border border-[#95A0A7] transition-all hover:scale-[1.01]"
              >
                <img src={google_logo} alt="" />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
