import Image from "next/image";

interface IECFeatureCardProps {
    image: string;
    title: string;
    content: string;
}

const IECFeatureCard = ({ title, content, image }: IECFeatureCardProps) => {
    return (
        <div className='bg-dark_bg/5 flex items-center justify-start gap-4 p-2 w-64 rounded-xl'>
            <span className='w-8 h-8'>
                <Image src={image} alt={''} height={100} width={100} />
            </span>
            <div className='flex flex-col items-start justify-center'>
                <h1 className='text-secondary font-medium'>{title}</h1>
                <p className='text-secondary/50 font-normal'>{content}</p>
            </div>
        </div>
    )
}

export default IECFeatureCard;