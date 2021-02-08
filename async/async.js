// async & await

// 1. async
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);



// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return 'apple';
}

async function getBanana() {
    await delay(2000);
    return 'banana';
}
