# Create and Invoke Action

OpenWhisk provides a useful [web IDE](https://new-console.ng.bluemix.net/openwhisk/editor) from which you can write your code.

To use openwhisk you need to install [wsk command line](https://new-console.ng.bluemix.net/openwhisk/cli).

on this page you can see a command to execute in oder to get your wsk CLI to point to the correct organization and space.


## Invoke Actions
To create an action
    `wsk action create hello hello.js`
where `hello` is the name of the action, and `hello.js` is the JS file contained in this repo.

To invoke the action: `wsk action invoke hello`
but the output is going to look like
```
ok: invoked /customer_A_Project_Demo/hello with id da54fa46f40c42f3a3c10eac72b76e61
```
which gives us very little information but it provides the id of the action invocation, in this case this: `da54fa46f40c42f3a3c10eac72b76e61`

in order to see the result of your action you have to issue the command
`wsk activation result da54fa46f40c42f3a3c10eac72b76e61`

which will sho the desired result.

you cal also issue the invoke command with the  `blocking` and `result`options like this:
`wsk action invoke  --blocking  --result  hello`
which returns something like:
```
{
    "payload": "Hello World!"
}
```

## Invoke Action with parameters
If you wish to create an action which take as input parameters, you can accomplish this just writing your action in the JS file as a function with a paramenter. Please note: **only one parameter!**

Let's update the hello action and pass it some parameters:
```
wsk action update hello hello_with_params.js
wsk action invoke --blocking --result hello --param name Gianluca
```
which returns
```
{
    "payload": "Hello, Gianluca!"
}
```
you can also set default parameters when you create (or update) an action
```
wsk action update hello --param name Gianluca
```

## Sequences
Another feature of OpenWhisk is the possibility to chain actions. To do so we create another JS file called word_split.js, we create the w_split action with the following command
```
wsk action create w_split word_split.js
```

and we can now chain the 2 action like this :
```
wsk action create  hello_word-split --sequence hello,w_split
```
