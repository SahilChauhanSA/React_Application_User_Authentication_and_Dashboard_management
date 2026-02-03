import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { login } = useAuth();
  const nav = useNavigate();

  const [form, setForm] = useState({
    name:"", email:"", mobile:"", password:""
  });

  const handle = () => {
    if (Object.values(form).some(v=>!v))
      return alert("Fill all fields");
    login(form);
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-600 px-4">
      <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md text-white shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-6">Create Account</h2>

        {["name","email","mobile","password"].map(f=>(
          <input key={f}
            type={f==="password"?"password":"text"}
            className="input mt-3"
            placeholder={f.toUpperCase()}
            onChange={e=>setForm({...form,[f]:e.target.value})}
          />
        ))}

        <button className="btn mt-6" onClick={handle}>Register</button>
      </div>
    </div>
  );
}
