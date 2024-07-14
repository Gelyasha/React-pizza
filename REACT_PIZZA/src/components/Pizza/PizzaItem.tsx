import React, { FC, useState } from "react";
import PizzaCountButton from "./PizzaCountButton";
import { TPizza } from "../../types/types";

interface IProps {
    pizza: TPizza
};

const PizzaItem: FC<IProps> = ({
    pizza
}) => {

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                alt="Pizza"
                src={pizza.imageUrl}
            />
            <h4 className="pizza-block__title">{pizza.title}</h4>

            <div className="pizza-block__selector">
                <ul>
                    <li className="active">тонкое</li>
                    <li>традиционное</li>
                </ul>
                <ul>
                    <li className="active">26 см.</li>
                    <li>30 см.</li>
                    <li>40 см.</li>

                </ul>
            </div>

            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{`${pizza.price} ₽`}</div>
                <PizzaCountButton
                />
            </div>

        </div>
    );
};

export default PizzaItem;