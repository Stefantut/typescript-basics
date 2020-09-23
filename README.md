## Typescript

---

Commands:

Check TypeScript Version: tsc --version**
Compile ts to js: tsc index.ts**

---

Create a config file to customize Typescript behaviour: tsconfig.json  
Inside of tsconfig:  
"target": "esnext" - is targeting the latest verion of Javascript  
"watch": true - will re-compile code on save  
"lib": ["DOM","ES2017"] - lib will allow to automatically include typings for certain environments  
---- DOM will alow typescript to compile your code with all the native dom classes without any compliation errors.

Typescript has 12 basic types:

https://www.typescriptlang.org/docs/handbook/basic-types.html

boolean : true / false
number: just a number
string: just a string
array: [1,2,3,4]
tuple: [string, number, number] - let's you combine different types - ex: const arr:[number,string,number]=[1,'one', 2];
enum: - something that gives a friendly name to a set of numeric values, default starts from 0
enum Color {
Red = 1,
Green,
Blue,
}
let colorName: string = Color[2]; // Displays 'Green' console.log(colorName);

any: Dynamyc type(like normal js)
void: a function that doesn't return
ex: function check():void{
console.log('check') // doesn't return
}
null: something that doesn't exist
undefinded: unassigned variable
never: function that never returns
object: non-primitive types
