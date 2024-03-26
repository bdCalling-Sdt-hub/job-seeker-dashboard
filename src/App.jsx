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
import ChangePassword from "./Pages/Main/ChangePassword";
import Profile from "./Pages/Main/Profile";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import SellerDetails from "./Pages/Main/SellerDetails";
import Emails from "./Pages/Main/Emails";
import SellerProductList from "./Pages/Main/SellerProductList";
import TotalSellerList from "./Pages/Main/TotalSellerList";
import TopSellerList from "./Pages/Main/TopSellerList";

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
              <Route path="/edit-package" element={<EditPackage />} />
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/setting-change-password" element={<ChangePassword />} />
              <Route path="/settings-profile" element={<Profile />} />
              <Route path="/seller-list" element={<TotalSellerList  />} />
              <Route path="/seller-details/:id" element={<SellerDetails />} />
              <Route path="/seller-product-list" element={<SellerProductList />} />
              <Route path="/emails" element={<Emails />} />
              <Route path="/top-seller-list" element={<TopSellerList />} />
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
