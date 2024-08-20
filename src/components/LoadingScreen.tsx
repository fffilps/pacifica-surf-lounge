import { useState } from "react";
import surfLoungePic from '../assets/photoLibrary/surfLoungePic.jpeg'

const LoadingScreen = () => {

const [open, setOpen] = useState(true)

  //age verification may need to be outside of this function and on the main index since its a z over other things based on age. also would like to cache it for 3 days.

  const customWidth = "max-w-md";
  const customBackground = "bg-white/90";
  return (
    <div style={{backgroundImage: surfLoungePic}}
      className={`${customBackground} fixed z-50 inset-0 flex justify-center items-center transition-colors bg-cover bg-no-repeat ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={() => {}}
    >
      <div
        className={` rounded-lg shadow p-6 transition-all duration-[300ms] ${customWidth} ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation}
      >
        {/* <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={() => {}}
        >
          X
        </button> */}
        <div className="p-4">
          <div>Are you 21 years or older?</div>
          <div className="flex gap-2 justify-around items-center">
            <button className="bg-green-500 px-4 py-2 rounded-md text-white" onClick={() => setOpen(false)}>
              Yes
            </button>
            <button className="bg-red-600 px-4 py-2 rounded-md text-black">
              <a href="https://www.google.com/search?sca_esv=2ab500ab743ae1cb&sxsrf=ADLYWILV6S6EAiJwY529Aa5wq9tCdJ49dA:1722552727675&q=kittens&udm=2&fbs=AEQNm0A-5VTqs5rweptgTqb6m-Eb3TvVcv4l7eCyod9RtZW9874wvsYjTfpwMQKGHqKPG-IB7j9flyfH28tJSLVuVdcT1tesPpIhTR_8sOQ3FQrQWiVTfWhoIplDgGh5JzUv9F4u3riMB636EHR41DrkNY_uSRk347tLZsVeJqqyuWPTyXrtg-EYkFQYZqw6rWM1khGHS26HrYFGhj2QeE1uCS-2MrLbBw&sa=X&ved=2ahUKEwjilsL78NSHAxUICTQIHdHyAyEQtKgLegQIFxAB&biw=736&bih=846&dpr=2">
              No
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
