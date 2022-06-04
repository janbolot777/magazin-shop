import { useState } from "react";
import "./NewExpense.css";

const NewExpense = () => {
    const [title, setTitle] = useState("New Item");

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const saveExpense = (e) => {
        e.preventDefault();

        const expenseData = {
            title: title,
            amount: "",
            date: new Date(),
        };

        console.log("Your inputs are saved", expenseData);
    };

    return (
        <div className="new-expense">
            <form onSubmit={saveExpense}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" onChange={titleHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" />
                    </div>
                    <div className="new-expense__actions">
                        <button>Cancel</button>
                        <button type="submit">Add new expense</button>
                    </div>
                </div>
            </form>
            <h1>{title}</h1>
        </div>
    );
};

export default NewExpense;