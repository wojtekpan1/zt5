import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ContactUsThankYouMessage from "./components/ContactUsThankYouMessage";
import HomeV1 from "./components/HomeV1";
import Dropdowns from "./components/Dropdowns";
import ContactUsSolutionSelected from "./components/ContactUsSolutionSelected";
import Solutions from "./components/Solutions";
import OurPartners from "./components/OurPartners";
import ContactUsSolutionSelected2 from "./components/ContactUsSolutionSelected2";
import Publications from "./components/Publications";
import OurClients from "./components/OurClients";
import Dropdowns2 from "./components/Dropdowns2";
import ContactUsEmptyForm from "./components/ContactUsEmptyForm";
import OurStory from "./components/OurStory";
import TeamMemberDetail from "./components/TeamMemberDetail";
import Dropdownsexpanded from "./components/Dropdownsexpanded";
import Dropdownsexpanded2 from "./components/Dropdownsexpanded2";
import HomeV12 from "./components/HomeV12";
import HomeV13 from "./components/HomeV13";
import Popup from "./components/Popup";
import PopulationHealth from "./components/PopulationHealth";
import News from "./components/News";
import CatalystS4 from "./components/CatalystS4";
import Popup2 from "./components/Popup2";
import ContactUsInquiryTypeDropdown from "./components/ContactUsInquiryTypeDropdown";
import Team from "./components/Team";
import ColorInspiration from "./components/ColorInspiration";
import Inspiration from "./components/Inspiration";
import Inspiration2 from "./components/Inspiration2";
import Inspiration3 from "./components/Inspiration3";
import PreferredOption1 from "./components/PreferredOption1";
import Frame6 from "./components/Frame6";
import Frame13 from "./components/Frame13";
import Frame8 from "./components/Frame8";
import Frame11 from "./components/Frame11";
import Frame9 from "./components/Frame9";
import Frame7 from "./components/Frame7";
import Frame10 from "./components/Frame10";
import Homepage from "./components/Homepage";
import HomepageOurSolutions from "./components/HomepageOurSolutions";
import HomepageMegaMenuDropDown from "./components/HomepageMegaMenuDropDown";
import PopulationHealth2 from "./components/PopulationHealth2";
import CatalystS42 from "./components/CatalystS42";
import CatalystS4HowItWorks from "./components/CatalystS4HowItWorks";
import Solution from "./components/Solution";
import OurPartners2 from "./components/OurPartners2";
import OurClients2 from "./components/OurClients2";
import InsightsOption01 from "./components/InsightsOption01";
import InsightsOption3 from "./components/InsightsOption3";
import InsightsOption4 from "./components/InsightsOption4";
import Team2 from "./components/Team2";
import TeamExpanded from "./components/TeamExpanded";
import OurStory2 from "./components/OurStory2";
import ContactUsEmptyForm2 from "./components/ContactUsEmptyForm2";
import ContactUsSelectQuestion2 from "./components/ContactUsSelectQuestion2";
import ThankYouMessage from "./components/ThankYouMessage";
import ContactUsSelectQuestion1 from "./components/ContactUsSelectQuestion1";
import HomeV14 from "./components/HomeV14";
import Frame184970 from "./components/Frame184970";
import HomeV15 from "./components/HomeV15";
import HomeV16 from "./components/HomeV16";
import HomeV2 from "./components/HomeV2";
import HomeMenu from "./components/HomeMenu";
import Dropdowns3 from "./components/Dropdowns3";
import PopulationHealth3 from "./components/PopulationHealth3";
import PopulationHealthcontactPopup from "./components/PopulationHealthcontactPopup";
import CatalystS4HowItWorks23 from "./components/CatalystS4HowItWorks23";
import TeamdetailPopup from "./components/TeamdetailPopup";
import TeamMemberDetail2 from "./components/TeamMemberDetail2";
import News3 from "./components/News3";
import Newspopup from "./components/Newspopup";
import Popup3 from "./components/Popup3";
import ContactUsEmptyForm3 from "./components/ContactUsEmptyForm3";
import ContactUsSolutionSelected3 from "./components/ContactUsSolutionSelected3";
import Frame184969 from "./components/Frame184969";
import Desktop1 from "./components/Desktop1";
import Dropdownsexpanded3 from "./components/Dropdownsexpanded3";
import Dropdownsexpanded22 from "./components/Dropdownsexpanded22";
import Dropdowns4 from "./components/Dropdowns4";
import Frame1 from "./components/Frame1";
import Home from "./components/Home";
import Home2 from "./components/Home2";
import Solutionhovering from "./components/Solutionhovering";
import ContactUs from "./components/ContactUs";
import OurPartners3 from "./components/OurPartners3";
import PDP from "./components/PDP";
import PDP02 from "./components/PDP02";
import PLP from "./components/PLP";
import OurClients3 from "./components/OurClients3";
import Team3 from "./components/Team3";
import OurStory3 from "./components/OurStory3";
import Dropdowns5 from "./components/Dropdowns5";
import ContactUs02 from "./components/ContactUs02";
import ContactUs3 from "./components/ContactUs3";
import ContactUs4 from "./components/ContactUs4";
import ContactUs5 from "./components/ContactUs5";
import ContactUs6 from "./components/ContactUs6";
import ContactUs7 from "./components/ContactUs7";
import ContactUs8 from "./components/ContactUs8";
import ContactUs9 from "./components/ContactUs9";
import OurPartners02 from "./components/OurPartners02";
import InsightsOption02 from "./components/InsightsOption02";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Banner5 from "./components/Banner5";
import Banner6 from "./components/Banner6";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact-us-thank-you-message">
          <ContactUsThankYouMessage
            thankYouYourInqu={
              <React.Fragment>
                Thank you, your inquiry has been sent. <br />
                We will get back to you in a few days.
              </React.Fragment>
            }
            backgroundProps={contactUsThankYouMessageData.backgroundProps}
            frame107Props={contactUsThankYouMessageData.frame107Props}
            cTAProps={contactUsThankYouMessageData.cTAProps}
            contactInfoProps={contactUsThankYouMessageData.contactInfoProps}
            footerProps={contactUsThankYouMessageData.footerProps}
          />
        </Route>
        <Route path="/:path(|homeu95v1-1)">
          <HomeV1 {...homeV1Data} />
        </Route>
        <Route path="/dropdowns-1">
          <Dropdowns cantFindWhatYouNeed="Can’t find what you need?" level1Props={dropdownsData.level1Props} />
        </Route>
        <Route path="/contact-us-solution-selected-1">
          <ContactUsSolutionSelected {...contactUsSolutionSelectedData} />
        </Route>
        <Route path="/solutions">
          <Solutions {...solutionsData} />
        </Route>
        <Route path="/our-partners">
          <OurPartners {...ourPartnersData} />
        </Route>
        <Route path="/contact-us-solution-selected-2">
          <ContactUsSolutionSelected2 {...contactUsSolutionSelected2Data} />
        </Route>
        <Route path="/publications">
          <Publications {...publicationsData} />
        </Route>
        <Route path="/our-clients">
          <OurClients {...ourClientsData} />
        </Route>
        <Route path="/dropdowns-2">
          <Dropdowns2
            category21Props={dropdowns2Data.category21Props}
            category22Props={dropdowns2Data.category22Props}
          />
        </Route>
        <Route path="/contact-us-empty-form">
          <ContactUsEmptyForm {...contactUsEmptyFormData} />
        </Route>
        <Route path="/our-story">
          <OurStory {...ourStoryData} />
        </Route>
        <Route path="/team-member-detail">
          <TeamMemberDetail
            name="Ronald Richards"
            position="Position"
            loremIpsumDolorSi1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat."
            loremIpsumDolorSi2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat."
            linkedin="Linkedin"
          />
        </Route>
        <Route path="/dropdowns-u40expandedu41">
          <Dropdownsexpanded
            catalystS4="Catalyst S4"
            loremIpsumDolorSi="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            level1Props={dropdownsexpandedData.level1Props}
            group8Props={dropdownsexpandedData.group8Props}
          />
        </Route>
        <Route path="/dropdowns-u40expandedu41-2">
          <Dropdownsexpanded2
            level1Props={dropdownsexpanded21Data.level1Props}
            group81Props={dropdownsexpanded21Data.group81Props}
            group82Props={dropdownsexpanded21Data.group82Props}
            group83Props={dropdownsexpanded21Data.group83Props}
          />
        </Route>
        <Route path="/dropdowns-u40expandedu41-3">
          <Dropdownsexpanded2
            level1Props={dropdownsexpanded22Data.level1Props}
            group81Props={dropdownsexpanded22Data.group81Props}
            group82Props={dropdownsexpanded22Data.group82Props}
            group83Props={dropdownsexpanded22Data.group83Props}
          />
        </Route>
        <Route path="/dropdowns-u40expandedu41-4">
          <Dropdownsexpanded2
            level1Props={dropdownsexpanded23Data.level1Props}
            group81Props={dropdownsexpanded23Data.group81Props}
            group82Props={dropdownsexpanded23Data.group82Props}
            group83Props={dropdownsexpanded23Data.group83Props}
          />
        </Route>
        <Route path="/homeu95v1-2">
          <HomeV12 {...homeV12Data} />
        </Route>
        <Route path="/homeu95v1-3">
          <HomeV13 {...homeV13Data} />
        </Route>
        <Route path="/popup-1">
          <Popup
            titleLoremIpsumD={
              <React.Fragment>
                Title: Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit
              </React.Fragment>
            }
            address="28 DEC 2022"
            linkToNews="Link to news"
            rectangle12751="/img/rectangle-12751-12.png"
          />
        </Route>
        <Route path="/population-health">
          <PopulationHealth {...populationHealthData} />
        </Route>
        <Route path="/news">
          <News {...newsData} />
        </Route>
        <Route path="/catalyst-s4">
          <CatalystS4 {...catalystS4Data} />
        </Route>
        <Route path="/popup-2">
          <Popup2 {...popup2Data} />
        </Route>
        <Route path="/contact-us-inquiry-type-dropdown">
          <ContactUsInquiryTypeDropdown {...contactUsInquiryTypeDropdownData} />
        </Route>
        <Route path="/team">
          <Team {...teamData} />
        </Route>
        <Route path="/color-inspiration">
          <ColorInspiration
            spanText="Color Inspiration"
            screenshot20221206At10411="/img/screenshot-2022-12-06-at-10-41-1-1@2x.png"
            screenshot20221206At10421="/img/screenshot-2022-12-06-at-10-42-1-1@2x.png"
            screenshot20221206At10422="/img/screenshot-2022-12-06-at-10-42-2-1@2x.png"
            screenshot20221206At10431="/img/screenshot-2022-12-06-at-10-43-1-1@2x.png"
            screenshot20221206At10451="/img/screenshot-2022-12-06-at-10-45-1-1@2x.png"
            new_ActlogoV51="/img/new-actlogo-v5-1-5@2x.png"
          />
        </Route>
        <Route path="/inspiration-3">
          <Inspiration />
        </Route>
        <Route path="/inspiration">
          <Inspiration2
            spanText="Color options"
            new_ActlogoV51="/img/new-actlogo-v5-1-5@2x.png"
            image9="/img/image-9-1@2x.png"
            image10="/img/image-10-1@2x.png"
            image14="/img/image-14-1@2x.png"
            screenshot20221207At1261="/img/screenshot-2022-12-07-at-1-26-1-1@2x.png"
            screenshot20221207At1262="/img/screenshot-2022-12-07-at-1-26-2-1@2x.png"
          />
        </Route>
        <Route path="/inspiration2">
          <Inspiration3 {...inspiration3Data} />
        </Route>
        <Route path="/preferred-option-1">
          <PreferredOption1
            spanText="Preferred option 1"
            screenshot20221207At1152="/img/screenshot-2022-12-07-at-1-15-2-2@2x.png"
          />
        </Route>
        <Route path="/preferred-option-2">
          <PreferredOption1
            spanText="Preferred option 2"
            screenshot20221207At1152="/img/screenshot-2022-12-07-at-1-15-3-2@2x.png"
            className="preferred-option-2"
          />
        </Route>
        <Route path="/preferred-option-3-2">
          <PreferredOption1
            spanText="Preferred option 3"
            screenshot20221207At1152="/img/screenshot-2022-12-07-at-1-15-1-3@2x.png"
            className="preferred-option-3-2"
          />
        </Route>
        <Route path="/frame-6">
          <Frame6>WIREFRAME</Frame6>
        </Route>
        <Route path="/frame-13">
          <Frame13>HOMEPAGE</Frame13>
        </Route>
        <Route path="/frame-8">
          <Frame8>PARTNERS & CLIENTS</Frame8>
        </Route>
        <Route path="/frame-11">
          <Frame11>CONTACT US</Frame11>
        </Route>
        <Route path="/frame-9">
          <Frame9>INSIGHTS</Frame9>
        </Route>
        <Route path="/frame-7">
          <Frame7>SOLUTIONS</Frame7>
        </Route>
        <Route path="/frame-10">
          <Frame10>ABOUT US</Frame10>
        </Route>
        <Route path="/homepage">
          <Homepage {...homepageData} />
        </Route>
        <Route path="/homepage-our-solutions">
          <HomepageOurSolutions {...homepageOurSolutionsData} />
        </Route>
        <Route path="/homepage-mega-menu-drop-down">
          <HomepageMegaMenuDropDown {...homepageMegaMenuDropDownData} />
        </Route>
        <Route path="/population-health-3">
          <PopulationHealth2 {...populationHealth2Data} />
        </Route>
        <Route path="/catalyst-s4-2">
          <CatalystS42
            spanText1="LOGO"
            spanText2="Contact us"
            spanText3="chevron-right"
            spanText4="chevron-right"
            spanText5="Catalyst S4"
            howProps={catalystS42Data.howProps}
            footer2Props={catalystS42Data.footer2Props}
          />
        </Route>
        <Route path="/catalyst-s4-how-it-works">
          <CatalystS4HowItWorks
            spanText1="LOGO"
            spanText2="Contact us"
            spanText3="chevron-right"
            spanText4="chevron-right"
            spanText5="Catalyst S4"
            howProps={catalystS4HowItWorksData.howProps}
            footer2Props={catalystS4HowItWorksData.footer2Props}
          />
        </Route>
        <Route path="/solution">
          <Solution {...solutionData} />
        </Route>
        <Route path="/our-partners-3">
          <OurPartners2 {...ourPartners2Data} />
        </Route>
        <Route path="/our-clients-3">
          <OurClients2 {...ourClients2Data} />
        </Route>
        <Route path="/insights-option-01">
          <InsightsOption01 {...insightsOption01Data} />
        </Route>
        <Route path="/insights-option-3">
          <InsightsOption3 {...insightsOption3Data} />
        </Route>
        <Route path="/insights-option-4">
          <InsightsOption4 {...insightsOption4Data} />
        </Route>
        <Route path="/team-3">
          <Team2
            spanText1="LOGO"
            spanText2="Contact us"
            spanText3="Our team"
            spanText4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a."
            frame1042Props={team2Data.frame1042Props}
            footer2Props={team2Data.footer2Props}
          />
        </Route>
        <Route path="/team-expanded">
          <TeamExpanded {...teamExpandedData} />
        </Route>
        <Route path="/our-story-3">
          <OurStory2 {...ourStory2Data} />
        </Route>
        <Route path="/contact-us-empty-form-2">
          <ContactUsEmptyForm2 {...contactUsEmptyForm2Data} />
        </Route>
        <Route path="/contact-us-select-question-2">
          <ContactUsSelectQuestion2 {...contactUsSelectQuestion2Data} />
        </Route>
        <Route path="/thank-you-message">
          <ThankYouMessage {...thankYouMessageData} />
        </Route>
        <Route path="/contact-us-select-question-1">
          <ContactUsSelectQuestion1 {...contactUsSelectQuestion1Data} />
        </Route>
        <Route path="/home-v1-3">
          <HomeV14 {...homeV14Data} />
        </Route>
        <Route path="/frame-184970">
          <Frame184970
            spanText1="Heading 1"
            spanText2="Heading 2"
            spanText3="Heading 3"
            spanText4="Body 1"
            spanText5="Body 1"
          />
        </Route>
        <Route path="/homeu95v1">
          <HomeV15 {...homeV15Data} />
        </Route>
        <Route path="/homeu95v12">
          <HomeV16 {...homeV16Data} />
        </Route>
        <Route path="/home-v2">
          <HomeV2 {...homeV2Data} />
        </Route>
        <Route path="/home-menu">
          <HomeMenu {...homeMenuData} />
        </Route>
        <Route path="/dropdowns-4">
          <Dropdowns3 level2Props={dropdowns31Data.level2Props} />
        </Route>
        <Route path="/population-health2">
          <PopulationHealth3 {...populationHealth3Data} />
        </Route>
        <Route path="/population-health-contact-popup">
          <PopulationHealthcontactPopup {...populationHealthcontactPopupData} />
        </Route>
        <Route path="/catalyst-s4-how-it-works-2-3-2">
          <CatalystS4HowItWorks23 {...catalystS4HowItWorks231Data} />
        </Route>
        <Route path="/catalyst-s4u95how-it-works-2u473">
          <CatalystS4HowItWorks23 {...catalystS4HowItWorks232Data} />
        </Route>
        <Route path="/team-detail-popup">
          <TeamdetailPopup {...teamdetailPopupData} />
        </Route>
        <Route path="/team-member-detail-2">
          <TeamMemberDetail2
            spanText1="Ronald Richards"
            spanText2="Position"
            spanText3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat."
            spanText4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat."
            spanText5="Linkedin"
            rectangle20="/img/rectangle-20-25@2x.png"
            x="/img/x@2x.png"
          />
        </Route>
        <Route path="/news-2">
          <News3 {...news3Data} />
        </Route>
        <Route path="/news-popup">
          <Newspopup {...newspopupData} />
        </Route>
        <Route path="/popup">
          <Popup3 x="/img/x@2x.png" frame184953Props={popup3Data.frame184953Props} />
        </Route>
        <Route path="/contact-us-u45-empty-form">
          <ContactUsEmptyForm3 {...contactUsEmptyForm3Data} />
        </Route>
        <Route path="/contact-us-u45-solution-selected">
          <ContactUsSolutionSelected3 {...contactUsSolutionSelected3Data} />
        </Route>
        <Route path="/frame-184969">
          <Frame184969 />
        </Route>
        <Route path="/desktop-1">
          <Desktop1 {...desktop1Data} />
        </Route>
        <Route path="/preferred-option-3">
          <PreferredOption1
            spanText="Preferred option 3"
            screenshot20221207At1152="/img/screenshot-2022-12-07-at-1-15-1-3@2x.png"
            className="preferred-option-3"
          />
        </Route>
        <Route path="/dropdowns">
          <Dropdowns3 level2Props={dropdowns32Data.level2Props} />
        </Route>
        <Route path="/dropdowns-expanded">
          <Dropdownsexpanded3
            line1="/img/line-1-3@2x.png"
            level2Props={dropdownsexpanded3Data.level2Props}
            group721Props={dropdownsexpanded3Data.group721Props}
            group722Props={dropdownsexpanded3Data.group722Props}
          />
        </Route>
        <Route path="/dropdowns-expanded-2">
          <Dropdownsexpanded22
            level2Props={dropdownsexpanded222Data.level2Props}
            group721Props={dropdownsexpanded222Data.group721Props}
            group722Props={dropdownsexpanded222Data.group722Props}
            group723Props={dropdownsexpanded222Data.group723Props}
          />
        </Route>
        <Route path="/dropdowns-expanded-3">
          <Dropdownsexpanded22
            level2Props={dropdownsexpanded223Data.level2Props}
            group721Props={dropdownsexpanded223Data.group721Props}
            group722Props={dropdownsexpanded223Data.group722Props}
            group723Props={dropdownsexpanded223Data.group723Props}
          />
        </Route>
        <Route path="/dropdowns-expanded-4">
          <Dropdownsexpanded22
            level2Props={dropdownsexpanded224Data.level2Props}
            group721Props={dropdownsexpanded224Data.group721Props}
            group722Props={dropdownsexpanded224Data.group722Props}
            group723Props={dropdownsexpanded224Data.group723Props}
          />
        </Route>
        <Route path="/dropdowns2">
          <Dropdowns4
            category121Props={dropdowns4Data.category121Props}
            category122Props={dropdowns4Data.category122Props}
          />
        </Route>
        <Route path="/frame-1">
          <Frame1>DRAFTING</Frame1>
        </Route>
        <Route path="/home-2">
          <Home {...homeData} />
        </Route>
        <Route path="/home">
          <Home2 {...home2Data} />
        </Route>
        <Route path="/solution-hovering">
          <Solutionhovering {...solutionhoveringData} />
        </Route>
        <Route path="/contact-us">
          <ContactUs {...contactUsData} />
        </Route>
        <Route path="/our-partners2">
          <OurPartners3 {...ourPartners3Data} />
        </Route>
        <Route path="/pdp">
          <PDP {...pDPData} />
        </Route>
        <Route path="/pdp-02">
          <PDP02 {...pDP02Data} />
        </Route>
        <Route path="/plp">
          <PLP {...pLPData} />
        </Route>
        <Route path="/our-clients2">
          <OurClients3 {...ourClients3Data} />
        </Route>
        <Route path="/team2">
          <Team3 {...team3Data} />
        </Route>
        <Route path="/our-story2">
          <OurStory3 {...ourStory3Data} />
        </Route>
        <Route path="/dropdowns3">
          <Dropdowns5
            line1="/img/line-1-7@2x.png"
            group1Props={dropdowns5Data.group1Props}
            group21Props={dropdowns5Data.group21Props}
            group5Props={dropdowns5Data.group5Props}
            group3Props={dropdowns5Data.group3Props}
            group22Props={dropdowns5Data.group22Props}
            group10Props={dropdowns5Data.group10Props}
          />
        </Route>
        <Route path="/contact-us-02">
          <ContactUs02 {...contactUs02Data} />
        </Route>
        <Route path="/contact-us-3">
          <ContactUs3 {...contactUs3Data} />
        </Route>
        <Route path="/contact-us-4">
          <ContactUs4 {...contactUs4Data} />
        </Route>
        <Route path="/contact-us-5">
          <ContactUs5 {...contactUs5Data} />
        </Route>
        <Route path="/contact-us-6">
          <ContactUs6 {...contactUs6Data} />
        </Route>
        <Route path="/contact-us-7">
          <ContactUs7 {...contactUs7Data} />
        </Route>
        <Route path="/contact-us-8">
          <ContactUs8 {...contactUs8Data} />
        </Route>
        <Route path="/contact-us-9">
          <ContactUs9
            spanText5="Contact us"
            group62Props={contactUs91Data.group62Props}
            group6431Props={contactUs91Data.group6431Props}
            group6432Props={contactUs91Data.group6432Props}
            footer5Props={contactUs91Data.footer5Props}
          />
        </Route>
        <Route path="/contact-us-10">
          <ContactUs9
            spanText5="THANK YOU"
            className="contact-us-10-1"
            group62Props={contactUs92Data.group62Props}
            group6431Props={contactUs92Data.group6431Props}
            group6432Props={contactUs92Data.group6432Props}
            footer5Props={contactUs92Data.footer5Props}
          />
        </Route>
        <Route path="/our-partners-02">
          <OurPartners02 {...ourPartners02Data} />
        </Route>
        <Route path="/insights-option-02">
          <InsightsOption02 {...insightsOption02Data} />
        </Route>
        <Route path="/banner-4">
          <Banner3
            logoIcon="/img/logo-icon-1@2x.png"
            frame893Props={banner32Data.frame893Props}
            cards4Props={banner32Data.cards4Props}
            header3Props={banner32Data.header3Props}
          />
        </Route>
        <Route path="/banner">
          <Banner4
            logoIcon="/img/logo-icon-1@2x.png"
            frame893Props={banner4Data.frame893Props}
            cards4Props={banner4Data.cards4Props}
            header3Props={banner4Data.header3Props}
          />
        </Route>
        <Route path="/banner2">
          <Banner5
            banner="/img/hans-reniers-lqgjcmy5qcm-unsplash-1-25@2x.png"
            logoIcon="/img/logo-icon-3@2x.png"
            frame893Props={banner5Data.frame893Props}
            cards4Props={banner5Data.cards4Props}
            header3Props={banner5Data.header3Props}
          />
        </Route>
        <Route path="/banner3">
          <Banner6
            banner="/img/hans-reniers-lqgjcmy5qcm-unsplash-1-26@2x.png"
            header3Props={banner6Data.header3Props}
          />
        </Route>
        <Route path="/inspiration-2">
          <Inspiration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const background1Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame881Data = {
    title: "Contact us",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1071Data = {
    frame88Props: frame881Data,
};

const cTA1Data = {
    children: "Send another inquiry",
};

const contactInfo1Data = {
    group: "/img/group.png",
};

const twitter2Data = {
    className: "frame-105-item-17",
};

const footer1Data = {
    logo: "/img/logo-1@2x.png",
    iconInstagram: "/img/instagram@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter2Data,
};

const contactUsThankYouMessageData = {
    backgroundProps: background1Data,
    frame107Props: frame1071Data,
    cTAProps: cTA1Data,
    contactInfoProps: contactInfo1Data,
    footerProps: footer1Data,
};

const header2Data = {
    className: "header-1",
};

const rightContent1Data = {
    ellipse9: "/img/ellipse-9.png",
    ellipse10: "/img/ellipse-10@2x.png",
};

const container1Data = {
    rightContentProps: rightContent1Data,
};

const rightContent21Data = {
    ellipse9: "/img/ellipse-9-1.png",
    ellipse10: "/img/ellipse-10-1@2x.png",
};

const container21Data = {
    rightContent2Props: rightContent21Data,
};

const tab1Data = {
    children: "Population health",
};

const tab2Data = {
    children: "Physician support",
};

const tabs1Data = {
    tab1Props: tab1Data,
    tab2Props: tab2Data,
};

const cTA21Data = {
    children: "View all solutions",
};

const card41Data = {
    src: "/img/image-11@2x.png",
    className: "",
};

const card51Data = {
    src: "/img/image-12@2x.png",
    className: "",
};

const card61Data = {
    src: "/img/image-14@2x.png",
    className: "",
};

const card71Data = {
    src: "/img/image-15@2x.png",
    className: "",
};

const card81Data = {
    src: "/img/image-10@2x.png",
    className: "",
};

const cards21Data = {
    screenshot20230109At8461: "/img/screenshot-2023-01-09-at-8-46-1@2x.png",
    card4Props: card41Data,
    card5Props: card51Data,
    card6Props: card61Data,
    card7Props: card71Data,
    card8Props: card81Data,
};

const cTA22Data = {
    children: "Become a partner",
};

const container51Data = {
    wantATailoredSolutionForYou: "Want a tailored solution for you?",
    icon: "/img/icon.png",
};

const twitter4Data = {
    className: "frame-105-1-item",
};

const footer2Data = {
    logo: "/img/logo-3@4x.png",
    iconInstagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-1@2x.png",
    className: "footer-1",
    twitterProps: twitter4Data,
};

const homeV1Data = {
    banner: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-1.png",
    ourSolutions: "Our solutions",
    loremIpsumDolorSi1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    ourPartners: "Our partners",
    loremIpsumDolorSi2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    caretcircleleft: "",
    caretcircleright: "",
    headerProps: header2Data,
    containerProps: container1Data,
    container2Props: container21Data,
    tabsProps: tabs1Data,
    cTA21Props: cTA21Data,
    cards2Props: cards21Data,
    cTA22Props: cTA22Data,
    container5Props: container51Data,
    footerProps: footer2Data,
};

const category1Data = {
    populationHealth: "Population Health",
};

const category2Data = {
    populationHealth: "Hospitals & Clinics",
    className: "category",
};

const category3Data = {
    populationHealth: "Physician Support",
    className: "category",
};

const category4Data = {
    populationHealth: "Patient Engagement",
    className: "category",
};

const level11Data = {
    category1Props: category1Data,
    category2Props: category2Data,
    category3Props: category3Data,
    category4Props: category4Data,
};

const dropdownsData = {
    level1Props: level11Data,
};

const background2Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame882Data = {
    title: "Contact us",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1072Data = {
    frame88Props: frame882Data,
};

const group581Data = {
    solution: "Solution",
};

const group641Data = {
    children: "John Le",
};

const group642Data = {
    children: "johnle@mail.co",
};

const group643Data = {
    children: "000-000-000",
};

const cTA23Data = {
    children: "Send",
    className: "cta-7",
};

const contactInfo2Data = {
    group: "/img/group-1.png",
};

const twitter6Data = {
    className: "frame-105-2-item",
};

const footer3Data = {
    logo: "/img/logo-6@2x.png",
    iconInstagram: "/img/instagram-2@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter6Data,
};

const contactUsSolutionSelectedData = {
    placeAnInquiry: "Place an inquiry",
    catalystS4: "Catalyst S4",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    backgroundProps: background2Data,
    frame107Props: frame1072Data,
    group58Props: group581Data,
    group641Props: group641Data,
    group642Props: group642Data,
    group643Props: group643Data,
    cTA2Props: cTA23Data,
    contactInfoProps: contactInfo2Data,
    footerProps: footer3Data,
};

const background3Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-3.png",
    className: "background-1",
};

const frame883Data = {
    title: "Solutions",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1073Data = {
    frame88Props: frame883Data,
};

const container52Data = {
    wantATailoredSolutionForYou: "Want a tailored solution for you?",
    icon: "/img/icon-1.png",
};

const flexContainerI2221293816826875Data = {
    className: "flex-container-i182234",
};

const cardTestimonials22Data = {
    flexContainerI222129381682687Props: flexContainerI2221293816826875Data,
};

const flexContainerI2221293816826876Data = {
    className: "flex-container-i182234",
};

const cardTestimonials23Data = {
    flexContainerI222129381682687Props: flexContainerI2221293816826876Data,
};

const flexContainerI2221293816826877Data = {
    className: "flex-container-i182234",
};

const cardTestimonials24Data = {
    flexContainerI222129381682687Props: flexContainerI2221293816826877Data,
};

const flexContainerI2221293816826878Data = {
    className: "flex-container-i182234",
};

const cardTestimonials25Data = {
    flexContainerI222129381682687Props: flexContainerI2221293816826878Data,
};

const testimonials1Data = {
    ourClientsWords: "Our clients’ words",
    cardTestimonials21Props: cardTestimonials22Data,
    cardTestimonials22Props: cardTestimonials23Data,
    cardTestimonials23Props: cardTestimonials24Data,
    cardTestimonials24Props: cardTestimonials25Data,
};

const twitter8Data = {
    className: "frame-105-3-item",
};

const footer4Data = {
    logo: "/img/logo-8@2x.png",
    iconInstagram: "/img/instagram-2@2x.png",
    youtube: "/img/youtube@2x.png",
    className: "footer-3",
    twitterProps: twitter8Data,
};

const solutionsData = {
    place: "Home",
    solutions: "Solutions",
    rectangle321: "/img/rectangle-32-2.png",
    populationHealth: "Population Health",
    catalystS4: "Catalyst S4",
    catalystResearch: "Catalyst Research",
    rectangle322: "/img/rectangle-32-1.png",
    hospitalsAndClinics: "Hospitals and Clinics",
    catalystValueSolutions: "Catalyst Value Solutions",
    sectra: "SECTRA",
    catalystTelemed: "Catalyst Telemed",
    rectangle323: "/img/rectangle-32-3.png",
    physicianSupport: "Physician Support",
    catalystEncounter: "Catalyst Encounter",
    aircoder: "Aircoder",
    curematch: "Curematch",
    rectangle324: "/img/rectangle-32-4.png",
    patientEngagement: "Patient Engagement",
    catalystEngage: "Catalyst Engage",
    catalystTriage: "Catalyst Triage",
    genieHealth: "Genie Health",
    backgroundProps: background3Data,
    frame107Props: frame1073Data,
    container5Props: container52Data,
    testimonialsProps: testimonials1Data,
    footerProps: footer4Data,
};

const background4Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame884Data = {
    title: "Our partners",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1074Data = {
    frame88Props: frame884Data,
};

const cTA4Data = {
    children: "Become a partner",
    className: "cta-1",
};

const container61Data = {
    cTAProps: cTA4Data,
};

const flexContainerI2221293816826879Data = {
    className: "flex-container-i184889",
};

const cardTestimonials26Data = {
    flexContainerI222129381682687Props: flexContainerI2221293816826879Data,
};

const flexContainerI22212938168268710Data = {
    className: "flex-container-i184889",
};

const cardTestimonials27Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268710Data,
};

const flexContainerI22212938168268711Data = {
    className: "flex-container-i184889",
};

const cardTestimonials28Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268711Data,
};

const flexContainerI22212938168268712Data = {
    className: "flex-container-i184889",
};

const cardTestimonials29Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268712Data,
};

