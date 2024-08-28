import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
// import Profile from "../../Authcomp/Profile";
import "../../../styles/NGFpagestyle/compstyles/sidebar.css";
const routes = [
  {
    path: "/dashboard",
    name: "DASHBOARD",
    icon: <FaHome className="size-5 text-black"/>,
  },
  {
    path: "",
    name: "MARKETPLACE",
    icon: <FaUser className="size-5 text-black"/>,
    subRoutes: [
      {
        path: "/Product",
        name: "PRODUCTS ",
        icon: <FaUser className="size-5 text-black"/>,
      },
      {
        path: "/Productioncontract",
        name: "PRODUCTION CONTRACTS",
        icon: <FaLock className="size-5 text-black"/>,
      },
      {
        path: "/Productbid",
        name: "PRODUCT BID",
        icon: <FaMoneyBill className="size-5 text-black"/>,
      },
    ],
  },
  {
    path: "/Createlisting",
    name: "CREATELISTING",
    icon: <MdMessage className="size-5 text-black"/>,
    subRoutes: [
      {
        path: "/Products",
        name: "PRODUCTS ",
        icon: <FaUser className="size-5 text-black"/>,
      },
      {
        path: "/Productioncontracts",
        name: "PRODUCTION CONTRACTS",
        icon: <FaLock className="size-5 text-black"/>,
      },
      {
        path: "/Productbids",
        name: "PRODUCT BID",
        icon: <FaMoneyBill className="size-5 text-black"/>,
      },
    ],
  },
  {
    path: "/Negotiationitems",
    name: "NEGOTIAION ITEMS",
    icon: <BiAnalyse className="size-5 text-black"/>,
  },
  {
    path: "",
    name: "COMPLETED ORDERS", 
    icon: <AiTwotoneFileExclamation className="size-5 text-black"/>,
    subRoutes: [
      {
        path: "/CProducts",
        name: "PRODUCTS ",
        icon: <FaUser className="size-5 text-black"/>,
      },
      {
        path: "/CProductioncontracts",
        name: "PRODUCTION CONTRACTS",
        icon: <FaLock className="size-5 text-black"/>,
      },
      {
        path: "/CProductbids",
        name: "PRODUCT BID",
        icon: <FaMoneyBill className="size-5 text-black"/>,
      },
    ],
  },
  {
    path: "/Support",
    name: "SUPPORT",
    icon: <BsCartCheck className="size-5 text-black"/>,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <BiCog className="size-5 text-black"/>,
    exact: true,
  },
  {
    path: "/",
    name: "Logout",
    icon: <AiFillHeart className="size-5 text-black"/>,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },

  };

  return (
    <>
      <div   className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "260px" : "80px",

            transition: {
              duration: 0.6,
              type: "spring",
              // damping: 9.5,
            },
          }}
          className={`sidebar `}
           onMouseLeave={toggle} onMouseEnter={toggle}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Bhusatyam Technology
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars flex justify-center align-middle hover:cursor-pointer">
              <FaBars className="size-6" color="white"/>
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
