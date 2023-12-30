export class Customer {
  constructor(id, customerNumber) {
    this.id = id;
    this.customerNumber = customerNumber;
  }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name = "Berk Karanfil";
console.log(customer.name);

Customer.bisey = "Bişey";
console.log(Customer.bisey);

console.log(customer.customerNumber);

class IndividualCustomer extends Customer {
  constructor(firstNAme, id, customerNumber) {
    super(id, customerNumber);
    this.firstNAme = firstNAme;
  }
}

class CorporateCustomer extends Customer {
  constructor(companyName, id, customerNumber) {
    super(id, customerNumber);
    this.companyName = companyName;
  }
}
