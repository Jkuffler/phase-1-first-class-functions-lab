const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(x) {
    return function(fare) {
        return x * fare;
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2;        
}

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}
