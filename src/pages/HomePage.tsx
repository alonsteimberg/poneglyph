import { GenerateTopViewButtons } from "../buttons/components/Titles"
import { TitleType } from "../buttons/models/TitleType";
import { InfoCard } from "../componentes/infoDisplay/cards/InfoCard"
import { HorizontalScroller } from "../componentes/infoDisplay/navigation/HorizontalNavigationBar";
import { Direction, ScrollDirection } from "../componentes/infoDisplay/navigation/Directions";

const titelsParam: TitleType[] = [{ name: "alonst" }, { name: "nona" }, { name: "random" }];

const cards: InfoCard[] = [<InfoCard title='captain america' imageRef='src/images/captain-america.jpg' content={"that boy did some good shit"} />,
<InfoCard title='luffy' imageRef='src/images/luffy.jpg' content={"the man that will become the king of the pirates"} />,
<InfoCard title='mile morales' imageRef='src/images/miles-morales.jpg' content={"the man under the mask"} />,
<InfoCard title='hulk' imageRef='src/images/hulk.jpg' content={"the green hulk"} />,
<InfoCard title='captain america' imageRef='src/images/captain-america.jpg' content={"that boy did some good shit"} />,
<InfoCard title='luffy' imageRef='src/images/luffy.jpg' content={"the man that will become the king of the pirates"} />,
<InfoCard title='mile morales' imageRef='src/images/miles-morales.jpg' content={"the man under the mask"} />,
<InfoCard title='hulk' imageRef='src/images/hulk.jpg' content={"the green hulk"} />,
<InfoCard title='captain america' imageRef='src/images/captain-america.jpg' content={"that boy did some good shit"} />,
<InfoCard title='luffy' imageRef='src/images/luffy.jpg' content={"the man that will become the king of the pirates"} />,
<InfoCard title='mile morales' imageRef='src/images/miles-morales.jpg' content={"the man under the mask"} />,
<InfoCard title='hulk' imageRef='src/images/hulk.jpg' content={"the green hulk"} />,
<InfoCard title='luffy' imageRef='src/images/luffy.jpg' content={"the man that will become the king of the pirates"} />
]

export const HomePage = () => {
    //TODO: move info-cards to another component
    return <div className="home-page">
        <div className="background"></div>
        <GenerateTopViewButtons titles={titelsParam} />
        <HorizontalScroller items={cards} scrollSpeed={270} direction={Direction.horizontal} scrollDirection={ScrollDirection.ltr} />
    </div>
}
