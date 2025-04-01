import { useState } from "react";
import {
  Avatar,
  MenuComponent,
  MicComponent,
  LensComponent,
  SearchComponent,
  RecentComponent,
  XComponent,
} from "~/utilitys/SVGComponents";
// import * from "app/utilitys/linkedin.png"
export default function Foogle() {
  const recentSearches = [
    "Hello",
    "Hello world",
    "Hello you mister ",
    "Hello just some text with bla bla bla bla bla bla bla bla bla bla bla",
    "greates burgers",
  ];
  const icons1 = [
    "chrome://favicon2/?size=24&scaleFactor=1x&showFallbackMonogram=&pageUrl=http%3A%2F%2Flocalhost%3A5173%2Fjokes",
    "chrome://favicon2/?size=24&scaleFactor=1x&showFallbackMonogram=&pageUrl=https%3A%2F%2Fgithub.dev%2FLinkedInLearning%2Ftypescript-EssT-2428199",
    "chrome://favicon2/?size=24&scaleFactor=1x&showFallbackMonogram=&pageUrl=https%3A%2F%2Fwww.linkedin.com%2F",
  ];
  const icons = [
    "app/utilitys/github.png",
    "app/utilitys/linkedin.png",
    "app/utilitys/routerv7.png",
  ];
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div
      className="bg-[#3C3C3C] h-screen flex flex-col "
      onClick={() => dropDownOpen && setDropDownOpen(false)}>
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
      <div className="w-screen h-[50vh]   flex  items-center flex-col relative min-w-fit">
        <div className="text-[#ffffff] max-w-68 h-23 font-inter text-[110px] min-w-fit min-h-42  font-semibold mb-10">
          Google
        </div>
        <div
          className={` absolute top-50 ${
            dropDownOpen ? "bg-white rounded-3xl" : ""
          }`}>
          <div>
            <input
              type="text"
              id="serchInput"
              className={`bg-[#ffffff] relative h-15 w-230 rounded-full py-7  flex flex-row placeholder-gray-500 text-lg focus:placeholder-transparent text-right outline-none pr-15`}
              placeholder="אפשר לחפש בגוגל או להקליד כתובת אתר"
              onClick={() => {
                setDropDownOpen(true);
              }}
            />
            <SearchComponent className="h-6 w-6 absolute top-5 right-5 hover:cursor-text" />
            <LensComponent className="h-10 w-10 absolute top-3 left-3 hover:cursor-pointer" />
            <MicComponent className="h-10 w-10 absolute top-3 left-15 hover:cursor-pointer" />

            <div
              className={`max-h-[calc(7*4rem)] overflow-y-auto mt-0 rounded-2xl bg-white ${
                dropDownOpen ? "py-3" : ""
              }`}
              dir="rtl">
              {dropDownOpen &&
                recentSearches.map((item, index) => {
                  return (
                    <div className="group flex items-center space-x-3 py-3 px-4  ml-5 gap-1 hover:bg-gray-50 hover:rounded-l-full">
                      <RecentComponent className="h-3 w-3 fill-gray-500 mr-2.5" />
                      <p className="flex-1">{item}</p>

                      <XComponent className="h-5 w-5 fill-gray-200 ml-2.5 opacity-0 group-hover:opacity-100 group-hover:fill-gray-500 cursor-pointer hover:rounded-full hover:bg-gray-200 hover:p-0.5" />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="mt-15 flex flex-row gap-1">
          {icons.map((item) => (
            <a className="flex justify-center items-center  h-[106px] w-[104px] mx-4 my-3 hover:bg-[#978f8fb9] hover:cursor-pointer rounded-sm">
              <img className=" rounded-full" max-h-5 src={item} alt={item} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
