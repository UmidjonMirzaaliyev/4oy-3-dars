// 4oy 3-dars vazifa

// 1-masala

// A sonini o'zgartirish (Misol uchun A = 5)
// var A = 5; // Bu yerda siz istalgan sonni yozishingiz mumkin

// // A soni musbat ekanligini tekshirish
// if (A > 0) {
//     console.log("Soni A musbat.");
// } else {
//     console.log("Soni A musbat emas.");
// }

//######################################################################

// 2-masala

// Given integer A (For example, A = 5)
// const A = 5; // You can replace 5 with any integer value

// // Check if A is an odd number
// if (A % 2 !== 0) {
//     console.log("The number A is an odd number.");
// } else {
//     console.log("The number A is not an odd number.");
// }

//#################################################################

// 3-masala

// // Berilgan butun son A (Misol uchun, A = 6)
// const A = 6; // 6 ni istalgan butun son bilan almashtiring

// // A juft son ekanligini tekshirish
// if (A % 2 === 0) {
//     console.log("Son A juft son.");
// } else {
//     console.log("Son A juft son emas.");
// }

//#################################################################

// 4-masala

// Berilgan butun sonlar A va B (Misol uchun, A = 5, B = 3)
// const A = 5; // Siz 5 ni istalgan butun son bilan almashtiring
// const B = 3; // Siz 3 ni istalgan butun son bilan almashtiring

// // "A>2 va B<=3" shartini tekshirish
// if (A > 2 && B <= 3) {
//     console.log("Shart 'A>2 va B<=3' to'g'ri.");
// } else {
//     console.log("Shart 'A>2 va B<=3' to'g'ri emas.");
// }

//################################################################

// 5-masala

// Berilgan butun sonlar A va B (Misol uchun, A = 5, B = -3)
// const A = 5; // Siz 5 ni istalgan butun son bilan almashtiring
// const B = -3; // Siz -3 ni istalgan butun son bilan almashtiring

// // "A >= 0 yoki B < -2" shartini tekshirish
// if (A >= 0 || B < -2) {
//     console.log("Shart 'A >= 0 yoki B < -2' to'g'ri.");
// } else {
//     console.log("Shart 'A >= 0 yoki B < -2' to'g'ri emas.");
// }

//#######################################################################

// 6-masala

// Berilgan butun sonlar A, B va C (Misol uchun, A = 2, B = 5, C = 7)
// const A = 2; // Siz 2 ni istalgan butun son bilan almashtiring
// const B = 5; // Siz 5 ni istalgan butun son bilan almashtiring
// const C = 7; // Siz 7 ni istalgan butun son bilan almashtiring

// // "A<= B <= C" shartini tekshirish
// if (A <= B && B <= C) {
//     console.log("Shart 'A<= B <= C' to'g'ri.");
// } else {
//     console.log("Shart 'A<= B <= C' to'g'ri emas.");
// }

//###########################################################################

// 7-masala

// Berilgan butun sonlar A, B va C (Misol uchun, A = 2, B = 5, C = 7)
// const A = 2; // Siz 2 ni istalgan butun son bilan almashtiring
// const B = 5; // Siz 5 ni istalgan butun son bilan almashtiring
// const C = 7; // Siz 7 ni istalgan butun son bilan almashtiring

// // "B soni A va C sonlari orasida joylashgan" shartini tekshirish
// if ((A <= B && B <= C) || (C <= B && B <= A)) {
//     console.log("B soni A va C sonlari orasida joylashgan.");
// } else {
//     console.log("B soni A va C sonlari orasida joylashgan emas.");
// }

//########################################################################

// 8-masala

// Berilgan butun sonlar A va B (Misol uchun, A = 3, B = 5)
// const A = 3; // Siz 3 ni istalgan butun son bilan almashtiring
// const B = 5; // Siz 5 ni istalgan butun son bilan almashtiring

// // "A va B toq sonlar" shartini tekshirish
// if (A % 2 !== 0 && B % 2 !== 0) {
//     console.log("A va B toq sonlar.");
// } else {
//     console.log("A va B toq sonlar emas.");
// }

//#########################################################################

// 9-masala

// Berilgan butun sonlar A va B (Misol uchun, A = 4, B = 5)
// const A = 4; // Siz 4 ni istalgan butun son bilan almashtiring
// const B = 5; // Siz 5 ni istalgan butun son bilan almashtiring

// // "A yoki B sonlaridan hech bo'lmaganda bittasi toq" shartini tekshirish
// if (A % 2 !== 0 || B % 2 !== 0) {
//     console.log("A yoki B sonlaridan hech bo'lmaganda bittasi toq.");
// } else {
//     console.log("A va B sonlarining ikkalasi ham juft.");
// }

//###############################################################################

// 10-masala

