function Parent(value) {
  this.val = value;
  this.age = 12;
  this.add = () => {
      this.age = this.age + 1
  }
}
Parent.prototype.getValue = function () {
  console.log(this.val);
};
function Child(value) {
    Parent.call(this, value);
//   this.val = value;
}
Child.prototype = new Parent();
const child = new Child(1);
child.getValue();
console.log(child.val, child.age);
child.add() 
console.log(child.val, child.age);

console.log(child instanceof Child);
console.dir(child.__proto__);