const testimonials2Data = {
    ourClientsWords: "Our partners’ words",
    className: "container-14",
    cardTestimonials21Props: cardTestimonials26Data,
    cardTestimonials22Props: cardTestimonials27Data,
    cardTestimonials23Props: cardTestimonials28Data,
    cardTestimonials24Props: cardTestimonials29Data,
};

const twitter10Data = {
    className: "frame-105-4-item",
};

const footer5Data = {
    logo: "/img/logo-10@2x.png",
    iconInstagram: "/img/instagram-4@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitterProps: twitter10Data,
};

const ourPartnersData = {
    place: "Home",
    partners: "Partners",
    solutionPartners: "Solution partners",
    technologyPartners: "Technology partners",
    researchPartners: "Research partners",
    ecosystemExpansionPartners: "Ecosystem expansion partners",
    backgroundProps: background4Data,
    frame107Props: frame1074Data,
    container6Props: container61Data,
    testimonialsProps: testimonials2Data,
    footerProps: footer5Data,
};

const background5Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame885Data = {
    title: "Contact us",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1075Data = {
    frame88Props: frame885Data,
};

const group582Data = {
    solution: "Solution",
};

const group6422Data = {
    children: "Name*",
};

const group6423Data = {
    children: "Email*",
};

const group6424Data = {
    children: "Phone number",
};

const group6425Data = {
    children: "Comment",
    className: "group-69-1",
};

const cTA5Data = {
    children: "Send",
    className: "cta-2",
};

const contactInfo3Data = {
    group: "/img/group-1.png",
};

const twitter12Data = {
    className: "frame-105-5-item",
};

const footer6Data = {
    logo: "/img/logo-1@2x.png",
    iconInstagram: "/img/instagram@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter12Data,
};

const contactUsSolutionSelected2Data = {
    placeAnInquiry: "Place an inquiry",
    whatSolutionsAreYouLookingFor: "What solutions are you looking for?",
    backgroundProps: background5Data,
    frame107Props: frame1075Data,
    group58Props: group582Data,
    group6421Props: group6422Data,
    group6422Props: group6423Data,
    group6423Props: group6424Data,
    group6424Props: group6425Data,
    cTAProps: cTA5Data,
    contactInfoProps: contactInfo3Data,
    footerProps: footer6Data,
};

const background6Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame886Data = {
    title: "Insights",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1076Data = {
    frame88Props: frame886Data,
};

const readMore1Data = {
    arrowsleftright: "",
};

const frame1211Data = {
    rectangle12751: "/img/rectangle-12751-2@2x.png",
};

const frame1212Data = {
    rectangle12751: "/img/rectangle-12751-3@2x.png",
};

const list1Data = {
    frame1211Props: frame1211Data,
    frame1212Props: frame1212Data,
};

const readMore2Data = {
    arrowsleftright: "/img/arrowsleftright.svg",
};

const frame1213Data = {
    rectangle12751: "/img/rectangle-12751-4@2x.png",
};

const frame1214Data = {
    rectangle12751: "/img/rectangle-12751-5@2x.png",
};

const frame1215Data = {
    rectangle12751: "/img/rectangle-12751-6@2x.png",
};

const list21Data = {
    frame1211Props: frame1213Data,
    frame1212Props: frame1214Data,
    frame1213Props: frame1215Data,
};

const readMore3Data = {
    arrowsleftright: "/img/arrowsleftright.svg",
};

const frame1216Data = {
    rectangle12751: "/img/rectangle-12751-7@2x.png",
};

const frame1217Data = {
    rectangle12751: "/img/rectangle-12751-8@2x.png",
};

const frame1218Data = {
    rectangle12751: "/img/rectangle-12751-9@2x.png",
};

const list22Data = {
    frame1211Props: frame1216Data,
    frame1212Props: frame1217Data,
    frame1213Props: frame1218Data,
};

const twitter14Data = {
    className: "frame-105-6-item",
};

const footer7Data = {
    logo: "/img/logo-1@2x.png",
    iconInstagram: "/img/instagram@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter14Data,
};

const publicationsData = {
    place: "Home",
    insights: "Insights",
    inTheNews: "In the news",
    researchPublications: "Research publications",
    blogs: "Blogs",
    backgroundProps: background6Data,
    frame107Props: frame1076Data,
    readMore1Props: readMore1Data,
    listProps: list1Data,
    readMore2Props: readMore2Data,
    list21Props: list21Data,
    readMore3Props: readMore3Data,
    list22Props: list22Data,
    footerProps: footer7Data,
};

const background7Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame887Data = {
    title: "Our clients",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1077Data = {
    frame88Props: frame887Data,
};

const cTA6Data = {
    children: "Become a partner",
    className: "cta-1",
};

const container62Data = {
    cTAProps: cTA6Data,
};

const flexContainerI22212938168268713Data = {
    className: "flex-container-i184896",
};

const cardTestimonials210Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268713Data,
};

const flexContainerI22212938168268714Data = {
    className: "flex-container-i184896",
};

const cardTestimonials211Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268714Data,
};

const flexContainerI22212938168268715Data = {
    className: "flex-container-i184896",
};

const cardTestimonials212Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268715Data,
};

