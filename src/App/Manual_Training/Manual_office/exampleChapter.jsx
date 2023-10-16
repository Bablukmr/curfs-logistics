import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function ExamplChapter() {
  return (
    <div className="mt-[55px] mb-8 w-full">
      <div className="w-[86%] ml-[7%] md:ml-[35%] md:w-[30%]">
        <h2 className="font-semibold text-lg mt-4">Example chapter</h2>
        <p className="my-3">
          Curfs Logistics B.V. en Curfs Warehouse B.V. hecht belang aan veilig
          en gezond werken; dat komt immers de dienstverlening ten goede. Jouw
          ervaring en vakbekwaamheid spelen daarbij een belangrijke rol
        </p>
        <div className="my-4">
          <li>Voorbeeld van een punt</li>
          <li>Voorbeeld van een punt</li>
          <li>Voorbeeld van een punt</li>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          perspiciatis?
        </p>
        <div className="p-3 my-5 bg-[#FFE57F] rounded-md">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic
            animi a ullam ab ea nobis deleniti ex nulla reprehenderit.
          </p>
        </div>
        <div className="fixed bottom-0 w-[86%] md:w-[30%] flex items-center justify-between h-[70px] border-t-2">
          <Link className="w-[120px] h-[45px] flex items-center justify-center rounded-md bg-[#2B3087] text-white">
            overview
          </Link>
          <div className="flex gap-6 ">
            <div className="p-1 bg-blue-200 rounded-md text-white text-2xl font-bold">
              <HiChevronLeft />
            </div>
            <div className="p-1 bg-blue-700 rounded-md text-white text-2xl font-bold">
              <HiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamplChapter;
