// Your code here
function createEmployeeRecord(firstName, familyName, title, payPerHour) {
    var employeeRecord = ["Gray", "Worm", "Security", 1];
    return {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}


function createEmployeeRecords(employeeRecords) {
    let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]
    let employeexRecords = [];
    for (let i = 0; i < twoRows.length; i++) {
        employeexRecords.push(createEmployeeRecord(twoRows[i][0], twoRows[i][1], twoRows[i][2], twoRows[i][3]));
    } return employeexRecords;
}


function createTimeInEvent(employeeRecord, dateStamp) {
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: dateStamp.substring(11, 13),
        date: dateStamp
    });
    return employeeRecord;
}


function createTimeOutEvent(employeeRecord, dateStamp) {
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: dateStamp.substring(11, 13),
        date: dateStamp
    });
    return employeeRecord;
}


function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(function(event) {
        return event.date === date;
    });
    const timeOutEvent = employeeRecord.timeOutEvents.find(function(event) {
        return event.date === date;
    });
    const timeInHour = parseInt(timeInEvent.hour);
    const timeOutHour = parseInt(timeOutEvent.hour);
    const hoursWorked = timeOutHour - timeInHour;
    return hoursWorked;
} 


function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
}


function allWagesFor(employeeRecord) {
    const allWages = 0;
    const allDates = employeeRecord.timeInEvents.map(function(event) {
        return event.date;
    });
}


function calculatePayroll(employeeRecords) {
    const allWages = 0;
    const allDates = employeeRecords.map(function(record) {
        return record.timeInEvents.map(function(event) {
            return event.date;
        });
    }) .reduce(function(acc, curr) {}, []);
    return allWages;
}

