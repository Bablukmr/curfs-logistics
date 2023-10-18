import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NotificationBox from "../Componets/notificationbox";
import { userLogIn } from "../store/action";
import { useSelector, useDispatch } from "react-redux";

function LogInEmail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.AuthReducer.token);
  const loadingLogin = useSelector((state) => state.AuthReducer.loadingLogin);

  const loginError = useSelector((state) => state.AuthReducer.loginError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState(null);
  const [notificationTitle, setNotificationTitle] = useState(null);
  const [notificationBody, setNotificationBody] = useState(null);

  const urlToGo = localStorage.getItem("path");

  useEffect(() => {
    if (urlToGo) {
      if (token) navigate(urlToGo);
    } else {
      if (token) navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (loginError) {
      setNotificationTitle("Error !!");
      setNotificationBody("Something went wrong.");
      setNotificationType("error");
      shownotiftion();
    }
  }, [loginError]);

  const shownotiftion = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!password) {
      setNotificationTitle("Error !!");
      setNotificationBody("Password missing.");
      setNotificationType("error");
      shownotiftion();
    }

    if (!email) {
      setNotificationTitle("Error !!");
      setNotificationBody("Email missing.");
      setNotificationType("error");
      shownotiftion();
    } else {
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regexEmail.test(email)) {
        if (password) dispatch(userLogIn(email, password));
      } else {
        setNotificationTitle("Error !!");
        setNotificationBody("Wrong email format.");
        setNotificationType("error");
        shownotiftion();
      }
    }
  };

  // const path = localStorage.getItem("path");
  // // console.log(path);
  // setLoading(true);

  // try {
  //   const response = await axios.post(url, {
  //     email: email,
  //     password: password,
  //   });

  //   if (response.status === 200) {
  //     const token = response.data.key;
  //     navigate(path ? path : "/");
  //     // localStorage.removeItem("path")
  //     localStorage.setItem("token", token);
  //   } else {
  //     console.error("Login failed");
  //   }
  // } catch (error) {
  //   console.error("Login error:", error);
  //   setNotificationTitle("Error !!");
  //   setNotificationBody("Something went wrong.");
  //   setNotificationType("error");
  //   shownotiftion();
  // }
  // setLoading(false);
  // };

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
        <h1 className="my-8 text-lg font-semibold">
          Login personnel application
        </h1>
        <form className="w-full flex flex-col items-center justify-center gap-3">
          <div className="w-full">
            <label className="text-sm">E-mail</label>
            <div className="border-[#A2A2A7]  mt-2 rounded-md border border-solid flex items-center px-2">
              <input
                type="email"
                placeholder="E-mail"
                className="text-sm h-10 border-none w-full outline-none px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            <label className="text-sm">Password</label>
            <div className="border-[#A2A2A7] mt-2 rounded-md border border-solid flex items-center px-2">
              <input
                type="password"
                placeholder="Password"
                className="text-sm h-10 border-none w-full  outline-none px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleLogin}
            disabled={loadingLogin}
            className={`w-full text-center mt-3   py-3 rounded-md text-white ${
              loadingLogin ? "bg-[#7474b7] cursor-not-allowed" : "bg-[#2B3087] "
            }`}
          >
            {loadingLogin ? "Logging In..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          <p className="text-sm">
            Forgot your password?{" "}
            <Link
              to={"/auth/password-reset"}
              className="text-blue-900 text-sm underline"
            >
              Request a new password
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default LogInEmail;
