import {
  Avatar,
  MenuComponent,
  MicComponent,
  LensComponent,
  SearchComponent,
} from "~/utilitys/SVGComponents";

export default function Foogle() {
  //   document.title = "Foogle😎😎😎";

  document.body.style.backgroundColor = "#3C3C3C";
  return (
    <div className="bg-[#3C3C3C] h-screen flex flex-col">
      <div className="text-[#ffffff] flex justify-start space-x-8 font-sans h-12 pl-1 mt-6 text-lg semibold relative">
        <div className="w-12 h-12 rounded-full overflow-hidden mt-0 ml-4 hover:cursor-pointer relative flex justify-center items-center ">
          <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZyg-f-DNIXUm-Put8mO2ghiVy0f0wIF9OwgdHtUA6dH24LJX=s64-c-mo"
            alt="Profile"
            className="w-9 h-8.6 object-cover rounded-full absolute mt-0"
          />{" "}
          <Avatar className="mt-0 h-12 w-12" />
        </div>

        <div className="hover:underline relative top-1">
          {" "}
          <MenuComponent className="w-8 h-8 hover:cursor-pointer fill-current ml-0" />
        </div>
        <div className="hover:underline hover:cursor-pointer  relative top-1">
          Images
        </div>
        <div className="hover:underline hover:cursor-pointer  relative top-1">
          Gmail
        </div>
      </div>
      <div className="w-screen h-[50vh] mt-15  flex  items-center flex-col relative min-w-fit">
        <div className="text-[#ffffff] max-w-68 h-23 font-inter text-[110px] min-w-fit min-h-42  font-semibold">
          Google
        </div>
        <div className="relative ">
          <input
            type="search"
            id="serchInput"
            className="bg-[#ffffff] relative h-15 w-230 rounded-full py-7  mt-5 flex flex-row placeholder-gray-500 text-lg focus:placeholder-transparent text-right
         outline-none pr-7"
            placeholder={`אפשר לחפש בגוגל או להקליד כתובת אתר `}
          />
          <SearchComponent className="h-6 w-6 absolute top-10 right-5 hover:cursor-pointer" />{" "}
          <LensComponent className="h-10 w-10 absolute top-8 left-3 hover:cursor-pointer" />
          <MicComponent className="h-10 w-10 absolute  top-8 left-15 hover:cursor-pointer" />
        </div>
        {/* <div>
          {" "}
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div> */}
      </div>
    </div>
  );
}
