// const user = document.getElementById("username")
// const form = document.getElementById("my-form")
// const email = document.getElementById("email")
// const btn = document.getElementById("btn")
// const data = document.getElementById("data")
// const error = document.getElementById("error")

// form.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if (user.value === "" || email.value === "") {
//         error.classList.add('error')
// error.innerHTML="<h5>You have not enetered you username or email</h5>"
// setTimeout(()=> error.remove(),3000)
//     }else{
//         const list = document.createElement('li')
//         list.appendChild(document.createTextNode(`${user.value}  ${email.value} `)) 
//         data.appendChild(list)
//         user.value=""
//         email.value=""
//     }

// }


const form = document.getElementById("addForm");
const itemList = document.getElementById("items")
const filter = document.getElementById('filter')
//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem)

//filter event
filter.addEventListener('keyup', filterItems)

//add Item 
function addItem(e) {
    e.preventDefault()
    //get input value 
    let inputValue = document.getElementById("item").value
    //create li
    let li = document.createElement('li')
    li.className = "list-group-item"

    //add text node with input value 
    li.appendChild(document.createTextNode(inputValue))
    //create delete button elemnet
    const deleteBtn = document.createElement('button');
    //add classes to btn

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //ADD BTN TO LI
    li.appendChild(deleteBtn)
    //add li to list
    itemList.appendChild(li)
    //remove input value

}

//remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


function filterItems(e) {
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    //get list
    let items = itemList.getElementsByTagName('li')
    // console.log(items)
    //convert to array
    Array.from(items).forEach((item)=>{
let itemName = item.firstChild.textContent;
if(itemName.toLowerCase().indexOf(text)!= -1){
    item.style.display='block'
}else{
    item.style.display='none'
}
    })

}