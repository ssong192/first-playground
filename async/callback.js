console.log('1');

setTimeout(()=>console.log('2'), 1000)

console.log('3');

function printImmediately(print) {
    print();
}

printImmediately(()=> console.log('hello!!'))


function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}

printWithDelay(()=>console.log('async callback'), 2000)

// callback
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(()=>{
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSeccess, onError) {
        setTimeout(()=>{
            if (user==='ellie') {
                onSeccess({ name: 'ellie', role: 'admin'} );
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = 'ellie'; //prompt('enter your id');
const password = 'dream'; //prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    (user) => {
    userStorage.getRoles(
            user,
            userWithRole => {
                console.log(`HELLO ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            });
    },
    error => {
        console.log(error);
    });
