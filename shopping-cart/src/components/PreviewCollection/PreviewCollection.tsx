import React from "react";
import { Item, CollectionItem } from "../CollectionItem/CollectionItem";

interface Props {
  title: string;
  items: Item[];
}

export const PreviewCollection: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
