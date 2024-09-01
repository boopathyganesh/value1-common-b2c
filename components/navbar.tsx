'use client'
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import MobileMenu from "./ui/mobile-menu";

const Brand = process.env.NEXT_PUBLIC_BRAND_LOGO || "/images/logo-big.png"



const NavbarCustom = () => {
	const path = usePathname();
	const router = useRouter()
	const {data:session } = useSession()
	const user = session?.user.Payload
	
	function handleLogin(){
		if(!user){
			signIn('credentials', { callbackUrl: '/reward-store' });
		}else{
			router.push("/reward-store")
		}
	}

	return (
		<nav className="flex items-center justify-between w-full h-28 py-5 px-5 md:px-20 bg-black text-white overflow-hidden">
			<div className="w-32 max-h-24 mx-5">
				<Image src={Brand} alt={""} height={500} width={500} className="w-full" />
			</div>
			<nav className="hidden md:flex items-center justify-center gap-5 ">
				<ul className="flex items-center justify-center gap-5">
					{siteConfig.navItems.map((item, index) => (
						<li className={`font-medium text-lg hover:scale-105 hover:text-gold-200 ${path === item.link ? "text-gold-200" : "text-white"}`} key={index}><Link href={item.link}>{item.name}</Link></li>
					))}
				</ul>
				<div className="flex items-center justify-center gap-5">
					<button onClick={handleLogin} className="font-medium px-5 py-3 bg-gold-200 rounded-2xl hover:scale-105 text-black hover:bg-gold-500 smooth">Login</button>
				</div>
			</nav>
			<MobileMenu />
		</nav>
	);
};

export default NavbarCustom;