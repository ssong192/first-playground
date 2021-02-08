// callback
class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if (
                    (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')
                ) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin'} );
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }
}


const userStorage = new UserStorage();
const id = 'ellie'; //prompt('enter your id');
const password = 'dream'; //prompt('enter your password');

userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => console.log(`HELLO ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

// 기존소스 생략
// userStorage.loginUser(
//     id,
//     password,
//     (user) => {
//         userStorage.getRoles(
//             user,
//             userWithRole => {
//                 console.log(`HELLO ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error);
//             });
//     },
//     error => {
//         console.log(error);
//     });
