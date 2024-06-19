import { Link, useNavigate } from "react-router-dom";

export default function Footer({
  prog,
  secend_button,
  path,
  onSecendButtonClick,
}) {
  const progressBarWidth = `${(prog / 10) * 100}%`;
  const navigate = useNavigate();

  return (
    <footer className="h-20 fixed inset-x-0 bg-white bottom-0 space-y-4 w-full">
      <div className="h-[3.6px] w-full rounded-full bg-gray-300">
        <div
          className="h-0.75 rounded-full border-t-4 border-green-500"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <div className="flex justify-between font-semibold h-11">
        <div
          onClick={() => {
            navigate(-1);
          }}
          className="border-2 w-24 ml-5 cursor-pointer text-green-700 rounded-full border-gray-200 flex items-center justify-center"
        >
          Back
        </div>
        {prog > 1 ? (
          <div onClick={onSecendButtonClick}>
            <div className="mr-4 border-2 w-auto h-auto py-2 px-5 cursor-pointer bg-green-700 text-white rounded-full border-gray-200 flex items-center justify-center">
              {secend_button}
            </div>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
