import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import NotificationBox from "../Componets/notificationbox";

function LogInEmail() {
  const url = "https://testapi.nhustle.in/dj-rest-auth/login/";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [notificationTitle, setNotificationTitle] = useState(null);
  const [notificationBody, setNotificationBody] = useState(null);

  const shownotiftion = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(url, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        const token = response.data.key;
        navigate("/");
        localStorage.setItem("token", token);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setNotificationTitle("Error !!");
      setNotificationBody("Something went wrong.");
      setNotificationType("error");
      shownotiftion();
    }
    setLoading(false);
  };

  return (
    <>
      <div
        className={`fixed top-6 right-0 shadow-lg z-50 w-80 rounded-2xl transition-transform duration-300 transform ${
          showNotification ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <NotificationBox
          title={notificationTitle}
          body={notificationBody}
          setShowNotification={setShowNotification}
          type={notificationType}
        />
      </div>

      <div className="flex w-full flex-col items-center justify-center">
        <h1 className="my-10 text-lg font-semibold">
          Login personnel application
        </h1>
        <form className="w-full flex flex-col items-center justify-center gap-6">
          <div className="w-full">
            <label className="">E-mail</label>
            <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
              <input
                type="email"
                placeholder="E-mail"
                className="text-sm h-10 border-none w-full bg-[#fafafa] outline-none px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="">Password</label>
            <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
              <input
                type="password"
                placeholder="Password"
                className="text-sm h-10 border-none w-full bg-[#fafafa] outline-none px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            className={`w-full text-center mt-3 py-3 rounded-md text-white ${
              loading ? "bg-[#7474b7] cursor-not-allowed" : "bg-[#2B3087] "
            }`}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <p className="text-sm">
            Forgot your password?{" "}
            <Link to={"/auth/password-reset"} className="text-blue-900">
              Request a new password
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogInEmail;
