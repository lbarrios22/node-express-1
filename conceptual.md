### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

  - Some of the ways to manage asynchronous code in JavaScript are callbacks,
    promise, and using async functions with awaits

- What is a Promise?

  - A promise is a guarantee that something will become resolved, it can be
    resolved, pending, or rejected

- What are the differences between an async function and a regular function?

  - The difference between an async function and a regular function is that an
    async function is used to await something and it always returns a promise

- What is the difference between Node.js and Express.js?

  - The difference between Node.js and Express.js is that Node.js is Backend
    JavaScript and Express.js is a Node.js framework

- What is the error-first callback pattern? if(error){ DO SOMETHING } else { DO
  SOMETHING }

- What is middleware?

  - Middleware are functions used in Express.js that happen in between each
    request made. It can also be before or after depending on the order

- What does the `next` function do?

  - The next function tells the function to keep going onto the next function if
    there is an error and often matches to another error

- What are some issues with the following code? (consider all aspects:
  performance, structure, naming, etc)

```js
async function getUsers() {
	const elie = await $.getJSON('https://api.github.com/users/elie');
	const joel = await $.getJSON('https://api.github.com/users/joelburton');
	const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

	return [elie, matt, joel];
}
```

- The code iss sending multiple different requests you could use Promise.all([])
  the variable names could've also been changed to `userElie`
