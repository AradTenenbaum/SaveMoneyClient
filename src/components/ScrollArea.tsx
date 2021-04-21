import React from "react";

import '../css/ScrollArea.css';
import { PurchasesType } from "../types/basicTypes";
import PurchasesList from "./PurchasesList";

function ScrollArea({purchases}: {purchases: PurchasesType[]}) {
  return (
    <div className="scroll">
      <PurchasesList purchases={purchases}/>
    </div>
  );
}

export default ScrollArea;