const flexContainerI22212938168268716Data = {
    className: "flex-container-i184896",
};

const cardTestimonials213Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268716Data,
};

const testimonials3Data = {
    ourClientsWords: "Our clients’ words",
    className: "container-15",
    cardTestimonials21Props: cardTestimonials210Data,
    cardTestimonials22Props: cardTestimonials211Data,
    cardTestimonials23Props: cardTestimonials212Data,
    cardTestimonials24Props: cardTestimonials213Data,
};

const twitter16Data = {
    className: "frame-105-7-item",
};

const footer8Data = {
    logo: "/img/logo-1@2x.png",
    iconInstagram: "/img/instagram@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter16Data,
};

const ourClientsData = {
    place: "Home",
    clients: "Clients",
    hospitalClients: "Hospital clients",
    governmentClients: "Government clients",
    backgroundProps: background7Data,
    frame107Props: frame1077Data,
    container6Props: container62Data,
    testimonialsProps: testimonials3Data,
    footerProps: footer8Data,
};

const category22Data = {
    populationHealth: "Our story",
};

const category23Data = {
    populationHealth: "Our team",
    className: "category-6",
};

const dropdowns2Data = {
    category21Props: category22Data,
    category22Props: category23Data,
};

const background8Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame888Data = {
    title: "Contact us",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1078Data = {
    frame88Props: frame888Data,
};

const group6426Data = {
    children: "Name*",
};

const group6427Data = {
    children: "Email*",
};

const group6428Data = {
    children: "Phone number",
};

const group6429Data = {
    children: "Comment",
    className: "group-69-2",
};

const cTA7Data = {
    children: "Send",
    className: "cta-1",
};

const contactInfo4Data = {
    group: "/img/group-1.png",
};

const twitter18Data = {
    className: "frame-105-8-item",
};

const footer9Data = {
    logo: "/img/logo-1@2x.png",
    iconInstagram: "/img/instagram@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter18Data,
};

const contactUsEmptyFormData = {
    placeAnInquiry: "Place an inquiry",
    backgroundProps: background8Data,
    frame107Props: frame1078Data,
    group6421Props: group6426Data,
    group6422Props: group6427Data,
    group6423Props: group6428Data,
    group6424Props: group6429Data,
    cTAProps: cTA7Data,
    contactInfoProps: contactInfo4Data,
    footerProps: footer9Data,
};

const background9Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const breadcrumb22Data = {
    ourStory: "Our story",
};

const frame889Data = {
    title: "Our story",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame1079Data = {
    frame88Props: frame889Data,
};

const rightContent3Data = {
    ellipse9: "/img/ellipse-9-2.png",
    ellipse10: "/img/ellipse-10-2@2x.png",
};

const rightContent22Data = {
    ellipse9: "/img/ellipse-9-3.png",
    ellipse10: "/img/ellipse-10-3@2x.png",
};

const twitter20Data = {
    className: "frame-105-9-item",
};

const footer10Data = {
    logo: "/img/logo-20@2x.png",
    iconInstagram: "/img/instagram-2@2x.png",
    youtube: "/img/youtube@2x.png",
    className: "footer-9",
    twitterProps: twitter20Data,
};

const ourStoryData = {
    whatWeDo: "What we do",
    loremIpsumDolorSi1: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.</React.Fragment>,
    ourVisionMission: "Our vision & mission",
    loremIpsumDolorSi2: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.</React.Fragment>,
    ourJourney: "Our journey",
    loremIpsumDolorSi3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    loremIpsumDolorSi4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    loremIpsumDolorSi5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    loremIpsumDolorSi6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    loremIpsumDolorSi7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    loremIpsumDolorSi8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    loremIpsumDolorSi9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    loremIpsumDolorSi10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ourPresence: "Our presence",
    loremIpsumDolorSi11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    vector208: "/img/vector-207@2x.png",
    vector219: "/img/vector-218@2x.png",
    vector265: "/img/flask-1@2x.png",
    vector266: "/img/flask-1@2x.png",
    vector267: "/img/flask-1@2x.png",
    vector268: "/img/flask-1@2x.png",
    vector269: "/img/flask-1@2x.png",
    vector292: "/img/flask-1@2x.png",
    mappin1: "",
    backgroundProps: background9Data,
    breadcrumb2Props: breadcrumb22Data,
    frame107Props: frame1079Data,
    rightContentProps: rightContent3Data,
    rightContent2Props: rightContent22Data,
    footerProps: footer10Data,
};

const category5Data = {
    populationHealth: "Population Health",
};

const category6Data = {
    populationHealth: "Hospitals & Clinics",
    className: "category",
};

const category7Data = {
    populationHealth: "Physician Support",
    className: "category",
};

const category8Data = {
    populationHealth: "Patient Engagement",
    className: "category",
};

const level12Data = {
    className: "level-2",
    category1Props: category5Data,
    category2Props: category6Data,
    category3Props: category7Data,
    category4Props: category8Data,
};

const group81Data = {
    catalystResearch: "Catalyst Research",
};

const dropdownsexpandedData = {
    level1Props: level12Data,
    group8Props: group81Data,
};

const category9Data = {
    populationHealth: "Population Health",
};

const category10Data = {
    populationHealth: "Hospitals & Clinics",
    className: "category",
};

const category11Data = {
    spanText1: "Population Health",
};

const category12Data = {
    populationHealth: "Patient Engagement",
    className: "category",
};

const level13Data = {
    className: "level-2-1",
    category1Props: category9Data,
    category2Props: category10Data,
    category3Props: category11Data,
    category4Props: category12Data,
};

const group82Data = {
    catalystResearch: "Catalyst Value Solutions",
    className: "category-6",
};

const group83Data = {
    catalystResearch: "Catalyst Telemed",
    className: "group-12",
};

const group84Data = {
    catalystResearch: "SECTRA",
    className: "group-12",
};

const dropdownsexpanded21Data = {
    level1Props: level13Data,
    group81Props: group82Data,
    group82Props: group83Data,
    group83Props: group84Data,
};

const category13Data = {
    populationHealth: "Population Health",
};

const category14Data = {
    populationHealth: "Hospitals & Clinics",
    className: "category",
};

const category15Data = {
    populationHealth: "Physician Support",
    className: "category",
};

const category16Data = {
    populationHealth: "Patient Engagement",
    className: "category",
};

const level14Data = {
    className: "level-2-2",
    category1Props: category13Data,
    category2Props: category14Data,
    category3Props: category15Data,
    category4Props: category16Data,
};

const group85Data = {
    catalystResearch: "Catalyst Encounter",
    className: "category-6",
};

const group86Data = {
    catalystResearch: "Aircoder",
    className: "group-13",
};

const group87Data = {
    catalystResearch: "Curematch",
    className: "group-13",
};

const dropdownsexpanded22Data = {
    level1Props: level14Data,
    group81Props: group85Data,
    group82Props: group86Data,
    group83Props: group87Data,
};

const category17Data = {
    populationHealth: "Population Health",
};

const category18Data = {
    populationHealth: "Hospitals & Clinics",
    className: "category",
};

const category19Data = {
    populationHealth: "Physician Support",
    className: "category",
};

const category20Data = {
    populationHealth: "Patient Engagement",
    className: "category",
};

const level15Data = {
    className: "level-2-3",
    category1Props: category17Data,
    category2Props: category18Data,
    category3Props: category19Data,
    category4Props: category20Data,
};

const group88Data = {
    catalystResearch: "Catalyst Engage",
    className: "category-6",
};

const group89Data = {
    catalystResearch: "Catalyst Triadge",
    className: "group-14",
};

const group810Data = {
    catalystResearch: "Genie Health",
    className: "group-14",
};

const dropdownsexpanded23Data = {
    level1Props: level15Data,
    group81Props: group88Data,
    group82Props: group89Data,
    group83Props: group810Data,
};

const header11Data = {
    className: "header-10",
};

const rightContent4Data = {
    ellipse9: "/img/ellipse-9.png",
    ellipse10: "/img/ellipse-10@2x.png",
};

const container7Data = {
    rightContentProps: rightContent4Data,
};

const rightContent23Data = {
    ellipse9: "/img/ellipse-9-1.png",
    ellipse10: "/img/ellipse-10-1@2x.png",
};

const container22Data = {
    rightContent2Props: rightContent23Data,
};

const tab3Data = {
    children: "Physician support",
};

const cTA24Data = {
    children: "View all solutions",
};

const card42Data = {
    src: "/img/image-11@2x.png",
    className: "",
};

const card52Data = {
    src: "/img/image-12@2x.png",
    className: "",
};

const card62Data = {
    src: "/img/image-14@2x.png",
    className: "",
};

const card72Data = {
    src: "/img/image-15@2x.png",
    className: "",
};

const card82Data = {
    src: "/img/image-10@2x.png",
    className: "",
};

const cards32Data = {
    image13: "/img/image-13@2x.png",
    card4Props: card42Data,
    card5Props: card52Data,
    card6Props: card62Data,
    card7Props: card72Data,
    card8Props: card82Data,
};

const cTA25Data = {
    children: "Become a partner",
};

const container72Data = {
    cards3Props: cards32Data,
    cTA2Props: cTA25Data,
};

const container53Data = {
    wantATailoredSolutionForYou: "Want a tailored solution for you?",
    icon: "/img/icon.png",
};

const twitter22Data = {
    className: "frame-105-10-item",
};

const footer11Data = {
    logo: "/img/logo-22@2x.png",
    iconInstagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitterProps: twitter22Data,
};

const homeV12Data = {
    banner: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-1.png",
    ourSolutions: "Our solutions",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    populationHealth: "Population health",
    hospitalsClinics: "Hospitals & Clinics",
    catalystS4: "Catalyst S4",
    catalystResearch: "Catalyst Research",
    headerProps: header11Data,
    containerProps: container7Data,
    container2Props: container22Data,
    tabProps: tab3Data,
    cTA2Props: cTA24Data,
    container7Props: container72Data,
    container5Props: container53Data,
    footerProps: footer11Data,
};

const header12Data = {
    className: "header-11",
};

const rightContent5Data = {
    ellipse9: "/img/ellipse-9.png",
    ellipse10: "/img/ellipse-10@2x.png",
};

const container8Data = {
    rightContentProps: rightContent5Data,
};

const rightContent24Data = {
    ellipse9: "/img/ellipse-9-1.png",
    ellipse10: "/img/ellipse-10-1@2x.png",
};

const container23Data = {
    rightContent2Props: rightContent24Data,
};

const tab4Data = {
    children: "Population health",
};

const tab5Data = {
    children: "Physician support",
};

const tabs2Data = {
    tab1Props: tab4Data,
    tab2Props: tab5Data,
};

const card12Data = {
    className: "card-1-3",
};

const card22Data = {
    className: "card-2-2",
};

const cTA26Data = {
    children: "View all solutions",
};

const card43Data = {
    src: "/img/image-11@2x.png",
    className: "",
};

const card53Data = {
    src: "/img/image-12@2x.png",
    className: "",
};

const card63Data = {
    src: "/img/image-14@2x.png",
    className: "",
};

const card73Data = {
    src: "/img/image-15@2x.png",
    className: "",
};

const card83Data = {
    src: "/img/image-10@2x.png",
    className: "",
};

const cards33Data = {
    image13: "/img/image-13@2x.png",
    card4Props: card43Data,
    card5Props: card53Data,
    card6Props: card63Data,
    card7Props: card73Data,
    card8Props: card83Data,
};

const cTA27Data = {
    children: "Become a partner",
};

const container73Data = {
    cards3Props: cards33Data,
    cTA2Props: cTA27Data,
};

const container54Data = {
    wantATailoredSolutionForYou: "Want a tailored solution for you?",
    icon: "/img/icon.png",
};

const twitter24Data = {
    className: "frame-105-11-item",
};

const footer12Data = {
    logo: "/img/logo-24@2x.png",
    iconInstagram: "/img/instagram-11@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitterProps: twitter24Data,
};

const homeV13Data = {
    banner: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-1.png",
    ourSolutions: "Our solutions",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    headerProps: header12Data,
    containerProps: container8Data,
    container2Props: container23Data,
    tabsProps: tabs2Data,
    card1Props: card12Data,
    card2Props: card22Data,
    cTA2Props: cTA26Data,
    container7Props: container73Data,
    container5Props: container54Data,
    footerProps: footer12Data,
};

const background10Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame8810Data = {
    title: "Population Health",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame10710Data = {
    frame88Props: frame8810Data,
};

const header13Data = {
    className: "header-12",
};

const cTA35Data = {
    className: "cta-12",
};

const cTA8Data = {
    children: "Read more",
    className: "cta-5",
};

const rightContent32Data = {
    rightContent: "/img/right-content.png",
    rectangle32: "/img/rectangle-32-7.png",
};

const rightContent33Data = {
    rightContent: "/img/left-content.png",
    rectangle32: "/img/rectangle-32-8.png",
    className: "background-1",
};

const cTA36Data = {
    className: "cta-13",
};

const cTA9Data = {
    children: "Read more",
    className: "cta-6",
};

const container55Data = {
    wantATailoredSolutionForYou: "Want a tailored solution for you?",
    icon: "/img/icon-1.png",
};

const flexContainerI22212938168268725Data = {
    className: "flex-container-i1871362",
};

const cardTestimonials214Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268725Data,
};

const flexContainerI22212938168268726Data = {
    className: "flex-container-i1871362",
};

const cardTestimonials215Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268726Data,
};

const flexContainerI22212938168268727Data = {
    className: "flex-container-i1871362",
};

const cardTestimonials216Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268727Data,
};

