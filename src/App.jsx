import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import 'antd/dist/reset.css';
import Dashboard from "./Pages/Main/Dashboard";
import DashboardHome from "./Pages/Main/DashboardHome";
import Notification from "./Pages/Main/Notification";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";
import Subscription from "./Pages/Main/Subscription";
import EditSubscription from "./Pages/Main/EditSubscription";
import MakeAdmin from "./Pages/Main/MakeAdmin";
import Profile from "./Pages/Main/Profile";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import SellerDetails from "./Pages/Main/SellerDetails";
import Contacts from "./Pages/Main/Contacts";
import SellerProductList from "./Pages/Main/SellerProductList";
import EmployerList from "./Pages/Main/EmployerList";
import TopSellerList from "./Pages/Main/TopSellerList";
import Settings from "./Pages/Main/Settings";
import Subscribers from "./Pages/Main/Subscribers";
import SettingsDetails from "./Pages/Main/SettingsDetails";
import EmployerDetails from "./Pages/Main/EmployerDetails";
import CompanyDetails from "./Pages/Main/CompanyDetails";
import SubscriptionDetails from "./Pages/Main/SubscriptionDetails";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route exact path="/" element={ <PrivateRoute> <Dashboard /> </PrivateRoute> }>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/edit-subscription/:name" element={<EditSubscription />} />
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/settings-profile" element={<Profile />} />
              <Route path="/employer-list" element={<EmployerList  />} />
              <Route path="/employer-details" element={<EmployerDetails  />} />
              <Route path="/seller-details/:id" element={<SellerDetails />} />
              <Route path="/seller-product-list" element={<SellerProductList />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/top-seller-list" element={<TopSellerList />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/settings/:settingType" element={<SettingsDetails />} />
              <Route path="/subscribers" element={<Subscribers/>} />
              <Route path="/company-details" element={<CompanyDetails/>} />
              <Route path="/subscription-details" element={<SubscriptionDetails/>} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
