import { Layout,  Badge, } from "antd";
import React, { useEffect }  from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { HiLogout, HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { RiNotification2Line, RiChat1Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { RiFlag2Fill } from "react-icons/ri";
import { TbCrown } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { IconCalendarStats } from '@tabler/icons-react';
import { IconUsers } from '@tabler/icons-react';
import { IconCategoryPlus } from '@tabler/icons-react';
const { Header, Sider, Content } = Layout;
import baseURL from "../../../Config"
import ImgURL from "../../../ImgConfig";



const Dashboard = () => {
  const { pathname } = useLocation();
  const { userType, fullName, _id, image } = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(()=>{
    async function getApi(){
        const response = await baseURL.get(`/show/recruiter`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        localStorage.setItem("userInfo", JSON.stringify(response?.data?.data?.recruiter[0]));
    }
    getApi();
}, []);

  const handleLogOut=()=>{
    navigate('/login');
    localStorage.setItem("token", JSON.stringify(response.data.access_token));
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdDashboard size={24} />,
    },
    {
      title: "Employer",
      path: "/employer-list",
      icon: <LuUser size={24} />,
    },
    {
      title: "Package",
      path: "/package",
      icon: <TbCrown size={24} />,
    },
    {
      title: "Subscribers",
      path: "/subscribers",
      icon: <IconUsers size={24} />,
    },
    {
      title: "Subscription",
      path: "/subscription",
      icon: <AiOutlineDollarCircle size={24} />,
    },

    {
      title: "Job Post",
      path: "/job-post",
      icon: <RiFlag2Fill size={24} />,
    },
    {
      title: "Contacts",
      path: "/contacts",
      icon: <HiOutlineMail size={24} />,
    },
    {
      title: "Job & Interviews",
      path: "/new-applicant",
      icon: <IconCalendarStats size={24} />,
    },
    {
      title: "Category",
      path: "/category",
      icon: <IconCategoryPlus size={24} />,
    },
    {
      title: "Make Admin",
      path: "/make-admin",
      icon: <TbUserPlus size={24} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline  size={24} />,
    },
    {
      title: "My Profile",
      path: "/employer-profile",
      icon: <FiUser size={24} />,
    },
   
  ];

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>

      
      <Sider
        width="233px"
        trigger={null}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          overflowY: "hidden",
          zIndex: 2,
          backgroundColor: "white",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "70px",
            marginBottom:"50px"
            
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              height="40px"
              width="180px"
            />
          </Link>
        </div>

      

        {/* style={{display: userType === "Admin" ? "none": "block"}} */}
        <ul 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            height: "100%",
            marginTop: 0
          }} 
        >
          {
            linkItems.map((item, index) => {
              return (
              <Link 
                key={index} 
                to={item.path}
                className={`
                ${ userType === "SUPER ADMIN" && item.path === "/employer-profile" ? "hidden" : "block" }
                ${ userType === "SUPER ADMIN"  && item.path === "/subscription" ? "hidden" : "block" }
                ${ userType === "ADMIN" && item.path === "/employer-profile" ? "hidden" : "block" }
                ${ userType === "ADMIN"  && item.path === "/subscription" ? "hidden" : "block" }
                ${ userType === "ADMIN" && item.path === "/make-admin" ? "hidden" : "block" }
                ${ userType === "ADMIN" && item.path === "/new-applicant" ? "hidden" : "block" }
                ${ userType === "RECRUITER" && item.path === "/make-admin" ? "hidden" : "block" }
                ${ userType === "RECRUITER" && item.path === "/settings" ? "hidden" : "block" }
                ${ userType === "RECRUITER" && item.path === "/employer-list" ? "hidden" : "block" }
                ${ userType === "RECRUITER" && item.path === "/subscribers" ? "hidden" : "block" }
                ${ userType === "RECRUITER" && item.path === "/category" ? "hidden" : "block" }
                `}
              >
                <li
                    key={index}
                    style={{
                      width: "100%",
                      height: "34px",
                      position: "relative",
                      paddingLeft: "44px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {
                      item.path === pathname
                      ?
                      <div style={{backgroundColor: "#4365b6", position: "absolute", left:0, top: 0, width: "8px", height: "35px", borderRadius: "0 10px 10px 0"}}></div>
                      :
                      null

                    }
                    <div
                      style={{
                        display: "flex",
                        color: item.path === pathname ? "#4365b6" : "#6A6D7C", 
                        alignItems: "center",
                        margin: "auto  0 auto 0",
                        gap: "14px"
                      }}
                    >
                      <div style={{height: "24px",}}>{item.icon}</div>
                      <div style={{fontSize: "14px", textAlign: "center", height: "fit-content"}}>{item.title}</div>
                      {
                        item.path === "/contacts" ? <div className="w-[30px] h-5 flex items-center justify-center border border-[#565656] rounded-[4px] text-[11px]">40+</div> : null
                      }  
                    </div>
                </li>
              </Link>
            )})
          }

          <li
            style={{
              width: "100%",
              left: "0",
              position: "absolute",
              bottom: "53px",
            }}
          >

            <div onClick={handleLogOut} style={{display: "flex", width: "fit-content", margin: "0 auto 0 auto", alignItems: "center", gap: "14px", cursor: "pointer", justifyContent: "center"}}>
              <div style={{color:"#6A6D7C", fontSize: "14px"}}>Logout</div>
              <HiLogout color="#6A6D7C" size={24} />
            </div>
          </li>

        </ul>

      </Sider>


      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "70px",
            zIndex: 1,
            padding: 0,
            background: "#ECF1F8",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: "60px",
            paddingLeft: "270px",
          }}
        >
          <div className="w-[280px] flex items-center gap-6">

            <Badge color="#FBA51A" count={5}>
              <Link to="/notification" >
                <RiNotification2Line color="#6A6A6A" size={24} />
              </Link>
            </Badge>




            <Link to={`${userType === "RECRUITER" ? "/employer-profile" : "/settings/profile"}`}>
              <div className="w-[171px] h-[42px] bg-[#ffffff] rounded-[5px] flex items-center gap-3 p-[10px]">
                <img 
                  src={ image ? `${ImgURL}/${image}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotvhr2isTRMEzzT30Cj0ly77jFThGXr0ng&usqp=CAU" }   
                  style={{
                    width: "30px", 
                    height: "30px", 
                    borderRadius: "100%"
                  }} 
                  alt="" 
                />
                <h2 style={{color: "black", fontSize: "14px"}}>{fullName}</h2>
              </div>
            </Link>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            marginLeft: "255px",
            marginRight: "40px",
            background: "#ECF1F8",
            overflow: "auto",
            paddingTop: "20px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>


    </Layout>
  );
};
export default Dashboard;