const flexContainerI22212938168268728Data = {
    className: "flex-container-i1871362",
};

const cardTestimonials217Data = {
    flexContainerI222129381682687Props: flexContainerI22212938168268728Data,
};

const testimonials4Data = {
    ourClientsWords: "Our clients’ words",
    cardTestimonials21Props: cardTestimonials214Data,
    cardTestimonials22Props: cardTestimonials215Data,
    cardTestimonials23Props: cardTestimonials216Data,
    cardTestimonials24Props: cardTestimonials217Data,
};

const twitter26Data = {
    className: "frame-105-12-item",
};

const footer13Data = {
    logo: "/img/logo-8@2x.png",
    iconInstagram: "/img/instagram-2@2x.png",
    youtube: "/img/youtube@2x.png",
    className: "footer-12",
    twitterProps: twitter26Data,
};

const populationHealthData = {
    place: "Home",
    solutions: "Solutions",
    populationHealth: "Population Health",
    catalystS4: "Catalyst S4",
    aboutCatalystS4C: "About Catalyst S4: consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    howCanItHelpYou: "How can it help you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    catalystResearch: "Catalyst Research",
    loremIpsumDolorSi1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    loremIpsumDolorSi2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    backgroundProps: background10Data,
    frame107Props: frame10710Data,
    headerProps: header13Data,
    cTA31Props: cTA35Data,
    cTA1Props: cTA8Data,
    rightContent31Props: rightContent32Data,
    rightContent32Props: rightContent33Data,
    cTA32Props: cTA36Data,
    cTA2Props: cTA9Data,
    container5Props: container55Data,
    testimonialsProps: testimonials4Data,
    footerProps: footer13Data,
};

const background11Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame8811Data = {
    title: "In the news",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame10711Data = {
    frame88Props: frame8811Data,
};

const frame1219Data = {
    rectangle12751: "/img/rectangle-12751-2@2x.png",
};

const frame12110Data = {
    rectangle12751: "/img/rectangle-12751-3@2x.png",
};

const frame12111Data = {
    rectangle12751: "/img/rectangle-12751-4@2x.png",
};

const frame12112Data = {
    rectangle12751: "/img/rectangle-12751-5@2x.png",
};

const frame12113Data = {
    rectangle12751: "/img/rectangle-12751-6@2x.png",
};

const list23Data = {
    className: "list-4",
    frame1211Props: frame12111Data,
    frame1212Props: frame12112Data,
    frame1213Props: frame12113Data,
};

const frame12114Data = {
    rectangle12751: "/img/rectangle-12751-7@2x.png",
};

const frame12115Data = {
    rectangle12751: "/img/rectangle-12751-8@2x.png",
};

const frame12116Data = {
    rectangle12751: "/img/rectangle-12751-9@2x.png",
};

const list24Data = {
    className: "list-4",
    frame1211Props: frame12114Data,
    frame1212Props: frame12115Data,
    frame1213Props: frame12116Data,
};

const twitter28Data = {
    className: "frame-105-13-item",
};

const footer14Data = {
    logo: "/img/logo-1@2x.png",
    iconInstagram: "/img/instagram@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter28Data,
};

const newsData = {
    place: "Home",
    insights: "Insights",
    inTheNews: "In the news",
    rectangle12752: "/img/rectangle-12751-9@2x.png",
    number1: "1",
    number2: "2",
    number3: "3",
    number4: "4",
    number5: "5",
    backgroundProps: background11Data,
    frame107Props: frame10711Data,
    frame1211Props: frame1219Data,
    frame1212Props: frame12110Data,
    list21Props: list23Data,
    list22Props: list24Data,
    footerProps: footer14Data,
};

const background12Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame8812Data = {
    title: "Catalyst S4",
    loremIpsumDolorSi: "Infectious diseases are inevitable. Epidemics and pandemics are NOT.",
};

const group961Data = {
    client1: "Client 1",
};

const group962Data = {
    client1: "Client 3",
};

const group963Data = {
    client1: "Client 2",
};

const group964Data = {
    client1: "Client 4",
};

const container56Data = {
    wantATailoredSolutionForYou: "Want to learn more about Catalyst S4?",
    icon: "/img/icon-1.png",
    className: "contact-2",
};

const frame12117Data = {
    rectangle12751: "/img/rectangle-12751-2@2x.png",
};

const frame12118Data = {
    rectangle12751: "/img/rectangle-12751-3@2x.png",
};

const list3Data = {
    className: "frame-117",
    frame1211Props: frame12117Data,
    frame1212Props: frame12118Data,
};

const twitter30Data = {
    className: "frame-105-14-item",
};

const footer15Data = {
    logo: "/img/logo-8@2x.png",
    iconInstagram: "/img/instagram-2@2x.png",
    youtube: "/img/youtube@2x.png",
    className: "footer-14",
    twitterProps: twitter30Data,
};

const catalystS4Data = {
    navbarLinkPlace: "Home",
    navbarLinkSolutions: "Solutions",
    navbarLinkPopulationHealth: "Population Health",
    navbarLinkCatalystS4: "Catalyst S4",
    spanText1: "Why ",
    spanText2: "Catalyst S4",
    todayPathogenDetec: "Today pathogen detection starts with a confirmed diagnosis, we start with symptoms before clinicians see the patient",
    number1: "1",
    simultaneousReview: "Simultaneous review of critical pathogens",
    number2: "2",
    diagnosticDecisionSupport: "Diagnostic decision support",
    number3: "3",
    nearRealTimeUpdate: "Near real time update",
    number4: "4",
    integrateIntoExistingWorkflow: "Integrate into existing workflow",
    number5: "5",
    noHardwareInstallationNeeded: "No hardware installation needed",
    howItWorks: "How it works",
    earlyPathogenDetec: "Early pathogen detection systems to identify pathogen outbreaks from real-time symptoms analysis.",
    collectPatientSymp: "Collect patient symptoms either directly from patients or from medical enterprises.",
    text6: "1/3",
    whoUseThis: "Who use this",
    image27: "/img/image-27@2x.png",
    image30: "/img/image-30@2x.png",
    image29: "/img/image-29@2x.png",
    image31: "/img/image-31@2x.png",
    industryPublications: "Industry publications",
    spanText3: "Other solutions in ",
    spanText4: "Population Health",
    catalystResearch: "Catalyst Research",
    backgroundProps: background12Data,
    frame88Props: frame8812Data,
    group961Props: group961Data,
    group962Props: group962Data,
    group963Props: group963Data,
    group964Props: group964Data,
    container5Props: container56Data,
    listProps: list3Data,
    footerProps: footer15Data,
};

const group583Data = {
    solution: "Solution",
};

const group584Data = {
    solution: "Catalyst S4",
};

const group64210Data = {
    children: "Name*",
};

const group64211Data = {
    children: "Email*",
};

const group64212Data = {
    children: "Phone number",
};

const group64213Data = {
    children: "Comment",
    className: "group-69-3",
};

const cTA10Data = {
    children: "Send",
    className: "cta-1",
};

const popup2Data = {
    title: "Contact us",
    iconClose: "/img/flask-1@2x.png",
    group581Props: group583Data,
    group582Props: group584Data,
    group6421Props: group64210Data,
    group6422Props: group64211Data,
    group6423Props: group64212Data,
    group6424Props: group64213Data,
    cTAProps: cTA10Data,
};

const background13Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const frame8813Data = {
    title: "Contact us",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame10712Data = {
    frame88Props: frame8813Data,
};

const group5823Data = {
    className: "group-58-3",
};

const group64214Data = {
    children: "Name*",
};

const group64215Data = {
    children: "Email*",
};

const group64216Data = {
    children: "Phone number",
};

const group64217Data = {
    children: "Comment",
    className: "group-69-4",
};

const cTA11Data = {
    children: "Send",
    className: "cta-1",
};

const contactInfo5Data = {
    group: "/img/group-1.png",
};

const twitter32Data = {
    className: "frame-105-15-item",
};

const footer16Data = {
    logo: "/img/logo-1@2x.png",
    iconInstagram: "/img/instagram@2x.png",
    youtube: "/img/youtube@2x.png",
    twitterProps: twitter32Data,
};

const contactUsInquiryTypeDropdownData = {
    placeAnInquiry: "Place an inquiry",
    lineContainer: "/img/group-58.png",
    backgroundProps: background13Data,
    frame107Props: frame10712Data,
    group582Props: group5823Data,
    group6421Props: group64214Data,
    group6422Props: group64215Data,
    group6423Props: group64216Data,
    group6424Props: group64217Data,
    cTAProps: cTA11Data,
    contactInfoProps: contactInfo5Data,
    footerProps: footer16Data,
};

const background14Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1.png",
};

const breadcrumb23Data = {
    ourStory: "Our team",
};

const frame8814Data = {
    title: "Our team",
    loremIpsumDolorSi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const frame10713Data = {
    frame88Props: frame8814Data,
};

const frame1849631Data = {
    name: "Ronald Richards",
};

const frame1849632Data = {
    name: "Floyd Miles",
};

const frame332Data = {
    frame184963Props: frame1849632Data,
};

const frame1849633Data = {
    name: "Theresa Webb",
};

const frame333Data = {
    frame184963Props: frame1849633Data,
};

const frame1849634Data = {
    name: "Robert Fox",
};

const frame334Data = {
    frame184963Props: frame1849634Data,
};

const frame1849635Data = {
    name: "Courtney Henry",
};

const frame291Data = {
    rectangle20: "/img/rectangle-20-2@2x.png",
    frame184963Props: frame1849635Data,
};

const frame1849636Data = {
    name: "Darrell Steward",
};

const frame292Data = {
    rectangle20: "/img/rectangle-20-4@2x.png",
    frame184963Props: frame1849636Data,
};

const frame1849637Data = {
    name: "Esther Howard",
};

const frame293Data = {
    rectangle20: "/img/rectangle-20-6@2x.png",
    frame184963Props: frame1849637Data,
};

const frame1849638Data = {
    name: "Albert Flores",
};

const frame294Data = {
    rectangle20: "/img/rectangle-20-8@2x.png",
    frame184963Props: frame1849638Data,
};

const frame362Data = {
    frame291Props: frame291Data,
    frame292Props: frame292Data,
    frame293Props: frame293Data,
    frame294Props: frame294Data,
};

const frame1849639Data = {
    name: "Devon Lane",
};

const frame295Data = {
    rectangle20: "/img/rectangle-20-9@2x.png",
    frame184963Props: frame1849639Data,
};

const frame18496310Data = {
    name: "Courtney Henry",
};

const frame296Data = {
    rectangle20: "/img/rectangle-20-10@2x.png",
    frame184963Props: frame18496310Data,
};

const frame18496311Data = {
    name: "Eleanor Pena",
};

const frame297Data = {
    rectangle20: "/img/rectangle-20-11@2x.png",
    frame184963Props: frame18496311Data,
};

const frame18496312Data = {
    name: "Cameron Williamson",
};

const frame298Data = {
    rectangle20: "/img/rectangle-20-12@2x.png",
    frame184963Props: frame18496312Data,
};

const frame363Data = {
    frame291Props: frame295Data,
    frame292Props: frame296Data,
    frame293Props: frame297Data,
    frame294Props: frame298Data,
};

const twitter34Data = {
    className: "frame-105-16-item",
};

const footer17Data = {
    logo: "/img/logo-34@2x.png",
    iconInstagram: "/img/instagram-2@2x.png",
    youtube: "/img/youtube@2x.png",
    className: "footer-16",
    twitterProps: twitter34Data,
};

const teamData = {
    coreTeam: "Core team",
    advisors: "Advisors",
    backgroundProps: background14Data,
    breadcrumb2Props: breadcrumb23Data,
    frame107Props: frame10713Data,
    frame184963Props: frame1849631Data,
    frame331Props: frame332Data,
    frame332Props: frame333Data,
    frame333Props: frame334Data,
    frame361Props: frame362Data,
    frame362Props: frame363Data,
    footerProps: footer17Data,
};

const frame821Data = {
    spanText2: "Professionals",
};

const frame921Data = {
    spanText2: "Years in healthcare",
};

const frame1121Data = {
    spanText2: "Partners",
};

const highlights1Data = {
    frame82Props: frame821Data,
    frame92Props: frame921Data,
    frame112Props: frame1121Data,
};

const group862Data = {
    className: "",
};

const group872Data = {
    spanText: "SOLUTION 1",
    group86Props: group862Data,
};

const homepageData = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Value-based healthcare",
    spanText4: "Rebuild the healthcare ecosystem to improve quality and efficiency",
    spanText5: "Our solutions",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText7: "SOLUTION 2",
    spanText8: "SOLUTION 3",
    spanText9: "Latest publications",
    spanText10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    highlightsProps: highlights1Data,
    group87Props: group872Data,
};

const frame822Data = {
    spanText2: "Professionals",
};

const frame922Data = {
    spanText2: "Years in healthcare",
};

const frame1122Data = {
    spanText2: "Partners",
};

const highlights2Data = {
    frame82Props: frame822Data,
    frame92Props: frame922Data,
    frame112Props: frame1122Data,
};

const frame172Data = {
    className: "frame-17-2",
};

const group863Data = {
    className: "group-86-1",
};

const frame522Data = {
    className: "frame-5-42",
};

const homepageOurSolutionsData = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Value-based healthcare",
    spanText4: "Rebuild the healthcare ecosystem to improve quality and efficiency",
    spanText5: "Our solutions",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText7: "SOLUTION 1",
    spanText8: "SOLUTION 2",
    spanText9: "SOLUTION 3",
    highlightsProps: highlights2Data,
    frame17Props: frame172Data,
    group86Props: group863Data,
    frame52Props: frame522Data,
};

