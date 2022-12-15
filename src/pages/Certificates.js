import BestPractices from '../images/seminars/Best Practices in IT cover.jpg';
import DataMining from '../images/seminars/Data Mining cover.jpg';
import DataPrivacy from '../images/seminars/Data Privacy cover.jpg';
import CloudComputing from '../images/seminars/Fundamentals of Cloud Conmputing cover.png'
import IPModular from '../images/seminars/IP Modular cover.png';
import ITandCPECareers from '../images/seminars/IT and CPE Careers cover.jpg';
import EmbeddedSystems from '../images/seminars/Latest Technology in Embedded cover.png';
import LawsAndProfessional from '../images/seminars/Laws and Professional cover.png';
import ReactNative from '../images/seminars/Mobile ui react native cover.jpg';
import QATesting from '../images/seminars/QA testing cover.jpg';
import WirelessNetworks from '../images/seminars/Wireless Networks and Communications Cover.png';
import ArduinoProjects from '../images/seminars/Workshop Arduino cover.png';

import './Certificates.css';

const Certificates = () => {
  return (
    <div className="container-cert">
      <div className="cert-header">
        <h1>All Certificates</h1>
        <div className="underline"></div>
      </div>
      <div className="container-content-cert">

        <div className="card">
          <div className="card-header">
            <img src={BestPractices} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>BEST PRACTICES IN IT INDUSTRY</h1>
              <p>Learnings: Best practices in its sector are defined by leading technology research company Gartner as: A collection of tasks that maximizes the efficiency (cost and risk) or effectiveness (service level) of the business discipline or process to which it contributes. It must be transferrable, repeatable, and flexible across sectors.</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={DataMining} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>DATA MINING & DATA ANALYTICS</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={DataPrivacy} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>DATA PRIVACY</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={CloudComputing} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>FUNDAMENTALS OF CLOUD COMPUTING AND EFFICIENT SOLUTIONS FOR CLOUD DATA STORAGE</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={IPModular} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>IP Modular Course</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={ITandCPECareers} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>CAREERS IN IT AND CPE IN THE IT INDUSTRY</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={EmbeddedSystems} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>LATEST TECHNOLOGY IN EMBEDDED SYSTEMS</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={LawsAndProfessional} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>LAWS & PROFESSIONAL CONDUCTS FOR ICT PROFESSIONALS</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={ReactNative} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>MOBILE APPLICATION UI DEVELOPMENT USING REACT NATIVE</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={QATesting} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>QA Testing Conference: QA Tester Share Successful Software Testing Case Studies</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={WirelessNetworks} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>WIRELESS NETWORKS & COMMUNICATIONS</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img src={ArduinoProjects} alt="" style={ {width: '100%', height: '250px'} } />
          </div>
          <div className="card-body">
              <h1>WORKSHOPS ON ARDUINO PROJECTS</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, blanditiis rerum? Asperiores eaque sint repellat aut, adipisci magnam, eius consequuntur quibusdam dolor, suscipit explicabo voluptatum temporibus itaque. Iusto, esse laborum?</p>
              <button>View Certificate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates;
