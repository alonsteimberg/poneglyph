import { TitleType } from '../models/TitleType';

interface TitleProps {
    title: TitleType;
    onMouseEnter: () => void;
}

export const Title = ({title, onMouseEnter}: TitleProps) => {
    const handleClick = (title: TitleType) => {
        //TODO : update to move to actual home page of the title  
        // should have homepage for each title 
        // each title homepage should contain broader explenations about the title like:
        //      - consumer statistics
        //      - major updates 
        //      - vision of the project 
        //      - upcoming features
        //      - some historical facts? 
        // and so on 
        console.log(title.name)
    }

    return <div
        className='title'>
        <a
            href={`/${title.name}`}
            className='title-btn'
            onMouseEnter={onMouseEnter}
            onClick={() => handleClick(title)}>
            {title.name}
        </a>
    </div>
}
