import React from "react";

import '../css/ScrollArea.css';
import { PurchasesType } from "../types/basicTypes";
import PurchasesList from "./PurchasesList";

function ScrollArea({purchases}: {purchases: PurchasesType[]}) {
  return (
    <div className="scroll" style={{height: window.innerHeight - 280 + "px"}}>
      <PurchasesList purchases={purchases}/>
    </div>
  );
}

export default ScrollArea;
