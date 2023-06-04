const age = 14;
console.log(age);

const name = 'DIANA';
console.log(name);

const isStudent1 = undefined == null;
const isStudent2 = undefined === null;
console.log('якщо мається на увазі тільки студент коледжу, то' + isStudent2 + ' якщо ж можно мати на увазі goit, то' +isStudent1 +' ')

const myString = 'My favorit quote';
console.log(myString);

// const myNumber = NaN;
// myNumber+=5;
// console.log(myNumber + '(typeof(NaN) --> Number)');

const myNull = null;
console.log(myNull);

function quest7 () {
    const name7 = prompt('your name = ?',"");
    alert("HI" + name7 + "!");
}

function quest8 (){
    const Confirm = confirm('do you confirm');
    if (confirm) {
        alert('thanks for the confirmation');
    }
    else if (!confirm) {
        alert('undo action');
    }
}

function lastquest (){
    alert("Action unsafe");
    const lastConfirm = confirm("you confirm the action?");
    if (lastConfirm) {
        alert("YES");
    }
    else if (!lastConfirm) {
        alert('undo action');
    }
}