const frame823Data = {
    spanText2: "Professionals",
};

const frame923Data = {
    spanText2: "Years in healthcare",
};

const frame1123Data = {
    spanText2: "Partners",
};

const highlights3Data = {
    className: "highlights-2",
    frame82Props: frame823Data,
    frame92Props: frame923Data,
    frame112Props: frame1123Data,
};

const group11Data = {
    spanText1: "Population health",
};

const group21Data = {
    spanText1: "Hospitals & Clinics",
};

const group51Data = {
    spanText1: "Physician support",
};

const group31Data = {
    spanText1: "Patient engagement",
};

const group72Data = {
    className: "group-8-2",
};

const group73Data = {
    className: "group-9-1",
};

const group101Data = {
    group71Props: group72Data,
    group72Props: group73Data,
};

const group864Data = {
    className: "group-86-2",
};

const group873Data = {
    spanText: "SOLUTION 2",
    className: "group-87-1",
    group86Props: group864Data,
};

const homepageMegaMenuDropDownData = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Explore our solutions",
    spanText4: "Value-based healthcare",
    spanText5: "Rebuild the healthcare ecosystem to improve quality and efficiency",
    line1: "/img/line-1-1@2x.png",
    spanText6: "Can’t find what you need?",
    spanText7: "Contact us",
    spanText8: "Our solutions",
    spanText9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText10: "SOLUTION 1",
    spanText11: "SOLUTION 3",
    highlightsProps: highlights3Data,
    group1Props: group11Data,
    group2Props: group21Data,
    group5Props: group51Data,
    group3Props: group31Data,
    group10Props: group101Data,
    group87Props: group873Data,
};

const group1004Data = {
    className: "group-100-3",
};

const footer25Data = {
    className: "footer-7",
};

const populationHealth2Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "chevron-right",
    spanText5: "Population Health",
    spanText6: "Population Health",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText8: "Catalyst S4",
    spanText9: "About Catalyst S4: consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText10: "How can it help you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText11: "Request a demo",
    spanText12: "Read more",
    spanText13: "Read more",
    spanText14: "Catalyst Research",
    spanText15: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText17: "Request a demo",
    group100Props: group1004Data,
    footer2Props: footer25Data,
};

const frame932Data = {
    className: "frame-93-1",
};

const how1Data = {
    spanText3: "Collect patient symptoms either directly from patients or from medical enterprises.",
    spanText4: "1/3",
    frame93Props: frame932Data,
};

const footer26Data = {
    className: "footer-8",
};

const catalystS42Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "chevron-right",
    spanText5: "Catalyst S4",
    howProps: how1Data,
    footer2Props: footer26Data,
};

const frame933Data = {
    className: "frame-93-2",
};

const how2Data = {
    spanText3: "Apply pattern recognition, predictive analysis and ongoing machine learning.",
    spanText4: "2/3",
    frame93Props: frame933Data,
};

const footer27Data = {
    className: "footer-10",
};

const catalystS4HowItWorksData = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "chevron-right",
    spanText5: "Catalyst S4",
    howProps: how2Data,
    footer2Props: footer27Data,
};

const ghostBreadcrumbItem42Data = {
    children: "Solutions",
};

const group461Data = {
    spanText: "SECTRA",
};

const group462Data = {
    spanText: "Catalyst Telemed",
    className: "group-47-2",
};

const group4322Data = {
    line6: "/img/line-6-12@2x.png",
    line7: "/img/line-7-12@2x.png",
};

const group4323Data = {
    line6: "/img/line-6-14@2x.png",
    line7: "/img/line-7-14@2x.png",
    className: "group-43-3",
};

const group1005Data = {
    className: "group-100-4",
};

const testimonial2Data = {
    className: "testimonial-6",
};

const footer28Data = {
    className: "footer-11",
};

const solutionData = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "Solutions",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText6: "Population Health",
    spanText7: "Catalyst S4",
    spanText8: "Catalyst Research",
    spanText9: "Physician Support",
    spanText10: "Catalyst Encounter",
    spanText11: "Aircoder",
    spanText12: "Curematch",
    spanText13: "Hospitals and Clinics",
    spanText14: "Catalyst Value Solutions",
    line6: "/img/line-6-9@2x.png",
    line7: "/img/line-7-9@2x.png",
    spanText15: "Patient Engagement",
    spanText16: "Catalyst Engage",
    spanText17: "Catalyst Triage",
    spanText18: "PT Genie",
    ghostBreadcrumbItem4Props: ghostBreadcrumbItem42Data,
    group461Props: group461Data,
    group462Props: group462Data,
    group4321Props: group4322Data,
    group4322Props: group4323Data,
    group100Props: group1005Data,
    testimonialProps: testimonial2Data,
    footer2Props: footer28Data,
};

const ourPartners2Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "Our partners",
    spanText5: "Our partners",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText7: "Solution partners",
    spanText8: "Technology partners",
    spanText9: "Research partners",
    spanText10: "Ecosystem expansion partners",
    overlapGroup2: "/img/line-2-4@2x.png",
    line3: "/img/line-3-9@2x.png",
};

const ourClients2Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "Our partners",
    spanText5: "chevron-right",
    spanText6: "Our clients",
    spanText7: "Our clients",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
};

const group351Data = {
    spanText1: "In the news",
    className: "",
};

const frame393Data = {
    className: "frame-22",
};

const frame394Data = {
    className: "frame-27",
};

const group1071Data = {
    group35Props: group351Data,
    frame391Props: frame393Data,
    frame392Props: frame394Data,
};

const group352Data = {
    spanText1: "Research",
    className: "group-3-3-2",
};

const frame396Data = {
    className: "frame-43-1",
};

const frame397Data = {
    className: "frame-44-1",
};

const group353Data = {
    spanText1: "Blogs",
    className: "group-3-3",
};

const frame399Data = {
    className: "frame-22",
};

const frame3910Data = {
    className: "frame-27",
};

const group1072Data = {
    group35Props: group353Data,
    frame391Props: frame399Data,
    frame392Props: frame3910Data,
};

const footer29Data = {
    className: "footer-13",
};

const insightsOption01Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Publications",
    spanText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    group1071Props: group1071Data,
    group35Props: group352Data,
    frame391Props: frame396Data,
    frame392Props: frame397Data,
    group1072Props: group1072Data,
    footer2Props: footer29Data,
};

const frame3912Data = {
    className: "frame-32",
};

const frame3913Data = {
    className: "frame-31",
};

const frame3915Data = {
    className: "frame-32",
};

const frame3916Data = {
    className: "frame-31",
};

const frame3918Data = {
    className: "frame-43-2",
};

const frame3919Data = {
    className: "frame-44-2",
};

const footer210Data = {
    className: "footer-15",
};

const insightsOption3Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "Insights",
    spanText5: "chevron-right",
    spanText6: "In the news",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText8: "1 ",
    spanText9: "2",
    spanText10: " 3 4 5 6",
    frame391Props: frame3912Data,
    frame392Props: frame3913Data,
    frame393Props: frame3915Data,
    frame394Props: frame3916Data,
    frame395Props: frame3918Data,
    frame396Props: frame3919Data,
    footer2Props: footer210Data,
};

const frame3920Data = {
    className: "frame-36-1",
};

const frame3921Data = {
    className: "frame-39",
};

const frame3922Data = {
    className: "frame-42-7",
};

const frame3923Data = {
    className: "frame-37",
};

const frame3924Data = {
    className: "frame-40",
};

const frame3925Data = {
    className: "frame-43-3",
};

const frame3926Data = {
    className: "frame-38",
};

const frame3927Data = {
    className: "frame-41",
};

const frame3928Data = {
    className: "frame-44-3",
};

const menu12Data = {
    className: "menu-28",
};

const footer311Data = {
    className: "footer-31",
};

const insightsOption4Data = {
    spanText1: "In the news",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText3: "LOGO",
    spanText4: "Contact us",
    spanText5: "chevron-right",
    spanText6: "Insights",
    spanText7: "chevron-right",
    spanText8: "Title",
    spanText9: "Description",
    spanText10: "Date - link to news",
    spanText11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.",
    spanText12: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.",
    spanText13: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.",
    iconClose: "/img/xcircle-4@2x.png",
    frame391Props: frame3920Data,
    frame392Props: frame3921Data,
    frame393Props: frame3922Data,
    frame394Props: frame3923Data,
    frame395Props: frame3924Data,
    frame396Props: frame3925Data,
    frame397Props: frame3926Data,
    frame398Props: frame3927Data,
    frame399Props: frame3928Data,
    menuProps: menu12Data,
    footer3Props: footer311Data,
};

const ghostBreadcrumbItem43Data = {
    children: "Our team",
    className: "ghost-_breadcrumb_item-26",
};

const frame10421Data = {
    ghostBreadcrumbItem4Props: ghostBreadcrumbItem43Data,
};

const footer211Data = {
    className: "footer-17",
};

const team2Data = {
    frame1042Props: frame10421Data,
    footer2Props: footer211Data,
};

const teamList2Data = {
    className: "team-list-2",
};

const group322Data = {
    className: "group-32-1",
};

const footer313Data = {
    className: "footer-33",
};

const group342Data = {
    className: "group-34-1",
};

const ghostBreadcrumbItem44Data = {
    children: "Our team",
    className: "ghost-_breadcrumb_item-27",
};

const frame10422Data = {
    className: "frame-104-11",
    ghostBreadcrumbItem4Props: ghostBreadcrumbItem44Data,
};

const menu14Data = {
    className: "menu-30",
};

const teamExpandedData = {
    spanText1: "Our team",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText3: "LOGO",
    spanText4: "Contact us",
    spanText5: "Name",
    spanText6: "Position",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.",
    spanText9: "Linkedin",
    iconClose: "/img/xcircle-4@2x.png",
    teamListProps: teamList2Data,
    group32Props: group322Data,
    footer3Props: footer313Data,
    group34Props: group342Data,
    frame1042Props: frame10422Data,
    menuProps: menu14Data,
};

const footer212Data = {
    className: "footer-18",
};

const ourStory2Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "chevron-right",
    spanText4: "Our team",
    spanText5: "chevron-right",
    spanText6: "Our story",
    spanText7: "Our story",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText9: "Our team",
    arrow1: "/img/arrow-1-12@2x.png",
    spanText10: "Our vision & mission",
    spanText11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText12: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText13: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText14: "Our journey",
    spanText15: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText17: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText18: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText19: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    arrow2: "/img/arrow-2-1@2x.png",
    spanText20: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText21: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText22: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText23: "Our presence",
    spanText24: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText25: "MAP",
    footer2Props: footer212Data,
};

const footer213Data = {
    className: "footer-19",
};

const contactUsEmptyForm2Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Contact us",
    spanText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText5: "Place an inquiry",
    spanText6: "What are you looking for?*",
    spanText7: "Name*",
    spanText8: "Email*",
    spanText9: "Phone number",
    spanText10: "Comment",
    footer2Props: footer213Data,
};

const footer214Data = {
    className: "footer-20",
};

const contactUsSelectQuestion2Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Contact us",
    spanText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText5: "Place an inquiry",
    spanText6: "Send",
    spanText7: "Solutions",
    spanText8: "What solution are you looking for?",
    vector2: "/img/vector-1@2x.png",
    spanText9: "Name*",
    spanText10: "Email*",
    spanText11: "Phone number",
    spanText12: "Comment",
    spanText13: "Send",
    footer2Props: footer214Data,
};

const group1033Data = {
    className: "group-103-2",
};

const footer215Data = {
    className: "footer-21",
};

const thankYouMessageData = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Contact us",
    spanText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText5: "Thank you, your messaged has been sent. We will get back to you in a few days",
    spanText6: "Send another email",
    group103Props: group1033Data,
    footer2Props: footer215Data,
};

const frame8923Data = {
    className: "frame-89-4",
};

const group1034Data = {
    className: "group-103-3",
};

const footer216Data = {
    className: "footer-22",
};

const contactUsSelectQuestion1Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Contact us",
    spanText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText5: "Place an inquiry",
    spanText6: "Email*",
    spanText7: "Solutions",
    spanText8: "Partnership",
    spanText9: "Investment",
    spanText10: "Other",
    spanText11: "Phone number",
    spanText12: "Comment",
    frame892Props: frame8923Data,
    group103Props: group1034Data,
    footer2Props: footer216Data,
};

const header32Data = {
    logo: "/img/logo-1@2x.png",
};

const banner1Data = {
    header3Props: header32Data,
};

const card122Data = {
    bandaids: "/img/bandaids-1@2x.png",
};

const card222Data = {
    flask: "/img/flask-1@2x.png",
};

const cTA42Data = {
    children: "View all solutions",
};

const card44Data = {
    src: "/img/image-11-2@2x.png",
    className: "card-27",
};

const card54Data = {
    src: "/img/image-12-1@2x.png",
    className: "card-33",
};

const card64Data = {
    src: "/img/image-14-1@2x.png",
    className: "card-39",
};

const card74Data = {
    src: "/img/image-15-1@2x.png",
    className: "card-45",
};

const card84Data = {
    src: "/img/image-10-1@2x.png",
    className: "card-51",
};

const cards22Data = {
    screenshot20230109At8461: "/img/screenshot-2023-01-09-at-8-46-1-1@2x.png",
    className: "cards-22",
    card4Props: card44Data,
    card5Props: card54Data,
    card6Props: card64Data,
    card7Props: card74Data,
    card8Props: card84Data,
};

const cTA43Data = {
    children: "Become a partner",
    className: "cta-10",
};

const container101Data = {
    cards2Props: cards22Data,
    cTA4Props: cTA43Data,
};

const content1Data = {
    spanText1: "Want a tailored solution for you?",
    icon: "/img/icon-1@2x.png",
    className: "",
};

const container131Data = {
    contentProps: content1Data,
};

const twitter210Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter211Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-2",
};

const footer42Data = {
    logo: "/img/logo-2@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitter21Props: twitter210Data,
    twitter22Props: twitter211Data,
};

const homeV14Data = {
    spanText1: "Our solutions",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    bannerProps: banner1Data,
    card12Props: card122Data,
    card22Props: card222Data,
    cTA4Props: cTA42Data,
    container10Props: container101Data,
    container13Props: container131Data,
    footer4Props: footer42Data,
};

const header33Data = {
    logo: "/img/logo-3@2x.png",
};

const banner2Data = {
    header3Props: header33Data,
};

const cTA44Data = {
    children: "View all solutions",
};

const card45Data = {
    src: "/img/image-11-2@2x.png",
    className: "card-28",
};

const card55Data = {
    src: "/img/image-12-1@2x.png",
    className: "card-34",
};

const card65Data = {
    src: "/img/image-14-1@2x.png",
    className: "card-40",
};

const card75Data = {
    src: "/img/image-15-1@2x.png",
    className: "card-46",
};

const card85Data = {
    src: "/img/image-10-1@2x.png",
    className: "card-52",
};

const cards34Data = {
    image13: "/img/image-13-2@2x.png",
    className: "cards-32",
    card4Props: card45Data,
    card5Props: card55Data,
    card6Props: card65Data,
    card7Props: card75Data,
    card8Props: card85Data,
};

const cTA45Data = {
    children: "Become a partner",
    className: "cta-14",
};

const container141Data = {
    cards3Props: cards34Data,
    cTA4Props: cTA45Data,
};

const content2Data = {
    spanText1: "Want a tailored solution for you?",
    icon: "/img/icon-2@2x.png",
    className: "",
};

const container132Data = {
    contentProps: content2Data,
};

const twitter212Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter213Data = {
    src: "/img/linkedin-2@2x.png",
    className: "linkedin-3",
};

const footer43Data = {
    logo: "/img/logo-4@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    twitter21Props: twitter212Data,
    twitter22Props: twitter213Data,
};

const homeV15Data = {
    spanText1: "Our solutions",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText3: "Population health",
    spanText4: "Hospitals & Clinics",
    spanText5: "Physician support",
    spanText6: "Patient engagement",
    bandaids: "/img/bandaids-2@2x.png",
    spanText7: "Catalyst S4",
    flask: "/img/flask-2@2x.png",
    spanText8: "Catalyst Research",
    bannerProps: banner2Data,
    cTA4Props: cTA44Data,
    container14Props: container141Data,
    container13Props: container132Data,
    footer4Props: footer43Data,
};

