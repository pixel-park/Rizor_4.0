function navigate(identity={}, idArray, classArray){
    let e = identity.event || false; // in eventListeners use e as event
    let id = identity.id || e.target.id;  //in scrollTrigers us id
    let menuEls = document.getElementsByClassName(classArray[0][0]); //target menu element
    let scrollEls = document.getElementsByClassName(classArray[1][0]); //target scroll bar circle
    if(idArray.includes(id)){
        if(e) e.preventDefault(); //prevent <a> default behavior
        [...scrollEls].forEach(elm=>elm.classList.remove(classArray[1][1]));  //reset all scroll circles
        [...menuEls].forEach(elm=>elm.classList.remove(classArray[0][1]));  //reset all menu element
        if(idArray[1]){
        document.getElementById(idArray[1]).classList.add(classArray[1][1]); //active target scroll circle
        }
       if(idArray[3]){
        document.getElementById(idArray[0]).classList.add(classArray[0][1]); //active target menu element
       }
      return idArray[2]; //returns place to scroll to as an id   
    }  
}

function splietter(el){
    let elArr = el.innerHTML = el.innerText.split('');
    el.innerHTML = '';
    for(let i = 0; i < elArr.length; i++){
        let char = elArr[i];
        if(char === ' '){
            char = '&#160;';
            }
        let letter = document.createElement('div');
        if(char == '\n'){
            letter.classList.add('enter')
        }else{
            letter.classList.add('letter');
        }
        letter.innerHTML = char;
        el.insertAdjacentElement('beforeEnd', letter);
    }
}

