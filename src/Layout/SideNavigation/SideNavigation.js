import React from "react";
import * as css from "./SideNavigation.module.css";
import TreeMenu from "../../TreeMenu/TreeMenu";
import logoImg from "../_assets/images/logo-white-small.svg";
import { Link } from "react-router-dom";

const SideNavigation = (props) => {
  const getSideBarClass = () => {
    return props.open ? css.sideBar : css.sideBarClosed;
  };

  const getMainClass = () => {
    return props.open ? css.main : css.mainSidebarClosed;
  };

  let home = props.sitemap.children
    ? props.sitemap.children.find(
        (item) => item.componentName === "ButtonExamples"
      )
    : "";

  let homeUrl = home !== "" && home !== undefined ? home.url : "";

  return (
    <>
      <div className={getSideBarClass()}>
        <div className={css.sideNavigationLogo}>
          {props.open ? (
            <Link to={homeUrl}>
              <img src={logoImg} alt="logo"></img>
            </Link>
          ) : (
            ""
          )}
        </div>
        {props.sitemap.children ? (
          <TreeMenu
            node={props.sitemap}
            level={1}
            open={props.open}
            shouldBeVisible={true}
          />
        ) : (
          <></>
        )}
      </div>

      <div className={getMainClass()}>{props.children}</div>
    </>
  );
};

export default SideNavigation;
