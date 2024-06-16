import React, { useState } from "react";
import { Core } from "..";
import {
  EquifaxCreditReports,
  ExperianCreditReports,
  TransUnionCreditReports,
  TransunionReportDetails,
} from "../../data";
import { Aside, Container, ContentMainBox } from "../core";

function CreditReports({ data }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    < >
      {/* <Core.Card cardNumber={3} data={dashboardCard} /> */}
      {/* <StatsGroup data={dashboardStats} /> */}

      <ul className="inline-flex gap-3 text-gray-500 bg-whit e bg-gray-200 bg-opacity-40 rounded-full p-[5px] mb-6">
        <li className="-mb-px">
          <a
            href="#_"
            className={`inline-block px-10 py-2.5 text-[17px] leading-[22px] uppercase rounded-full ${
              activeTab === "tab1"
                ? "text-white bg-green font-bold"
                : "font-semibold"
            }`}
            onClick={() => handleTabChange("tab1")}
          >
            TransUnion
          </a>
        </li>
        <li className="-mb-px">
          <a
            href="#_"
            className={`inline-block px-10 py-2.5 text-[17px] leading-[22px] uppercase rounded-full ${
              activeTab === "tab2"
                ? "text-white bg-green font-bold"
                : "font-semibold"
            }`}
            onClick={() => handleTabChange("tab2")}
          >
            Equifax
          </a>
        </li>
        <li className="-mb-px">
          <a
            href="#_"
            className={`inline-block px-10 py-2.5 text-[17px] leading-[22px] uppercase rounded-full ${
              activeTab === "tab3"
                ? "text-white bg-green font-bold"
                : "font-semibold"
            }`}
            onClick={() => handleTabChange("tab3")}
          >
            Experian
          </a>
        </li>
      </ul>

      {/* TransUnion Credit Report */}
      <div
        className={`w-full flex gap-x-[20px] ${
          activeTab === "tab1" ? "block" : "hidden"
        }`}
      >
        <ContentMainBox>
          <h1 className="text-[#000] text-[28px] font-[400] pl-4 mb-2">
            TransUnion Credit Report
          </h1>
          <div className="flex flex-col gap-y-5">
            <Core.Card
              cardNumber={7}
              data={TransUnionCreditReports.creditReport}
            />
            <Core.Card
              cardNumber={8}
              data={TransUnionCreditReports.personalInformation}
            />
          </div>
        </ContentMainBox>
        <Aside>
              <Core.Card cardNumber={14}></Core.Card>
        </Aside>
      </div>

      {/* Equifax Credit Report */}
      <div
        className={`w-full flex gap-x-[20px] ${
          activeTab === "tab2" ? "block" : "hidden"
        }`}
      >
        <ContentMainBox>
          <h1 className="text-[#000] text-[28px] font-[400] pl-4 mb-2">
            Equifax Credit Report
          </h1>
          <div className="flex flex-col gap-y-5">
            <Core.Card
              cardNumber={7}
              data={EquifaxCreditReports.creditReport}
            />
            <Core.Card
              cardNumber={8}
              data={EquifaxCreditReports.personalInformation}
            />
          </div>
        </ContentMainBox>
        <Aside>
              <Core.Card cardNumber={14}></Core.Card>
        </Aside>
      </div>

      {/* Experian Credit Report */}
      <div
        className={`w-full flex gap-x-[20px] ${
          activeTab === "tab3" ? "block" : "hidden"
        }`}
      >
        <ContentMainBox>
          <h1 className="text-[#000] text-[28px] font-[400] pl-4 mb-2">
            Experian Credit Report
          </h1>
          <div className="flex flex-col gap-y-5">
            <Core.Card
              cardNumber={7}
              data={ExperianCreditReports.creditReport}
            />
            <Core.Card
              cardNumber={8}
              data={ExperianCreditReports.personalInformation}
            />
          </div>
        </ContentMainBox>
        <Aside>
              <Core.Card cardNumber={14}></Core.Card>
        </Aside>
      </div>
    </>
  );
}

export default CreditReports;
