import React from "react";
import "./Images.css";
import UnorderedLists from "./UnorderedLists.jpg";
import OrderedLists from "./OrderedLists.jpg";
import DefinitionLists from "./DefinitionLists.jpg";
import Paragraphs from "./Paragraphs.jpg";
import Sections from "./Sections.jpg";
import Basic from "./Basic.jpg";
import Advanced from "./Advanced.jpg";
import Generic from "./Generic.jpg";
import Whitespace from "./Whitespace.jpg";
import Preformatted from "./Preformatted.jpg";
import BasicTables from "./BasicTables.jpg";
import Merging from "./Merging.jpg";
import AdvancedTable from "./AdvancedTable.jpg";
import BasicLinks from "./BasicLinks.png";
import struct from "./struct.png";

function Images({ file }) {
  let imageSrc;

  switch (file) {
    case 'UnorderedLists':
      imageSrc = UnorderedLists;
      break;
    case 'OrderedLists':
      imageSrc = OrderedLists;
      break;
    case 'DefinitionLists':
      imageSrc = DefinitionLists;
      break;
    case 'Paragraphs':
      imageSrc = Paragraphs;
      break;
    case 'Sections':
      imageSrc = Sections;
      break;
    case 'Basic':
      imageSrc = Basic;
      break;
    case 'Advanced':
      imageSrc = Advanced;
      break;
    case 'Generic':
      imageSrc = Generic;
      break;
    case 'Whitespace':
      imageSrc = Whitespace;
      break;
    case 'Preformatted':
      imageSrc = Preformatted;
      break;
    case 'BasicTables':
      imageSrc = BasicTables;
      break;
    case 'Merging':
      imageSrc = Merging;
      break;
    case 'AdvancedTable':
      imageSrc = AdvancedTable;
      break;
    case 'BasicLinks':
      imageSrc = BasicLinks;
      break;
    case 'struct':
      imageSrc = struct;
      break;
    default:
      imageSrc = null;
  }

  if (!imageSrc) {
    return null;
  }

  return (
    <div className="my-images">
      <img src={imageSrc} alt={file} />
    </div>
  );
}

export default Images;