const header34Data = {
    logo: "/img/logo-5@2x.png",
};

const banner3Data = {
    header3Props: header34Data,
};

const card123Data = {
    bandaids: "/img/bandaids-3@2x.png",
    className: "card-1-9",
};

const card223Data = {
    flask: "/img/flask-2@2x.png",
    className: "card-2-5",
};

const card94Data = {
    className: "card-81",
};

const cTA46Data = {
    children: "View all solutions",
};

const card46Data = {
    src: "/img/image-11-2@2x.png",
    className: "card-29",
};

const card56Data = {
    src: "/img/image-12-1@2x.png",
    className: "card-35",
};

const card66Data = {
    src: "/img/image-14-1@2x.png",
    className: "card-41",
};

const card76Data = {
    src: "/img/image-15-1@2x.png",
    className: "card-47",
};

const card86Data = {
    src: "/img/image-10-1@2x.png",
    className: "card-53",
};

const cards35Data = {
    image13: "/img/image-13-2@2x.png",
    className: "cards-33",
    card4Props: card46Data,
    card5Props: card56Data,
    card6Props: card66Data,
    card7Props: card76Data,
    card8Props: card86Data,
};

const cTA47Data = {
    children: "Become a partner",
    className: "cta-16",
};

const container142Data = {
    cards3Props: cards35Data,
    cTA4Props: cTA47Data,
};

const content3Data = {
    spanText1: "Want a tailored solution for you?",
    icon: "/img/icon-3@2x.png",
    className: "",
};

const container133Data = {
    contentProps: content3Data,
};

const twitter214Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter215Data = {
    src: "/img/linkedin-2@2x.png",
    className: "linkedin-4",
};

const footer44Data = {
    logo: "/img/logo-4@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    twitter21Props: twitter214Data,
    twitter22Props: twitter215Data,
};

const homeV16Data = {
    spanText1: "Our solutions",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    bannerProps: banner3Data,
    card12Props: card123Data,
    card22Props: card223Data,
    card9Props: card94Data,
    cTA4Props: cTA46Data,
    container14Props: container142Data,
    container13Props: container133Data,
    footer4Props: footer44Data,
};

const frame45Data = {
    className: "frame-4-24",
};

const frame724Data = {
    className: "frame-7-25",
};

const frame535Data = {
    className: "frame-5-47",
};

const frame634Data = {
    className: "frame-6-45",
};

const cTA48Data = {
    children: "View all solutions",
};

const card47Data = {
    src: "/img/image-11-2@2x.png",
    className: "card-30",
};

const card57Data = {
    src: "/img/image-12-1@2x.png",
    className: "card-36",
};

const card67Data = {
    src: "/img/image-14-1@2x.png",
    className: "card-42",
};

const card77Data = {
    src: "/img/image-15-1@2x.png",
    className: "card-48",
};

const card87Data = {
    src: "/img/image-10-1@2x.png",
    className: "card-54",
};

const cards36Data = {
    image13: "/img/image-13-2@2x.png",
    className: "cards-34",
    card4Props: card47Data,
    card5Props: card57Data,
    card6Props: card67Data,
    card7Props: card77Data,
    card8Props: card87Data,
};

const cTA49Data = {
    children: "Become a partner",
    className: "cta-18",
};

const container143Data = {
    cards3Props: cards36Data,
    cTA4Props: cTA49Data,
};

const twitter216Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter217Data = {
    src: "/img/linkedin-24@2x.png",
    className: "linkedin-5",
};

const footer45Data = {
    logo: "/img/logo-2@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitter21Props: twitter216Data,
    twitter22Props: twitter217Data,
};

const homeV2Data = {
    banner: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-25@2x.png",
    logo: "/img/logo-7@2x.png",
    spanText1: "Contact us",
    spanText2: "professionals",
    spanText3: "56",
    spanText4: "years in healthcare",
    spanText5: "25",
    spanText6: "fundraised",
    spanText7: "$10",
    spanText8: "M",
    spanText9: "partners",
    spanText10: "16",
    spanText11: "countries",
    spanText12: "12",
    spanText13: "Our solutions",
    spanText14: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText15: "Population Health",
    spanText16: "Hospitals & Clinics",
    spanText17: "Physician Support",
    spanText18: "Patient Engagement",
    iconLink: "/img/bandaids-4@2x.png",
    spanText19: "Catalyst Value Solutions",
    image17: "/img/image-17-1@2x.png",
    spanText20: <React.Fragment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.</React.Fragment>,
    spanText21: "Request a demo",
    flask: "/img/flask-1@2x.png",
    spanText22: "Catalyst Telemed",
    lifebuoy: "/img/lifebuoy-1@2x.png",
    spanText23: "SECTRA",
    caretcircleleft1: "/img/caretcircleleft-1@2x.png",
    spanText24: "Our clients’ words",
    spanText25: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    caretcircleright1: "/img/caretcircleright-1@2x.png",
    caretcircleleft2: "/img/caretcircleleft-1@2x.png",
    spanText26: "Latest publications",
    spanText27: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    rectangle12751: "/img/rectangle-12751-1@2x.png",
    spanText28: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    spanText29: "28 DEC 2022",
    spanText30: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"`,
    caretcircleright2: "/img/caretcircleright-1@2x.png",
    spanText31: "Want a tailored solution for you?",
    spanText32: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    icon: "/img/icon-4@2x.png",
    frame4Props: frame45Data,
    frame72Props: frame724Data,
    frame53Props: frame535Data,
    frame63Props: frame634Data,
    cTA4Props: cTA48Data,
    container14Props: container143Data,
    footer4Props: footer45Data,
};

const header35Data = {
    logo: "/img/logo-7@2x.png",
};

const frame8826Data = {
    className: "frame-88-21",
};

const button26Data = {
    className: "button-32",
};

const category110Data = {
    spanText1: "Hospitals & Clinics",
    className: "category-7",
};

const category111Data = {
    spanText1: "Physician Support",
    className: "category-7",
};

const category112Data = {
    spanText1: "Patient Engagement",
    className: "category-7",
};

const level21Data = {
    category11Props: category11Data,
    category12Props: category110Data,
    category13Props: category111Data,
    category14Props: category112Data,
};

const group722Data = {
    spanText1: "Catalyst S4",
};

const group723Data = {
    spanText1: "Catalyst Research",
    className: "group-16",
};

const card224Data = {
    flask: "/img/flask-1@2x.png",
};

const cTA410Data = {
    children: "View all solutions",
};

const card48Data = {
    src: "/img/image-11-2@2x.png",
    className: "card-31",
};

const card58Data = {
    src: "/img/image-12-1@2x.png",
    className: "card-37",
};

const card68Data = {
    src: "/img/image-14-1@2x.png",
    className: "card-43",
};

const card78Data = {
    src: "/img/image-15-1@2x.png",
    className: "card-49",
};

const card88Data = {
    src: "/img/image-10-1@2x.png",
    className: "card-55",
};

const cards23Data = {
    screenshot20230109At8461: "/img/screenshot-2023-01-09-at-8-46-1-1@2x.png",
    className: "cards-23",
    card4Props: card48Data,
    card5Props: card58Data,
    card6Props: card68Data,
    card7Props: card78Data,
    card8Props: card88Data,
};

const cTA411Data = {
    children: "Become a partner",
    className: "cta-20",
};

const container102Data = {
    cards2Props: cards23Data,
    cTA4Props: cTA411Data,
};

const content4Data = {
    spanText1: "Want a tailored solution for you?",
    icon: "/img/icon-5@2x.png",
    className: "",
};

const container134Data = {
    contentProps: content4Data,
};

const twitter218Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter219Data = {
    src: "/img/linkedin-24@2x.png",
    className: "linkedin-6",
};

const footer46Data = {
    logo: "/img/logo-16@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    twitter21Props: twitter218Data,
    twitter22Props: twitter219Data,
};

const homeMenuData = {
    banner: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-26@2x.png",
    line1: "/img/line-1-3@2x.png",
    spanText1: "Our solutions",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    iconLink: "/img/bandaids-4@2x.png",
    spanText3: "Catalyst Value Solutions",
    image17: "/img/image-17-1@2x.png",
    header3Props: header35Data,
    frame882Props: frame8826Data,
    button2Props: button26Data,
    level2Props: level21Data,
    group721Props: group722Data,
    group722Props: group723Data,
    card22Props: card224Data,
    cTA4Props: cTA410Data,
    container10Props: container102Data,
    container13Props: container134Data,
    footer4Props: footer46Data,
};

const category113Data = {
    spanText1: "Population Health",
};

const category114Data = {
    spanText1: "Hospitals & Clinics",
    className: "category-8",
};

const category115Data = {
    spanText1: "Physician Support",
    className: "category-8",
};

const category116Data = {
    spanText1: "Patient Engagement",
    className: "category-8",
};

const level22Data = {
    className: "level-1-1",
    category11Props: category113Data,
    category12Props: category114Data,
    category13Props: category115Data,
    category14Props: category116Data,
};

const dropdowns31Data = {
    level2Props: level22Data,
};

const background15Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const frame10722Data = {
    spanText1: "Population Health",
};

const header36Data = {
    logo: "/img/logo-7@2x.png",
    className: "header-9",
};

const leftContent1Data = {
    spanText1: "Catalyst S4",
    spanText2: "About Catalyst S4: consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText3: "How can it help you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const rightContent34Data = {
    rightContent: "/img/right-content-2@2x.png",
    rectangle32: "/img/rectangle-32-12@2x.png",
    className: "t-content-2-1",
};

const rightContent35Data = {
    rightContent: "/img/left-content-2@2x.png",
    rectangle32: "/img/rectangle-32-13@2x.png",
    className: "t-content-2",
};

const leftContent2Data = {
    spanText1: "Catalyst Research",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    className: "t-content-4",
};

const content5Data = {
    spanText1: "Want a tailored solution for you?",
    icon: "/img/icon-7@2x.png",
    className: "",
};

const container135Data = {
    contentProps: content5Data,
};

const twitter220Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter221Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-7",
};

const footer47Data = {
    logo: "/img/logo-18@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    twitter21Props: twitter220Data,
    twitter22Props: twitter221Data,
};

const populationHealth3Data = {
    backgroundProps: background15Data,
    frame1072Props: frame10722Data,
    header3Props: header36Data,
    leftContent1Props: leftContent1Data,
    rightContent31Props: rightContent34Data,
    rightContent32Props: rightContent35Data,
    leftContent2Props: leftContent2Data,
    container13Props: container135Data,
    footer4Props: footer47Data,
};

const background16Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const frame10723Data = {
    spanText1: "Population Health",
};

const header37Data = {
    logo: "/img/logo-15@2x.png",
    className: "header-13",
};

const leftContent22Data = {
    spanText1: "Catalyst S4",
    spanText2: "About Catalyst S4: consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText3: "How can it help you? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
};

const rightContent36Data = {
    rightContent: "/img/right-content-2@2x.png",
    rectangle32: "/img/rectangle-32-12@2x.png",
    className: "t-content-3-1",
};

const rightContent37Data = {
    rightContent: "/img/left-content-2@2x.png",
    rectangle32: "/img/rectangle-32-13@2x.png",
    className: "t-content-3",
};

const leftContent23Data = {
    spanText1: "Catalyst Research",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    className: "t-content-5",
};

const content6Data = {
    spanText1: "Want a tailored solution for you?",
    icon: "/img/icon-8@2x.png",
    className: "content-58",
};

const testimonials23Data = {
    className: "testimonials-43",
};

const twitter222Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter223Data = {
    src: "/img/linkedin-8@2x.png",
    className: "linkedin-8",
};

const footer48Data = {
    logo: "/img/logo-16@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    twitter21Props: twitter222Data,
    twitter22Props: twitter223Data,
};

const group711Data = {
    spanText: "Solution",
};

const group712Data = {
    spanText: "Catalyst S4",
};

const populationHealthcontactPopupData = {
    spanText1: "Contact us",
    spanText2: "Name*",
    spanText3: "Email*",
    spanText4: "Phone number",
    spanText5: "Comment",
    spanText6: "Send",
    iconClose: "/img/x@2x.png",
    backgroundProps: background16Data,
    frame1072Props: frame10723Data,
    header3Props: header37Data,
    leftContent21Props: leftContent22Data,
    rightContent31Props: rightContent36Data,
    rightContent32Props: rightContent37Data,
    leftContent22Props: leftContent23Data,
    contentProps: content6Data,
    testimonials2Props: testimonials23Data,
    footer4Props: footer48Data,
    group711Props: group711Data,
    group712Props: group712Data,
};

const background17Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const header38Data = {
    logo: "/img/logo-15@2x.png",
    className: "header-14",
};

const frame934Data = {
    className: "frame-93-3",
};

const group9622Data = {
    spanText1: "Client 1",
};

const group9623Data = {
    spanText1: "Client 3",
};

const group9624Data = {
    spanText1: "Client 2",
};

const group9625Data = {
    spanText1: "Client 4",
};

const content7Data = {
    spanText1: "Want to learn more about Catalyst S4?",
    icon: "/img/icon-10@2x.png",
    className: "content-59",
};

const container136Data = {
    className: "contact-3",
    contentProps: content7Data,
};

const frame12122Data = {
    rectangle12751: "/img/rectangle-12751-10@2x.png",
};

const frame12123Data = {
    rectangle12751: "/img/rectangle-12751-8@2x.png",
};

const frame1171Data = {
    frame12121Props: frame12122Data,
    frame12122Props: frame12123Data,
};

const twitter224Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter225Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-9",
};

const footer49Data = {
    logo: "/img/logo-20@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    twitter21Props: twitter224Data,
    twitter22Props: twitter225Data,
};

const catalystS4HowItWorks231Data = {
    ellipse28: "/img/ellipse-28-1@2x.png",
    spanText24: "Apply pattern recognition, predictive analysis and ongoing machine learning.",
    spanText25: "2/3",
    backgroundProps: background17Data,
    header3Props: header38Data,
    frame93Props: frame934Data,
    group9621Props: group9622Data,
    group9622Props: group9623Data,
    group9623Props: group9624Data,
    group9624Props: group9625Data,
    container13Props: container136Data,
    frame117Props: frame1171Data,
    footer4Props: footer49Data,
};

const background18Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const header39Data = {
    logo: "/img/logo-21@2x.png",
    className: "header-15",
};

const frame935Data = {
    className: "frame-93-4",
};

const group9626Data = {
    spanText1: "Client 1",
};

const group9627Data = {
    spanText1: "Client 3",
};

const group9628Data = {
    spanText1: "Client 2",
};

const group9629Data = {
    spanText1: "Client 4",
};

const content8Data = {
    spanText1: "Want to learn more about Catalyst S4?",
    icon: "/img/icon-11@2x.png",
    className: "content-60",
};

const container137Data = {
    className: "contact-4",
    contentProps: content8Data,
};

const frame12124Data = {
    rectangle12751: "/img/rectangle-12751-10@2x.png",
};

const frame12125Data = {
    rectangle12751: "/img/rectangle-12751-8@2x.png",
};

const frame1172Data = {
    frame12121Props: frame12124Data,
    frame12122Props: frame12125Data,
};

const twitter226Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter227Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-10",
};

const footer410Data = {
    logo: "/img/logo-18@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    twitter21Props: twitter226Data,
    twitter22Props: twitter227Data,
};

const catalystS4HowItWorks232Data = {
    ellipse28: "/img/ellipse-28-2@2x.png",
    spanText24: "Send full analysis reports to local and international medical institutions.",
    spanText25: "3/3",
    backgroundProps: background18Data,
    header3Props: header39Data,
    frame93Props: frame935Data,
    group9621Props: group9626Data,
    group9622Props: group9627Data,
    group9623Props: group9628Data,
    group9624Props: group9629Data,
    container13Props: container137Data,
    frame117Props: frame1172Data,
    footer4Props: footer410Data,
};

const background19Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const frame10724Data = {
    spanText1: "Our team",
    className: "frame-107-12",
};

const header310Data = {
    logo: "/img/logo-25@2x.png",
    className: "header-16",
};

const frame18496322Data = {
    spanText1: "Ronald Richards",
    className: "",
};

const frame2932Data = {
    rectangle20: "/img/rectangle-20-1@2x.png",
    frame1849632Props: frame18496322Data,
};

