export default function Footer({ x, nbr_page, secend_button }) {
  return (
    <>
      <footer className=" h-17    space-y-4   w-full">
        <div className="">
          <div className="h-0.75 rounded-full bg-gray-200 w-full"></div>
          <div
            className={`h-0.75 rounded-full bg-green-600 w-${x}/12 absolute top-0 `}
          ></div>
        </div>
        <div className="flex justify-between font-semibold  h-9">
          <div className="border-2 w-20 ml-2 cursor-pointer text-green-700 rounded-full border-gray-200 flex items-center justify-center">
            Black
          </div>
          {nbr_page > 1 ? (
            <div className="mr-4 border-2 w-auto  px-5 cursor-pointer bg-green-700 text-white rounded-full border-gray-200 flex items-center justify-center">
              {secend_button}
            </div>
          ) : null}
        </div>
      </footer>
    </>
  );
}
