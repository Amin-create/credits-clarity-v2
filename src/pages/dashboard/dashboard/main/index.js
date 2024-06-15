import React from "react";
import { dashboardCard, dashboardStats } from "../../../../data";
import StatsGroup from "../../../../components/stats_group/StatsGroup";
import { Core } from "../../../../components";
import {
  Container,
  Aside,
  ContentMainBox,
  MessageBox1,
} from "../../../../components/core";
import ScoreCards from "../../../../components/score_cards/ScoreCards";
import MarketingCards from "../../../../components/marketing_cards/MarketingCards";
import v2 from "../../../../assets/images/vectors/v2.svg";
import v3 from "../../../../assets/images/vectors/v2.svg";

const messageData = {
  icon: "Calender3",
  text: "Finding hidden subscriptions is a pain—let us cancel them for you",
};

function Dashboard() {
  const creditReport = {
    title: "Equifax Credit Report",
    score: "540",
  };
  const transUnionData = [
    {
      title: "Credit Health",
      score: 720,
      change: "No Change",
      date: "09,05,2024",
      data: {
        labels: [],
        datasets: [
          {
            label: "My First Dataset",
            data: [10],
            backgroundColor: ["#09EC92"],
            circumference: 220,
            rotation: 250,
            borderWidth: 0,
          },
        ],
      },
      options: {},
    },
    {
      title: "Credit Score",
      score: 650,
      change: "No Change",
      date: "09,05,2024",
      data: {
        labels: [],
        datasets: [
          {
            label: "My First Dataset",
            data: [10],
            backgroundColor: ["#1988F1"],
            circumference: 220,
            rotation: 250,
            borderWidth: 0,
          },
        ],
      },
      options: {},
    },
  ];
  const marketingCards = [
    {
      title: "Find the details of TransUnion  ",
      vectorImg: v2,
      content: {
        type: "text",
        text: "Check Transunion Credit Report, personal information and Credit Cards or Credit Lines",
      },
      buttonText: "View Complete Details",
    },
    {
      title: "Control access to your Experian credit file",
      vectorImg: v3,
      content: {
        type: "text",
        text: `Not applying for credit anytime soon? it's smart to lock your credit file to block unwanted access and protect against ID theft and fraud.`,
      },
      buttonText: "Show how",
    },
    {
      title: "Let us cancel your unwanted subscriptions and save",
      vectorImg: v3,
      content: {
        type: "text",
        text: `Are you paying for subscriptions you don't use? Save time and money when we cancel them for you, including Netflix, Spotify and over 200 more.`,
      },
      buttonText: "Cancel a subscription",
    },
    {
      title: "Get all your credit reports in one place",
      vectorImg: v3,
      content: {
        type: "list",
        text: [
          {
            icon: "Message",
            text: "See how your 3 reports differ",
          },
          {
            icon: "People",
            text: "Get updated TransUnion and Equifax reports quarterly",
          },
          {
            icon: "ProfileDelete",
            text: "Easily spot and dispute any errors",
          },
        ],
      },
      buttonText: "Get your reports now",
    },
    {
      title: "Are you maximizing your credit card rewards?",
      vectorImg: v3,
      content: {
        type: "text",
        text: `See what types of rewards you might be missing, and cards we'd recommend for you to fill the gaps..`,
      },
      buttonText: "View your credit cards",
    },
    {
      title: "Unlock more with your credit",
      vectorImg: v3,
      content: {
        type: "text",
        text: `Your FICO Score is looking good! We found card offers that could help you earn rewards..`,
      },
      buttonText: "See all offers",
      note: "Credit score calculated based on FICO Soore & model. Your lender or insurer may use a different FICO Score than FICO Score 8, or another type of credit score altogether.",
    },
    {
      title: "Earn points for grocery shopping",
      vectorImg: v3,
      content: {
        type: "text",
        text: `Get rewarded for running errands by adding a points credit card to your wallet..`,
      },
      buttonText: "See all offers",
    },
    {
      title: "Save money on auto insurance",
      mainText: "up to $828/yr on average",
      vectorImg: v3,
      content: {
        type: "text",
        text: `Visit the insurance hub to check for better rates or see if you could save by switching carriers..`,
      },
      buttonText: "Go to insurance hub",
      note: "Results will vary and some may not see savings Average savings of $828 per year for customers who switched and saved with Experian from Jes. 1,2022 to Mar 31, 2024. Savings based on customers self-reported prior premsum.",
    },

    // {
    //   title: "ttttttttt",
    //   vectorImg: v3,
    //   content: {
    //     type: "text",
    //     text: `oooooooooooofraud.`,
    //   },
    //   buttonText: "Showhow",
    // },
    // {
    //   title: "ttttttttt",
    //   vectorImg: v3,
    //   content: {
    //     type: "text",
    //     text: `oooooooooooofraud.`,
    //   },
    //   buttonText: "Showhow",
    // },
    // {
    //   title: "ttttttttt",
    //   vectorImg: v3,
    //   content: {
    //     type: "text",
    //     text: `oooooooooooofraud.`,
    //   },
    //   buttonText: "Showhow",
    // },
    // {
    //   title: "ttttttttt",
    //   vectorImg: v3,
    //   content: {
    //     type: "text",
    //     text: `oooooooooooofraud.`,
    //   },
    //   buttonText: "Showhow",
    // },
    // {
    //   title: "ttttttttt",
    //   vectorImg: v3,
    //   content: {
    //     type: "text",
    //     text: `oooooooooooofraud.`,
    //   },
    //   buttonText: "Showhow",
    // },
  ];
  return (
    <Container className={`py-[50px]`}>
      {/* <Core.Card cardNumber={3} data={dashboardCard} /> */}
      {/* <StatsGroup data={dashboardStats} /> */}

      <div className={`w-full flex gap-x-[20px]`}>
        <ContentMainBox>
          <MessageBox1 data={messageData} />
          <h1 className="text-[#000] text-[28px] font-[400] mt-4">
            TransUnion
          </h1>
          {/* score cards */}
          <ScoreCards data={transUnionData} />
          <MarketingCards data={marketingCards} />
        </ContentMainBox>
        <Aside>
          <Core.Card cardNumber={13} >
            df
          </Core.Card>
        </Aside>
      </div>
    </Container>
  );
}

export default Dashboard;