const frame18496323Data = {
    spanText1: "Floyd Miles",
    className: "frame-184963-1",
};

const frame2933Data = {
    rectangle20: "/img/rectangle-20-2@2x.png",
    frame1849632Props: frame18496323Data,
};

const frame18496324Data = {
    spanText1: "Theresa Webb",
    className: "frame-184963-1",
};

const frame2934Data = {
    rectangle20: "/img/rectangle-20-3@2x.png",
    frame1849632Props: frame18496324Data,
};

const frame18496325Data = {
    spanText1: "Robert Fox",
    className: "frame-184963-1",
};

const frame2935Data = {
    rectangle20: "/img/rectangle-20-4@2x.png",
    frame1849632Props: frame18496325Data,
};

const frame18496326Data = {
    spanText1: "Courtney Henry",
    className: "frame-184963-1",
};

const frame2942Data = {
    rectangle20: "/img/rectangle-20-17@2x.png",
    frame1849632Props: frame18496326Data,
};

const frame18496327Data = {
    spanText1: "Darrell Steward",
    className: "frame-184963-1",
};

const frame2943Data = {
    rectangle20: "/img/rectangle-20-18@2x.png",
    frame1849632Props: frame18496327Data,
};

const frame18496328Data = {
    spanText1: "Esther Howard",
    className: "frame-184963-1",
};

const frame2944Data = {
    rectangle20: "/img/rectangle-20-19@2x.png",
    frame1849632Props: frame18496328Data,
};

const frame18496329Data = {
    spanText1: "Albert Flores",
    className: "frame-184963-1",
};

const frame2945Data = {
    rectangle20: "/img/rectangle-20-20@2x.png",
    frame1849632Props: frame18496329Data,
};

const frame3622Data = {
    frame2941Props: frame2942Data,
    frame2942Props: frame2943Data,
    frame2943Props: frame2944Data,
    frame2944Props: frame2945Data,
};

const frame184963210Data = {
    spanText1: "Devon Lane",
    className: "frame-184963-1",
};

const frame2946Data = {
    rectangle20: "/img/rectangle-20-21@2x.png",
    frame1849632Props: frame184963210Data,
};

const frame184963211Data = {
    spanText1: "Courtney Henry",
    className: "frame-184963-1",
};

const frame2947Data = {
    rectangle20: "/img/rectangle-20-22@2x.png",
    frame1849632Props: frame184963211Data,
};

const frame184963212Data = {
    spanText1: "Eleanor Pena",
    className: "frame-184963-1",
};

const frame2948Data = {
    rectangle20: "/img/rectangle-20-23@2x.png",
    frame1849632Props: frame184963212Data,
};

const frame184963213Data = {
    spanText1: "Cameron Williamson",
    className: "frame-184963-1",
};

const frame2949Data = {
    rectangle20: "/img/rectangle-20-24@2x.png",
    frame1849632Props: frame184963213Data,
};

const frame3623Data = {
    frame2941Props: frame2946Data,
    frame2942Props: frame2947Data,
    frame2943Props: frame2948Data,
    frame2944Props: frame2949Data,
};

const twitter228Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter229Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-11",
};

const footer411Data = {
    logo: "/img/logo-26@2x.png",
    instagram: "/img/instagram-13@2x.png",
    youtube: "/img/youtube-13@2x.png",
    className: "footer-52",
    twitter21Props: twitter228Data,
    twitter22Props: twitter229Data,
};

const teamdetailPopupData = {
    spanText1: "Home",
    caretcircleright: "/img/caretcircleright-46@2x.png",
    spanText2: "Team",
    spanText3: "Core team",
    spanText4: "Advisors",
    spanText5: "Ronald Richards",
    spanText6: "Position",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem erat, interdum eget est sed, tincidunt tincidunt sapien. Pellentesque consectetur congue rhoncus. Nullam ultrices efficitur justo nec congue. Aliquam justo urna, scelerisque sit amet molestie at, tristique id ex. Maecenas nec volutpat justo. Donec ultrices augue eros, non placerat nunc facilisis nec. Fusce cursus sit amet ligula semper volutpat.",
    spanText9: "Linkedin",
    rectangle20: "/img/rectangle-20-25@2x.png",
    iconClose: "/img/x@2x.png",
    backgroundProps: background19Data,
    frame1072Props: frame10724Data,
    header3Props: header310Data,
    frame2931Props: frame2932Data,
    frame2932Props: frame2933Data,
    frame2933Props: frame2934Data,
    frame2934Props: frame2935Data,
    frame3621Props: frame3622Data,
    frame3622Props: frame3623Data,
    footer4Props: footer411Data,
};

const background20Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const frame10725Data = {
    spanText1: "In the news",
    className: "frame-107-13",
};

const header311Data = {
    logo: "/img/logo-35@2x.png",
    className: "header-17",
};

const frame12126Data = {
    rectangle12751: "/img/rectangle-12751-40@2x.png",
};

const frame12127Data = {
    rectangle12751: "/img/rectangle-12751-10@2x.png",
};

const frame12128Data = {
    rectangle12751: "/img/rectangle-12751-8@2x.png",
};

const list11Data = {
    frame12121Props: frame12126Data,
    frame12122Props: frame12127Data,
    frame12123Props: frame12128Data,
};

const frame12129Data = {
    rectangle12751: "/img/rectangle-12751-18@2x.png",
};

const frame121210Data = {
    rectangle12751: "/img/rectangle-12751-19@2x.png",
};

const frame121211Data = {
    rectangle12751: "/img/rectangle-12751-20@2x.png",
};

const list12Data = {
    className: "list-3",
    frame12121Props: frame12129Data,
    frame12122Props: frame121210Data,
    frame12123Props: frame121211Data,
};

const frame121212Data = {
    rectangle12751: "/img/rectangle-12751-38@2x.png",
};

const frame121213Data = {
    rectangle12751: "/img/rectangle-12751-39@2x.png",
};

const frame121214Data = {
    rectangle12751: "/img/rectangle-12751-40@2x.png",
};

const list13Data = {
    className: "list-3",
    frame12121Props: frame121212Data,
    frame12122Props: frame121213Data,
    frame12123Props: frame121214Data,
};

const twitter230Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter231Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-12",
};

const footer412Data = {
    logo: "/img/logo-34@2x.png",
    instagram: "/img/instagram-19@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitter21Props: twitter230Data,
    twitter22Props: twitter231Data,
};

const news3Data = {
    spanText1: "Home",
    caretcircleright1: "/img/caretcircleright-46@2x.png",
    spanText2: "Insights",
    caretcircleright2: "/img/caretcircleright-46@2x.png",
    spanText3: "In the news",
    backgroundProps: background20Data,
    frame1072Props: frame10725Data,
    header3Props: header311Data,
    list11Props: list11Data,
    list12Props: list12Data,
    list13Props: list13Data,
    footer4Props: footer412Data,
};

const background21Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const frame10726Data = {
    spanText1: "In the news",
    className: "frame-107-14",
};

const header312Data = {
    logo: "/img/logo-35@2x.png",
    className: "header-18",
};

const frame121215Data = {
    rectangle12751: "/img/rectangle-12751-10@2x.png",
};

const frame121216Data = {
    rectangle12751: "/img/rectangle-12751-8@2x.png",
};

const frame1173Data = {
    className: "list-1-2",
    frame12121Props: frame121215Data,
    frame12122Props: frame121216Data,
};

const frame121217Data = {
    rectangle12751: "/img/rectangle-12751-18@2x.png",
};

const frame121218Data = {
    rectangle12751: "/img/rectangle-12751-19@2x.png",
};

const frame121219Data = {
    rectangle12751: "/img/rectangle-12751-20@2x.png",
};

const list14Data = {
    className: "list-10",
    frame12121Props: frame121217Data,
    frame12122Props: frame121218Data,
    frame12123Props: frame121219Data,
};

const frame121220Data = {
    rectangle12751: "/img/rectangle-12751-38@2x.png",
};

const frame121221Data = {
    rectangle12751: "/img/rectangle-12751-39@2x.png",
};

const frame121222Data = {
    rectangle12751: "/img/rectangle-12751-40@2x.png",
};

const list15Data = {
    className: "list-3",
    frame12121Props: frame121220Data,
    frame12122Props: frame121221Data,
    frame12123Props: frame121222Data,
};

const twitter232Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter233Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-13",
};

const footer413Data = {
    logo: "/img/logo-34@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-13@2x.png",
    className: "footer-54",
    twitter21Props: twitter232Data,
    twitter22Props: twitter233Data,
};

const newspopupData = {
    spanText1: "Home",
    caretcircleright1: "/img/caretcircleright-46@2x.png",
    spanText2: "Publications",
    caretcircleright2: "/img/caretcircleright-46@2x.png",
    spanText3: "In the news",
    iconClose: "/img/x@2x.png",
    backgroundProps: background21Data,
    frame1072Props: frame10726Data,
    header3Props: header312Data,
    frame117Props: frame1173Data,
    list11Props: list14Data,
    list12Props: list15Data,
    footer4Props: footer413Data,
};

const frame1849532Data = {
    className: "frame-184953-4",
};

const popup3Data = {
    frame184953Props: frame1849532Data,
};

const background22Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const frame10727Data = {
    spanText1: "Contact us",
    className: "banner-24",
};

const header313Data = {
    logo: "/img/logo-35@2x.png",
    className: "header-19",
};

const banner22Data = {
    backgroundProps: background22Data,
    frame1072Props: frame10727Data,
    header3Props: header313Data,
};

const twitter234Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter235Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-14",
};

const footer414Data = {
    logo: "/img/logo-34@2x.png",
    instagram: "/img/instagram-1@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitter21Props: twitter234Data,
    twitter22Props: twitter235Data,
};

const contactUsEmptyForm3Data = {
    spanText1: "Place an inquiry",
    spanText2: "What are you looking for?*",
    caretdown: "/img/caretdown-5@2x.png",
    spanText3: "Name*",
    spanText4: "Email*",
    spanText5: "Phone number",
    spanText6: "Comment",
    spanText7: "Send",
    banner2Props: banner22Data,
    footer4Props: footer414Data,
};

const background23Data = {
    src: "/img/hans-reniers-lqgjcmy5qcm-unsplash-1-14@2x.png",
    className: "background-1",
};

const frame10728Data = {
    spanText1: "Contact us",
    className: "frame-108-18",
};

const header314Data = {
    logo: "/img/logo-39@2x.png",
    className: "header-20",
};

const banner23Data = {
    backgroundProps: background23Data,
    frame1072Props: frame10728Data,
    header3Props: header314Data,
};

const group713Data = {
    spanText: "Solution",
};

const group714Data = {
    spanText: "Catalyst S4",
    className: "group-71-2",
};

const twitter236Data = {
    src: "/img/twitter-13@2x.png",
};

const twitter237Data = {
    src: "/img/linkedin-13@2x.png",
    className: "linkedin-15",
};

const footer415Data = {
    logo: "/img/logo-4@2x.png",
    instagram: "/img/instagram-13@2x.png",
    youtube: "/img/youtube-1@2x.png",
    twitter21Props: twitter236Data,
    twitter22Props: twitter237Data,
};

const contactUsSolutionSelected3Data = {
    spanText1: "Place an inquiry",
    spanText2: "John Le",
    spanText3: "johnle@mail.co",
    spanText4: "000-000-000",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText6: "Send",
    banner2Props: banner23Data,
    group711Props: group713Data,
    group712Props: group714Data,
    footer4Props: footer415Data,
};

const desktop1Data = {
    spanText1: "Solutions",
    keyboard_Arrow_Down1: "/img/keyboard-arrow-down-104@2x.png",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down2: "/img/keyboard-arrow-down-104@2x.png",
    spanText3: "Publications",
    keyboard_Arrow_Down3: "/img/keyboard-arrow-down-104@2x.png",
    spanText4: "About us",
    keyboard_Arrow_Down4: "/img/keyboard-arrow-down-104@2x.png",
    spanText5: "Value-based healthcare",
    spanText6: "Rebuild the healthcare ecosystem to improve quality and efficiency",
    spanText7: "X+",
    spanText8: "professionals",
    spanText9: "X+",
    spanText10: "years in healthcare",
    spanText11: "$XM",
    spanText12: "fundraised",
    spanText13: "X+",
    spanText14: "partners",
    spanText15: "X+",
    spanText16: "countries",
    spanText17: "What is value-based healthcare?",
};

const category117Data = {
    spanText1: "Population Health",
};

const category118Data = {
    spanText1: "Hospitals & Clinics",
    className: "category-9",
};

const category119Data = {
    spanText1: "Physician Support",
    className: "category-9",
};

const category120Data = {
    spanText1: "Patient Engagement",
    className: "category-9",
};

const level23Data = {
    className: "level-1-2",
    category11Props: category117Data,
    category12Props: category118Data,
    category13Props: category119Data,
    category14Props: category120Data,
};

const dropdowns32Data = {
    level2Props: level23Data,
};

const category121Data = {
    spanText1: "Population Health",
};

const category122Data = {
    spanText1: "Hospitals & Clinics",
    className: "category-10",
};

const category123Data = {
    spanText1: "Physician Support",
    className: "category-10",
};

const category124Data = {
    spanText1: "Patient Engagement",
    className: "category-10",
};

const level24Data = {
    category11Props: category121Data,
    category12Props: category122Data,
    category13Props: category123Data,
    category14Props: category124Data,
};

const group724Data = {
    spanText1: "Catalyst S4",
};

const group725Data = {
    spanText1: "Catalyst Research",
    className: "group-17",
};

const dropdownsexpanded3Data = {
    level2Props: level24Data,
    group721Props: group724Data,
    group722Props: group725Data,
};

const category125Data = {
    spanText1: "Population Health",
};

const category126Data = {
    spanText1: "Hospitals & Clinics",
    className: "category-11",
};

const category127Data = {
    spanText1: "Physician Support",
    className: "category-11",
};

const category128Data = {
    spanText1: "Patient Engagement",
    className: "category-11",
};

const level25Data = {
    className: "level-2-6",
    category11Props: category125Data,
    category12Props: category126Data,
    category13Props: category127Data,
    category14Props: category128Data,
};

const group726Data = {
    spanText1: "Catalyst Value Solutions",
    className: "group-18-1",
};

const group727Data = {
    spanText1: "Catalyst Telemed",
    className: "group-18",
};

const group728Data = {
    spanText1: "SECTRA",
    className: "group-18",
};

const dropdownsexpanded222Data = {
    level2Props: level25Data,
    group721Props: group726Data,
    group722Props: group727Data,
    group723Props: group728Data,
};

const category129Data = {
    spanText1: "Population Health",
};

const category130Data = {
    spanText1: "Hospitals & Clinics",
    className: "category-12",
};

const category131Data = {
    spanText1: "Physician Support",
    className: "category-12",
};

const category132Data = {
    spanText1: "Patient Engagement",
    className: "category-12",
};

const level26Data = {
    className: "level-2-7",
    category11Props: category129Data,
    category12Props: category130Data,
    category13Props: category131Data,
    category14Props: category132Data,
};

const group729Data = {
    spanText1: "Catalyst Encounter",
    className: "group-19-1",
};

const group7210Data = {
    spanText1: "Aircoder",
    className: "group-19",
};

const group7211Data = {
    spanText1: "Curematch",
    className: "group-19",
};

const dropdownsexpanded223Data = {
    level2Props: level26Data,
    group721Props: group729Data,
    group722Props: group7210Data,
    group723Props: group7211Data,
};

const category133Data = {
    spanText1: "Population Health",
};

const category134Data = {
    spanText1: "Hospitals & Clinics",
    className: "category-13",
};

const category135Data = {
    spanText1: "Physician Support",
    className: "category-13",
};

const category136Data = {
    spanText1: "Patient Engagement",
    className: "category-13",
};

const level27Data = {
    className: "level-2-8",
    category11Props: category133Data,
    category12Props: category134Data,
    category13Props: category135Data,
    category14Props: category136Data,
};

const group7212Data = {
    spanText1: "Catalyst Engage",
    className: "group-20-1",
};

const group7213Data = {
    spanText1: "Catalyst Triadge",
    className: "group-20",
};

const group7214Data = {
    spanText1: "Genie Health",
    className: "group-20",
};

