export const checkoutBudget = ( budget, remainingAmount ) => {
    let alertclass;

    if((budget / 4) > remainingAmount){
        alertclass = 'alert alert-danger'
    } else if ((budget / 2) > remainingAmount){
        alertclass = 'alert alert-warning'
    } else {
        alertclass = 'alert alert-success'
    }
    return alertclass;
}