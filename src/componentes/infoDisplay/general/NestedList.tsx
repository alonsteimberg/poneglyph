import { ReactNode } from "react";
import _ from 'lodash';

interface NestedListProps {
    items: ReactNode[]
    title: string;
}

export const NestedList = ({ title, items}: NestedListProps) => {
    return <div className="nested-list">
        <ul className="nested-list-title">
            { title }
        </ul>
        {
            _.map(items, (item: ReactNode) => <li>{item}</li>)
        }
    </div>
}