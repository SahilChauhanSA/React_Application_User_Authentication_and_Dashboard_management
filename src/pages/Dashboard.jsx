import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 w-full max-w-lg text-white shadow-2xl">
        
        <div className="flex flex-col items-center">
          <img
            src={user.photo || "https://i.pravatar.cc/150"}
            className="w-28 h-28 rounded-full border-4 border-pink-500 object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
          <p className="text-white/70">{user.email}</p>
        </div>

        <div className="mt-6 space-y-3 text-lg">
          <div className="flex justify-between">
            <span>📧 Email</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between">
            <span>📱 Mobile</span>
            <span>{user.mobile}</span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button
            className="btn"
            onClick={() => nav("/edit-profile")}
          >
            Edit Profile
          </button>

          <button
            className="btn bg-red-500 hover:bg-red-600"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
