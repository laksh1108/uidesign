import React from "react";

const Home = () => {
  return (
    <>
      <div className="banner">
        <p>The World’s Most Configurable</p>
        <header>Travel & Expense Management Software</header>
        <div className="mt-3">
          Configure <span className="any">any</span> rule. Enable a world class
          mobile experience for your users. Get seamless reporting &
          integrations. Inbuilt OCR expense scanning. Manage travel & non-travel
          expenses. Open APIs to connect with external systems.
        </div>
        <div className="input mt-5 flex justify-center space-x-3 ">
          <input type="text" placeholder="Name" className="name " />
          <input
            type="email"
            placeholder="Official email ID"
            className="email"
          />
          <button>Start trial</button>
        </div>
        <div className="trail flex justify-center ">
          <div>30 Days free trial</div>
          <li className="dot"></li>
          <div>Upto 10 users</div>
        </div>
      </div>
      <div className="icon-border">
        <p className="text-center enterprises">USED BY OVER 50 ENTERPRISES</p>
        <div className="icon flex justify-between">
          {Array(6)
            .fill()
            .map((e, index) => (
              <div className="icon-content">
                <img src="thread.png" alt="" />
              </div>
            ))}
        </div>
      </div>
      <div className="features">
        <p>Features that suit your needs</p>
        <div className="layout grid gap-4 xl:grid-cols-3 mt-5 ">
          <li className="flex flex-col ">
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Setup Employee Groups</p>
            </div>
            <span>
              Use any parameter to setup distinct employee groups to implement
              policies
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">The Definitive Rule Engine</p>
            </div>
            <span>
              Configure ANY policy - and if you can’t configure it, we promise
              to work on it for free
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Customized Reports</p>
            </div>
            <span>
              Setup the reports that you want using our seamless reporting
              engine.
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Superior Employee Experience</p>
            </div>
            <span>
              Manage all expenses and travel requests easily. Empower your
              employees with personalized reports
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Easy Integrations</p>
            </div>
            <span>
              Integrate with your upstream, HRMS or your downstream finance
              system to seamlessly deliver value through our Open APIs..
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Configurable Workflow</p>
            </div>
            <span>
              Configure approvals or rejections. Escalations and reports. At
              will. Setup new groups.
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Scan any Bill</p>
            </div>
            <span>
              The world’s best OCR system backs up this product. All data goes
              in. 99% success.
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">AI-Based Concierge</p>
            </div>
            <span>
              Ask the concierge to change things during your travel - and it
              will trigger relevant actions 24x7.
            </span>
          </li>
          <li>
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">AI-Assisted Trip Planning</p>
            </div>
            <span>
            Just tell us what you want to do in normal language and we will try and put together the best itinerary for you.
            </span>
          </li>
        </div>
      </div>
      <div className="integration mt-5">
         <header>Integration</header>  
         <ul className="grid xl:grid-cols-3 gap-4 mt-10">
          <li className="flex flex-col first">
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">HRMS Systems</p>
            </div>
            <span>
            We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API
            </span>
            <span>
            We are already deeply integrated with PeopleStrong and others are coming up
            </span>
          </li>
          <li className="flex flex-col middle">
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Finance Systems</p>
            </div>
            <span>
            Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis
            </span>
            <span>
            Open APIs available to connect.
            </span>
          </li>
          <li className="flex flex-col last">
            <div className="flex space-x-2">
              <img src="group.png" alt="" />
              <p className="self-center">Single Sign-on Systems</p>
            </div>
            <span>
            We can integrate to ensure that your users don’t have to log in multiple times into different logins.
            </span>
            <span>
             SSO is possible with any system that offers it.
            </span>
          </li>
         </ul>
      </div>
      <div className="customers hidden xl:block">
        <header>Our customers love us</header>
        <ul className="flex flex-col xl:flex-row xl: justify-between  mt-10">
            <li className="first">
                <p>ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding</p>
                <div className="flex space-x-2">
                    <img src="avatar.jpg" alt="" />
                    <div>
                        <span>Rohit Mehra</span>
                        <div className="position">CFO,XYZ</div>
                    </div>
                </div>
            </li>
            <li className="second">
                <p>ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding</p>
                <div className="flex space-x-2">
                    <img src="avatar.jpg" alt="" />
                    <div>
                        <span>Alan Turing</span>
                        <div className="position">CFO,XYZ</div>
                    </div>
                </div>
            </li>
            <li className="third">
                <p>ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.</p>
                <div className="flex space-x-2">
                    <img src="avatar.jpg" alt="" />
                    <div>
                        <span>Mark Jacob</span>
                        <div className="position">CFO,XYZ</div>
                    </div>
                </div>
            </li>
        </ul>
      </div>
      <div className="manage hidden xl:block">
        <header>Manage your travel and expenses the smart way!</header>
        <div className=" input space-x-3 space-y-3">
            <input type="text" placeholder="Name" className="name" />
            <input type="text" placeholder="Official email ID" className="email" />
            <button>Start trial</button>
        </div>
        <div className="flex justify-center mt-5 trail">
          <div>30 Days free trial</div>
          <li className="dot"></li>
          <div>Upto 10 users</div>
        </div>

      </div>
    </>
  );
};

export default Home;
