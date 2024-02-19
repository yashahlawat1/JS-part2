const searchInput=document.getElementById("searchInput");
function  debounce(func,delay){
    return function(...args){
        setTimeout(()=>{
            func(...args)
        },delay);
    }
}