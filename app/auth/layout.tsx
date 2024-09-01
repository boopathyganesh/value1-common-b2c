import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";


export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={clsx(
            "font-sans antialiased",
            fontSans.variable
        )}>
            <main className="flex-grow h-screen text-white bg-[url('/images/login_bg.png')] bg-cover bg-center bg-no-repeat">
                {children}
            </main>
        </div>
    );
}
