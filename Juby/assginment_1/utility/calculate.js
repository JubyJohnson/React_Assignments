/**
 * 
 * @param {principal rate} p 
 * @param {Number of years} n 
 * @param {Rate} r 
 * @returns 
 */
const calculateInterest=function(p, n , r){
    interest=(p*n*r)/100;
    return interest;
};
module.exports = {
    calculateInterest
}