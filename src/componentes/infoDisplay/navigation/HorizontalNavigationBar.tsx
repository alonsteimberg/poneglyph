import { ReactNode, useState } from "react";
import { Direction, ScrollDirection } from "./Directions";

interface HorizontalScrollerProps {
    items: ReactNode[];
    scrollSpeed: number;
    direction: Direction;
    scrollDirection: ScrollDirection
}

export const HorizontalScroller = ({ items, scrollSpeed, direction, scrollDirection }: HorizontalScrollerProps) => {
    const [index, setIndex] = useState<number>(0);

    const rotationDegrees: number = direction == Direction.horizontal ? 0 : 90;
    const pixlesOffset: number = scrollSpeed * index * (scrollDirection == ScrollDirection.ltr ? -1 : 1);

    const itemsStyle: React.CSSProperties = direction == Direction.horizontal ?
        { left: `${pixlesOffset}px` } :
        { top: `${pixlesOffset}px` }

    const arrowsStyle: React.CSSProperties = { transform: `rotate(${rotationDegrees}deg)` }

    return <div className="horizontal-navigation-bar">
        <div className="horizontal-navigation-bar-items" style={itemsStyle}>
            {
                items
            }
        </div>
        <div className="horizontal-navigation-bar-buttons">
            <button
                className="horizontal-navigation-bar-button"
                id="left"
                disabled={scrollDirection == ScrollDirection.ltr ? index <= 0 : index >= items.length}
                onClick={() => scrollDirection == ScrollDirection.ltr ? setIndex(index - 1) : setIndex(index + 1)}
                style={arrowsStyle}>
                {"<"}
            </button>
            <button
                className="horizontal-navigation-bar-button"
                id="right"
                disabled={scrollDirection == ScrollDirection.ltr ? index >= items.length : index <= 0}
                onClick={() => scrollDirection == ScrollDirection.ltr ? setIndex(index + 1) : setIndex(index - 1)}
                style={arrowsStyle}>
                {">"}
            </button>
        </div>
    </div>
}