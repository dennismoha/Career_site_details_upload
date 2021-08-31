import React from "react";





import Settings from './Setttings'
import PrivateRoute from "./Routes/PrivateRoute";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StudentRegisterState from "./context/Register/StudentRegisterState";


import Profile_Settings from "./pages/Profile_Settings";
import { setAuthToken } from "./utils/SetAuthToken";
import Home from "./pages/Home";





if(localStorage.token){
  setAuthToken(localStorage.token)
}
export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <StudentRegisterState>
      <Router>
        <Switch>
          {/* <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>{" "} */}
          <Route exact path="/" component={Home} />
          <Settings>
            <PrivateRoute exact path="/profile" component={Profile_Settings} />
          </Settings>
        </Switch>{" "}
      </Router>
    </StudentRegisterState>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
