import { aboutUs } from "../data/aboutUs";
import heroImage from '/heroImage.png'

const Footer = () => {
  return (
    <div id="Hours" className="w-full border-t-4">
      <div className="w-full min-h-fit flex justify-around py-4 bg-blue-300 rounded">
        <div>
          <img src={heroImage} alt="heroImage" className="sm:h-52 sm:w-52 sm:block hidden"/>
        </div>
        <div id="About Us" className="flex flex-col justify-start p-2 rounded">
          <h3 className="text-xl font-serif">HOURS:</h3>
          <div className="text-md">

          <div>Sunday: {aboutUs.hours}</div>
          <div>Monday: {aboutUs.hours}</div>
          <div>Tuesday: {aboutUs.hours}</div>
          <div>Wednesday: {aboutUs.hours}</div>
          <div>Thursday: {aboutUs.hours}</div>
          <div>Friday: {aboutUs.hours}</div>
          <div>Saturday: {aboutUs.hours}</div>
          </div>
        </div>
        <div className="bg-blue-300 p-2 rounded h-min">
          <h3 className="text-xl font-serif">LOCATION:</h3>
          <div className="text-base">

          <div>{aboutUs.address}</div>
          <div>{aboutUs.city}</div>
          </div>
        </div>
        <div className="bg-blue-300 p-2 rounded h-min">
          <h3 className="text-xl font-serif">PHONE:</h3>
          <div className="text-base">

          <div>{aboutUs.phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
