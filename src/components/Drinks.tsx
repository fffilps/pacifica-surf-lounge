import { useState } from "react";
import { drinks } from "../data/drinks";
import DrinkCard from "./DrinkCard";

const Drinks = () => {

    const drinkListTabs = drinks.map((drinkTab) => Object.keys(drinkTab)[0])
    const [clickedTab, setClickedTab] = useState("")

    const [activeTab, setActiveTab] = useState("")

    const handleClick = (drinkName: string) => {
      setClickedTab(drinkName)
      setActiveTab(activeTab === drinkName ? "" : drinkName) 
      console.log(activeTab)
    }
    

  return (
    <div id="Drinks">
        <div className="flex flex-col bg-blue-300 lg:grid-cols-2 lg:grid">
            {drinkListTabs.map(drinkName => <div className="" key={drinkName} onClick={() => handleClick(drinkName)}><DrinkCard clickedTab={clickedTab} drinkSection={drinkName} activeTab={activeTab}/></div>)}
            {/* <DrinkCard drinkSection={drinkListTabs} /> */}
            
        </div>
    </div>
  )
}

export default Drinks