import React, { FC, useState } from "react";
import AddIcon from "./AddIcon";

const PizzaCountButton: FC = () => {

    const [pizzaCount, setPizzaCount] = useState(0);

    const addToCardHandler = () => {
        setPizzaCount(pizzaCount + 1);
    };

    return (
        <button className="button button--outline button--add"
            onClick={() => {
                addToCardHandler();
            }}>

            <AddIcon
            ></AddIcon>
            <span>Добавить</span>
            <i>{pizzaCount}</i>
        </button>
    );
};

export default PizzaCountButton;