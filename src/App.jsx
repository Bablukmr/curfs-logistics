import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./Auth/authLayout";
import Protected from "./protected";
import AppLayout from "./App/appLayout";
import { Provider } from "react-redux";
import { useStore } from "./store/store";

function App(props) {
  const store = useStore(props.initialReduxState);
  return (
    <Provider store={useStore(store)}>
      <BrowserRouter>
        <Routes>
          <Route path="auth/*" element={<AuthLayout />} />
          <Route path="/*" element={<Protected Componet={AppLayout} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
