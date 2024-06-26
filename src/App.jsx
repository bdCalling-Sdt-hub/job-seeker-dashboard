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
import Contacts from "./Pages/Main/Contacts";
import EmployerList from "./Pages/Main/EmployerList";
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
import JobSeekerCV from "./Pages/Main/JobSeekerCV";
import Category from "./Pages/Main/Admin/Category";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ManualSubscription from "./Pages/Main/Admin/ManualSubscription";

const stripePromise = loadStripe("pk_test_51MJynOHzN4rqAg27o1nDk5hQeHaX8cuaBkInxAzGMEnEqee4QMyeztVLqyeuAhzgK9ZRdwPAF8uWFrRX2Qj8iuQ9005XC9m0sA");
// const stripePromise = loadStripe(process.env.REACT_APP_API_STRIPE_PUBLISH_KEY);
function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route exact path="/" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> }>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/edit-package/:name" element={<EditPackage />} />
              <Route 
                path="/package" 
                element={
                  <Elements stripe={stripePromise} >
                    <Package />
                  </Elements>
                } 
              />

              <Route path="/category" element={<Category />} /> 
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/change-password" element={<EmployerChangePassword />} />
              <Route path="/employer-profile" element={< EmployerProfile />} />
              <Route path="/employer-list" element={<EmployerList  />} />
              <Route path="/employer-details/:id" element={<EmployerDetails  />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/:settingType" element={<SettingsDetails />} />
              <Route path="/subscribers" element={<Subscribers/>} />
              <Route path="/subscription" element={<Subscription/>} />
              <Route path="/company-details/:id" element={<CompanyDetails/>} />
              <Route path="/subscription-details/:id" element={<SubscriptionDetails/>} />
              <Route path="/subscriber-details/:userID/:id" element={<SubscriberDetails/>} />
              <Route path="/subscription-info/:id" element={<SubscriptionInfo/>} />
              <Route path="/job-post" element={<JobPost/>} />
              <Route path="/job-details/:id" element={<JobDetails/>} />
              <Route path="/job-interviews" element={<Interview/>} />
              <Route path="/create-job" element={<CreateJob/>} />
              <Route path="/applied-job" element={<AppliedJobTable/>} />
              <Route path="/new-applicant" element={<NewApplicantTable />} />
              <Route path="/candidate-short-profile/:id" element={<CandidateShortProfile />} />
              <Route path="/candidate-profile/:id" element={<CandidateProfile />} />
              <Route path="/job-seeker-cv/:id" element={<JobSeekerCV />} />
              <Route path="/manul-subscription" element={<ManualSubscription />} />
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
