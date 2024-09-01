"use client"
import Footer from "@/components/Footer";
import MobileMenu from "@/components/mobile-menu";
import Sidebar from "@/components/sidebar";
import AppNavbar from "@/components/ui/navbar";
import useMediaQuery from "@/hooks/useMediaQuery";
import menu from "@/lib/menu";

export default function RewardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isDesktop = useMediaQuery('lg')
    return (
        <div className="max-w-full h-screen flex items-center justify-center md:px-5 bg-light_bg">
            {isDesktop ? (
                <div className="h-screen flex items-center mr-2">
                    <Sidebar menu={menu} />
                </div>
            ) : (
                <MobileMenu />
            )}

            {/* <MobileMenu /> */}

            <div className="hidden lg:flex h-full border-r-2 border-separate border-light_solid border-dashed"></div>
            <div className="pt-5 flex flex-col items-center justify-between w-full text-secondary rounded-2xl h-screen overflow-y-scroll no-scroll">
                <AppNavbar />
                {children}
                <Footer />
            </div>
        </div>
    );
}