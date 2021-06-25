import React from "react";
import SideNavigation from "./SideNavigation/SideNavigation";
import ContentPanel from "./ContentPanel/ContentPanel";

const Layout = (props) => {
  var sitemap = {
    name: "root",
    children: [
      {
        name: "ButtonExamples",
        url: "/ButtonExamples",
        componentName: "ButtonExamples",
        children: [],
      },
      {
        name: "CheckBoxExamples",
        url: "/CheckBoxExamples",
        componentName: "CheckBoxExamples",
        children: [],
      },
      {
        name: "CheckBoxLookupExamples",
        url: "/CheckBoxLookupExamples",
        componentName: "CheckBoxLookupExamples",
        children: [],
      },
      {
        name: "DateInputExamples",
        url: "/DateInputExamples",
        componentName: "DateInputExamples",
        children: [],
      },
      {
        name: "DropDownExamples",
        url: "/DropDownExamples",
        componentName: "DropDownExamples",
        children: [],
      },
      {
        name: "DropdownLookupExamples",
        url: "/DropdownLookupExamples",
        componentName: "DropdownLookupExamples",
        children: [],
      },
      {
        name: "IconExamples",
        url: "/IconExamples",
        componentName: "IconExamples",
        children: [],
      },
      {
        name: "IconButtonExamples",
        url: "/IconButtonExamples",
        componentName: "IconButtonExamples",
        children: [],
      },
      {
        name: "NumberInputExamples",
        url: "/NumberInputExamples",
        componentName: "NumberInputExamples",
        children: [],
      },
      {
        name: "PasswordInputExamples",
        url: "/PasswordInputExamples",
        componentName: "PasswordInputExamples",
        children: [],
      },
      {
        name: "TextAreaExamples",
        url: "/TextAreaExamples",
        componentName: "TextAreaExamples",
        children: [],
      },
      {
        name: "TextInputExamples",
        url: "/TextInputExamples",
        componentName: "TextInputExamples",
        children: [],
      },
      {
        name: "ToggleSwitchExamples",
        url: "/ToggleSwitchExamples",
        componentName: "ToggleSwitchExamples",
        children: [],
      },
      {
        name: "TransparentTextInputExamples",
        url: "/TransparentTextInputExamples",
        componentName: "TransparentTextInputExamples",
        children: [],
      },
      {
        name: "ComponentBoxExamples",
        url: "/ComponentBoxExamples",
        componentName: "ComponentBoxExamples",
        children: [],
      },
      {
        name: "ConfirmationFormExamples",
        url: "/ConfirmationFormExamples",
        componentName: "ConfirmationFormExamples",
        children: [],
      },
      {
        name: "DropdownMenuExamples",
        url: "/DropdownMenuExamples",
        componentName: "DropdownMenuExamples",
        children: [],
      },
      {
        name: "GridExamples",
        url: "/GridExamples",
        componentName: "GridExamples",
        children: [],
      },
    ],
  };

  return (
    <>
      <SideNavigation open={true} sitemap={sitemap}>
        <ContentPanel />
      </SideNavigation>
    </>
  );
};

export default Layout;
