import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";

export default function LoginPage() {
  const [email, setEmail] = useState("testuser@gmail.com");
  const [password, setPassword] = useState("testuser@gmail.com");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert("Login successful");
      setRedirect(true);
    } catch (e) {
      alert("Login failed");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="block w-96 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <div>
            <div className="px-5">
              <div className="text-3xl font-extrabold">Login</div>
            </div>
            <div className="pt-2">
              <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                <div>
                  <label className="block mb-2 text-sm text-black font-semibold pt-4">
                    Email
                  </label>
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-500 block w-full p-2.5"
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-black font-semibold pt-4">
                    Password
                  </label>
                  <input
                    type="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-500 block w-full p-2.5"
                    placeholder="123456"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full text-white bg-cyan-600  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link to={"/register"} className="text-blue-500 hover:underline">
          Go to Register Page
        </Link>
      </div>
    </div>
  );
}
