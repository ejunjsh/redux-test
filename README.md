# redux-test
try the redux, for verifying the state changes after invoking of dispatch().

## run
````bash
npm install
npm run babel
````
## result
````bash
previous state: 0
previous state: 0
current state: 1
previous state: 1
current state: 2
previous state: 2
current state: 3
previous state: 3
current state: test1
previous state: test1
current state: test2
previous state: test2
current state: test21
````
## conclude
you would found the last log of above, the state is changed by different action,so the store only maintains a state currently.