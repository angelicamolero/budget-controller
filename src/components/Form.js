import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Form = ({addNewExpenses, saveCreatedExpense}) => {

    const [expenseName, saveExpenseName] = useState('');
    const [expenseValue, saveExpenseValue] = useState(0);
    const [ error, saveError ] = useState(false);

    const addExpense = e => {
        e.preventDefault();
        //validate
        if(expenseValue < 1 || isNaN (expenseValue) || expenseName.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);
        //build expense
        const expenseObject = {
            expenseName,
            expenseValue,
            id: shortid.generate()
        }

        //send expense to initial component
        addNewExpenses(expenseObject);
        saveCreatedExpense(true);

        // reboot form
        saveExpenseName('');
        saveExpenseValue(0);
    }

    return (
        <form
        onSubmit= {addExpense}
        >
            <h2>Add your expenses</h2>
            { error ? <Error message="Both fields are requiered or expense is incorrect"/> : null }
            <div className="campo">
                <label>Expense's Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex: Rent"
                    value={expenseName}
                    onChange= {e => saveExpenseName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Expense Value</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex: 4000"
                    value={expenseValue}
                    onChange= {e => saveExpenseValue(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense" 
            />
        </form>
    );

}

Form.propTypes = {
    addNewExpenses: PropTypes.func.isRequired,
    saveCreatedExpense : PropTypes.func.isRequired
}
export default Form;