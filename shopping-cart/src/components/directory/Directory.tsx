import * as React from "react";
import { sections } from "./directory.data";
import MenuItem from "../MenuItem";

interface Props {}

const Directory: React.FC<Props> = (props) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
