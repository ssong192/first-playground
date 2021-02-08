'use strict'

// 1.producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
   console.log('doing something.....');
   setTimeout(() => {
       resolve('ellie'); // 성공
       // reject(new Error('no network!')); // 실패
   }, 2000);
});

// 2. Consumers: then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
       console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error handling
    const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('1'), 1000);
        });

    const getEgg =  hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 2`), 1000);
        setTimeout(() => reject(new Error(`${hen} => 2`)), 1000);
        });

    const cook = egg =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(`${egg} => 3`),1000);
        });

    // getHen()
    // .then(hen => getEgg(hen))
    // .then(egg => cook(egg))
    // .then(meal => console.log(meal)); // 아래처럼 생략가능

    getHen()
    .then(getEgg)
        // .catch(error => {
        //     return 'error';
        // })
    .then(cook)
    .then(console.log);