// Berilgan butun sonlar A va B (Misol uchun, A = 4, B = 5)
// const A = 4; // Siz 4 ni istalgan butun son bilan almashtiring
// const B = 5; // Siz 5 ni istalgan butun son bilan almashtiring

// // "Faqat A yoki B sonlaridan biri toq" shartini tekshirish
// if ((A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0)) {
//     console.log("Faqat A yoki B sonlaridan biri toq.");
// } else {
//     console.log("A va B sonlaridan ikkalasi ham toq yoki ikkalasi ham juft.");
// }

//###############################################################################

// 11-masala

// Berilgan butun sonlar A va B (Misol uchun, A = 4, B = 6)
// const A = 4; // Siz 4 ni istalgan butun son bilan almashtiring
// const B = 6; // Siz 6 ni istalgan butun son bilan almashtiring

// // "A va B sonlarining ikkalasi ham toq yoki ikkalasi ham juft" shartini tekshirish
// if ((A % 2 === 0 && B % 2 === 0) || (A % 2 !== 0 && B % 2 !== 0)) {
//     console.log("A va B sonlarining ikkalasi ham toq yoki ikkalasi ham juft.");
// } else {
//     console.log("A va B sonlarining biri toq, biri juft.");
// }

//###############################################################################

// 12-masala

// Berilgan butun sonlar A, B va C (Misol uchun, A = 3, B = 5, C = 7)
// const A = 3; // Siz 3 ni istalgan butun son bilan almashtiring
// const B = 5; // Siz 5 ni istalgan butun son bilan almashtiring
// const C = 7; // Siz 7 ni istalgan butun son bilan almashtiring

// // "A, B va C sonlarining hammasi musbat" shartini tekshirish
// if (A > 0 && B > 0 && C > 0) {
//     console.log("A, B va C sonlarining hammasi musbat.");
// } else {
//     console.log("A, B va C sonlarining hammasi musbat emas.");
// }

//##################################################################################

// 13-masala

// Berilgan butun sonlar A, B va C (Misol uchun, A = -3, B = 0, C = 7)
// const A = -3; // Siz -3 ni istalgan butun son bilan almashtiring
// const B = 0;  // Siz 0 ni istalgan butun son bilan almashtiring
// const C = 7;  // Siz 7 ni istalgan butun son bilan almashtiring

// // "A, B yoki C sonlaridan hech bo'lmaganda bittasi musbat" shartini tekshirish
// if (A > 0 || B > 0 || C > 0) {
//     console.log("A, B yoki C sonlaridan hech bo'lmaganda bittasi musbat.");
// } else {
//     console.log("A, B va C sonlarining hech biri musbat emas.");
// }

//###############################################################################

// 14-masala

// Berilgan butun sonlar A, B va C (Misol uchun, A = -3, B = 5, C = -7)
// const A = -3; // Siz -3 ni istalgan butun son bilan almashtiring
// const B = 5;  // Siz 5 ni istalgan butun son bilan almashtiring
// const C = -7; // Siz -7 ni istalgan butun son bilan almashtiring

// // "Faqat A, B yoki C sonlaridan biri musbat" shartini tekshirish
// if ((A > 0 && B <= 0 && C <= 0) || (A <= 0 && B > 0 && C <= 0) || (A <= 0 && B <= 0 && C > 0)) {
//     console.log("Faqat A, B yoki C sonlaridan biri musbat.");
// } else {
//     console.log("A, B yoki C sonlaridan bir nechta musbat yoki hech biri musbat emas.");
// }

//##################################################################################

// 15-masala

// Berilgan butun sonlar A, B va C (Misol uchun, A = -3, B = 5, C = 7)
// const A = -3; // Siz -3 ni istalgan butun son bilan almashtiring
// const B = 5;  // Siz 5 ni istalgan butun son bilan almashtiring
// const C = 7;  // Siz 7 ni istalgan butun son bilan almashtiring

// // "Faqat A, B yoki C sonlaridan ikkita musbat" shartini tekshirish
// if ((A > 0 && B > 0 && C <= 0) || (A > 0 && B <= 0 && C > 0) || (A <= 0 && B > 0 && C > 0)) {
//     console.log("Faqat A, B yoki C sonlaridan ikkita musbat.");
// } else {
//     console.log("A, B yoki C sonlaridan bir nechta musbat yoki hech biri musbat emas.");
// }

// 16-masala

// Berilgan musbat butun son (Misol uchun, num = 24)
// const num = 24; // Siz 24 ni istalgan musbat butun son bilan almashtiring

// // "Berilgan son juft va ikki xonali" shartini tekshirish
// if (num >= 10 && num <= 99 && num % 2 === 0) {
//     console.log("Berilgan son juft va ikki xonali.");
// } else {
//     console.log("Berilgan son juft va ikki xonali emas.");
// }
