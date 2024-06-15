import React, { useState } from 'react';
import { Core } from '../../../../components';
import BankReportDetails from '../../../../components/bank_report_details/BankReportDetails';
import { useParams } from 'react-router-dom';
import { CapitalOneReportDetails, UsBancorpReportDetails, TransunionReportDetails }
    from '../../../../data';

function BankDetails() {
    let { companyName } = useParams();

    const breadcrumb = [
        { label: "Credit Reports", link: "/dashboard/credit-reports" },
        { label: "TransUnion" },
        { label: "Report Detail" },
    ];

    let _data;

    if (companyName === "bank-of-america") {
        _data = TransunionReportDetails;
    } else if (companyName === "capital-one") {
        _data = CapitalOneReportDetails;
    } else if (companyName === "us-bancorp") {
        _data = UsBancorpReportDetails;
    }

    return (
        <>
            <Core.Breadcrumb
                heading="Credit Reports"
                breadcrumb={breadcrumb}
            />
            <BankReportDetails data={_data} />
        </>
    );
}

export default BankDetails;
