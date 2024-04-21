import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();

    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successful. Now you can log in");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (e) {
      throw new Error(e);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <div>
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-500 block w-full p-2.5 mt-4"
                required
              />
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-500 block w-full p-2.5 mt-4"
                required
              />
              <button
                type="submit"
                className="mt-8 w-full text-white bg-cyan-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Register
              </button>
              <div className="text-center py-2 text-gray-500">
                Already a member?{" "}
                <Link className="underline text-black" to={"/login"}>
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
