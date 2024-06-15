import React, { useState } from 'react';
import { Core } from '../../../../components';
import CreditReports from '../../../../components/credit_reports/CreditReports';

function MainCreditReports() {

    const breadcrumb = [
        { label: "Credit Reports", link: "/dashboard/credit-reports" },
        { label: "TransUnion" },
    ];

    return (
        <>
            <Core.Breadcrumb
                heading="Credit Reports"
                breadcrumb={breadcrumb}
            />
            <CreditReports />
        </>
    );
}

export default MainCreditReports;
