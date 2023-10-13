import Header from "./Header";
import HeroSection from "./HeroSection";

function Home() {

  return (
    <div >
     <div>
      <div>
        <Header/>
      </div>
      <div  className="flex flex-col items-center ">
        <HeroSection />
      </div>
      </div>     
    </div>
  );
}

export default Home;
