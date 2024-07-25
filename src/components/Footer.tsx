import { aboutUs } from "../data/aboutUs";
// import heroImage from '/heroImage.png'
import heroImage from '/SurfLoungeNewLogo.png'

const Footer = () => {
  return (
    <div id="Hours" className="w-full border-t-4">
      <div className="w-full min-h-fit flex justify-around py-4 bg-blue-300 rounded px-2">
        <div>
          <img src={heroImage} alt="heroImage" className="sm:h-52 sm:w-52 sm:block hidden"/>
        </div>
        <div id="About Us" className="flex flex-col justify-start p-2 rounded gap-2">
          <h3 className="text-xl font-serif">HOURS:</h3>
          <div className="text-md flex flex-col gap-1">

          <div>Sunday: {aboutUs.hours}</div>
          <div>Monday: {aboutUs.hours}</div>
          <div>Tuesday: {aboutUs.hours}</div>
          <div>Wednesday: {aboutUs.hours}</div>
          <div>Thursday: {aboutUs.hours}</div>
          <div>Friday: {aboutUs.hours}</div>
          <div>Saturday: {aboutUs.hours}</div>
          </div>
        </div>
        <div className="bg-blue-300 p-2 rounded h-min flex flex-col gap-2">
          <h3 className="text-xl font-serif">LOCATION:</h3>
          <div className="text-base">

          <div>{aboutUs.address}</div>
          <div>{aboutUs.city}</div>
          </div>
        </div>
        <div className="bg-blue-300 p-2 rounded h-min flex-col gap-2 flex">
          <h3 className="text-xl font-serif">PHONE:</h3>
          <div className="text-base">

          <div>{aboutUs.phone}</div>
          <h3 className="text-xl font-serif pt-4">EMAIL:</h3>
          <div className="pt-2">
            <a href={`mailto:${aboutUs.email}`}>{aboutUs.email}</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
