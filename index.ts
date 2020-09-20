// Explicit – generally it’s manifestly adding type to our codebase. We have to exactly to know what kind of type the value is eg:
// const car: string= 'Honda'

// Implicit – means that the type is inferred by TypeScript type inference system which takes responsibility away from us of writing the types:
// const car='Honda'

// let stefan = 31;

//  will throw error as it should be a number
// stefan='ssfs'

// enforce the shape of an object
// interface Person {
//   first: string;
//   last: String;
//   //   this way just frst and last one will be required but you can add any additional property to this object
//   [key: string]: any;
// }

// const person: Person = {
//   first: "stefan",
//   last: "tut",
// };

// by declaring the type of x and y you will make sure the function will run correctly and only numbers can be passed to this function
// function pow(x: number, y: number) {
//   return Math.pow(x, y);
// }

//fail
// pow(3,'aaa')

// pass
// pow(3, 5);

// to check the return of the function - add the specific return value between () and {
// function pow(x: number, y: number): string {
//   return Math.pow(x, y).toString();
// }

// if you do have functions that don't return a value set the type to void(ex- event listener)
// function pow(x: number, y: number): void {
//   return Math.pow(x, y).toString();
// }

// Arrays
// const arr: number[] = [];

// pass
// arr.push(1);
// fail
// arr.push("23");
//fail
// arr.push(false);

// Very usefull when you are working with an array of objects
// const arr: Person[] = [];
// we can use Person interface to know the exact shape of those objects as they are retrieved

// tupple - add ? to make them optional
// type MyList = [number?, string?, boolean?];
// const arr: MyList = [];

// arr.push(1);
// arr.push("23");

// Generics
// T represents a variable type that we can pass in
// class Observable<T> {
//   constructor(public value: T) {}
// }

// let x: Observable<number>;
// let y: Observable<Person>;
// let z = new Observable(23);
