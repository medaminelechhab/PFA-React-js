import React, { useState } from "react";
import registerBackground from "../../images/1.jpg";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [gender, setGender] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const videleschamps = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAcceptTerms(false);
    setGender(null);
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si les mots de passe sont identiques
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      videleschamps();
      return;
    }
    videleschamps();
    // Réinitialiser l'erreur de mot de passe
    setPasswordError("");

    // Vous pouvez accéder aux valeurs des champs comme suit :
    const formData = {
      firstName,
      lastName,
      email,
      password,
      role: "user", // Adding the role with the default value "user"
    };
    console.log(formData);

    try {
      // Envoyer les données au backend
      const response = await fetch("https://eotlb6a8dzezz8v.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Gérer les erreurs de la requête ici
        throw new Error("Failed to register user");
        alert("login or password incorrect");
      }

      // Réinitialiser les champs après la soumission du formulaire
      videleschamps();

      console.log("User registered successfully");
    } catch (error) {
      console.error("Error during registration:", error.message);
      // Gérer les erreurs ici (afficher un message d'erreur, etc.)
    }
  };

  const isButtonDisabled =
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword ||
    !acceptTerms ||
    !gender;

  return (
    <div className="min-h-screen pt-16 " style={{ backgroundColor: "#f0f4f8" }}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${registerBackground})` }}
          >
            {" "}
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only takes a minute
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Firstname"
                  className="border border-gray-400 py-1 px-2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="border border-gray-400 py-1 px-2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-5">
                <input
                  type="Email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-1 text-red-500">{passwordError}</div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 py-1 px-2 w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mt-5">
                <label className="flex items-center">
                  <span className="mr-2">Gender:</span>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="border border-gray-400 mr-1"
                      checked={gender === "Male"}
                      onChange={() => setGender("Male")}
                    />
                    <span className="text-gray-700 mr-4">Male</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="border border-gray-400 mr-1"
                      checked={gender === "Female"}
                      onChange={() => setGender("Female")}
                    />
                    <span className="text-gray-700">Female</span>
                  </div>
                </label>
              </div>

              <div className="mt-5">
                <label>
                  <input
                    type="checkbox"
                    className="border border-gray-400"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
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
                </label>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className={`w-full py-3 text-center text-white ${
                    isButtonDisabled ? "bg-gray-400" : "bg-purple-500"
                  }`}
                  disabled={isButtonDisabled}
                >
                  Register Now
                </button>
              </div>

              <div className="mt-3 text-center">
                Already have an account?{" "}
                <Link to="/" className="text-purple-500 font-semibold">
                  Log in here{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
