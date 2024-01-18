import Link from "next/link";
import landing from '../assets/images/landing.svg'
import Image from "next/image";
import Logo from "@/components/Logo";
const Landing = () => {
  return (
    <>
      <main className=" h-[100vh]  p-6 flex flex-col md:ml-10 ">
        <Logo wrapperClass='flex items-start ' classNames='w-fit h-10 rounded object-contain' />
        <div className=" mt-44  md:mt-24 flex flex-col items-center md:flex-row md:justify-evenly md:items-start ">
          <div className=" md:w-2/6 md:mt-20">
            <p className=" text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              odio laudantium eos a, cupiditate repellat nam velit suscipit eius
              facere quidem nulla veritatis magni iusto numquam aliquid
              accusantium aut veniam atque. Dolore, sed quo! Expedita
              perferendis
            </p>
            <Link href="/login">
              <button className="border text-sm border-[--primary-dark-blue1] px-2 py-1 b  rounded-md bg-white text-[--primary-dark-blue1]  mt-10 hover:text-white hover:bg-[--primary-dark-blue1] transition-all duration-200 ease-in ">
                {/* Login / Register */}
                Proceed to Login
              </button>
            </Link>
          </div>
          <div className="">
            <Image src={landing} alt="" className="hidden md:block h-[25rem]" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Landing