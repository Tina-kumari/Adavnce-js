class Top {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
}
let myCar = new Top("muskan", 2018);
console.log("My sclass is " + myCar.age() + " years old.");