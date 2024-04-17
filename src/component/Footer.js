import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content flex justify-between flex-col xl:flex-row">
        <img src="cpmy-name.png" alt="" className="company-logo" />
        <div className="space-y-6  self-start address-details">
          <div className="flex space-x-2">
            <img src="address.png" alt="" />
            <span className="mt-1">Address</span>
          </div>
          <div className="flex space-x-2">
            <img src="phone.png" alt="" />
            <span className="mt-1">+91 1234567890</span>
          </div>
          <div className="flex space-x-3">
            <span className="mt-1.5">Social Media</span>
            <img src="linkedin.png" alt="" />
            <img src="youtube.png" alt="" />
            <img src="instagram.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 flex-col xl:flex-row">
        <ul className="flex justify-between basis-1/2 ">
          <li>Blogs</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Integrations</li>
        </ul>
        <span >Copyright © 2024 • ExpenseBook</span>
      </div>
    </div>
  );
};

export default Footer;
