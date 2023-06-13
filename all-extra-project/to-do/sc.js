const form = document.getElementById('addForm')
const listItems = document.getElementById('items')
const filter = document.getElementById('filter')
const input = document.getElementById('item')


//on submit event
form.addEventListener('submit', addItems);

//delete item
listItems.addEventListener('click',deleteItem)

//filter 
filter.addEventListener('keyup',filterItems)

function addItems(e) {
    e.preventDefault()

    //store item value

    //create list item
    let li = document.createElement('li');
    li.className='list-group-item'
    li.appendChild(document.createTextNode(input.value))
    listItems.appendChild(li)
    //create close btn 
    let closeBtn = document.createElement('button')
    closeBtn.appendChild(document.createTextNode('X'))
    closeBtn.className ='btn btn-danger btn-sm float-right delete'
    //add btn to li
    li.appendChild(closeBtn)
    input.value ='';
}

function deleteItem(e){
 if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
 let li=e.target.parentElement;
listItems.removeChild(li)
 }}
}


function filterItems(e){
    //convert text to uppercase
    let text=e.target.value.toLowerCase()

    //get the list
    let items = listItems.getElementsByTagName('li')

    Array.from(items).forEach((item)=>{
        console.log(item)
       let itemName=item.firstChild.textContent
if(itemName.toLowerCase().indexOf(text)!= -1){
    item.style.display='block'
}else{
    item.style.display='none'
}
    })
}