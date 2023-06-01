let age = 14;
console.log(age);

let name = 'DIANA';
console.log(name);

let isStudent1 = undefined == null;
let isStudent2 = undefined === null;
console.log('якщо мається на увазі тільки студент коледжу, то' + isStudent2 + ' якщо ж можно мати на увазі goit, то' +isStudent1 +' ')

let myString = 'My favorit quote';
console.log(myString);

let myNumber = NaN;
myNumber+=5;
console.log(myNumber + '(typeof(NaN) --> Number)');

let myNull = null;
console.log(myNull);

function quest7 () {
    let name7 = prompt('your name = ?',"");
    alert("HI" + name7 + "!");
}

function quest8 (){
    let Confirm = confirm('do you confirm');
    if (confirm) {
        alert('thanks for the confirmation');
    }
    else if (!confirm) {
        alert('undo action');
    }
}

function lastquest (){
    alert("Action unsafe");
    let lastConfirm = confirm("you confirm the action?");
    if (lastConfirm) {
        alert("YES");
    }
    else if (!lastConfirm) {
        alert('undo action');
    }
}