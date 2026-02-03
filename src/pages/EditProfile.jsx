import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function EditProfile() {
  const { user, updateProfile } = useAuth();
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    mobile: user.mobile || "",
    photo: user.photo || ""
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const save = () => {
    if (!form.name || !form.email || !form.mobile) {
      alert("All fields required");
      return;
    }
    updateProfile(form);
    nav("/dashboard");
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-700 px-4">
      <div className="bg-white/15 backdrop-blur-xl p-10 rounded-3xl w-full max-w-md text-white shadow-2xl">
        <h2 className="text-3xl text-center mb-6">Edit Profile</h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={form.photo || "https://i.pravatar.cc/150"}
            className="w-28 h-28 rounded-full border-4 border-pink-400 object-cover"
          />
          <label className="mt-3 cursor-pointer text-pink-300">
            Change Photo
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        </div>

        <input
          className="input mt-3"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          className="input mt-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          className="input mt-3"
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) =>
            setForm({ ...form, mobile: e.target.value })
          }
        />

        <button className="btn mt-6" onClick={save}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
