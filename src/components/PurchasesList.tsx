import React from "react";

import { PurchasesType } from "../types/basicTypes";

function PurchasesList({ purchases }: { purchases: PurchasesType[] }) {
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      {purchases.map((purchase) => (
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "600px",
            marginBottom: "15px"
          }}
        >
          <div style={{ color: "black", padding: "15px" }}>{purchase.name}</div>
          <div
            style={{
              color: "white",
              padding: "15px",
              backgroundColor: "rgb(33, 199, 42)",
              borderRadius: "0px 5px 5px 0px",
            }}
          >
            {purchase.price}₪
          </div>
        </div>
      ))}
    </div>
  );
}

export default PurchasesList;
