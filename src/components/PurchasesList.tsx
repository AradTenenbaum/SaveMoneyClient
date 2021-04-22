import React from "react";
import moment from "moment";

import { PurchasesType } from "../types/basicTypes";

function PurchasesList({ purchases }: { purchases: PurchasesType[] }) {
  return (
    <div style={{ margin: "auto", width: "95%", justifyContent: "center" }}>
      {purchases.map((purchase) => (
        <div
          key={purchase._id}
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "700px",
            margin: "auto",
            marginBottom: "15px"
          }}
        >
          <div style={{ color: "black", padding: "15px", minWidth: "100px" }}>{purchase.name}</div>
          <div style={{ color: "grey", padding: "15px" }}>{purchase.date ? moment(purchase.date).fromNow() : ""}</div>
          <div
            style={{
              color: "white",
              padding: "15px",
              minWidth: "90px",
              backgroundColor: "rgb(33, 199, 42)",
              borderRadius: "0px 5px 5px 0px",
              overflow: "auto"
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
