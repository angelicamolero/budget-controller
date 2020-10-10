import React, {useState, useEffect} from 'react';
import NewBudget from './components/NewBudget';
import Form from './components/Form';
import List from './components/List';
import BudgetController from './components/BudgetController';

function App() {

  //set state
  const [budget, saveBudget] = useState(0);
  const [remainingAmount, saveRemaining] = useState(0);
  const [showBudget, updateExpense] = useState(true);
  const [expenses, saveExpenses] = useState([]);
  const [expense, addNewExpenses] = useState({});
  const [createExpense, saveCreatedExpense] = useState(false);

  //useEffect that updates the remaining
  useEffect(() => {
    if(createExpense) {
      //add new budget
      saveExpenses([
        ...expenses,
        expense
      ]);

      //resta nuevo presupuesto actual
      const remainingBudget = remainingAmount - expense.expenseValue;
      saveRemaining(remainingBudget);
    
    saveCreatedExpense(false);
   }
  }, [expense, createExpense, expenses, remainingAmount]);


  return (
      <div className="container"> 
      <header>
        <h1>Monthly Expenses</h1>
        <div className="contenido-principal contenido">
        { showBudget ? 
        (<NewBudget 
          saveBudget= {saveBudget}
          saveRemaining = {saveRemaining}
          update = {updateExpense}
        />) : 
        (
          <div className="row">
          <div className="one-half column">
          <Form
            addNewExpenses={addNewExpenses}
            saveCreatedExpense={saveCreatedExpense}
          />
          </div>
          <div className="one-half column">
          <List
           expenses={expenses}
          />
          <BudgetController
           budget={budget}
           remainingAmount={remainingAmount}
           />
          </div>
        </div>
        ) }
        

      </div>
        
      </header>
      </div>
  );
}

export default App;
