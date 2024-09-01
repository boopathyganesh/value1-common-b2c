import { formatCurrency } from "@/lib/utils";
import { FaCircleCheck } from "react-icons/fa6";

interface PlanCardProps {
    type: "monthly" | "yearly";
    promote: boolean;
    plan: string;
    price: {
        monthly:number,
        yearly:number
    };
    description: string;
    features: {
        icon: string;
        content: string;
    }[];
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, price, description, features, promote, type }) => {

    const isFree = type === "monthly" ? price.monthly <= 0 : price.yearly <= 0;
    const formattedPrice = isFree ? 'Free' : formatCurrency(type === "monthly" ? price.monthly : price.yearly);
    const priceSuffix = isFree ? '' : type === 'monthly' ? '/Month' : '/Year';

    let btnColor: string, iconColor: string, planColor: string, borderColor: string;

    if (plan === "Co-own") {
        btnColor = "bg-dark_bg/10 text-secondary";
        iconColor = "text-light_bg bg-dark_bg";
        planColor = "bg-light_bg/30 text-secondary border-dark_bg/25";
        borderColor = "border-light_bg/25";
    } else if (plan === "Co-own Pro") {
        btnColor = "bg-light_bg text-secondary";
        iconColor = "text-blue-500 bg-light_bg";
        planColor = "bg-blue-500/30 text-blue-500 border-blue-500/25";
        borderColor = "border-light_bg/25";
    } else {
        btnColor = "bg-primary text-secondary";
        iconColor = "text-primary bg-light_bg";
        planColor = "bg-primary text-secondary border-solid";
        borderColor = "border-solid";
    }

    return (
        <div className={`flex flex-col items-center justify-between gap-5 w-80 h-[550px] bg-secondary_bg text-secondary border rounded-2xl p-5 overflow-hidden ${borderColor} ${promote ? "scale-105 shadow-2xl" : "scale-100"}`}>
            <div className="w-full flex flex-col items-start justify-start gap-5">
                <span className={`px-2 py-1 rounded-3xl border text-sm font-medium ${planColor}`}>{plan}</span>
                <div className='flex flex-col items-start justify-center'>
                    <h1 className="text-base font-normal">
                        <span className="text-3xl font-semibold">{formattedPrice}</span> {priceSuffix}
                    </h1>
                    <p className='text-sm'>{description}</p>
                </div>
                <ul className="flex flex-col gap-2">
                    {features.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className={`p-2`}><FaCircleCheck className={`${iconColor} text-2xl h-5 w-5 rounded-full overflow-hidden`} /></span>
                            <span>{item.content}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <button className={`px-4 py-2 rounded-xl font-medium ${btnColor}`}>{plan === "Co-own" ? "Learn More" : "Book for Trial"}</button>
        </div>
    );
};

export default PlanCard;