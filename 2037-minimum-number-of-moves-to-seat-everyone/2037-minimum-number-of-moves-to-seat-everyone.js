/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
    let arr1 = seats.sort((a, b) => a - b)
    let arr2 = students.sort((a, b) => a - b)
    let sum = 0
    console.log(arr1, arr2)
    for (let i = 0; i < arr1.length; i++) {
        sum += Math.abs(arr1[i] - arr2[i])
    }
    return sum
};