const dropdownsexpanded224Data = {
    level2Props: level27Data,
    group721Props: group7212Data,
    group722Props: group7213Data,
    group723Props: group7214Data,
};

const category1210Data = {
    spanText1: "Our story",
};

const category1211Data = {
    spanText1: "Our team",
    className: "category-14",
};

const dropdowns4Data = {
    category121Props: category1210Data,
    category122Props: category1211Data,
};

const frame344Data = {
    className: "frame-3-62",
};

const frame824Data = {
    spanText2: "professionals",
    className: "frame-8-5",
};

const frame924Data = {
    spanText2: "years in healthcare",
    className: "frame-9-5",
};

const frame1124Data = {
    spanText2: "partners",
};

const highlights22Data = {
    frame82Props: frame824Data,
    frame92Props: frame924Data,
    frame112Props: frame1124Data,
};

const homeData = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Value-based healthcare",
    spanText5: "Rebuild the healthcare ecosystem to improve quality and efficiency",
    spanText6: "Our solutions",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText8: "Early pathogen recognition",
    spanText9: "Patient engagement",
    spanText10: "Value-based healthcare management",
    spanText11: "Tele-diagnostics & AI decision support",
    overlapGroup4: "/img/line-2-6@2x.png",
    line3: "/img/line-3-9@2x.png",
    spanText12: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText13: "SOLUTION 2",
    spanText14: "SOLUTION 1",
    spanText15: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText16: "SOLUTION 3",
    spanText17: "Request a demo",
    frame34Props: frame344Data,
    highlights2Props: highlights22Data,
};

const frame345Data = {
    className: "frame-3-63",
};

const frame825Data = {
    spanText2: "professionals",
    className: "frame-8-6",
};

const frame925Data = {
    spanText2: "years in healthcare",
    className: "frame-9-6",
};

const frame1125Data = {
    spanText2: "partners",
};

const highlights23Data = {
    frame82Props: frame825Data,
    frame92Props: frame925Data,
    frame112Props: frame1125Data,
};

const partners33Data = {
    className: "partners-123",
};

const home2Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Value-based healthcare",
    spanText5: "Rebuild the healthcare ecosystem to improve quality and efficiency",
    spanText6: "Our solutions",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText8: "Early pathogen recognition",
    spanText9: "Patient engagement",
    spanText10: "Value-based healthcare management",
    spanText11: "Physician support",
    spanText12: "Tele-diagnostics & AI decision support",
    spanText13: "SOLUTION 1",
    spanText14: "SOLUTION 2",
    spanText15: "SOLUTION 2",
    frame34Props: frame345Data,
    highlights2Props: highlights23Data,
    partners3Props: partners33Data,
};

const investment1Data = {
    spanText1: "For investment",
};

const investment2Data = {
    spanText1: "For careers",
    className: "flex-row-68-item",
};

const footer54Data = {
    className: "footer-59",
};

const contactUsData = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText6: "General inquiry",
    spanText7: "Send",
    investment1Props: investment1Data,
    investment2Props: investment2Data,
    footer5Props: footer54Data,
};

const testimonial31Data = {
    spanText1: "Words from our partners",
};

const footer55Data = {
    className: "footer-60",
};

const ourPartners3Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Our partners",
    spanText5: "Our clients",
    arrow1: "/img/arrow-1-12@2x.png",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    testimonial3Props: testimonial31Data,
    footer5Props: footer55Data,
};

const testimonial32Data = {
    spanText1: "Insights",
    className: "testimonial-19",
};

const footer56Data = {
    className: "footer-61",
};

const pDPData = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Early pathogen recognition",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText6: "Catalyst S4",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText9: "Catalyst Research",
    spanText10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText11: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText12: "What does this solution solve?",
    spanText13: "Catalyst S4",
    spanText14: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText15: "Catalyst Research",
    spanText16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText17: "Want a tailored solution for you?",
    spanText18: "Contact us",
    spanText19: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    testimonial3Props: testimonial32Data,
    footer5Props: footer56Data,
};

const testimonial33Data = {
    spanText1: "Insights",
    className: "testimonial-20",
};

const footer57Data = {
    className: "footer-62",
};

const pDP02Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Catalyst S4",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText6: "Catalyst S4",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText9: "What does it solve?",
    spanText10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText11: "Infographic",
    spanText12: "Want a tailored solution for you?",
    spanText13: "Contact us",
    spanText14: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    testimonial3Props: testimonial33Data,
    footer5Props: footer57Data,
};

const group442Data = {
    className: "group-43-5",
};

const group445Data = {
    className: "group-43-6",
};

const group448Data = {
    className: "group-43-5",
};

const testimonial34Data = {
    spanText1: "Words from our partners",
    className: "testimonial-21",
};

const footer58Data = {
    className: "footer-63",
};

const pLPData = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Solutions",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText6: "Early pathogen recognition",
    spanText7: "Patient engagement",
    spanText8: "Physician support solutions",
    spanText9: "Tele-diagnostics & AI decision support",
    spanText10: "Early pathogen recognition",
    spanText11: "Catalyst S4",
    line6: "/img/line-6-15@2x.png",
    line7: "/img/line-7-15@2x.png",
    spanText12: "Catalyst Research",
    spanText13: "Patient engagement",
    spanText14: "Catalyst Engage",
    spanText15: "Catalyst Triage",
    spanText16: "PT Genie",
    spanText17: "Physician support solutions",
    spanText18: "Catalyst Encounter",
    spanText19: "Aircoder",
    spanText20: "Curematch",
    spanText21: "Tele-diagnostics & AI decision support",
    spanText22: "Catalyst Telemed",
    spanText23: "SECTRA",
    spanText24: "Want a tailored solution for you?",
    spanText25: "Contact us",
    spanText26: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    group441Props: group442Data,
    group442Props: group445Data,
    group443Props: group448Data,
    testimonial3Props: testimonial34Data,
    footer5Props: footer58Data,
};

const partners23Data = {
    className: "partners-92",
};

const testimonial35Data = {
    spanText1: "Words from our clients",
    className: "testimonial-22",
};

const footer59Data = {
    className: "footer-64",
};

const ourClients3Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Our clients",
    spanText5: "Our partners",
    arrow1: "/img/arrow-1-12@2x.png",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    partners2Props: partners23Data,
    testimonial3Props: testimonial35Data,
    footer5Props: footer59Data,
};

const group343Data = {
    className: "group-34-2",
};

const group323Data = {
    className: "group-32-2",
};

const footer510Data = {
    className: "footer-65",
};

const team3Data = {
    spanText1: "LOGO",
    spanText2: "Our team",
    spanText3: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText4: "Contact us",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    group34Props: group343Data,
    group32Props: group323Data,
    footer5Props: footer510Data,
};

const valueBasedHealthcare23Data = {
    className: "value-based-healthcare-4",
};

const frame442Data = {
    className: "frame-44-6",
};

const footer511Data = {
    className: "footer-66",
};

const ourStory3Data = {
    spanText1: "LOGO",
    spanText2: "Our story",
    spanText3: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText4: "Contact us",
    spanText5: "Our team",
    arrow1: "/img/arrow-1-12@2x.png",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText7: "Our vision & mission",
    spanText8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText11: "Our journey",
    spanText12: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText13: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText14: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText15: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText16: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    arrow2: "/img/arrow-2-3@2x.png",
    spanText17: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText18: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText19: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    spanText20: "Our present",
    spanText21: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText22: "MAP",
    valueBasedHealthcare2Props: valueBasedHealthcare23Data,
    frame44Props: frame442Data,
    footer5Props: footer511Data,
};

const group12Data = {
    spanText1: "Early pathogen recognition",
    className: "group-1-7",
};

const group22Data = {
    spanText1: "Value-based healthcare management",
    className: "group-15-1",
};

const group52Data = {
    spanText1: "Patient engagement",
    className: "group-5-2",
};

const group33Data = {
    spanText1: "Physician support solutions",
    className: "group-3-2",
};

const group23Data = {
    spanText1: "Tele-diagnostics & AI decision support",
    className: "group-15",
};

const group75Data = {
    className: "group-8-3",
};

const group76Data = {
    className: "group-9-2",
};

const group102Data = {
    group71Props: group75Data,
    group72Props: group76Data,
};

const dropdowns5Data = {
    line1: "/img/line-1-7@2x.png",
    group1Props: group12Data,
    group21Props: group22Data,
    group5Props: group52Data,
    group3Props: group33Data,
    group22Props: group23Data,
    group10Props: group102Data,
};

const contactInfo33Data = {
    className: "contact-info-8",
};

const footer512Data = {
    className: "footer-67",
};

const contactUs02Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Contact us",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    contactInfo3Props: contactInfo33Data,
    footer5Props: footer512Data,
};

const group631Data = {
    spanText1: "Solutions",
    spanText2: "Partnership",
    spanText3: "Investment",
    spanText4: "Other",
};

const contactInfo34Data = {
    className: "contact-info-9",
};

const footer513Data = {
    className: "footer-68",
};

const contactUs3Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Contact us",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    group57: "/img/vector-349@2x.png",
    spanText7: "What are you looking for?",
    group63Props: group631Data,
    contactInfo3Props: contactInfo34Data,
    footer5Props: footer513Data,
};

const group632Data = {
    spanText1: "Early pathogen recognition",
    spanText2: "Value-based healthcare management",
    spanText3: "Patient engagement",
    spanText4: "Physician support solutions",
    className: "group-63-2",
};

const contactInfo35Data = {
    className: "contact-info-10",
};

const footer514Data = {
    className: "footer-69",
};

const contactUs4Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Contact us",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText7: "I know what I want",
    group63Props: group632Data,
    contactInfo3Props: contactInfo35Data,
    footer5Props: footer514Data,
};

const group622Data = {
    className: "group-62-1",
};

const group6432Data = {
    children: "Name",
};

const group6433Data = {
    children: "Email",
    className: "group-65",
};

const contactInfo36Data = {
    className: "contact-info-11",
};

const footer515Data = {
    className: "footer-70",
};

const contactUs5Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Contact us",
    spanText6: "Solutions",
    group571: "/img/group-57-10@2x.png",
    spanText7: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText8: "Early pathogen recognition",
    group572: "/img/group-57-10@2x.png",
    spanText9: "I know what I want",
    spanText10: "Place an inquiry",
    spanText11: "Phone number",
    group62Props: group622Data,
    group6431Props: group6432Data,
    group6432Props: group6433Data,
    contactInfo3Props: contactInfo36Data,
    footer5Props: footer515Data,
};

const footer516Data = {
    className: "footer-71",
};

const contactUs6Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Contact us",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    footer5Props: footer516Data,
};

const footer517Data = {
    className: "footer-72",
};

const contactUs7Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Contact us",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    group57: "/img/vector-349@2x.png",
    spanText7: "What are you looking for?",
    footer5Props: footer517Data,
};

const footer518Data = {
    className: "footer-73",
};

const contactUs8Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Contact us",
    spanText5: "Contact us",
    spanText6: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText7: "I know what I want",
    spanText8: "Early pathogen recognition",
    spanText9: "Value-based healthcare management",
    spanText10: "Patient engagement",
    spanText11: "Physician support solutions",
    spanText12: "I am not sure",
    footer5Props: footer518Data,
};

const group624Data = {
    className: "group-62-3",
};

const group6434Data = {
    children: "Name",
    className: "group-6-4",
};

const group6435Data = {
    children: "Email",
    className: "group-6-4",
};

const footer519Data = {
    className: "footer-74",
};

const contactUs91Data = {
    group62Props: group624Data,
    group6431Props: group6434Data,
    group6432Props: group6435Data,
    footer5Props: footer519Data,
};

const group625Data = {
    className: "group-62-4",
};

const group6436Data = {
    children: "Name",
    className: "group-6-5",
};

const group6437Data = {
    children: "Email",
    className: "group-6-5",
};

const footer520Data = {
    className: "footer-75",
};

const contactUs92Data = {
    group62Props: group625Data,
    group6431Props: group6436Data,
    group6432Props: group6437Data,
    footer5Props: footer520Data,
};

const partners42Data = {
    className: "partners-125",
};

const testimonial24Data = {
    className: "testimonial-12",
};

const ourPartners02Data = {
    spanText1: "LOGO",
    spanText2: "Partners & Clients",
    keyboard_Arrow_Down: "/img/keyboard-arrow-down-181@2x.png",
    spanText3: "Contact us",
    spanText4: "Our partners",
    spanText5: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText6: "Our clients",
    arrow1: "/img/arrow-1-12@2x.png",
    partners4Props: partners42Data,
    testimonial2Props: testimonial24Data,
};

const frame3930Data = {
    className: "frame-36",
};

const frame3931Data = {
    className: "frame-35",
};

const frame3933Data = {
    className: "frame-43-4",
};

const frame3934Data = {
    className: "frame-44-4",
};

const frame3936Data = {
    className: "frame-36",
};

const frame3937Data = {
    className: "frame-35",
};

const footer217Data = {
    className: "footer-23",
};

const insightsOption02Data = {
    spanText1: "LOGO",
    spanText2: "Contact us",
    spanText3: "Insights",
    spanText4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText5: "In the news",
    arrow11: "/img/arrow-1-12@2x.png",
    spanText6: "Research",
    arrow12: "/img/arrow-1-12@2x.png",
    spanText7: "Blogs",
    arrow13: "/img/arrow-1-12@2x.png",
    frame391Props: frame3930Data,
    frame392Props: frame3931Data,
    frame393Props: frame3933Data,
    frame394Props: frame3934Data,
    frame395Props: frame3936Data,
    frame396Props: frame3937Data,
    footer2Props: footer217Data,
};

const frame8936Data = {
    className: "frame-89-10",
};

const cards46Data = {
    className: "cards-41",
};

const header315Data = {
    logo: "/img/logo-49@2x.png",
    className: "header-21",
};

const banner32Data = {
    frame893Props: frame8936Data,
    cards4Props: cards46Data,
    header3Props: header315Data,
};

const frame8937Data = {
    className: "frame-89-11",
};

const cards47Data = {
    className: "cards-42",
};

const header316Data = {
    logo: "/img/logo-50@2x.png",
    className: "header-22",
};

const banner4Data = {
    frame893Props: frame8937Data,
    cards4Props: cards47Data,
    header3Props: header316Data,
};

const frame8938Data = {
    className: "frame-89-12",
};

const cards48Data = {
    className: "cards-43",
};

const header317Data = {
    logo: "/img/logo-51@2x.png",
    className: "header-23",
};

const banner5Data = {
    frame893Props: frame8938Data,
    cards4Props: cards48Data,
    header3Props: header317Data,
};

const header318Data = {
    logo: "/img/logo-52@2x.png",
};

const banner6Data = {
    header3Props: header318Data,
};

const inspiration3Data = {
    spanText: "Color options",
    screenshot20221207At1271: "/img/screenshot-2022-12-07-at-1-27-1-1@2x.png",
    screenshot20221207At1131: "/img/screenshot-2022-12-07-at-1-13-1-1@2x.png",
    screenshot20221207At1151: "/img/screenshot-2022-12-07-at-1-15-1-1@2x.png",
    overlapGroup: "/img/screenshot-2022-12-07-at-1-15-3-1@2x.png",
    new_ActlogoV51: "/img/new-actlogo-v5-1-5@2x.png",
    screenshot20221207At1281: "/img/screenshot-2022-12-07-at-1-28-1-1@2x.png",
    screenshot20221207At1152: "/img/screenshot-2022-12-07-at-1-15-2-1@2x.png",
    screenshot20221207At1051: "/img/screenshot-2022-12-07-at-1-05-1-1@2x.png",
    screenshot20221207At1121: "/img/screenshot-2022-12-07-at-1-12-1-1@2x.png",
};

const solutionhoveringData = {
    spanText1: "Our solutions",
    spanText2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a. Nullam pellentesque tincidunt arcu ut facilisis.",
    spanText3: "Early pathogen recognition",
    spanText4: "Patient engagement",
    spanText5: "Value-based healthcare management",
    spanText6: "Physician support",
    spanText7: "Tele-diagnostics & AI decision support",
    spanText8: "SOLUTION 1",
    spanText9: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText10: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur mattis risus, vitae porta dolor consectetur a.",
    spanText11: "Request a demo",
    spanText12: "SOLUTION 2",
    spanText13: "SOLUTION 2",
};

