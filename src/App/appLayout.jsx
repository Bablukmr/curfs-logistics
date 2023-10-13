import Header from "./Header";
import AppRoutes from "./appRoutes";

function AppLayout() {
// if not token redirect to auth  componentsdidmounts

  return (
    <div >
     <div>
      <div>
        <Header/>
      </div>
      <div  className="flex flex-col items-center ">
        <AppRoutes />
      </div>
      </div>
    </div>
  );
}

export default AppLayout;
