const age = 14;
console.log(age);

const name = 'DIANA';
console.log(name);

const isStudent1 = undefined == true;
console.log(' якщо ж можно мати на увазі goit, то' +isStudent1 +' ')

const myString = 'My favorit quote';
console.log(myString);

const myNumber = 10;
myNumber +=5;
console.log(myNumber + '(typeof(10) --> Number)');

const myNull = null;
console.log(myNull);

const userName = prompt("Ведіть ваше ім'я", '');
alert('DI' + userName);

const Confirm = confirm('do you confirm');
    if (confirm) {
       alert('thanks for the confirmation');}

    else if (!confirm) {
       alert('undo action'); };


alert("Action unsafe");
const lastConfirm = confirm("you confirm the action?");
     if (lastConfirm) {
        alert("YES");
}
    else if (!lastConfirm) {
        alert('undo action');
};