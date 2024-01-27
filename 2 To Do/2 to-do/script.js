let searchInput = document.querySelector("#search-form input") // this for search input 
let list = document.querySelector("#to-do-list") // this is for UL on Html
let addInput = document.querySelector("#add-form input") // this is for add work input
let addBtn = document.querySelector("#add-form button") // this for add work btn


// *$#$* here is for search item *$#$* //
searchInput.addEventListener("input", (e)=>{
    Array.from(list.children).forEach(elements => {
        // console.log(list) == ul= => class : to-do-list
        // console.log(list.children); == all LI's Elemnt 
        // console.log(element) == li => class : to-do-item
        if(document.querySelector("#emptyMsg")){
            return
        }
        // console.log(elements) ; // this is element li => class : to-do-item
        // console.log(elements.querySelector(".title")) ; // this is element I => class : title
        // console.log(elements.querySelector(".title").innerText) ; // this is I => class : title => text
        // console.log(elements.querySelector(".title").innerText.toLowerCase()) ; // this is I => class : title => text
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes()) ; // this is for find value that is true or false
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes(e.target)) ; // this is for find value that is true or false
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes(e.target.value)) ;// this is for find value that is true or false
        // console.log(elements.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) ; // this is for find value that is true or false
        if(elements.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            elements.style.display = "flex"
        }else
            elements.style.display = "none"
    });
})


// *$#$* here is for add event *$#$* //
addBtn.addEventListener("click", (e)=>{
    e.preventDefault() ;  // e.preventDefault() if for arawe undefined // console.log(e.preventDefault());
   if(!addInput.value)
       return
       // if addInput wasn't any value , Don't continue
       // It means that there must be some amount in the input for it to work


       // so When document.querySelector("#emptyMsg") came
       // go remove the document.querySelector("#emptyMsg")
   if(document.querySelector("#emptyMsg")){
       document.querySelector("#emptyMsg").remove()
   }

   list.appendChild(createListItem(addInput.value))
   addInput.value = ""
})


// *$#$* here is for on time that Ul was null and remove span or to-do-item *$#$* //
list.addEventListener("click",(e)=>{
   // nodeName is for Element's name in js  // console.log(e.target.nodeName);
    if(e.target.nodeName == "SPAN"){
        e.target.parentNode.remove() ;
        // e.target.parentNode is our span' parent that is li whit to-do-item's class // console.log(e.target.parentNode);
        if(list.children.length == 0){
            // 1: list is our UL on Html // console.log(list);
            // 2: children is our UL's children that is in down , so we fix this , look down // console.log(list.children);
            // 3: length is our value on UL's children that we said whan will 0 // console.log(list.children.length);
           
            listEmptyMsg = document.createElement("div")
            // createElement is for create a Element div on ul whit to-do-list's id
            listEmptyMsg.style.textAlign = "center"
            listEmptyMsg.style.color = "#333"
            listEmptyMsg.innerText = "هیچ برنامه ای وجود ندارد"
            listEmptyMsg.id = "emptyMsg" ;

            list.appendChild(listEmptyMsg) ;
            // appendChild is for append a Child that this is listEmptyMsg and is a div for we creat on top
        }
    }
})

// *$#$* here is for create ListItem *$#$*
function createListItem(itemValue){
    let item = document.createElement("li")
    let title = document.createElement("i")
    let btn = document.createElement("span")

    item.className = "to-do-item"

    title.className = "title"
    title.innerText = itemValue

    btn.className = "delete-btn"
    btn.innerText = "پاک کردن"

    item.appendChild(title)
    item.appendChild(btn)

    return item

}
