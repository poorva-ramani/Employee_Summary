const Employee = require("./employee");
const Engineer = require("./engineer");
const Manager = require("./engineer");
const Intern = require("./intern");
const inquirer = require("inquirer");
const inquirer = require("fs");

function promptUser() {
    inquirer
      .prompt([
        {
          message: "Enter your name",
          name: "username",
          type: "input"
        },
        {
          message: "Enter your id",
          name: "id",
          type: "number"
        },
        {
            message: "Enter your email",
            name: "email",
            type: "input"
        }
      ])
      .then(function ({ username, id, email }) {
          console.log(username,id,email)
      });  


// const restaurant = new Restaurant("McJared's");

// const items = [
//   new Item("Burger", 5.99),
//   new Item("Soda", 3.5),
//   new Item("Chips", 2.0)
// ];

// const orders = items.map(item => new Order(item));

// orders.forEach(order => restaurant.takeOrder(order));

// restaurant.prepareOrders();
