import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handle = () => {
    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    const success = login(form);
    if (!success) {
      setError("Invalid email or password");
      return;
    }

    nav("/dashboard");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 px-4">
      <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md text-white shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <input
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="input mt-4"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="text-red-300 mt-3 text-center">{error}</p>}

        <button className="btn mt-6" onClick={handle}>
          Login
        </button>

        <p className="mt-4 text-center">
          New here? <Link to="/register" className="text-pink-300">Create account</Link>
        </p>
      </div>
    </div>
  );
}
