"use client"
import CoOwnJourney from "@/components/DashboardComponents/CoOwnJourney";
import History from "@/components/DashboardComponents/History";
import Evaluation from "@/components/DashboardComponents/Evaluvation";
import GoldReward from "@/components/DashboardComponents/GoldReward"
import Membership from "@/components/DashboardComponents/Membership";
import ValueCoins from "@/components/DashboardComponents/ValueCoins";
import Tracking from "@/components/DashboardComponents/Tracking";
import ThoughtShared from "@/components/DashboardComponents/ThoughtShared";
import GrantLetterViewer from "@/components/DashboardComponents/GrantLetterViewer";
import { useSession } from "next-auth/react";
import { handleSignOut } from '@/app/auth/signout';

export default function Home() {

	const { data: session } = useSession()

	const userStatus = session?.user?.profileData?.Status
	//console.log("User Data:::::::::", userStatus)

	return (
		<main className="relative flex flex-col items-center justify-center text-secondary w-full">
			{userStatus === "Pending" && (
				<div className="absolute top-0 flex flex-col items-center justify-start pt-96 w-full h-full z-50 backdrop-blur-md">
					<h1 className="text-3xl font-medium text-black">Waiting For Admin&apos;s approval!</h1>
					<div className="flex flex-col items-center justify-center gap-5 my-5">
						<h4 className="text-2xl font-medium text-black">Logout & Try again!!!!!</h4>
						<button onClick={() => handleSignOut("/auth")} className="p-3 bg-black text-white font-medium w-mac rounded-2xl hover:scale-95">Logout</button>
					</div>
				</div>
			)}
			{userStatus === "Blocked" && (
				<div className="absolute top-0 flex flex-col items-center justify-start w-full h-full pt-96 z-50 backdrop-blur-md">
					<h1 className="text-3xl font-medium text-black">Your Account Access has been Blocked!</h1>
					<h4 className="text-2xl font-medium text-black">Contact Administrator</h4>
					<div className="flex flex-col items-center justify-center gap-5 my-5">
						<h4 className="text-2xl font-medium text-black">Logout & Try again!!!!!</h4>
						<button onClick={() => handleSignOut("/auth")} className="p-3 bg-black text-white font-medium w-mac rounded-2xl hover:scale-95">Logout</button>
					</div>
				</div>
			)}
			{userStatus === "Active" && (
				<>
					<div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full p-4 gap-5">
						<Membership />
						<GoldReward />
						<ValueCoins />
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-center w-full p-4 gap-5">
						<Evaluation />
						<CoOwnJourney />
						<ThoughtShared />
					</div>
					<div className="flex flex-col lg:flex-row items-center justify-center w-full p-4 gap-5">
						<History />
						<Tracking />
					</div>
				</>
			)}
		</main>
	);
}
