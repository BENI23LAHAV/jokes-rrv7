import "../app.css";

export default function TailWindTest() {
  return (
    <div className="flex text-gray-100  h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, i) => (
          <div className="bg-white text-gray-800 w-12 h-12 flex rounded-full justify-center items-center">
            {i + 1}
          </div>
        ))}
      </div>
      <div className="bg-gray-800 p-3 w-60 flex flex-col ">
        <div className="px-3 h-12 shadow-md flex items-center ">Header</div>
        <div className=" p-3 flex-1  overflow-y-scroll space-y-0 text-gray-300">
          {" "}
          <p className="text-white">Channel 1 (unread)</p>
          <p className="text-white">Channel 2 (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>Channel {i + 3}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1  flex flex-col">
        {" "}
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3  flex-1 overflow-y-scroll">
          {" "}
          <div className=" p-3 flex-1   space-y-4">
            {" "}
            {[...Array(40)].map((_, i) => (
              <p>
                Message {i + 1}. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Libero tempora adipisci voluptas, sunt
                voluptates autem eveniet nisi, iusto, voluptatum quo
                exercitationem! Quis, reiciendis labore similique enim officia
                nobis maxime vitae?
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
