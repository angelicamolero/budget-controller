import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const NewBudget= ({saveBudget, saveRemaining, update}) => {

    //set state
    const [ budgetValue, saveValue ] = useState(0);
    const [ error, saveError ] = useState(false);

    //set budget
    const setBudget = e => {
        saveValue(parseInt(e.target.value, 10));
    }

    //SUBMIT
    const addBudget = e => {
        e.preventDefault();
        //validate
        if(budgetValue < 1 || isNaN( budgetValue )){
            saveError(true);
            return;
        }
        saveError(false);
        saveBudget(budgetValue);
        saveRemaining(budgetValue);
        update(false);
    }

    return (
        <Fragment>
            <h2>Set your budget</h2>
            { error ? <Error message="Add a correct budget"/> : null }
            <form
                onSubmit={addBudget}
            >
                <input
                type="number"
                className="u-full-width"
                placeholder="Set your budget"
                onChange={setBudget}
                />
                <input
                type="submit"
                className="button-primary u-full-width"
                value="Define budget"

                />
            </form>
        </Fragment>
    );
}

NewBudget.propTypes = {
    saveBudget: PropTypes.func.isRequired,
    saveRemaining : PropTypes.func.isRequired,
    update : PropTypes.func.isRequired
}

export default NewBudget;