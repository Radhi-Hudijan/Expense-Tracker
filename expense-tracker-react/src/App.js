import "./App.css";
import Header from "./component/Header";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import TransactionsList from "./component/TransactionsList";
import AddTransaction from "./component/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {" "}
        <Balance />
        <IncomeExpense />
        <TransactionsList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
