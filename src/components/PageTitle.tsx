import React from "react";
import { Icon } from "semantic-ui-react";

function PageTitle({ set }: any) {
  return (
    <div>
      {set === "big" ? (
        <div>
          <Icon inverted name="money bill alternate outline" size="massive" />
          <h1
            style={{ fontWeight: "lighter", fontSize: "60px", color: "white", marginTop: "0px" }}
          >
            Save money
          </h1>
        </div>
      ) : (
        <div>
          <Icon inverted name="money bill alternate outline" size="huge" />
          <h3
            style={{ fontWeight: "lighter", fontSize: "20px", color: "white", marginTop: "10px" }}
          >
            Save money
          </h3>
        </div>
      )}
    </div>
  );
}

export default PageTitle;
