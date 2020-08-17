import React from "react";

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface Props {
  title: string;
  items: Item[];
}

export const PreviewCollection: React.FC<Props> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="previdw">
        {items.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
