import Card from "./Card";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";

const Expenses = (props) => {
    console.log("props", props);
    console.log(props.data);
    const { data } = props;

    return (
        <Card className="expense_container">
            <ExpensesItem
                date={data[0].date}
                title={data[0].title}
                price={data[0].price}
            />
            <ExpensesItem
                date={data[1].date}
                title={data[1].title}
                price={data[1].price}
            />
            <ExpensesItem
                date={data[2].date}
                title={data[2].title}
                price={data[2].price}
            />
        </Card>
    );
};

export default Expenses;
