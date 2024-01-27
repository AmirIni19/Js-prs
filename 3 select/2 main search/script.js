// 11111
let searchInput = document.querySelector("#search-form input") // this for search input 
// *$#$* here is for search item *$#$* //
searchInput.addEventListener("input", (e) => {
    Array.from(list.children).forEach(elements => {
        // console.log(list) == ul= => class : city-list
        // console.log(list.children); == all LI's Elemnt 
        // console.log(elements) == li => class : city-item

        // whan searchInput was null
        if (!searchInput.value) {
            document.querySelector('.main_list').style.display = "none"
        } else {
            document.querySelector('.main_list').style.display = "block"
        }

        // console.log(elements) ; // this is element li => class : city-item
        // console.log(elements.querySelector(".title")) ; // this is element I => class : title
        // console.log(elements.querySelector(".title").innerText) ; // this is I => class : title => text
        // console.log(elements.querySelector(".title").innerText.toLowerCase()) ; // this is I => class : title => text
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes()) ; // this is for find value that is true or false
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes(e.target)) ; // this is for find value that is true or false
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes(e.target.value)) ;// this is for find value that is true or false
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) ; // this is for find value that is true or false
        if (elements.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            elements.style.display = "flex"
        } else {
            elements.style.display = "none";
        }
    });
})


// این برای این بودش که محدودیت بزارم بیشتر از سه تا نتونه سکلکت کنه
// let list_select = document.querySelector(".show_select") 
// console.log(list_select.children.);
// if (list_select.children.length = 0){
//     document.querySelector('body').style.backgroundColor="red"
// }
// list_select.addEventListener("click", (e) => {
//     console.log(e.target);
// })


let list = document.querySelector("#city-list") // this is for UL on Html
list.addEventListener("click", (e) => {
    // 22222
    // *$#$* here is for on time that Ul was null and remove span or city-item *$#$* //
    // nodeName is for Element's name in js  // console.log(e.target.nodeName);
    if (e.target.nodeName == "SPAN") {
        e.target.parentNode.remove();
        // e.target.parentNode is our span' parent that is li whit city-item's class // console.log(e.target.parentNode);
    }

    // با این روش این شکلی میشه که هر چند بار میخای اضفه میکنی یه شهر رو ، اما خب کد خیلی بهینه تریه ، روش پایین رو ببین
    // 33333
    // *$#$* that is for select city and go to value search *$#$*
    // if (e.target.nodeName == "I") {
    //     // document.querySelector('.show_select').innerHTML += `
    //     showSelect.innerHTML += `
    //     <div class="show_select_child">
    //        <div>${e.target.innerText}</div>
    //        <span>X</span>
    //     </div>
    //     `
    // }

    // ادامه کاره بالاس اما با روشی که فقط یک شهر انتخاب بشه
    console.log(e.target);
    if(e.target.textContent == "قم") {
        document.querySelector('.city_1').innerHTML = `
        <div class="show_select_child">
           <div>قم</div>
           <span>X</span>
        </div>
        `
    }else if(e.target.textContent == "تهران") {
        document.querySelector('.city_2').innerHTML = `
        <div class="show_select_child">
           <div>تهران</div>
           <span>X</span>
        </div>
        `
    }else if(e.target.textContent == "تبریز") {
        document.querySelector('.city_3').innerHTML = `
        <div class="show_select_child">
           <div>تبریز</div>
           <span>X</span>
        </div>
        `
    }else if(e.target.textContent == "همدان") {
        document.querySelector('.city_4').innerHTML = `
        <div class="show_select_child">
           <div>همدان</div>
           <span>X</span>
        </div>
        `
    }else if(e.target.textContent == "شیراز") {
        document.querySelector('.city_5').innerHTML = `
        <div class="show_select_child">
           <div>شیراز</div>
           <span>X</span>
        </div>
        `
    }else if(e.target.textContent == "سنندج") {
        document.querySelector('.city_6').innerHTML = `
        <div class="show_select_child">
           <div>سنندج</div>
           <span>X</span>
        </div>
        `
    }else if(e.target.textContent == "مازندران") {
        document.querySelector('.city_7').innerHTML = `
        <div class="show_select_child">
           <div>مازندران</div>
           <span>X</span>
        </div>
        `
    }
})

// 44444
let showSelect = document.querySelector('.show_select') // this is for select city's title
// *$#$* here is for delete the selected item *$#$* //
showSelect.addEventListener("click", (e) => {
    if (e.target.nodeName == "SPAN") {
        e.target.parentNode.remove();
        // e.target.parentNode is our span' parent that is li whit city-item's class // console.log(e.target.parentNode);
    }
})


// برای فوکوس سایت
// function Add_MyFocus(){
//     var MyInput;
//     MyInput = document.getElementById("MyInput");
//     MyInput.focus();
//     document.querySelector('.main_list').style.display = "block"
//     document.querySelector('.main_list').style.display = "none"
//    }
//    searchInput.autofocus
//    setInterval("Add_MyFocus()", 100);
//    function Add_MyFocus(){
//     var Result = document.getElementById("Result");
//     if (document.getElementById("sag").focus()) {
//       Result.innerHTML = "الان روی صفحه فوکوس شد";
//     } else {
//       Result.innerHTML = "هنوز روی صفحه فوکوس نشده";
//     }
//    }

// 55555
let addBtn = document.querySelector("#add-form button") // this for add city btn
let addInput = document.querySelector("#add-form input") // this is for add city in input
// *$#$* here is for add city *$#$* //
addBtn.addEventListener("click", (e) => {
    e.preventDefault();  // e.preventDefault() is for undefined and page don't refresh // console.log(e.preventDefault());
    if (!addInput.value)
        return
    // if addInput wasn't any value , Don't continue
    // It means that there must be some amount in the input for it to work

    list.appendChild(createListItem(addInput.value))
    addInput.value = ""
})
// *$#$* here is for create ListItem *$#$*
function createListItem(itemValue) {
    let item = document.createElement("li")
    let title = document.createElement("i")
    let btn = document.createElement("span")

    item.className = "city-item"

    title.className = "title"
    title.innerText = itemValue

    btn.className = "delete-btn"
    btn.innerText = "پاک کردن"

    item.appendChild(title)
    item.appendChild(btn)

    return item

}


