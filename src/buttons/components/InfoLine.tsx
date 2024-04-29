import { TitleType } from "../models/TitleType";

// should have 2 mods, primary/secondary 
// primary will always be at the left of the screen
// each 'info-field' can be primary or secondary too 
// each 'info-field' type will be the determinate by its parent info-line 
// atm primary fields are bigger and thicker

export const InfoLine = ({name}: TitleType) => {
  //TODO: wrap each with a (for hyper-link) 
  // should create a template for page - each one should still keep the main toolbar
  // should load the page content from configuation 
  // page should be the main page to get knowlage about the field(or at least the links to the relevant place) 
  // should also have place to keep the latest changes/features of the field 
  return ( 
    <div className="info-line">
      <ul>
          <li className="info-title">{name}</li>
          <li className="info-field">{name}1</li>
          <li className="info-field">{name}2</li>
      </ul>
    </div>
  );
};

export default InfoLine;