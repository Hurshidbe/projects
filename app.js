// const hero = {
//   health: 100,

//   hit: function () {
//     this.health -= 10;
//     if (this.health < 0) {
//       this.health = 0;
//     }
//     console.log(`Qolgan jon: ${this.health}`);
//   },

//   heal: function () {
//     this.health += 10;
//     if (this.health > 100) {
//       this.health = 100;
//     }
//     console.log(`Qolgan jon: ${this.health}`);
//   },
// };

// hero.hit();
// hero.hit();
// hero.heal();
////////////////////////////////////////////////////////////  2  -  misol  ////////////////////////////////////////////////////////

// const counter = {
//   starting: 0,
//   plus: function () {
//     this.starting += 1;
//     console.log("plus 1", this.starting);
//   },
//   minus: function () {
//     this.starting -= 1;
//     console.log("minus 1", this.starting);
//   },
// };
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.minus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();
// counter.plus();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const phone = {
//   value: 100,

//   startDischarge: function () {
//     setInterval(() => {
//       this.value -= 1;

//       console.log("Yangilangan qiymat:", this.value);
//     }, 10);
//     if (this.value <= 0) {
//       console.log("quvvat tugadi");
//     }
//   },

//   turnon: function () {
//     console.log("Telefoningiz yondi");
//   },

//   turnoff: function () {
//     console.log("Telefoningiz o'chirildi");
//   },

//   showbattery: function () {
//     console.log("Batareya quvvati:", this.value + "%");
//   },
// };

// phone.showbattery();
// phone.turnon();
// phone.startDischarge();
///////////////////////////////////////////

// let a = 123;
// if (a % 2 == 0) {
//   console.log(a, "juft son");
// } else {
//   console.log(a, "toq son");
// }
//////////////////////////////////////////////////////////////////////////////////////
// let a = 12;
// console.log("a sonining kvadrati:", a * a);
//////////////////////////////////////////////////////////////////////////////////////
// console.log("ismingiz nima?");
// let Name = prompt("ismingiz nima?");
// console.log("salom", Name);
///////////////////////////////////////////////////////////////////////////////////////
////////////////////   matn uzunligin aniqlash////////////////////////////////////////
// let text = "Xurshid";
// console.log(text, text.length);

///////////////////////////////////////////////////////////////////////////////////////
// let numbers = [10, 5, 20, 8, 156, 56156, 1561, 561, 6, 165, 156, 16, 51, 5616];
// let min = Math.min(...numbers);
// console.log("Eng kichik son:", min);
//////////////////////////////////////////////////////////////////////////////
// let a = 1561;
// let b = -5665;
// if (a > b) {
//   console.log("a son b sondan katta");
// }
// if (a < b) {
//   console.log("b son a sondan katta");
// } else {
//   console.log("a va b sonlar o'zaro teng");
// }

///////////////////////////////////////////////////////////////////////////////////
// let sonlar = [5, 6, 585, 7, 21, 21, 65, 54];
// let yigindi;
// const son = sonlar;
// for (let i = 0; i < son.length; i++) {
//   yigindi = yigindi + son[i];
// }
// console.log(yigindi);

////////////////////////////////////////////// project 1 -dars 1 -misol//////////////////////////////////////////
// let yosh = Number(prompt("yoshingizni kiriting"));
// console.log("sizning tugiilgan yilingiz:", 2024 - yosh);
///////////////////////////////////////////// 1-dars 2- misol  /////////////////////////////////////////////////
// console.log(
//   "bu dastur orqali  siz istalgan tog'ri burchakli to'rtburchak yuzasini osonlikch hisoblashingiz mumkin.  marhamat 1- tomonni kiriting"
// );
// let a = Number(prompt("1- tomon uzunligini kiriting"));
// let b = Number(prompt("2- tomon uzunligini kiriting"));

// console.log("to'rtburchak yuzasi: ", a * b);
/////////////////////////////////////////////////////////////////////////////////////////////  1-dars 3- misol///////////////////////////

// let or = Number(
//   prompt(
//     "UZS=>USD ni tanlash uchun 1 ni bosing, USD=>UZS ni tanlash uchun 2 ni bosing"
//   )
// );

// let sum = Number(prompt("ozingizda mavjud bolgan pul miqdorini kiriting"));
// if (or == 1) {
//   console.log("UZS=>USD  pulingiz miqdori:  ", sum / 12800);
// }
// if (or == 2) {
//   console.log("USD=>UZS  pulingiz miqdori:  ", sum * 12800);
// }
////////////////////////////////////////////////////////////////////////////////////////////  1  -dars 4- misol//////////////////////
// let firstname = prompt("ismingizni kiriting:");
// let lastname = prompt("familiyangizni kiriting:");
// console.log("sizning to'liq ismingiz:  ", firstname, lastname);

////////////////////////////////////////////////////////////////////////////////////////////  1  -dars 5- misol//////////////////////

// let c = Number(prompt("Xona haroratini kiritng: C da"));
// console.log("xona harorati farangertda: ", (c * 9) / 5 + 32);

