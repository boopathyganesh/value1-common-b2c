'use client'
import { brand } from "@/context/data"
import DealsCard from "@/components/ui/DealsCard";
import DealsCategory from "@/components/DealsCategory";
import { useSelector } from "react-redux";
import { selectSelectedBadge } from '@/store/selectors/selectedBadgeSelector';
import { useINRDeals } from "@/context/INRDealsContext";




export default function TopStores() {
	const { merchants, loading, error, refetch } = useINRDeals();
	const selectedBadge = useSelector(selectSelectedBadge);

	if (loading) return <p>Loading merchants...</p>;
    if (error) return <p>Error: {error}</p>;

	if (!selectedBadge) {
		return <main>Error in Fetching Deal Categories</main>
	}
	const filteredCards = merchants?.filter((card) => card.category === selectedBadge);
	return (
		<main className="flex flex-col text-solid items-center justify-center gap-5 mt-2 w-full px-5">
			<div className='relative max-w-7xl w-full flex items-center justify-center mt-5 rounded-2xl bg-primary overflow-hidden'> {/*max-w-6xl*/}
				<div className='w-full h-52 flex items-center justify-end bg-[url("/images/Asset-28.png")] bg-contain bg-left-bottom bg-no-repeat'>
					<div className='px-10 max-w-lg w-full flex flex-col items-center justify-center gap-4'>
						<h1 className="text-right text-3xl font-semibold text-secondary">Check out these Awesome Deals Online</h1>
						<button className='border-2 border-solid rounded-xl p-3 text-secondary text-base font-medium'>Join Now</button>
					</div>
				</div>
			</div>

			<DealsCategory />

			<div className='flex flex-wrap items-start justify-center gap-2 max-w-6xl w-full'>
				<div className="w-full pl-10">
					<h2 className="text-2xl font-semibold">{selectedBadge}</h2>
				</div>
				<div className="flex flex-wrap items-start justify-center w-full gap-5 py-4">
					{filteredCards && filteredCards.length > 0 ? (
						merchants && merchants
							.filter((store) => store.category === selectedBadge)
							.map((store, index) => (
								<DealsCard key={index} id={store.id.toString()} title={store.merchant} content={store.payout} image={store.logo} />
							))
					) : (
						<div>No deals Found</div>
					)}
				</div>
			</div>
		</main>
	);
}