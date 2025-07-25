import { useState } from "react";
import { Link } from "react-router";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";

const SignUpPage = () => {
  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [nameerr, setNameerr] = useState("");
  let [passworderr, setPassworderr] = useState("");
  let [passwordShow, setpasswordShow] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  const handleName = (e) => {
    setName(e.target.value);
    setNameerr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassworderr("");
  };

  const handleSubmit = () => {
    if (!name) {
      setNameerr("Name is requires");
    }
    if (!email) {
      setEmailerr("Email is requires");
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
            Get started with easily register
          </h1>
          <p className="text-[20.67px] font-normal text-[#000000] opacity-50 mt-[13px] mb-[40px]">
            Free register and you can enjoy it
          </p>
          <div className="w-[369px] h-[80px] relative mt-[47px]">
            <label className="text-[13.76px] font-semibold text-[#11175D]/50 absolute top-[-20px] left-[20px] p-3 bg-white  ">
              Email Address
            </label>
            <input
              onChange={handleEmail}
              className="w-full h-full border-1 border-two/50 p-10 rounded-lg"
              type="text"
              placeholder="Enter your Email"
              value={email}
            />
            {emailerr && (
              <p className=" text-red-500 text-xl font-normal">{emailerr}</p>
            )}
          </div>
          <div className="w-[369px] h-[80px] relative mt-[47px]">
            <label className="text-[13.76px] font-semibold text-[#11175D]/50 absolute top-[-20px] left-[20px] p-3 bg-white  ">
              Full name
            </label>
            <input
              onChange={handleName}
              className="w-full h-full border-1 border-two/50 p-10 rounded-lg"
              type="text"
              placeholder="Enter your Full name"
              value={name}
            />
            {nameerr && (
              <p className=" text-red-500 text-xl font-normal">{nameerr}</p>
            )}
          </div>
          <div className="w-[369px] h-[80px] relative mt-[47px] mb-[51px]  relative">
            <label className="text-[13.76px] font-semibold text-[#11175D]/50 absolute top-[-20px] left-[20px] p-3 bg-white  ">
              Password
            </label>
            <input
              onChange={handlePassword}
              className="w-full h-full border-1 border-two/50 p-10 rounded-lg"
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
              className="text-[20px] font-semibold text-white w-full h-full bg-one rounded-[68px] cursor-pointer "
            >
              Sign up
            </button>
            <div className="w-[230px] mx-auto mt-[35px]">
              <p className="">
                Already have an account ?{" "}
                <Link className="text-[#EA6C00]">Sign In</Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          className=" ml-auto h-full w-full object-cover"
          src="signUp.jpg.png"
          alt="signUp.jpg.png"
        />
      </div>
    </div>
  );
};

export default SignUpPage;
