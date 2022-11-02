// Write your solution in this file!
let employee  = {
    name: "marshall",
    streetAddress: "sulaimany",

}

function updateEmployeeWithKeyAndValue(employee,key,value){
    let newem = {...employee}
    newem[key] = value
    return newem
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
 employee[key] = value
return employee
}

function deleteFromEmployeeByKey(employee,key){
    let nn = {...employee}
    delete nn[key]
    return nn
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key]
return employee
}