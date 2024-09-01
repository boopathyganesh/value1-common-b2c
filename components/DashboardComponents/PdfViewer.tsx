import React from 'react'

interface PDFProps{
    link:string;
}

const PdfViewer = ({link}:PDFProps) => {
  return (
    <div className='w-full h-full'>
      <iframe src={link} className='w-full h-full' loading='lazy' allowFullScreen ></iframe>
    </div>
  )
}

export default PdfViewer
