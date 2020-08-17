import React, { ReactElement } from "react";
import { SHOP_DATA } from "./shop-data";
import { PreviewCollection } from "../../components/PreviewCollection/PreviewCollection";
import "./collection-preview.styles.scss";
interface Props {}

function ShopPage({}: Props): ReactElement {
  return (
    <div className="shop-page">
      {SHOP_DATA.map((shop) => (
        <PreviewCollection
          key={shop.id}
          title={shop.title}
          items={shop.items}
        />
      ))}
    </div>
  );
}

export default ShopPage;
