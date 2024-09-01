import CountdownTimer from "@/components/Timer/CountdownTimer";
import CustomCard from "@/components/ui/CustomCard";
import ProfessionalCard from "@/components/ui/ProfessionalCard";
import VBrandCard from "@/components/ui/VBrandCard";
import { data, profData } from "@/context/data";

export default function Professionals() {
	return (
		<CountdownTimer endDate="21-08-2024" />
		// <main className="flex flex-col text-secondary items-center justify-center gap-5 mt-10">
		// 	<div className='relative max-w-6xl w-full flex items-center justify-center mt-5 rounded-2xl bg-dark_bg/10 overflow-hidden'>
		// 		<div className='w-full h-[300px] flex items-center justify-end bg-[url("/images/Asset-28.png")] bg-contain bg-left-bottom bg-no-repeat'>
		// 			<div className='px-10 max-w-xl w-full flex flex-col items-center justify-center gap-4'>
		// 				<h1 className="text-right text-4xl font-semibold text-secondary">Check out these Awesome Deals Online</h1>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<div className='flex flex-wrap items-start justify-center gap-5 py-4'>
		// 		<div className="flex flex-col items-start justify-center gap-5">
		// 			<h1 className=" font-medium text-2xl">Doctors</h1>
		// 			<div className="flex flex-wrap items-start justify-center gap-5 py-4">
		// 				{profData.map((card, index) => (
		// 					<ProfessionalCard key={index} id={card.id} title={card.title} image={card.imageUrl} />
		// 				))}
		// 			</div>
		// 		</div>
		// 		<div className="flex flex-col items-start justify-center gap-5">
		// 			<h1 className=" font-medium text-2xl">Lawyers</h1>
		// 			<div className="flex flex-wrap items-start justify-center gap-5 py-4">
		// 				{profData.map((card, index) => (
		// 					<ProfessionalCard key={index} id={card.id} title={card.title} image={card.imageUrl} />
		// 				))}
		// 			</div>
		// 		</div>
		// 		<div className="flex flex-col items-start justify-center gap-5">
		// 			<h1 className=" font-medium text-2xl">Teachers</h1>
		// 			<div className="flex flex-wrap items-start justify-center gap-5 py-4">
		// 				{profData.map((card, index) => (
		// 					<ProfessionalCard key={index} id={card.id} title={card.title} image={card.imageUrl} />
		// 				))}
		// 			</div>
		// 		</div>
		// 		<div className="flex flex-col items-start justify-center gap-5">
		// 			<h1 className=" font-medium text-2xl">Chartered Accountants</h1>
		// 			<div className="flex flex-wrap items-start justify-center gap-5 py-4">
		// 				{profData.map((card, index) => (
		// 					<ProfessionalCard key={index} id={card.id} title={card.title} image={card.imageUrl} />
		// 				))}
		// 			</div>
		// 		</div>
		// 	</div>
		// </main>
	);
}
