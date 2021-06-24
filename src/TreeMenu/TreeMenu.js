import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TreeMenu.module.css";
import * as css from "./TreeMenu.module.css";
import { IconButton as IconButtonLanaco } from "@lanaco/lanaco-react-library";
import { Icon as IconLanaco } from "@lanaco/lanaco-react-library";

const TreeMenu = (props) => {
  const [visible, setVisibility] = useState(
    props.node.name === "root" ? true : false
  );

  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const expandAndRefresh = (set = true) => {
    setVisibility(true);
  };

  const expandOrShrink = () => {
    setVisibility(!visible);
  };

  const renderLinksForOpenSidebarWithDepth = (key) => {
    let iconButtonClassName = visible ? "lnc-up" : "lnc-down";

    return (
      <div className={css.pWrapperDiv} onClick={expandAndRefresh}>
        <div
          key={key}
          className={
            props.useMagicDiv === undefined || props.useMagicDiv === false
              ? `${css["lvl" + props.level]} ${css["p" + props.level]}`
              : `${css["lvl" + props.level]} ${css["magicDivP" + props.level]}`
          }
        >
          <div className={css.activeItem}>
            <IconLanaco iconClassName={props.node.iconCode}></IconLanaco>
          </div>
          <div
            className={css.linkInnerDivName}
            onMouseEnter={
              props.useMagicDiv === true
                ? () => expandAndRefresh(false)
                : () => {}
            }
          >
            <span className={css.linkInnerSpanName}>{props.node.name}</span>
          </div>
        </div>
        {props.node.children.length > 0 ? (
          <div className={css.linkInnerDivIconButton}>
            <IconButtonLanaco
              iconClassName={iconButtonClassName}
              onClick={expandOrShrink}
              preventDefault={true}
            ></IconButtonLanaco>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  };

  const renderLinkContent = (magicDiv, linkInnerDivIconClassName) => {
    return open ? (
      renderLinksForOpenSidebarWithDepth(props.node.id)
    ) : (
      <div
        className={css.linkInnerDivClosed}
        onClick={expandAndRefresh}
        title={props.node.name}
      >
        <div
          className={`${css.linkInnerDivIcon} ${linkInnerDivIconClassName} ${
            css["closed_lvl" + props.level]
          } `}
        >
          <IconLanaco iconClassName={props.node.iconCode}></IconLanaco>
        </div>
        {magicDiv}
      </div>
    );
  };

  const renderLink = (magicDiv, linkInnerDivIconClassName) => {
    return (
      <Link key={props.node.id} to={props.node.url} className={css.link}>
        {renderLinkContent(magicDiv, linkInnerDivIconClassName)}
      </Link>
    );
  };

  const render = () => {
    var childNodes;
    var ulClassName;

    if (props.node.children.length > 0) {
      childNodes = props.node.children.map((node, index) => {
        return (
          <li key={index}>
            <TreeMenu
              node={node}
              level={props.level + 1}
              reloadContext={props.reloadContext}
              open={open}
              shouldBeVisible={visible}
            />
          </li>
        );
      });
    }

    if (!visible) {
      ulClassName = "visible hidden";
    } else {
      ulClassName = "visible";
    }

    let linkInnerDivIconClassName = "";

    var magicChildNodes;
    if (props.node.children.length > 0) {
      magicChildNodes = props.node.children.map((node, index) => {
        return (
          <li key={index} onClick={() => {}}>
            <TreeMenu
              node={node}
              level={3}
              reloadContext={props.reloadContext}
              shouldBeVisible={visible}
              open={true}
              useMagicDiv={true}
            />
          </li>
        );
      });
    }

    let magicDiv = (
      <div className={props.node.children.length > 0 ? css.magicDiv : ""}>
        <ul className="visible">{magicChildNodes}</ul>
      </div>
    );

    return (
      <div
        className={
          !open && parseInt(props.level) === 3
            ? `${css.treeMenu} ${css.topAndBottomBorder}`
            : css.treeMenu
        }
      >
        {props.node.name === "root" ||
        props.node.componentName === "ProfilePage" ? (
          <></>
        ) : (
          <div>{renderLink(magicDiv, linkInnerDivIconClassName)}</div>
        )}
        <ul className={ulClassName}>{childNodes}</ul>
      </div>
    );
  };

  return render();
};

export default TreeMenu;
