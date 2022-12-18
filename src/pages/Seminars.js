import AdvancedProg from '../images/seminars/Advanced Programming.png';
import BackendWebDev from '../images/seminars/Backend Web Dev.png';
import BestPractices from '../images/seminars/Best Practices in IT cover.jpg';
import CyberSecurity from '../images/seminars/Cyber Security.png';
import DataMining from '../images/seminars/Data Mining cover.jpg';
import DataPrivacy from '../images/seminars/Data Privacy cover.jpg';
import CloudComputing from '../images/seminars/Fundamentals of Cloud Conmputing cover.png';
import IPModular from '../images/seminars/IP Modular cover.png';
import ITandCPECareers from '../images/seminars/IT and CPE Careers cover.jpg';
import EmbeddedSystems from '../images/seminars/Latest Technology in Embedded cover.png';
import LawsAndProfessional from '../images/seminars/Laws and Professional cover.png';
import MixedAugmented from '../images/seminars/Mixed Augmented.png';
import ReactNative from '../images/seminars/Mobile ui react native cover.jpg';
import QATesting from '../images/seminars/QA testing cover.jpg';
import WirelessNetworks from '../images/seminars/Wireless Networks and Communications Cover.png';
import ArduinoProjects from '../images/seminars/Workshop Arduino cover.png';

import './Seminars.css';

