# Unit-Test Generator File #
if you have unitest files in format `.test.js` or `.test.ts`, then auto generate the single unit-test file command in format `npm run test:file <unite-test_file_name>`

# node-app
create a repository `unittest` and put your `.test.js` or `.test.ts` there.

```
Unit-test-cmd-generator
│
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│
├───logs
│       systemlog.log
│       unittest.log   ← ← ← ← ← ← ← ← ← ← ← (output file)
│
├───src
│       app.ts
│       config.ts
│       logger.ts
│       unittest.ts
│
└───unittest        ← ← ← ← ← ← ← ← ← ← ← (add directory)
    │   testfile3.test.js
    │   testfile4.test.js
    │
    └───dirtory_one
            testfile1.test.js
            testfile2.test.ts

```
    
## Project setup
```
npm install
```

### build for development and run server
```
npm run start
```


# Output File

Output file show in directory: 
```
logs/unittest.log
```
