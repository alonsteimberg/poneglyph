import { ReactNode, useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import _ from 'lodash';

interface ToggleNestedListProps {
    items: ReactNode[] 
    title: string;
}

export const ToggleNestedList = ({ title, items }: ToggleNestedListProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [animationParent] = useAutoAnimate()

    return <div className="toggle-nested-list-wrap">
        <ul ref={animationParent} className="toggle-nested-list">
            <a
                className="toggle-nested-list-title"
                onClick={() => setIsOpen(!isOpen)}>
                {title}
                <img src="images/arrow.png" className={`toggle-icon ${isOpen ? "on" : "off"}`}/>
            </a>
            {
                isOpen && <ul className="toggle-nested-list-items">
                    {_.map(items, (item: ReactNode) => <li className="toggle-nested-list-item">{item}</li>)}
                </ul>
            }
        </ul >
    </div>
}