import React, { useState } from "react";
import { Core } from "..";

function ScoreCards({ data }) {
    console.log('qqqdata',data[0])
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4">
        {data?.map((value) => (
          <Core.Card key={value.id} cardNumber={11} data={value} />
        ))}
      </div>
    </div>
  );
}

export default ScoreCards;
