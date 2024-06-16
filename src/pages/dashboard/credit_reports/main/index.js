import React, { useState } from "react";
import { Core } from "../../../../components";
import CreditReports from "../../../../components/credit_reports/CreditReports";
import { Container } from "../../../../components/core";

function MainCreditReports() {
  const breadcrumb = [
    { label: "Credit Reports", link: "/dashboard/credit-reports" },
    { label: "TransUnion" },
  ];

  return (
    <Container className={`py-[50px]`}>
      <Core.Breadcrumb heading="Credit Reports" breadcrumb={breadcrumb} />
      <CreditReports />
    </Container>
  );
}

export default MainCreditReports;
