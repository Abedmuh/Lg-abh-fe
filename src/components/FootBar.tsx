import imgReact from "../assets/react.svg";
import { FiMail, FiPhoneCall, FiGlobe, FiNavigation } from "react-icons/fi";

export default function FootBar() {
  return (
    <>
      <section className="grid grid-cols-5 bg-maincolor text-white px-14 py-24">
        <div className="col-span-2 mr-40">
          <h5>PT. Abhinawa Sumberdaya Asia</h5>
          <div className="flex items-center space-x-2">
            <FiMail className="text-xl" />
            <a href="mailto:abhinawa@abhinawa.co.id">abhinawa@abhinawa.co.id</a>
          </div>
          <div className="flex items-center space-x-2 ">
            <FiPhoneCall className="text-xl" />
            <a href="#">+62 21-68-4031</a>
          </div>
          <div className="flex items-center space-x-2">
            <FiGlobe className="text-xl" />
            <a href="#">www.abinawanetwork.com</a>
          </div>
          <div className="flex space-x-2">
          <FiNavigation className="text-xl shrink-0" />
            <a href="#">
               Menara Kadin, 20th floor, JL.HR. Rasuna Said, Block X-5, East
              Kuningan, Setiabudi, South Jakarta, Indonesia 12950
            </a>
          </div>
        </div>
        <div>
          <h3>Services</h3>
          <h5>Domestic Ethernet</h5>
          <h5>Cloud Connect</h5>
          <h5>Global Interconnection</h5>
          <h5>Colocation</h5>
          <h5>iDex Network</h5>
          <h5>DDos Protect</h5>
        </div>
        <div>
          <h3>Solutions</h3>
          <h5>IT and Network</h5>
          <h5>Equipment</h5>
          <h5>Managed Services</h5>
          <h5>SD-WAN</h5>
        </div>
        <div className="grid grid-rows-2">
          <div>
            <h3>Links</h3>
            <h5>Our Networks</h5>
            <h5>About Us</h5>
          </div>
          <div>
            <h3>Follow Us</h3>
            <div className="columns-2">
              <img src={imgReact} alt="Myreact" width={30} height={24} />
              <img src={imgReact} alt="Myreact" width={30} height={24} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
