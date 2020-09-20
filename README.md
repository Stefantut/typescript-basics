## Typescript

---

Commands:

Check TypeScript Version: tsc --version
Compile ts to js: tsc index.ts

---

Create a config file to customize Typescript behaviour: tsconfig.json
Inside of tsconfig:
"target": "esnext" - is targeting the latest verion of Javascript
"watch": true - will re-compile code on save
"lib": ["DOM","ES2017"] - lib will allow to automatically include typings for certain environments
---- DOM will alow typescript to compile your code with all the native dom classes without any compliation errors
