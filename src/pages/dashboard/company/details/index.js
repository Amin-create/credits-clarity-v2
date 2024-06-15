import React from 'react'
import { useParams } from 'react-router-dom';
import { Card } from '../../../../components/core'
import { TransUnionCreditScoreAndFactors, dashboardCard } from '../../../../data'
import StatsDetailCards from '../../../../components/stats_detail_cards/StatsDetailCards'
import { Core } from '../../../../components';

function CompanyDetails() {
    let { companyName } = useParams();
    let _companyName = "";
    switch (companyName) {
        case "transunion":
            _companyName = "TransUnion";
            break;
        case "equifax":
            _companyName = "Equifax";
            break;
        case "experian":
            _companyName = "Experian";
            break;
        default:
            break;
    }

    const breadcrumb = [
        { label: "Home", link: "/dashboard" },
        { label: _companyName },
        { label: "Details" },
    ];
    // const statsDetails = {
    //     creditScore: [],
    //     creditFactors: {
    //         title: "Credit Factors",
    //         description: "Dig into your credit card and payment history to improve those factors more efficiently",
    //         factors: [
    //             {
    //                 title: "Payment History",
    //                 status: "Excellent  |  High Impact",
    //                 value: "50%",
    //             },
    //             {
    //                 title: "Credit Card Use",
    //                 status: "Good  |  Low Impact",
    //                 value: "100%",
    //             },
    //             {
    //                 title: "Derogatory Marks",
    //                 status: "Very Good  |  Medium Impact",
    //                 value: "0%",
    //             },
    //             {
    //                 title: "Credit Age",
    //                 status: "Excellent  |  Medium Impact",
    //                 value: "17",
    //             },
    //             {
    //                 title: "Total Accounts",
    //                 status: "Very Good  |  Medium Impact",
    //                 value: "15 years",
    //             },
    //             {
    //                 title: "Head Inquiries",
    //                 status: "Very Good  |  Medium Impact",
    //                 value: "15 years",
    //             }
    //         ]
    //     },
    // }
    return (
        <>
            <Core.Breadcrumb
                heading="Credit Clarity"
                breadcrumb={breadcrumb}
            />
            <StatsDetailCards data={TransUnionCreditScoreAndFactors} />
        </>
    )
}

export default CompanyDetails