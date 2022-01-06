const DOMELEMENTS={
    output:document.querySelector('.output'),
    numbersCheck:document.querySelector('input[name="numbers"]'),
    lettersCheck:document.querySelector('input[name="letters"]'),
    specialCharacters: document.querySelector('input[name="special-characters"]'),
    passwordLength:document.getElementById('length'),
    generatePassword:document.querySelector('.generate')
}

const rangeCriteria=function(type){
    /* accepts arrays of ranges */
    let finalNum;
    while(!finalNum){
        let testItem=Math.floor(Math.random()*126);
        if(type==="symbols"){
            if(testItem>32&&testItem<48||testItem>57&&testItem<65||testItem>90&&testItem<97||testItem>122&&testItem<127){
                /* for checking if the input is symbol */
                finalNum=testItem;
            }
            continue
        }
        if(type==="numbers"){
            if(testItem>=48&&testItem<=57){
                /* for checking if the input is number */
                finalNum=testItem;
            }
            continue
        }
        if(type==="letters"){
            if(testItem>64&&testItem<91||testItem>97&&testItem<123){
                finalNum=testItem;
            }
            continue
        }
    }
    return finalNum
}

DOMELEMENTS.generatePassword.addEventListener('click',()=>{
    let password=[];
    let filters=[];
    if(DOMELEMENTS.numbersCheck.checked){
        filters.push("numbers")
    }
    if(DOMELEMENTS.lettersCheck.checked){
        filters.push("letters")
    }
    if(DOMELEMENTS.specialCharacters.checked){
        filters.push("symbols")
    }
    if(DOMELEMENTS.passwordLength.value&&filters.length){
        while(password.length<=DOMELEMENTS.passwordLength.value-1){
            const randomType=filters[Math.floor(Math.random()*filters.length)];
            password.push(String.fromCharCode(rangeCriteria(randomType)));
         }
    }
    DOMELEMENTS.output.value=password.join("")
})

