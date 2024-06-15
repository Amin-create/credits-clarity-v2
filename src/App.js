
import "../src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  AboutPage, BankDetails,
  CompanyDetails,
  ContactPage,
  Dashboard,
  FeaturesPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  MainCreditReports,
  Notification,
  PrivacyPolicyPage,
  SignUpPage,Setting,
  TermsOfConditionsPage,
} from "./pages/index";
import { DashboardLayout } from "./components/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"
        // element={<Layout />}
        >
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="terms-of-conditions" element={<TermsOfConditionsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>

        <Route path="dashboard/*" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path=":companyName/details" element={<CompanyDetails />} />
          <Route path="credit-reports" element={<MainCreditReports />} />
          <Route path="credit-reports/:companyName/details" element={<BankDetails />} />
          <Route path="notification" element={<Notification />} />
          <Route path="setting" element={<Setting />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
