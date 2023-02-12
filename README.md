Setup project
- yarn init -y

Add typescript in development mode
- yarn add typescript -D

Add ts-node in development mode
- yarn add ts-node -D

Create typescript configuration file (tsconfig)
- npx tsc --init

Execute ts file
- npx ts-node "filename"

Change value of key target in tsconfig file to "esnext" to recognize Promise or latest feature of typescript

To compile ts file into js
- npx tsc function.ts

will throw error when executed using "node js-function-test.js" command
because its ts file, so we need to compile its first
using "npx tsc function.ts"
type checking only done in compile time, not runtime
thats why compiled js file will not include type checking
in reason of runtime type checking will be so expensive