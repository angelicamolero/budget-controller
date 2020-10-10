import React, { Fragment } from 'react';
import {checkoutBudget} from '../helper';
import PropTypes from 'prop-types';

const BudgetController = ({budget, remainingAmount}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
            Initial Budget: $ {budget}
            </div>
            <div className={checkoutBudget(budget, remainingAmount)}>
            Budget Remaining: ${remainingAmount}
            </div>
        </Fragment>
    );
}

BudgetController.propTypes = {
    budget: PropTypes.number.isRequired,
    remainingAmount : PropTypes.number.isRequired
}

export default BudgetController;
 