const AddToLocalStorage=()=>{
const inputName=document.getElementById('storage-id')
const id=inputName.value
const inputValue=document.getElementById('storage-value')
const value=inputValue.value

if(id && value){
    localStorage.setItem(id,value)
}
inputName.value=''
inputValue.value=''
}