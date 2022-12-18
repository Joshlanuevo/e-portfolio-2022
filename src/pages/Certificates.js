import ModalImage from "react-modal-image";

import AdvancedProgCert from '../images/certs/ADVANCED PROGRAMMING & WEB TECHNOLOGY.jpg';
import BackendWebDevCert from '../images/certs/BACKEND WEB DEVELOPMENT USING NODE JS, EXPRESS, and MongoDB-1.png';
import BestPracticesCert from '../images/certs/BEST PRACTICES IN IT INDUSTRY.png';
import DataMiningCert from '../images/certs/Data Mining & Data Analysis Certificate of Participation-1.png';
import DataPrivacyCert from '../images/certs/DATA PRIVACY-1.png';
import CloudComputingCert from '../images/certs/FUNDAMENTALS OF CLOUD COMPUTING AND EFFICIENT SOLUTIONS FOR CLOUD DATA STORAGE-1.png';
import IPModularCert from '../images/certs/IP Modular Course-1.png';
import ITandCPECareersCert from '../images/certs/IT AND CPE CAREERS IN THE IT INDUSTRY.jpg';
import EmbeddedSystemsCert from '../images/certs/Latest Technology in Embedded Systems-1.png';
import LawsAndProfessionalCert from '../images/certs/LAWS & PROFESSIONAL CONDUCTS FOR ICT PROFESSIONALS.jpg';
import MixedAugmentedCert from '../images/certs/MIXED AUGMENTED AND VIRTUAL REALITY WEBINAR-1.png';
import ReactNativeCert from '../images/certs/Mobile Application UI Development using React Native-1.png';
import QATestingCert from '../images/certs/QA Testing Conference.png';
import WirelessNetworkCert from '../images/certs/WIRELESS NETWORKS AND COMMUNICATIONS-1.png';
import ArduinoProjectsCert from '../images/certs/WORKSHOP IN ARDUINO PROJECT-1.png';

import './Certificates.css';

const Certificates = () => {
  return (
    <div className="certs-container">
      <div className="certs-header">
        <h1>All Certificates</h1>
        <div className="underline"></div>
      </div>
      <div className="total">
        <h2>Total: 15</h2>
      </div>
      <div className="card-certs-container">

        <div className="card-certs">
          <ModalImage 
            className='cert'
            small={AdvancedProgCert}
            large={AdvancedProgCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage 
            className='cert'
            small={BackendWebDevCert}
            large={BackendWebDevCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage 
            className='cert'
            small={BestPracticesCert}
            large={BestPracticesCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={DataMiningCert}
            large={DataMiningCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={DataPrivacyCert}
            large={DataPrivacyCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={CloudComputingCert}
            large={CloudComputingCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={IPModularCert}
            large={IPModularCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={ITandCPECareersCert}
            large={ITandCPECareersCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={EmbeddedSystemsCert}
            large={EmbeddedSystemsCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={LawsAndProfessionalCert}
            large={LawsAndProfessionalCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={MixedAugmentedCert}
            large={MixedAugmentedCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={ReactNativeCert}
            large={ReactNativeCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={QATestingCert}
            large={QATestingCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={WirelessNetworkCert}
            large={WirelessNetworkCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>

        <div className="card-certs">
          <ModalImage
            className='cert'
            small={ArduinoProjectsCert}
            large={ArduinoProjectsCert}
            alt="Hello World!"
          />
          <div className="card-certs-body">
            <p>Click Certificate to zoom</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates;
