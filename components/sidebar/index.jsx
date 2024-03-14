import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const SidebarNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuNew, setSideMenuNew] = useState("");
  const [isSideMenuNew2, setSideMenuNew2] = useState("");

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };

  const toggleSidebarNew = (value) => {
    setSideMenuNew(value);
  };

  const toggleSidebarNew2 = (value) => {
    setSideMenuNew2(value);
  };

  // eslint-disable-next-line no-unused-vars
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);
  const [isMouseOverSidebar, setMouseOverSidebar] = useState(false);

  useEffect(() => {
    if (
      isMouseOverSidebar &&
      document.body.classList.contains("mini-sidebar")
    ) {
      document.body.classList.add("expand-menu");
      return;
    }
    document.body.classList.remove("expand-menu");
  }, [isMouseOverSidebar]);

  const handleMouseEnter = () => {
    setMouseOverSidebar(true);
  };

  const handleMouseLeave = () => {
    setMouseOverSidebar(false);
  };

  return (
    <>
      {/* <!-- Sidebar --> */}
      <div
        className={`sidebar ${isSidebarExpanded ? "" : "hidden"}`}
        id="sidebar"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <ul>
                <li className="menu-title">
                  <span>Main</span>
                </li>
                <li className={pathname === "/" ? "active" : ""}>
                  <Link to="/">
                    <i className="fe fe-home"></i>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("/appointment-list") ? "active" : ""
                  }
                >
                  <Link to="/appointment-list">
                    <i className="fe fe-layout"></i> <span>Appointments</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("specialities") ? "active" : ""}
                >
                  <Link to="/specialities">
                    <i className="fe fe-users"></i> <span>Specialities</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("doctor-list") ? "active" : ""}
                >
                  <Link to="/doctor-list">
                    <i className="fe fe-user-plus"></i>
                    <span>Doctors</span>
                  </Link>
                </li>
                <li
                  className={pathname?.includes("patient-list") ? "active" : ""}
                >
                  <Link to="/patient-list">
                    <i className="fe fe-user"></i> <span>Patients</span>
                  </Link>
                </li>
                <li className={pathname?.includes("reviews") ? "active" : ""}>
                  <Link to="/reviews">
                    <i className="fe fe-star-o"></i> <span>Reviews</span>
                  </Link>
                </li>
                <li
                  className={
                    pathname?.includes("transactions-list") ? "active" : ""
                  }
                >
                  <Link to="/transactions-list">
                    <i className="fe fe-activity"></i>
                    <span>Transactions</span>
                  </Link>
                </li>
                <li className={pathname?.includes("settings") ? "active" : ""}>
                  <Link to="/settings">
                    <i className="fe fe-vector"></i> <span> Settings</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "reports" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "reports" ? "" : "reports")
                    }
                  >
                    <i className="fe fe-document"></i>
                    <span> Reports</span> <span className="menu-arrow"></span>
                  </Link>
                  {isSideMenu == "reports" ? (
                    <ul
                      style={{
                        display: isSideMenu == "reports" ? "block" : "none",
                      }}
                    >
                      <li>
                        <Link
                          to="/invoicerepot"
                          className={
                            pathname?.includes("invoicerepot") ? "active" : ""
                          }
                        >
                          Invoice Report
                        </Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li className={pathname?.includes("profile") ? "active" : ""}>
                  <Link to="/profile">
                    <i className="fe fe-user-plus"></i> <span>Profile</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "authentication" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "authentication" ? "" : "authentication"
                      )
                    }
                  >
                    <i className="fe fe-document"></i>{" "}
                    <span> Authentication </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display:
                        isSideMenu == "authentication" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/login"
                        className={pathname?.includes("login") ? "active" : ""}
                      >
                        {" "}
                        Login{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className={
                          pathname?.includes("register") ? "active" : ""
                        }
                      >
                        {" "}
                        Register{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/forgotpassword"
                        className={
                          pathname?.includes("forgotpassword") ? "active" : ""
                        }
                      >
                        {" "}
                        Forgot Password{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/lockscreen"
                        className={
                          pathname?.includes("lockscreen") ? "active" : ""
                        }
                      >
                        {" "}
                        Lock Screen{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "errorpages" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "errorpages" ? "" : "errorpages"
                      )
                    }
                  >
                    <i className="fe fe-warning"></i> <span> Error Pages </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "errorpages" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/404"
                        className={pathname?.includes("404") ? "active" : ""}
                      >
                        404 Error{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/500"
                        className={pathname?.includes("500") ? "active" : ""}
                      >
                        500 Error{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={pathname?.includes("blank-page") ? "active" : ""}
                >
                  <Link to="/blank-page">
                    <i className="fe fe-file"></i> <span>Blank Page</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li
                  className={pathname?.includes("components") ? "active" : ""}
                >
                  <Link to="/components">
                    <i className="fe fe-vector"></i> <span>Components</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "forms" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "forms" ? "" : "forms")
                    }
                  >
                    <i className="fe fe-layout"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "forms" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/basic-input"
                        className={
                          pathname?.includes("basic-input") ? "active" : ""
                        }
                      >
                        Basic Inputs{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/form-input-group"
                        className={
                          pathname?.includes("form-input-group") ? "active" : ""
                        }
                      >
                        Input Groups{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/form-horizontal"
                        className={
                          pathname?.includes("form-horizontal") ? "active" : ""
                        }
                      >
                        Horizontal Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/form-vertical"
                        className={
                          pathname?.includes("form-vertical") ? "active" : ""
                        }
                      >
                        {" "}
                        Vertical Form{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/form-mask"
                        className={
                          pathname?.includes("form-mask") ? "active" : ""
                        }
                      >
                        Form Mask{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/form-validation"
                        className={
                          pathname?.includes("form-validation") ? "active" : ""
                        }
                      >
                        Form Validation{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "tables" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "tables" ? "" : "tables")
                    }
                  >
                    <i className="fe fe-table"></i>
                    <span> Tables </span> <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "tables" ? "block" : "none",
                    }}
                  >
                    <li>
                      <Link
                        to="/tables-basic"
                        className={
                          pathname?.includes("tables-basic") ? "active" : ""
                        }
                      >
                        Basic Tables{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/data-tables"
                        className={
                          pathname?.includes("data-tables") ? "active" : ""
                        }
                      >
                        Data Table{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link
                    to="#"
                    className={isSideMenu == "multilevel" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu == "multilevel" ? "" : "multilevel"
                      )
                    }
                  >
                    <i className="fe fe-code"></i> <span>Multi Level</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul
                    style={{
                      display: isSideMenu == "multilevel" ? "block" : "none",
                    }}
                  >
                    <li className="submenu">
                      <Link
                        to="#"
                        className={isSideMenuNew == "levelone" ? "subdrop" : ""}
                        onClick={() =>
                          toggleSidebarNew(
                            isSideMenuNew == "levelone" ? "" : "levelone"
                          )
                        }
                      >
                        {" "}
                        <span>Level 1</span>{" "}
                        <span className="menu-arrow"></span>
                      </Link>
                      <ul
                        style={{
                          display:
                            isSideMenuNew == "levelone" ? "block" : "none",
                        }}
                      >
                        <li>
                          <Link to="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link
                            to="#"
                            className={
                              isSideMenuNew2 == "leveltwo" ? "subdrop" : ""
                            }
                            onClick={() =>
                              toggleSidebarNew2(
                                isSideMenuNew2 == "leveltwo" ? "" : "leveltwo"
                              )
                            }
                          >
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow"></span>
                          </Link>
                          <ul
                            style={{
                              display:
                                isSideMenuNew2 == "leveltwo" ? "block" : "none",
                            }}
                          >
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </Scrollbars>
      </div>
      {/* <!-- /Sidebar --> */}
    </>
  );
};

export default SidebarNav;
