// 1 - fruits arrayini araya cizgi (-) koyarak ekrana yazdiriniz
// 2 - animals arrayindeki son elemani silebilirmisiniz
// 3 - fruits arayine (kivi) ekleyebilirmisiniz
// 4 - animals arrayinin ilk ogesini silebilirmisini
// 5 - fruits arrayinden (lemon, apple,mango) elemanlarini silip Kiwi ekleyebilirmisiniz
// 6 - fruits ve animals araylerini birlestirebilirmisiniz
// 7 - iki arayin son elemanlarinin index numaralarini ekrana yazdirabilirmisiniz
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let animals=["Cat", "Dog", "Elephon", "Rabid"];

// fruits arrayini araya cizgi (-) koyarak ekrana yazimi
console.log(fruits.join('-'));

// animals arrayindeki son elemani silme
amnimals.pop();
console.log(animals);

// fruits arayine (kivi) ekleme
fruits.push('kivi');
console.log(fruits);

// animals arrayinin ilk ogesini silinmesi
animals.shift(); 
console.log(animals);


// fruits arrayinden (lemon, apple,mango) elemanlarini silip Kiwi ekleme
fruits.splice(2,3);
fruits.push('kiwi');
console.log(fruits);

// fruits ve animals araylerini birlestirme
var serhat = fruits.concat(animals);
console.log(serhat);

// iki arayin son elemanlarinin index numaralarini ekrana yazdirilmasi
console.log(fruits.indexOf("Mango"));
console.log(animals.indexOf("Rabid"));