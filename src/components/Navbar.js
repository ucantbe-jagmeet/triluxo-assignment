import { FaBars, FaUserCircle } from "react-icons/fa";
import Logo from "../assets/images/main-logo-dk.png";
import Navlinks from "./NavLinks";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-20 bg-[--main-logo-color]  justify-between px-7 items-center flex ">
            <div className="lg:hidden cursor-pointer">
                <FaBars className="text-[--primary-dark-blue1] text-xl md:text-3xl hover:rotate-[90deg] transition-all duration-300" />
            </div>
            <Image alt="Logo" src={Logo} className="h-10 w-fit cursor-pointer" />
            <Navlinks />
            <div className="px-3 border bg-white rounded-md py-1 border-none lg:ml-7 text-[--main-logo-color] cursor-pointer flex justify-evenly items-center  font-semibold">
                <FaUserCircle className="md:text-xl" />
                <div className="ml-2 md:text-lg lg:text-md">User</div>
            </div>
        </div>
    );
};

export default Navbar;