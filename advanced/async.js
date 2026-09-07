// callback
// A callback is a function passed as an argument to another function, to be executed later — either after some operation completes (sync or async) or in response to an event.
// Async callbacks are how JS historically handled "wait for this, then do that" before Promises existed.

// function greet(name, callback) {
//   console.log("Hi " + name);
//   callback();
// }
// greet("Royal", () => console.log("Callback executed"));
// Hi Royal
// Callback executed

// JavaScript executes code line by line. 
// Each statement waits for the previous one to finish.
// This is called Synchronous Execution.


// What is Asynchronous JavaScript?

// Sometimes tasks take time:

// API Calls
// Database Queries
// File Reading
// Timers
// User Actions

// JavaScript does not wait for these tasks.

// console.log("Start");

// setTimeout(() => {
//   console.log("Inside Timeout");
// }, 2000);

// console.log("End");

// What is a Callback? 
// A callback function is a function that is passed into another function and called after a task is completed.
// function greet(name, callback) {
//   console.log("Hello " + name);

//   callback();
// }

// function sayBye() {
//   console.log("Goodbye");
// }

// greet("Maan", sayBye);
// Callback with Anonymous Function
// function workingornot(callback) {
//     console.log("Maan is Working...")
//     setTimeout(() => {
//         console.log('Shreya visible')
//         callback();
//     }, 5000);
// }
// function khatam(){
//     console.log("Maan Work is Over")
// }
// workingornot(khatam)


// Problem: Callback Hell 
// loginUser(user => {
//   getProfile(user, profile => {
//     getPosts(profile, posts => {
//       getComments(posts, comments => {
//         console.log(comments);
//       });
//     });
//   });
// });


// What is a Promise?
// Definition

// A Promise is an object representing the eventual success or failure of an asynchronous operation.

// const maanpromise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Task Complete")
//     } else {
//         reject("Task Still Pending")
//     }
// })
// maanpromise.then(res => {
//     console.log(res)
// }).catch(() => {
//     console.log(err)
// }).finally(() => {
//     console.log("Finally Print")
// })


// function fetchuser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 user: "Maan",
//                 id: 22
//             })
//         }, 2000);
//     })
// }
// fetchuser()
//     .then(user => {
//         console.log(user);
//         return user.id;
//     }).then(id => {
//         console.log("User ID:", id);
//     }).catch(error => {
//         console.log(error)
//     }).finally(() => {
//         console.log("User Found")
//     })


// const promise = new Promise((resolve, reject) => {
//   reject("Network Error");
// });

// promise.catch(error => {
//   console.log(error);
// });


// 28. Async / Await
// This is modern JavaScript's most commonly used asynchronous syntax.
// What is async?
// Definition

// The async keyword makes a function return a Promise automatically
// 
function getUser() {
    return setTimeout(() => {
        return "Maan"
    }, 5000);
}
async function showUser() {
    const user = await getUser();

    console.log(user);
}

showUser()