import React, { useRef } from "react";
import monImage from "../../images/1.jpg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      // Envoyer les données au backend
      const response = await fetch("https://eotlb6a8dzezz8v.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        const receivedToken = data.token;
        const receivedRole = data.role;
        const ReclchTeoken = data.ReclchTeoken;

        // Stocker le token et le rôle localement
        localStorage.setItem("token", receivedToken);
        localStorage.setItem("token", receivedToken);

        localStorage.setItem("ReclchTeoken", ReclchTeoken);
        console.log(ReclchTeoken);
        console.log(receivedToken);
        console.log(receivedRole);

        alert("Login successful!");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      // Handle the error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="flex items-center justify-center w-full bg-gray-100">
      {/* left side */}
      <div className="flex flex-col justify-center p-8 md:p-14">
        <span className="mb-3 text-4xl font-bold">Welcome back</span>
        <span className="font-light text-gray-400 mb-8">
          Welcome back! Please enter your details
        </span>
        <form onSubmit={handleSignIn}>
          <div>
            <div className="py-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="py-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="pass"
                id="pass"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                ref={passwordRef}
                required
              />
            </div>
            <div className="flex justify-between w-full py-4">
              <div className="mr-24">
                <input
                  type="checkbox"
                  name="ch"
                  id="ch"
                  className="mr-2"
                  required
                />
                <span>
                  I accept the{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-purple-500 font-semibold">
                    Privacy Policy
                  </a>
                </span>
              </div>
            </div>
            <button
              className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
              type="submit"
              onClick={() => {
                window.location.href =
                  "https://www.jahia.com/fr/solutions/portails/soins-de-sante";
              }}
            >
              Sign in
            </button>
          </div>
        </form>{" "}
        <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
          Sign in with Google
        </button>
        <div className="text-center text-gray-400">
          Don't have an account?
          <Link to="/SignUp" className="font-bold text-black">
            Sign up for free
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="relative">
        <img
          src={monImage}
          alt="amine"
          className="w-[480px] h-full hidden rounded-r-2xl md:block object-cover"
        />
        {/* text on image  */}
        <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded drop-shadow-lg md:block">
          <span className="text-white  ">
            We've been using Untitle to kick-start
            <br />
            every new project, and we can't imagine,a
            <br />
            improving our city without it. Tangier <br /> city that continually
            strives for excellence{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
