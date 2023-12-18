import Me from "../Img/WhatsApp Image 2023-03-16 at 18.14.40.jpg";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="grid gap-[600px] grid-cols-2">
      <div className=" text-white py-4 flex px-10">
        <img className="rounded-3xl h-10" src={Me}></img>
        <h1 className="pt-2 pl-2">Ashutosh Thummar </h1>
      </div>
      <div className="">
        <div className="text-white py-6  ">
          <ul className="flex gap-4 cursor-pointer  ">
            <Link to="/Mining">
              <li>Mining</li>
            </Link>
            <Link to="/Games">
              <li>Games</li>
            </Link>
            <Link to="/Blogs">
              <li>Blogs</li>
            </Link>
            <Link to="/Donation">
              <li>Donation</li>
            </Link>
            <Link to="/Music">
              <li>Music</li>
            </Link>
            <Link to="/Nft">
              <li>Nft</li>
            </Link>
            <Link to="/Login" className="border rounded-xl px-2 hover:bg-white hover:text-black">
              <button>Logout</button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
