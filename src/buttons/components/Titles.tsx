import _ from 'lodash';
import './Title'
import { Title } from './Title';
import { useState } from 'react'
import InfoLine from './InfoLine';
import { TitleType } from '../models/TitleType';
import { useAutoAnimate } from '@formkit/auto-animate/react';

interface GenerateTopViewButtonsProps {
    titles: TitleType[];
}

export const GenerateTopViewButtons = ({ titles }: GenerateTopViewButtonsProps) => {
    const [activeTitle, setActiveTitle] = useState<string | null>(null);
    const [animationParent] = useAutoAnimate();
    
    return <div ref={animationParent} className='info-wrap' onMouseLeave={() => setActiveTitle(null)}>
        <div className='titles'>
            {
                _.map(titles, (title: TitleType) => <Title key={title.name} title={title} onMouseEnter={() => setActiveTitle(title.name)} />)
            }
        </div>
        {
            activeTitle && <InfoLine name={activeTitle} />
        }
    </div>
}