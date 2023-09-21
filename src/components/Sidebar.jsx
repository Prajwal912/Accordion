import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome, FaLock, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch, BiSearchAlt, BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Message",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => setisOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const textAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="menu_container">
      <motion.div
        animate={{ width: isOpen ? "200px" : "55px", transition:{
          duration:0.5,
          type:'spring',
          damping:11,
        } }}
        className="sidebar"
      >
        <div className="top--section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                Framer
              </motion.h1>
            )}
          </AnimatePresence>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        <div className="search">
          <div className="search_icon">
            <BiSearchAlt />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                placeholder="Search..."
              />
            )}
          </AnimatePresence>
        </div>

        <section className="routes">
          {routes.map((route) => (
            <NavLink
              activeClassName="active"
              to={route.path}
              key={route.name}
              className="link"
            >
              <div className="icon">{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={inputAnimation}
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
          ))}
        </section>
      </motion.div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
