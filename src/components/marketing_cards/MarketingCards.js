import React, { useState } from "react";
import { Core } from "..";

function MarketingCards({ data }) { 
  return (
    <div className="flex flex-col gap-y-4 mt-4">
      <div className="flex flex-col gap-y-4">
        {data?.map((value) => (
          <Core.Card key={value.id} cardNumber={12} data={value} />
        ))}
      </div>
    </div>
  );
}

export default MarketingCards;
