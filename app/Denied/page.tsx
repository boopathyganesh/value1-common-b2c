
import Image from "next/image";
import NextLogo from "@/public/next.svg" 

export default function Denied() {
  return (
    <section className="max-w-3xl mx-auto h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Image src={NextLogo} alt="Next Logo" className=" pointer-events-none"/>
        <div className="pt-10 text-center flex flex-col justify-center gap-3">
          <div className="text-7xl">Sorry!</div>
          <div className="text-5xl text-red-500">Access Denied</div>
          <p>Access only for Admin Accounts</p>
        </div>
      </div>
    </section>
  );
}
