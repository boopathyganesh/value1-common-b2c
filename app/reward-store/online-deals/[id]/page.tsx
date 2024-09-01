'use client'
import { brand } from "@/context/data"
import DealsCard from "@/components/ui/DealsCard";
import DealsCategory from "@/components/DealsCategory";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedBadge } from '@/store/selectors/selectedBadgeSelector';
import StoreDetail from "@/components/DashboardComponents/StoreDetail";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { setActiveLink } from "@/store/slices/activeLinkSlice";
import { useINRDeals } from "@/context/INRDealsContext";

export default function Store({ params }: { params: { id: string } }) {
	const { merchants, loading, error } = useINRDeals();
	const pathname = usePathname();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setActiveLink(pathname));
	})

	if (loading) return <p>Loading Stores...</p>;
    if (error) return <p>Error: {error}</p>;

	const filteredStore = merchants?.find((card) => card.id === parseInt(params.id));
	return (
		<main className="flex flex-col text-solid items-center justify-center gap-5 mt-2 w-full">
			<div className='flex flex-wrap items-start justify-center gap-2 max-w-7xl w-full'>
				<div className="w-full pl-10">
					<h2 className="text-2xl font-semibold">{filteredStore?.merchant}</h2>
				</div>
				<div className="w-full pl-10">
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="">Online Deals</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{filteredStore?.merchant}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
				<div className="flex flex-wrap items-start justify-center w-full">
					{filteredStore !== undefined ? (
						<StoreDetail key={filteredStore.id} id={filteredStore.id.toString()} title={filteredStore.merchant} content={filteredStore.payout} image={filteredStore.logo}  description={filteredStore.description} conversion_flow={filteredStore.conversion_flow} trackingUrl={filteredStore.url}  /> //category={filteredStore.category}
					) : (
						<div>No deals Found</div>
					)}
				</div>
			</div>
		</main>
	);
}