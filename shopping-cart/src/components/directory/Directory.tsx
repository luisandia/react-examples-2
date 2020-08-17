import * as React from "react";
import { sections } from "./directory.data";
import MenuItem from "../MenuItem";

interface Props {}

const Directory: React.FC<Props> = (props) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

export default Directory;
