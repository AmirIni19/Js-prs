function playAudio(audio){
    const clone = audio.cloneNode();
    // .cloneNode(); باعث این میشه که چند تا پارمتری که داره از متغیر میگره رو کپی کنه و بتونیم چند بار کلیک کنیم
    clone.play(); 
    // .play(); این ههم دراه همه اون کپی هارو میگیره پخش میکنه
    setTimeout(() => (clone.volume = 0.8), 400); console.log(clone.volume);
    setTimeout(() => (clone.volume = 0.6), 800); // console.log(clone.volume= 0.6);
    setTimeout(() => (clone.volume = 0.4), 1200); // console.log(clone.volume= 0.4);
    setTimeout(() => (clone.volume = 0.2), 1600); // console.log(clone.volume= 0.2);
    setTimeout(() => (clone.volume = 0), 2000); // console.log(clone.volume= 0);
    // volume : اینجا داریم میگیم که چون صدایی که داریم بیشتر از دو ثانیه تایمشونه ، و همشون هم یک ویلوم دارن 
    // گفتیم که اگر مساوی بود مثلا با هشت دهم و یعنی صدا زیاد بود تا چهارصد میلی ثانیه قطع کن و تا وقتی که صدا از بین رفت تا دو ثانیه تمومش کن 
    
}
// cloneNode in js
// https://free-learn.ir/%D9%85%D8%AA%D8%AF-clonenode-%D8%AF%D8%B1-dom-%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA/

// play in js
// http://hypersource.ir/post/70/%D9%BE%D8%AE%D8%B4-%D8%A7%D9%87%D9%86%DA%AF-%D8%A8%D8%A7-%D8%AC%D8%A7%D9%88%D8%A7-%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA

// this is for volume
// https://www.w3schools.com/jsref/prop_audio_volume.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_volume

const c2 = new Audio("sounds/c2.ogg");
const c_2 = new Audio("sounds/c-2.ogg");
const d2 = new Audio("sounds/d2.ogg");
const d_2 = new Audio("sounds/d-2.ogg");
const e2 = new Audio("sounds/e2.ogg");
const f2 = new Audio("sounds/f2.ogg");
const f_2 = new Audio("sounds/f-2.ogg");
const g2 = new Audio("sounds/g2.ogg");
const g_2 = new Audio("sounds/g-2.ogg");
const a2 = new Audio("sounds/a2.ogg");
const a_2 = new Audio("sounds/a-2.ogg");
const b2 = new Audio("sounds/b2.ogg");

const c3 = new Audio("sounds/c3.ogg");
const c_3 = new Audio("sounds/c-3.ogg");
const d3 = new Audio("sounds/d3.ogg");
const d_3 = new Audio("sounds/d-3.ogg");
const e3 = new Audio("sounds/e3.ogg");
const f3 = new Audio("sounds/f3.ogg");
const f_3 = new Audio("sounds/f-3.ogg");
const g3 = new Audio("sounds/g3.ogg");
const g_3 = new Audio("sounds/g-3.ogg");
const a3 = new Audio("sounds/a3.ogg");
const a_3 = new Audio("sounds/a-3.ogg");
const b3 = new Audio("sounds/b3.ogg");

const c4 = new Audio("sounds/c4.ogg");
const c_4 = new Audio("sounds/c-4.ogg");
const d4 = new Audio("sounds/d4.ogg");
const d_4 = new Audio("sounds/d-4.ogg");
const e4 = new Audio("sounds/e4.ogg");
const f4 = new Audio("sounds/f4.ogg");
const f_4 = new Audio("sounds/f-4.ogg");
const g4 = new Audio("sounds/g4.ogg");
const g_4 = new Audio("sounds/g-4.ogg");
const a4 = new Audio("sounds/a4.ogg");
const a_4 = new Audio("sounds/a-4.ogg");
const b4 = new Audio("sounds/b4.ogg");

const c5 = new Audio("sounds/c5.ogg");
const c_5 = new Audio("sounds/c-5.ogg");
const d5 = new Audio("sounds/d5.ogg");
const d_5 = new Audio("sounds/d-5.ogg");
const e5 = new Audio("sounds/e5.ogg");
const f5 = new Audio("sounds/f5.ogg");
const f_5 = new Audio("sounds/f-5.ogg");
const g5 = new Audio("sounds/g5.ogg");
const g_5 = new Audio("sounds/g-5.ogg");
const a5 = new Audio("sounds/a5.ogg");
const a_5 = new Audio("sounds/a-5.ogg");
const b5 = new Audio("sounds/b5.ogg");

const c6 = new Audio("sounds/c6.ogg");
const c_6 = new Audio("sounds/c-6.ogg");
const d6 = new Audio("sounds/d6.ogg");
const d_6 = new Audio("sounds/d-6.ogg");
const e6 = new Audio("sounds/e6.ogg");
const f6 = new Audio("sounds/f6.ogg");
const f_6 = new Audio("sounds/f-6.ogg");
const g6 = new Audio("sounds/g6.ogg");
const g_6 = new Audio("sounds/g-6.ogg");
const a6 = new Audio("sounds/a6.ogg");
const a_6 = new Audio("sounds/a-6.ogg");
const b6 = new Audio("sounds/b6.ogg");
