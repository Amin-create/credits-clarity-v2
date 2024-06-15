import React from 'react'
import { Core } from '..';

function BankReportDetails({ data }) {

    return (
        <section>
            <div className='flex gap-x-5'>
                <div className='   w-[50%]'>
                    <Core.Card cardNumber={9} data={data?.bank} />
                </div>
                <div className='flex flex-col gap-y-3 w-[50%]'>
                    <Core.Card cardNumber={10} data={data?.accountInformation1} />
                    <Core.Card cardNumber={10} data={data?.accountInformation2} />
                    <Core.Card cardNumber={10} data={data?.contactInformation} />
                </div>
            </div>
        </section>
    )
}

export default BankReportDetails