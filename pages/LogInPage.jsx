import { useState } from "react";
import { Link } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { DNA } from "react-loader-spinner";

const LogInPage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [passwordShow, setpasswordShow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };
  ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
  const handleSubmit = () => {
    if (!email) {
      setEmailerr("Email is requires");
    } else if (
      !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(email)
    ) {
      setEmailerr("Invalid Email");
    }
    if (!password) {
      setPassworderr("Password is requires");
    }
  };
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 flex justify-end items-center mr-[69px]">
        <div>
          <h1 className=" text-[34.4px] font-bold text-two">
            Login to your account!
          </h1>

          <div className="w-[369px] h-[80px] relative mt-[47px]">
            <label
              className={`text-[13.76px] font-semibold ${
                emailerr ? "text-red-400" : "text-[#11175D]/50"
              }  absolute top-[-20px] left-[20px] p-3 bg-white`}
            >
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className={`w-full h-full border-b-1 ${
                emailerr ? "border-red-400" : "border-two/50"
              }  p-10`}
              type="text"
              placeholder="Enter your Email"
              value={email}
            />
            {emailerr && (
              <p className=" text-red-500 text-xl font-normal">{emailerr}</p>
            )}
          </div>

          <div className="w-[369px] h-[80px]  mt-[47px] mb-[51px]  relative">
            <label
              className={`text-[13.76px] font-semibold ${
                passworderr ? "text-red-500" : "text-[#11175D]/50"
              }  absolute top-[-20px] left-[20px] p-3 bg-white`}
            >
              Password
            </label>
            <input
              onChange={handlePassword}
              className={`w-full h-full border-b-1 ${
                passworderr ? "border-red-500" : " border-two/50"
              } p-10`}
              type={passwordShow ? "text" : "password"}
              placeholder="......."
              value={password}
            />
            {passworderr && (
              <p className=" text-red-500 text-xl font-normal">{passworderr}</p>
            )}
            {passwordShow ? (
              <IoEye
                onClick={() => setpasswordShow(false)}
                className="text-xl absolute top-1/2 translate-y-[-50%] right-5"
              />
            ) : (
              <IoIosEyeOff
                onClick={() => setpasswordShow(true)}
                className="text-xl absolute top-1/2 translate-y-[-50%] right-5"
              />
            )}
          </div>
          <div className="w-[368px] h-[67px]">
            <button
              onClick={handleSubmit}
              className="text-[20px] font-semibold text-white w-full h-full bg-one rounded-[9px] cursor-pointer "
            >
              Sign up
            </button>

            <div className="w-[230px] mx-auto mt-[35px]">
              <p className="">
                Don’t have an account ?
                <Link to={"/SignUpPage"} className="text-[#EA6C00]">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className=" ml-auto h-full w-full object-cover"
          src="Login.png"
          alt="Login.png"
        />
      </div>
    </div>
  );
};

export default LogInPage;
