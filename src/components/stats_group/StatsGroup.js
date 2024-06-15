import React, { useState } from 'react'; 
import { Core } from '..';

function StatsGroup({ data }) {
    return (
        <div className='flex flex-col gap-y-4 mt-4'>
            {data?.map(value => {
                return (
                    <Core.Card key={value.id} cardNumber={4} data={value} />
                )
            })}
        </div>
    );
}

export default StatsGroup;
