// Write your solution in this file!
let employee = {
    name: 'Laban Kibet',
    streetAddress: 'Nairobi',
  };
  
  function updateEmployeeWithKeyAndValue(employeeObj, key, value) {
    return {
      ...employeeObj,
      [key]: value,
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employeeObj, key, value) {
    employeeObj[key] = value;
    return employeeObj;
  }
  
  function deleteFromEmployeeByKey(employeeObj, key) {
    const newEmployee = { ...employeeObj };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employeeObj, key) {
    delete employeeObj[key];
    return employeeObj;
  }
  
  console.log('Original employee:', employee);
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'age', 23);
  console.log('Updated employee (without mutation):', updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 23);
  console.log('Original employee (mutated):', employee);
  
  let employeeWithoutStreet = deleteFromEmployeeByKey(employee, 'streetAddress');
  console.log('Employee without streetAddress (without mutation):', employeeWithoutStreet);
  
  destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress');
  console.log('Original employee without streetAddress (mutated):', employee);
  