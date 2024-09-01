
interface VideoBlockProps {
    embedId: string;
    description: string;
    className: string;
}

const VideoBlock = ({ embedId,description,className }: VideoBlockProps) => {
    return (
        <div className="mb-10 border-2 border-gold-500 rounded-2xl overflow-hidden">
            <iframe
                className={className}
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="YouTube Video Player"
                loading="lazy"
            />
            <div className='text-gold-500 text-lg font-medium max-w-80 mx-auto text-center'><p>{description}</p></div>
        </div>
    )
}

export default VideoBlock
