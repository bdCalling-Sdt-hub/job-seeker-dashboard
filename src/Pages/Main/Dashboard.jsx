import { Input, Layout,  Badge, } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogoText from "../../assets/logo-text.jpg";
import { HiLogout, HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RiNotification2Line, RiChat1Line, RiCopperDiamondLine } from "react-icons/ri";
const { Header, Sider, Content } = Layout;
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";


const Dashboard = () => {
  const [settingDropDown, setSettingDropDown] = useState(false)
  const [subscriptionDropDown, setSubscriptionDropDown] = useState(false)
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogOut=()=>{
    navigate('/login');
    window.location.reload();
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
      title: "Subscription",
      path: "/subscription",
      icon: <RiCopperDiamondLine size={24} />,
    },
    {
      title: "Accounts",
      path: "/accounts",
      icon: <AiOutlineDollarCircle size={24} />,
    },
    {
      title: "Contacts",
      path: "/emails",
      icon: <HiOutlineMail size={24} />,
    },
    {
      title: "Make Admin",
      path: "/make-admin",
      icon: <TbUserPlus size={24} />,
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <IoSettingsOutline size={24} />,
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
            marginTop: "20px",
            marginBottom:"50px"
            
          }}
        >
          <Link to="/">
            <img
              src={Logo}
              height="40px"
              width="200px"
            />
          </Link>
        </div>

      


        <ul 
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            height: "100%",
            marginTop: 0
          }} 
        >
          {linkItems.map((item, index) => (
            <Link to={item.path}>
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
                      item.path === "/emails" ? <div className="w-[30px] h-5 flex items-center justify-center border border-[#565656] rounded-[4px] text-[11px]">40+</div> : null
                    }
                    
                    {
                      item.path === "/subscription" ? <MdKeyboardArrowRight size={24} /> : null
                    }
                    
                  </div>
              </li>
            </Link>
            
          ))}
        {/* start */}

          {/* <li
            style={{
              width: "100%",
              marginTop: 0,
              height: "38px",
              display: "flex", 
              alignItems: "center", 
              paddingLeft: "42px",
              position: "relative",
              gap: "14px",
              color: "#6A6D7C",
              cursor: "pointer",
              marginBottom:"30px"
            }}
          >
            {
              pathname === "/package" || pathname === "/settings-profile"
              ?
              <div style={{backgroundColor: "#4365b6", position: "absolute", left:0, top: 0, width: "8px", height: "38px", borderRadius: "0 10px 10px 0"}}></div>
              :
              null

            }
             <RiCopperDiamondLine size={24} />
            <p onClick={()=>setSubscriptionDropDown(!subscriptionDropDown)} style={{fontSize: "15px", textAlign: "center"}}>Subscription</p>
            {
              subscriptionDropDown
              ?
              <MdKeyboardArrowDown size={24} />
              :
              <MdKeyboardArrowRight size={24} />
            }
            {
              subscriptionDropDown
              &&
              <div 
                style={{
                  position: "absolute", 
                  left: "80px", 
                  top: "40px", 
                  width: "150px", 
                  height: "50px", 
                  borderRadius: "0 10px 10px 0"
                

                }}
              >
                  <Link to="/settings-profile" style={{color: pathname === "/settings-profile" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p style={{marginBottom: '8px'}}>Subscribers</p>
                  </Link>
                  <Link to="/package" style={{color: pathname === "/setting-change-password" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p style={{marginBottom: '18px'}}>Subscriptoins</p>
                  </Link>
              </div>
            }

            
          </li> */}

         {/* end */}

          {/* <li
            style={{
              width: "100%",
              marginTop: 0,
              height: "38px",
              display: "flex", 
              alignItems: "center", 
              paddingLeft: "42px",
              position: "relative",
              gap: "14px",
              color: "#6A6D7C",
              cursor: "pointer"
            }}
          >
            {
               pathname === "/terms" || pathname === "/privacy" ||  pathname === "/setting-change-password" || pathname === "/settings-profile" || pathname === "/notification"
              ?
              <div style={{backgroundColor: "#4365b6", position: "absolute", left:0, top: 0, width: "8px", height: "38px", borderRadius: "0 10px 10px 0"}}></div>
              :
              null

            }
            <IoSettingsOutline size={24} />
            <p onClick={()=>setSettingDropDown(!settingDropDown)} style={{fontSize: "15px", textAlign: "center"}}>Settings</p>
            {
              settingDropDown
              ?
              <MdKeyboardArrowDown size={24} />
              :
              <MdKeyboardArrowRight size={24} />
            }
            {
              settingDropDown
              &&
              <div 
                style={{
                  position: "absolute", 
                  left: "80px", 
                  top: "40px", 
                  width: "150px", 
                  height: "50px", 
                  borderRadius: "0 10px 10px 0"
                }}
              >
                  
                  <Link to="/terms" style={{color: pathname === "/settings-profile" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p style={{marginBottom: '8px'}}>Terms & Condition</p>
                  </Link>

                  <Link to="/privacy" style={{color: pathname === "/settings-profile" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p style={{marginBottom: '8px'}}>Privacy Policy</p>
                  </Link>

                  
                  <Link to="/settings-profile" style={{color: pathname === "/settings-profile" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p style={{marginBottom: '8px'}}>Profile</p>
                  </Link>


                  <Link to="/setting-change-password" style={{color: pathname === "/setting-change-password" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p style={{marginBottom: '8px'}}>Change Password</p>
                  </Link>

                  <Link to="/notification" style={{color: pathname === "/setting-change-password" ? "#2FD5C7" : '#6A6D7C'}}>
                    <p>Notification</p>
                  </Link>
              </div>
            }

            
          </li> */}


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
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: "#ECF1F8",
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "60px",
            paddingLeft: "270px"
          }}
        >
          <div className="w-[512px] "
            style={{
              width: "512px",
              height: "42px",
              borderRadius: "8px"
            }}
          >
            <Input
              placeholder="Search..."
              prefix={<FiSearch size={14} color="#868FA0"/>}
              suffix={<IoClose size={14} color="#2B2A2A" />}
              style={{
                width: "100%",
                height: "100%",
                fontSize: "14px"
              }}
              size="middle"
            />
          </div>

          <div className="w-[280px] flex items-center justify-between">
            <Badge color="#FBA51A" count={5}>
              <Link to="/emails" >
                <RiChat1Line color="#6A6A6A" size={24} />
              </Link>
            </Badge>

            <Badge color="#FBA51A" count={5}>
              <Link to="/notification" >
                <RiNotification2Line color="#6A6A6A" size={24} />
              </Link>
            </Badge>
            <div className="w-[171px] h-[42px] bg-[#ffffff] rounded-[5px] flex items-center gap-5 p-[10px]">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotvhr2isTRMEzzT30Cj0ly77jFThGXr0ng&usqp=CAU" style={{width: "30px", height: "30px", borderRadius: "100%"}} alt="" />
              <h2 style={{color: "black", fontSize: "10px"}}>DR. Jim ahhmed</h2>
            </div>
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
            padding: "20px"
          }}
        >
          <Outlet />
        </Content>
      </Layout>


    </Layout>
  );
};
export default Dashboard;
