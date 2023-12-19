import { drinks } from "../data/drinks";

type Props = {
  drinkSection: string;
  clickedTab: string;
  activeTab: string;
};



const DrinkCard = ({ drinkSection, clickedTab, activeTab }: Props) => {
  const bowlDrinks = drinks[0].bowlDrinks?.map((drinkName) => drinkName);
  const rumDrinks = drinks[1].rumDrinks?.map((drinkName) => drinkName);
  const vodkaDrinks = drinks[2].vodkaDrinks?.map((drinkName) => drinkName);
  const iceCreamDrinks = drinks[3].iceCreamDrinks?.map(
    (drinkName) => drinkName
  );
  const specialtyDrinks = drinks[4].specialtyDrinks?.map(
    (drinkName) => drinkName
  );
  const tequilaDrinks = drinks[5].tequilaDrinks?.map((drinkName) => drinkName);
  const hotDrinks = drinks[6].hotDrinks?.map((drinkName) => drinkName);
  const shotsMartinis = drinks[7].shotsMartinis?.map((drinkName) => drinkName);
  const houseDrinks = drinks[8].houseDrinks?.map((drinkName) => drinkName);



  const drinkInfoCheck = (drinkTabName: string) => {

    
    if (drinkTabName === "bowlDrinks") {
      return bowlDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          <div className="text-sm italic">({drink.subtitle})</div>
        </li>
      ));
    } else if (drinkTabName === "rumDrinks") {
      return rumDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          <div className="text-sm italic">({drink.subtitle})</div>
        </li>
      ));
    } else if (drinkTabName === "vodkaDrinks") {
      return vodkaDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          <div className="text-sm italic">({drink.subtitle})</div>
        </li>
      ));
    } else if (drinkTabName === "iceCreamDrinks") {
      return iceCreamDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          <div className="text-sm italic">({drink.subtitle})</div>
        </li>
      ));
    } else if (drinkTabName === "specialtyDrinks") {
      return specialtyDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          <div className="text-sm italic">({drink.subtitle})</div>
        </li>
      ));
    } else if (drinkTabName === "tequilaDrinks") {
      return tequilaDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          {drink.subtitle && <div className="text-sm italic">({drink.subtitle})</div>}
        </li>
      ));
    } else if (drinkTabName === "hotDrinks") {
      return hotDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          <div className="text-sm italic">({drink.subtitle})</div>
        </li>
      ));
    } else if (drinkTabName === "shotsMartinis") {
      return shotsMartinis?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          {/* {drink.subtitle && <div className="text-sm italic">({drink.subtitle})</div>} */}
        </li>
      ));
    } else if (drinkTabName === "houseDrinks") {
      return houseDrinks?.map((drink) => (
        <li className="w-full py-2" key={drink.name}>
          <div className="flex justify-between w-full">
            <span className="font-semibold">{drink.name}:</span>
            <span className="font-grandiflora text-lg">{drink.price}</span>
          </div>
          {/* {(drink.subtitle) && <div className="text-sm italic">({drink.subtitle})</div>} */}
        </li>
      ));
    }
  };

  const drinkTabNames = (drinkListTabs: string) => {
    switch (drinkListTabs) {
      case "bowlDrinks":
        return "Bowl Drinks";
        break;
      case "rumDrinks":
        return "Rum Drinks";
        break;
      case "vodkaDrinks":
        return "Vodka Drinks";
        break;
      case "iceCreamDrinks":
        return "Ice Cream Drinks";
        break;
      case "specialtyDrinks":
        return "Specialty Drinks";
        break;
      case "tequilaDrinks":
        return "Tequila Drinks";
        break;
      case "hotDrinks":
        return "Hot Drinks";
        break;
      case "shotsMartinis":
        return "Shots & Martinis";
        break;
        case "houseDrinks":
          return "House Drinks";
          break;
      default:
        return "Drinks";
        break;
    }
  };

  // need to make the things close when something else is tapped or if they are tapped again.

  return (
    <div className="p-2 divide-y-4 border-2 rounded-md m-2 bg-white border-blue-500 shadow-lg">
      <h3 className="font-bold text-2xl underline-offset-2 py-2 font-grandiflora">
        {drinkTabNames(drinkSection)}
      </h3>
      <ol className={`divide-y-2 py-2 font-kalnia ${clickedTab && activeTab === drinkSection ? "" : 'hidden'}`}>{drinkInfoCheck(drinkSection)}</ol>
    </div>
  );
};

export default DrinkCard;
