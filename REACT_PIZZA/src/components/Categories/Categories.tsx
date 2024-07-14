import React, { FC, useState } from "react";

// type TCategory = {className: 'action'} | {className: ''}

const Categories: FC = () => {

    const [currentCategory, setCurrentCategory] = useState(0);

    const categories = [
        'Все',
        'Мясные',
        'Вегетрианские',
        'Гриль',
        'Острые',
        'Закрытые',
    ];


    const changeCategoryHandler = (index:number) => {
        setCurrentCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((category, index) => {
                        return (
                            <li
                                onClick={() => {
                                    changeCategoryHandler(index);
                                }}
                                className={currentCategory===index ? 'active' : ''}
                            >
                                {category}
                            </li>
                        )
                    })
                }
                {/* <li className="active">Все</li> */}
                {/* <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li> */}
            </ul>
        </div>
    );
};

export default Categories;