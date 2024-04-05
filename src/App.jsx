import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import 'antd/dist/reset.css';
import Dashboard from "./Pages/Main/Dashboard";
import DashboardHome from "./Pages/Main/DashboardHome";
import Notification from "./Pages/Main/Notification";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";
import Package from "./Pages/Main/Package";
import EditPackage from "./Pages/Main/EditPackage";
import MakeAdmin from "./Pages/Main/MakeAdmin";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import SellerDetails from "./Pages/Main/SellerDetails";
import Contacts from "./Pages/Main/Contacts";
import SellerProductList from "./Pages/Main/SellerProductList";
import EmployerList from "./Pages/Main/EmployerList";
import TopSellerList from "./Pages/Main/TopSellerList";
import Settings from "./Pages/Main/Settings";
import Subscribers from "./Pages/Main/Admin/Subscribers";
import SubscriberDetails from "./Pages/Main/Admin/SubscriberDetails";
import Subscription from "./Pages/Main/Employer/Subscription";
import SubscriptionDetails from "./Pages/Main/SubscriptionDetails";
import SubscriptionInfo from "./Pages/Main/Employer/SubscriptionInfo";
import SettingsDetails from "./Pages/Main/SettingsDetails";
import EmployerDetails from "./Pages/Main/EmployerDetails";
import CompanyDetails from "./Pages/Main/CompanyDetails";
import JobPost from "./Pages/Main/JobPost";
import JobDetails from "./Pages/Main/JobDetails";
import Interview from "./Pages/Main/Interview";
import CreateJob from "./Pages/Main/CreateJob";
import AppliedJobTable from "./Pages/Main/Employer/AppliedJobTable";
import NewApplicantTable from "./Pages/Main/Employer/NewApplicantTable";
import EmployerProfile from "./Pages/Main/Employer/EmployerProfile";
import EmployerChangePassword from "./Pages/Main/Employer/EmployerChangePassword";
import CandidateProfile from "./Pages/Main/CandidateProfile";
import CandidateShortProfile from "./Pages/Main/CandidateShortProfile";
import UploadedCVViewer from "./Pages/Main/UploadedCVViewer";
import JobSeekerCV from "./Pages/Main/JobSeekerCV";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route exact path="/" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> }>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/package" element={<Package />} />
              <Route path="/edit-package/:name" element={<EditPackage />} />
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/change-password" element={<EmployerChangePassword />} />
              <Route path="/employer-profile" element={< EmployerProfile />} />
              <Route path="/employer-list" element={<EmployerList  />} />
              <Route path="/employer-details/:id" element={<EmployerDetails  />} />
              <Route path="/seller-details/:id" element={<SellerDetails />} />
              <Route path="/seller-product-list" element={<SellerProductList />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/top-seller-list" element={<TopSellerList />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/:settingType" element={<SettingsDetails />} />
              <Route path="/subscribers" element={<Subscribers/>} />
              <Route path="/subscription" element={<Subscription/>} />
              <Route path="/company-details/:id" element={<CompanyDetails/>} />
              <Route path="/subscription-details" element={<SubscriptionDetails/>} />
              <Route path="/subscriber-details" element={<SubscriberDetails/>} />
              <Route path="/subscription-info/:id" element={<SubscriptionInfo/>} />
              <Route path="/job-post" element={<JobPost/>} />
              <Route path="/job-details/:id" element={<JobDetails/>} />
              <Route path="/job-interviews" element={<Interview/>} />
              <Route path="/create-job" element={<CreateJob/>} />
              <Route path="/applied-job" element={<AppliedJobTable/>} />
              <Route path="/new-applicant" element={<NewApplicantTable />} />
              <Route path="/candidate-short-profile/:id" element={<CandidateShortProfile />} />
              <Route path="/candidate-profile/:id" element={<CandidateProfile />} />
              <Route path="/uploaded-cv/:id" element={<UploadedCVViewer />} />
              <Route path="/job-seeker-cv/:id" element={<JobSeekerCV />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