////////////////////////////////////////////////////////////////////////////////////////////  1  -dars 6- misol//////////////////////
// let a = Number(
//   prompt(
//     "ushbu dastur orqali siz istalgan uchburchak perimetirini hisoblashingiz mumkin, 1-tomonni kiriting:"
//   )
// );
// let b = Number(prompt("2-tomonni kiriting"));
// let c = Number(prompt("3- tomonni kiriting"));
// console.log("uchburchak perimetiri:" , a + b + c);

////////////////////////////////////////////////////////////////////////////////////////////  1  -dars 7- misol//////////////////////

// let object = {
//   matematika: 5,
//   informatika: 5,
//   ingliz_tli: 4,
//   tarix: 3,
// };
// let natija = 0;
// for (let i = 0; i < object.length; i++) {
//   natija += object[i];
//   console.log(natija);
// }
// m

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let n = 15000;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let n = 5;
// let summ = 0;

// for (let i = 0; i <= n; i++) {
//   summ += i;
// }
// console.log(summ);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(n, "*", i, "=", n * i);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let n = 12;
// for (let i = n; i >= 0; i--) {
//   console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let n = 10;
// for (let i = 1; i <= n; i++) {
//   console.log("*");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let kun = "seshanba";
// if (kun === "dushanba") {
//   console.log("dushanba kuni o'tin arra;ash");
// }

// if (kun === "seshanba") {
//   console.log("seshanba kuni dars qilish");
// }
// if (kun === "chorshanba") {
//   console.log("chorshanba kuni kitob o'qish");
// }
// if (kun === "payshanba") {
//   console.log("payshanba kuni dam olish");
// }
// if (kun === "juma") {
//   console.log("juma kuni bozorlk qilish");
// }

// if (kun === "shanba") {
//   console.log("shanba kuni o'tirishga borish");
// } else {
//   console.log("yakshanba kuni uxlash");
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let yosh = 3;
// if (yosh > 0 && yosh <= 6) {
//   console.log("bepul");
// }
// if (yosh <= 15 && yosh > 6) {
//   console.log("siz uchun chuipta narxi: 10000 so'm");
// }
// if (yosh <= 25 && yosh > 15) {
//   console.log("siz uchun chipta narxi: 25000 so'm");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let s = 50;
// if (s < 500 && s > 200) {
//   console.log("siz redmi rusumli telefonlardan harid qilishingiz mumkin");
// }
// if (s >= 500 && s < 800) {
//   console.log(
//     "siz SAMSUNG yoki redmi rusumli smartfonlarda birini harid qilishiz mumkin"
//   );
// }
// if (s > 800 && s < 500) {
//   console.log(
//     "siz iPhone, SAMSUNG yoki redmi smartfonlaridan birini harid qilishingiz mumkin"
//   );
// }
// if (s <= 200) {
//   console.log("bino yonidagi istima bozorga borishingiz mumkin");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let n = 12;
// for (let i = 0; i <= n; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let n = 10;
// let yigindi = 0;
// for (let i = 1; i <= n; i++) {
//   yigindi += i;
// }
// console.log(yigindi);

// 1 dan n gacah bo'lga natural sonlar yigindisini hisoblaydi

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(n, "*", i, "=", n * i);
// }
/////// 5 ko;paytirish jadvali
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// n = 12;
// for (let i = 0; i <= 10; i++) {
//   console.log(n - i);
// }
////teskari sanoq dasturi
///////////////////////////////////////////////////////////////////////////

// let yulduzlar = [];
// let n = 12;

// for (let i = 1; i <= n; i++) {
//   yulduzlar.push("*");
// }
// console.log(yulduzlar);
//////// n ta yulduzchalarni qatorasig achiqarish dasturi
//////////////////////////////////////////////////////////////////////////////////

// Foydalanuvchidan son kiritishni so'rash
// let number = prompt("Son kiriting:");

// // Raqamlar yig'indisini saqlash uchun o'zgaruvchi
// let sum = 0;

// // Sonni satrga aylantirish (raqamlarni birma-bir olish uchun)
// let strNumber = number.toString();

// // Raqamlarni birma-bir olish va yig'indini hisoblash
// for (let i = 0; i < strNumber.length; i++) {
//   sum += parseInt(strNumber[i]); // Har bir raqamni son qilib qo'shish
// }

// // Natijani konsolga chiqarish
// console.log(`Raqamlar yig'indisi: ${sum}`);
//////////////////////////////////////////////////////////////////////////////

// let n = 2;
// let juftlar = 0;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     juftlar += i;
//   }
// }
// console.log(juftlar);
//////  foydalanuvchi kiritgan songacha bo'lgan juft sonlar yig'indisini hisoblaydi
///////////////////////////////////////////////////////////////////////////////////////////
// let n = 344;
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     arr.push(i);
//   }
// }
// console.log("bo'luvchilar soni: ", arr.length);
/////// sonning natural bo'luvchilari soni;
////////////////////////////////////////////////////////////////////////////////////////////
// let n = 1000000;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(i);
//   }
// }
///////////////////////////////////////////////////////////////////////////////////////////

// let n = 123;
// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//   }
// }
/////1 dan n gacha bo'lgan sonlar ichidan 3 ga bo'linadiganlarini chiqarish

////////////////////////////////////////////////////////////////////////////////////////////////

let n = 2;
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i + "");
}
console.log(arr);
