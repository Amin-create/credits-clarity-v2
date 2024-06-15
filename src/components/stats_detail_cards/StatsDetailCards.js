import React from 'react';
import { Core } from '..';

function StatsDetailCards({ data }) { 
    return (
        <div className='flex gap-x-4'>
            <Core.Card cardNumber={5} data={data.creditScore} />
            <Core.Card cardNumber={6} data={data.creditFactors} />
        </div>
    );
}

export default StatsDetailCards;
