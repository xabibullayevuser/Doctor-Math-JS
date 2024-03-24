//1-masala

// function removeFirstOccurrences(str, value) {
//     let index = str.indexOf(value);
  
//     if (index === -1) {
//       return str;
//     }
  
//     return str.slice(0, index) + str.slice(index + value.length);
// }

// console.log(removeFirstOccurrences("To be or not to be", "not"));   
// console.log(removeFirstOccurrences("I like legends", "end"));
// console.log(removeFirstOccurrences("ABABAB", "BA"));

//2-masala
// function unbracketTag(str) {
//     if (str.startsWith("<") && str.endsWith(">")) {
//       return str.slice(1, -1);
//     } else {
//       return str;
//     }
// }

// console.log(unbracketTag("<div>"));   
// console.log(unbracketTag("<span>")); 
// console.log(unbracketTag("Hello"));

//3-masala
// function isPrime(n) {
//     if (n <= 1) {
//       return false;
//     }
  
//     if (n % 2 === 0 && n !== 2) {
//       return false;
//     }
  
//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
// }

// console.log(isPrime(4));
// console.log(isPrime(5));  
// console.log(isPrime(6));  
// console.log(isPrime(7)); 

//4-masala

// function group(array, keySelector, valueSelector) {
//     let groupedObject = {};
//     for (let item of array) {
//       let key = keySelector(item);
//       let value = valueSelector(item);
//       if (!groupedObject.hasOwnProperty(key)) {
//         groupedObject[key] = [];
//       }
//       groupedObject[key].push(value);
//     }
//     return groupedObject;
//   }

//   let country = [
//     { country: "Belarus", city: "Brest" },
//     { country: "Russia", city: "Omsk" },
//     { country: "Russia", city: "Samara" },
//     { country: "Belarus", city: "Grodno" },
//     { country: "Belarus", city: "Minsk" },
//     { country: "Poland", city: "Lodz" },
//   ];
  
//   let groupedByCountry = group(country, (item) => item.country.toLowerCase(), (item) => item.city);
//   console.log(groupedByCountry);

//5-masala

// function getSumBetweenNumbers(n1, n2) {
//     if (n1 > n2) {
//       return 0;
//     }
  
//     let n = n2 - n1 + 1;
//     return n * (n1 + n2)
//   }
  
//   console.log(getSumBetweenNumbers(1, 2));
//   console.log(getSumBetweenNumbers(5, 10));
//   console.log(getSumBetweenNumbers(-1, 1)); 

//6-masala

// function elementsOneTime(arr) {
//     let allElements = new Set();
  
//     let elementCounts = new Map();
  
//     for (let element of arr) {
//       allElements.add(element);
  
//       elementCounts.set(element, (elementCounts.get(element) || 0) + 1);
//     }
  
//     let elementsOneTime = [];
  
//     for (let element of allElements) {
//       if (elementCounts.get(element) === 1) {
//         elementsOneTime.push(element);
//       }
//     }
  
//     return elementsOneTime;
//   }
  
//   let arr = [1, 12, 2, 12, 3, 4];
//   let allElements = elementsOneTime(arr);
//   console.log(allElements); 

//7-masala

// function deleteARRAY(arr) {
//     let filteredArr = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       let isUnique = (i === 0 || arr[i] !== arr[i - 1]) && (i === arr.length - 1 || arr[i] !== arr[i + 1]);
  
//       if (isUnique) {
//         filteredArr.push(arr[i]);
//       }
//     }
  
//     return filteredArr;
//   }
  
//   let arr = [1, 2, 2, 3, 3, 4, 5];
//   let newArr = deleteARRAY(arr);
//   console.log(newArr);

//8-masala

// function endElements(arr, k, m) {
//     if (!(0 < k && k < m && m < arr.length)) {
//       throw new Error("Invalid indices: 0 < k < m < length of array");
//     }
  
//     arr.splice(k, m - k);
  
//     return { length: arr.length, arr };
//   }
  
//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//  let k = 2;
//  let m = 5;
  
//  let result = endElements(arr.slice(), k, m); 
//  console.log("Qolgan elementlar soni:", result.length);
//  console.log("Result:", result.arr);

//9-masala

// const books = [
//     { title: "Halqa", author: "Akrom Malik", alreadyRead: false },
//     { title: "Dunyo ishlari", author: "O'tkir Hoshimov", alreadyRead: true },
//     { title: "Vaqtning qadri", author: "Abdulfattoh Abu G'udda", alreadyRead: false },
//   ];
  
//   function displayBookStatus(books) {
//     for (const book of books) {
//       const author = book.author;
//       const title = book.title;
//       const readStatus = book.alreadyRead ? "o'qilgan" : "o'qilmagan"; 
  
//       console.log(`${author}ning "${title}" kitobi ${readStatus}.`);
//     }
//   }
  
//   displayBookStatus(books);

//10-masala

// function calculatedTotalAmount(products) {
//   let totalAmount = 0;

//   for (const product of products) {
//     const discountedPrice = product.price * (1 - product.discount / 100);
//     const productTotal = discountedPrice * product.quantity;
//     totalAmount += productTotal;
//   }

//   return totalAmount;
// }

// const products = [
//     { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//     { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//     { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//     { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//     { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
//   ];
  
  
//   const total = calculatedTotalAmount(products);
//   console.log("Umumiy summa:", total);
  
  
  
  


  
  