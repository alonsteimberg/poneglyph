import { Route, Routes } from 'react-router-dom';
import { TitleType } from './buttons/models/TitleType';
import _ from 'lodash';
import './buttons/css/titles.css'
import { HomePage } from './pages/HomePage';
import { DocumentationPage } from './pages/DocumentationPage';
import './style/nested-list.css'

//TODO: find way to union all css files instead of importing each independently

const titelsParam: TitleType[] = [{ name: "alonst" }, { name: "nona" }, { name: "random" }];

function App() {
  return <Routes>
    <Route path="/" element={<HomePage/>} />
    {
      _.map(titelsParam, (title: TitleType) => <Route path={"/" + title.name} element={<DocumentationPage name={title.name} />} />)
    }
  </Routes>

}

export default App;