import { Challenge } from './interfaces/challenge'


function generalFilter(arr: Challenge[], nameHouse:string): Challenge[] {

console.log(arr);

    function filtrarPorID(obj) {
        if ('house' in obj && obj.house === nameHouse) {
            return true;
        } else {

            return false;
        }
    }

    console.log(arr);

    var arrPorID = arr.filter(filtrarPorID);

    console.log(arrPorID)

    return arrPorID


    arrPorID.sort(function (a, b) {
        if (a.completed < b.completed) {
            return 1;
        }
        if (a.completed > b.completed) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });

    return arrPorID


}


export { generalFilter }

