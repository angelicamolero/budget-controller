import React from 'react';
import Expense from './Expense';
import PropTypes from 'prop-types';

const List = ({expenses}) => (
    <div className="gastos-realizados">
            <h2>Expense's List</h2>
            {expenses.map(exp => (
            <Expense 
            key={exp.id}
            exp = {exp}
            />
            ))}
    </div>
)
List.propTypes = {
    expenses: PropTypes.array.isRequired
}
export default List;