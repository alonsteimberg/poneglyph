import { React } from 'react'

interface InfoCardProps {
    title: string;
    imageRef: string;
    content: string | null;
}

export const InfoCard = ({ title, content, imageRef }: InfoCardProps) => {
    return <div className='info-card' id={title} style={{
        backgroundImage: `url(${imageRef})`
    }}>
        <div className='info-card-title'>
            {title}
        </div>
        <div className='info-card-content'>
            {content}
        </div>
    </div>
}  