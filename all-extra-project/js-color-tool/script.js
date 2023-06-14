const hexInput =document.getElementById('hexInput')

// hexInput.addEventListener('oninput',checkHex)
function checkHex(hex){
    if(!hex) return false;
    if(hex.startsWith('#')){}
    const strippedHex =hex.replace('#',"");
    return  strippedHex.length === 3|| strippedHex.length ===6
//     

}