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

// showUser()

// Deepseek Learinigngs 

// Promises : A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// States of Promise
// Pending: Initial state, neither fulfilled nor rejected

// Fulfilled: Operation completed successfully

// Rejected: Operation failed

// const myPromise = new Promise((resolve, reject) => {
//     const maan = true;
//     if (maan) {
//         setTimeout(() => {
//             resolve("Done")
//         }, 2000);
//     } else {
//         reject("Pending")
//     }
// })
// myPromise.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("all Done")
// })

// function fetchUserData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     name: "John Doe",
//                     email: "john@example.com"
//                 });
//             } else {
//                 reject(new Error("Invalid user ID"));
//             }
//         }, 2000);
//     });
// }

// // Using the promise
// fetchUserData(1)
//     .then(user => {
//         console.log("User found:", user);
//         return user.email;
//     })
//     .then(email => console.log("Email:", email))
//     .catch(error => console.error("Error:", error.message));

// function getUser(userId) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ id: userId, name: "Alice" }), 1000);
//     });
// }

// function getPosts(userId) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(["Post 1", "Post 2"]), 1000);
//     });
// }

// function getComments(post) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1000);
//     });
// }

// // Chaining
// getUser(1)
//     .then(user => {
//         console.log("User:", user);
//         return getPosts(user.id);
//     })
//     .then(posts => {
//         console.log("Posts:", posts);
//         return getComments(posts[0]);
//     })
//     .then(comments => {
//         console.log("Comments:", comments);
//     })
//     .catch(error => console.error("Error:", error));


// Async/Await : Async/await is syntactic sugar built on Promises, making asynchronous code look and behave like synchronous code .

// Async function always returns a Promise

// Async function always returns a Promise



// Simulated API functions
function fetchUser(id) {
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: 'John' }), 3000);
    });
}

function fetchUserPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(['Post 1', 'Post 2']), 1000);
    });
}

function fetchPostComments(postTitle) {
    return new Promise(resolve => {
        setTimeout(() => resolve(['Comment A', 'Comment B']), 1000);
    });
}

// Using async/await
async function getUserData(userId) {
    try {
        // Sequential execution
        const user = await fetchUser(userId);
        console.log('User:', user);
        
        const posts = await fetchUserPosts(user.id);
        console.log('Posts:', posts);
        
        const comments = await fetchPostComments(posts[0]);
        console.log('Comments:', comments);
        
        return { user, posts, comments };
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
getUserData(1)

// Parallel execution with async/await
// async function getParallelData(userId) {
//     try {
//         const [user, posts] = await Promise.all([
//             fetchUser(userId),
//             fetchUserPosts(userId)
//         ]);
        
//         return { user, posts };
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }