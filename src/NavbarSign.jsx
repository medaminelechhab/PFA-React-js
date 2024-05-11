import upwork from "./assets/SVG/upwork.svg";
export default function NavbarSign() {
  return (
    <div className=" h-14 border-b-2">
      <div className="px-6 pt-3 ">
        <img src={upwork} alt="" className="h-7 w-20" />
      </div>
      <div></div>
    </div>
  );
}
