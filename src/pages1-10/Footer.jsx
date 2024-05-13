export default function Footer({ nbr_page, secend_button }) {
  const nbr_page1 = `${nbr_page}/12`;
  return (
    <>
      <footer className=" h-20   space-y-4  w-full">
        <div className="h-[3.6px]  w-full rounded-full bg-gray-300 ">
          <div
            className={`h-0.75 rounded-full  border-t-4 border-green-500   w-${nbr_page1}`}
          ></div>
        </div>
        <div className="flex justify-between font-semibold  h-11">
          <div className="border-2 w-24 ml-5 cursor-pointer text-green-700 rounded-full border-gray-200 flex items-center justify-center">
            Black
          </div>
          {nbr_page > 1 ? (
            <div className="mr-4 border-2 w-auto h-auto py-5 px-5 cursor-pointer bg-green-700 text-white rounded-full border-gray-200 flex items-center justify-center">
              {secend_button}
            </div>
          ) : null}
        </div>
      </footer>
    </>
  );
}
