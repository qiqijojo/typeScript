console.log('00022222220000')
class Person {
    name: string;
    age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say():void {
        console.log('say')
    }
    say1 = ():void => {
        console.log('say1', this.name)
    }
    static food:string;
    static say2():void {
        console.log('say2', this.food);
    }
}
let person = new Person('jojo', 22);
person.say()
person.say1()
Person.food = '苹果'
Person.say2()