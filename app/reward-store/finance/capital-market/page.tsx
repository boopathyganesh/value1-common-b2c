import CountdownTimer from "@/components/Timer/CountdownTimer";
import CustomCard from "@/components/ui/CustomCard";
import { data } from "@/context/data";

export default function CapitalMarket() {
	return (
		<CountdownTimer endDate="21-08-2024" />
		// <main className="flex flex-col text-gold-500 items-center justify-center gap-5">
		// 	<div className='relative max-w-6xl w-full flex items-center justify-center mt-5 rounded-2xl bg-gold-200/70 overflow-hidden'>
		// 		<div className='w-full h-[300px] flex items-center justify-end bg-[url("/images/Asset-28.png")] bg-contain bg-left-bottom bg-no-repeat'>
		// 			<div className='px-10 max-w-xl w-full flex flex-col items-center justify-center gap-4'>
		// 				<h1 className="text-right text-4xl font-semibold text-white">Check out these Awesome Deals Online</h1>
		// 				<button className='border-2 border-gold-500 rounded-xl px-5 py-3 text-white text-xl font-medium'>Join Now</button>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='flex flex-wrap items-start justify-center gap-5 py-4'>
		// 		{data.map((card, index) => (
		// 			<CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
		// 		))}
		// 		{data.map((card, index) => (
		// 			<CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
		// 		))}
		// 		{data.map((card, index) => (
		// 			<CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
		// 		))}
		// 	</div>
		// </main>
	);
}
