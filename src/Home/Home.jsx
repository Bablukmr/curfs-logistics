import Header from "./Header";
import HomeRoutes from "./homeRoutes";

function Home() {

// if not token redirect to auth  componentsdidmounts

  return (
    <div >
     <div>
      <div>
        <Header/>
      </div>
      <div  className="flex flex-col items-center ">
        <HomeRoutes />
      </div>
      </div>
    </div>
  );
}

export default Home;
