import React from 'react';
import DOMPurify from 'dompurify';

interface HtmlContentProps {
    htmlString: string;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ htmlString }) => {
    //const sanitizedHtml = DOMPurify.sanitize(htmlString); // Sanitize to prevent XSS attacks
    //console.log("after sanity::::::::", sanitizedHtml)
    let html = "'" + htmlString + "'"
    return (
        <div
            
            className="prose prose-headings:text-xl prose-headings:font-semibold prose-headings:text-primary  bg-dark_bg/10 rounded w-full p-2"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default HtmlContent;
