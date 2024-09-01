import CountdownTimer from "@/components/Timer/CountdownTimer";
import VLabCard from "@/components/ui/VLabCard";
import { labs } from "@/context/data";

export default function ValueBrands() {
	return (
		<CountdownTimer endDate="21-08-2024" />
		// <main className="flex flex-col text-secondary items-center justify-center gap-5">
		// 	<div className='relative max-w-6xl w-full flex items-center justify-center mt-5 rounded-2xl bg-dark_bg/10 overflow-hidden'>
		// 		<div className='w-full h-[300px] flex items-center justify-end bg-[url("/images/Asset-28.png")] bg-contain bg-left-bottom bg-no-repeat'>
		// 			<div className='px-10 max-w-xl w-full flex flex-col items-center justify-center gap-4'>
		// 				<h1 className="text-center text-4xl font-semibold">Welcome to Value1 Labs</h1>
		// 				<h1 className="text-center text-2xl font-semibold">Join Us and Build your future with Value1 Labs</h1>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='flex flex-wrap items-start justify-center gap-5 py-4'>
		// 		{labs.map((card, index) => (
		// 			<VLabCard key={index} title={card.title} image={card.imageUrl} />
		// 		))}
		// 	</div>
		// </main>
	);
}
