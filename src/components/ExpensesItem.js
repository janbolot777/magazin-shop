import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpensesItem.css";
import Card from "./Card";

const ExpensesItem = (props) => {
    const { date, title, price } = props; //object

    const [title2, setTitle2] = useState(title); //[]
    const [count, setCount] = useState(0);
    const arr = [];

    let count2 = 0;

    // переменная состояния
    // функция

    const changeTitle = () => {
        setTitle2("Изменили!!!");
        console.log(title2);
    };

    const incrementNum = () => {
        setCount(count + 1);
        count2 += 1;
        console.log("count2", count2);
    };

    const decrementNum = () => {
        setCount(count - 1);
        count2 -= 1;
        console.log("count2", count2);
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h1>{title}</h1>
            </div>
            <div className="expense-item__price">${price}</div>
            <button onClick={changeTitle}>Change name</button>
            <button onClick={incrementNum}>Add 1</button>
            <button onClick={decrementNum}>minus 1</button>
        </Card>
    );
};

export default ExpensesItem;