const Seminars = () => {
  
  return (
    <div className="container-cert">
      <div className="cert-header">
        <h1>All Seminars & Learnings</h1>
        <div className="underline"></div>
      </div>
      <div className="container-content-cert">

        <div className="card">
          <div className="card-header">
            <img src={AdvancedProg} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>ADVANCED PROGRAMMING & WEB TECHNOLOGY</h1>
              <p><b>Learnings:</b> A seminar in which the ideas gained in Visual Basics are applied to the online environment. This course covers everything from creating a simple web-based shopping cart to connecting the application to a back-end database.
              <br />
              <br />
              It also implies communication and use hypertext markup language to produce, transmit, or manage online content (HTML). A web page is a web document created in HTML (hypertext markup language).
              </p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={BackendWebDev} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>BACKEND WEB DEVELOPMENT USING NODE JS, EXPRESS, and MongoDB</h1>
              <p><b>Learnings:</b> The seminar explained what backend web development is and why it is important. Also, we should be aware of what is node js, which is used for server-side programming and is mainly employed for non-blocking, event-driven servers, such as standard web sites and back-end API services, but was initially developed with real-time, push-based architectures in mind. It also teaches us how to link it in the database, and the database used in the seminar is mongoDB, on which to connect a Node. To connect a JavaScript application to MongoDB, we must utilize the Mongoose library. Overall, the speaker or seminar provided us with insight into how backend web development works and how vital it is to us as college students.</p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={BestPractices} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>BEST PRACTICES IN IT INDUSTRY</h1>
              <p><b>Learnings:</b> Best practices in its sector are defined by leading technology research company Gartner as: A collection of tasks that maximizes the efficiency (cost and risk) or effectiveness (service level) of the business discipline or process to which it contributes. It must be transferrable, repeatable, and flexible across sectors.</p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={DataMining} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>DATA MINING & DATA ANALYTICS</h1>
              <p>
                <b>Learnings:</b> Data mining techniques and technologies help businesses to forecast future trends and make better business decisions. Data mining, which employs sophisticated analytics techniques to identify meaningful information in data sets, is a critical component of data analytics and one of the basic disciplines in data science.
              </p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={DataPrivacy} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>DATA PRIVACY</h1>
              <p><b>Learnings:</b> Many governments regard privacy to be a basic human right, and data protection regulations exist to preserve that right. Data privacy is also vital because individuals must trust that their personal data will be treated with care in order to interact online. Data protection procedures are used by organizations to show to their clients and users that they can be trusted with their personal data.</p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={CloudComputing} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>FUNDAMENTALS OF CLOUD COMPUTING AND EFFICIENT SOLUTIONS FOR CLOUD DATA STORAGE</h1>
              <p><b>Learnings:</b> Cloud computing gets its name from the fact that the information being accessed is located remotely in the cloud or a virtual area. Cloud service providers allow customers to store files and apps on remote servers and then access the material through the Internet. This implies that the user does not need to be at a certain location to obtain access to it, allowing them to work remotely.
                <br />
                <br />
                Cloud computing offloads all of the hard labor associated with crunching and processing data from the device you carry about or sit at to work on. It also offloads all of that work to massive computer clusters in cyberspace.
              </p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={IPModular} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>IP Modular Course</h1>
              <p><b>Learnings:</b> Recognizing and safeguarding your intellectual property (IP) is crucial to development, defending what's yours, and keeping a good reputation, whether you're a start-up or a family firm that's been in business for generations. Intellectual property protects the time, money, and effort you put into your business.
              <br />
              <br />
              The right to copy is referred to as a copyright. It safeguards original authorship works such as literature, paintings, and other creative works. In general, software is protected by copyright. A copyright grants the owner of the work the exclusive right to reproduce, modify, distribute, perform, and exhibit it.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={ITandCPECareers} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>CAREERS IN IT AND CPE IN THE IT INDUSTRY</h1>
              <p>
              <b>Learnings:</b> An IT Technician is a professional who is in charge of installing, maintaining, and repairing the hardware and software components of a company's computers. They also provide assistance for these systems through remote access or site visits as required by their company's management teams.
              <br />
              <br />
              Information technology is a broad subject that houses a lot of specialized roles and expertise. These can be broken down into a few sub-groups such as Cyber Security, Software development, IT infrastructure, Data management and many more.
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={EmbeddedSystems} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>LATEST TECHNOLOGY IN EMBEDDED SYSTEMS</h1>
              <p><b>Learnings:</b> It represents a rich and yet unexplored embedded systems market that has a range of applications from image processing to audio analysis. Even though, the developers are mainly focused on cloud connectivity and security. It is emerging as the latest trend in an embedded system.</p>
              <br />
              <br />
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={LawsAndProfessional} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>LAWS & PROFESSIONAL CONDUCTS FOR ICT PROFESSIONALS</h1>
              <p><b>Learnings:</b> Employees are frequently required to maintain honesty, accountability, and professionalism while at work. This involves managing sensitive information appropriately, ensuring a safe working environment, and avoiding illegal behavior such as taking bribes.</p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={MixedAugmented} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>MIXED AUGMENTED AND VIRTUAL REALITY WEBINAR</h1>
              <p>
                <b>Learnings:</b> The webinar would look at current and impending breakthroughs in virtual, augmented, and mixed reality, as well as industry trends that we anticipate will impact the future of immersive learning.
                <br /> 
                <br />
                Also, explore the potential of profoundly immersive virtual reality experiences to generate new types of experiential learning by understanding how current industry trends will affect the future of VR, AR, and mixed reality.
              </p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={ReactNative} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>MOBILE APPLICATION UI DEVELOPMENT USING REACT NATIVE</h1>
              <p><b>Learnings:</b> React Native provides a standardized set of APIs for creating UI components, allowing developers to write code once and run it across numerous platforms. For someone coming from a web programming background, React Native is relatively simple to master.</p>
              <br />
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={QATesting} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>QA Testing Conference: QA Tester Share Successful Software Testing Case Studies</h1>
              <p><b>Learnings:</b> Quality assurance (QA) testers are essential in providing high-quality, error-free software and online services to clients. They test and assess new and current applications in order to detect and eliminate bugs, malfunctions, and other user experience concerns.</p>
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={WirelessNetworks} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>WIRELESS NETWORKS & COMMUNICATIONS</h1>
              <p><b>Learnings:</b> A wireless network is a collection of several devices that send and receive data across radio frequencies. Wireless networks vary from wired networks in that one end of the data link is physically connected to the other end by a cable to allow communication.</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={ArduinoProjects} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>WORKSHOPS ON ARDUINO PROJECTS</h1>
              <p><b>Learnings:</b> Arduino aims to establish an easy approach for software developers to enter the world of microcontroller programming and knowing how electronics are represented graphically, and the capacity to read and analyze electrical circuits. Capability to program a variety of electronic components, as well as read, analyze, and troubleshoot Arduino code. Understanding the structure and capabilities of an Arduino board, as well as the roles of its many components.
              <br />
              <br />
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seminars;