import { ReactNode } from "react"
import { MdFileComponent } from "../componentes/documentation/MdFileComponent"
import { ToggleNestedList } from "../componentes/infoDisplay/general/ToggleNestedList"
import '../style/documentation-page.css'
import '../buttons/css/titles.css'
import { NestedList } from "../componentes/infoDisplay/general/NestedList"

//TOOD: move to configuration and init with configuration loader
const itemsMapping: Map<string, ReactNode[]> = new Map(
    [
        [
            "alonst", [
                <div>
                    alonst1
                </div>,
                <div>
                    alonst2
                </div>,
                <div>
                    alonst3
                </div>,
                <div>
                    alonst4
                </div>

            ]
        ]
    ]
)

interface DocumentationPageProps {
    name: string
}

//TODO: add param for file name (because it can be different from name)
export const DocumentationPage = ({ name }: DocumentationPageProps) => {
    return <div className="documentation-page">
        <div className="documentation-page-header">
        </div>
        <div className="documentation-page-body">
            <div className="documentation-navigation">
                <NestedList title="general" items={[<ToggleNestedList items={itemsMapping.get(name) || []} title={name} />]}>
                </NestedList>
            </div>
            <div className="documentation-content">
                <MdFileComponent fileName={name} />
            </div>
        </div>
    </div>
}