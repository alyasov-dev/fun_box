const firstElement = document.getElementById('firstElement'),
    secondElement = document.getElementById('secondElement'),
    thirdElement = document.getElementById('thirdElement'),
    blueCircle = document.querySelector('.list-content__blue-background'),
    pinkCircle = document.querySelector('.list-content__pink-background'),
    greyCircle = document.querySelector('.list-content__grey-background'),
    firstText = document.getElementById('first_text'),
    secondText = document.getElementById('second_text'),
    thirdText = document.getElementById('third_text'),
    list = document.querySelector('.list');
       
let click = 0,
    hoverElement1 = document.getElementById('firstHoverElement'),
    hoverElement2 = document.getElementById('secondHoverElement'),
    hoverElement3 = document.getElementById('thirdHoverElement');

firstElement.addEventListener('click', firstElementFunction);  
secondElement.addEventListener('click', secondElementFunction);
thirdElement.addEventListener('click', thirdElementFunction);


function firstElementFunction() {

    // click++;

    // if(click % 2 === 1) { 
    //     secondElement.removeEventListener('click', secondElementFunction);
    //     thirdElement.removeEventListener('click', thirdElementFunction);

    //     //меняем текст блоков
    //     secondText.classList.add('display-n');
    //     thirdText.classList.add('display-n');

    //     let firstClone = firstText.cloneNode(true);
    //     let secondClone = firstText.cloneNode(true);

    //     secondElement.parentElement.append(firstClone);
    //     thirdElement.parentElement.append(secondClone);
    // }

    // else {
    //     secondElement.addEventListener('click', secondElementFunction);
    //     thirdElement.addEventListener('click', thirdElementFunction);

    //     secondElement.parentElement.lastElementChild.remove();
    //     thirdElement.parentElement.lastElementChild.remove();

    //     secondText.classList.remove('display-n');
    //     thirdText.classList.remove('display-n');
    // }
    
    //меняем цвет бордера двух эдементов
    secondElement.classList.toggle('list-content__pink-border');
    secondElement.classList.toggle('list-content__blue-border');

    thirdElement.classList.toggle('list-content__grey-border');
    thirdElement.classList.toggle('list-content__blue-border');
    thirdElement.firstElementChild.classList.toggle('list-content__block-shadow');


    //меняем цвет бордера уголка
    secondElement.classList.toggle('list-content__angle-pink');
    secondElement.classList.toggle('list-content__angle-blue');

    thirdElement.classList.toggle('list-content__angle-grey');
    thirdElement.classList.toggle('list-content__angle-blue');


    //меняем цвет кругов
    pinkCircle.classList.toggle('list-content__pink-background');
    pinkCircle.classList.toggle('list-content__blue-background');

    greyCircle.classList.toggle('list-content__grey-background');
    greyCircle.classList.toggle('list-content__blue-background');
}


function secondElementFunction() {

    click++;

    if(click % 2 === 1) {
        firstElement.removeEventListener('click', firstElementFunction);
        thirdElement.removeEventListener('click', thirdElementFunction);

        //меняем текст блоков
        firstText.classList.add('display-n');
        thirdText.classList.add('display-n');

        let firstClone = secondText.cloneNode(true);
        firstClone.textContent = 'Печень утки разварная с артишоками.';
        let secondClone = secondText.cloneNode(true);
        secondClone.textContent = 'Филе из цыплят с трюфелями в бульоне.';

        firstElement.parentElement.append(firstClone);
        thirdElement.parentElement.append(secondClone);

    }
    else {
        firstElement.addEventListener('click', firstElementFunction);
        thirdElement.addEventListener('click', thirdElementFunction);

        firstElement.parentElement.lastElementChild.remove();
        thirdElement.parentElement.lastElementChild.remove();

        firstText.classList.remove('display-n');
        thirdText.classList.remove('display-n');
    }

    //меняем цвет бордера двух эдементов
    firstElement.classList.toggle('list-content__blue-border');
    firstElement.classList.toggle('list-content__pink-border');

    thirdElement.classList.toggle('list-content__grey-border');
    thirdElement.classList.toggle('list-content__pink-border');
    thirdElement.firstElementChild.classList.toggle('list-content__block-shadow');


    //меняем цвет бордера уголка
    firstElement.classList.toggle('list-content__angle-blue');
    firstElement.classList.toggle('list-content__angle-pink');

    thirdElement.classList.toggle('list-content__angle-grey');
    thirdElement.classList.toggle('list-content__angle-pink');


    //меняем цвет кругов
    blueCircle.classList.toggle('list-content__blue-background');
    blueCircle.classList.toggle('list-content__pink-background');

    greyCircle.classList.toggle('list-content__grey-background');
    greyCircle.classList.toggle('list-content__pink-background');


}   


function thirdElementFunction() {

    click++;

    if(click % 2 === 1) {
        firstElement.removeEventListener('click', firstElementFunction);
        secondElement.removeEventListener('click', secondElementFunction);

        //меняем текст блоков
        firstText.classList.add('display-n');
        secondText.classList.add('display-n');

        let firstClone = thirdText.cloneNode(true);
        let secondClone = thirdText.cloneNode(true);

        firstElement.parentElement.append(firstClone);
        secondElement.parentElement.append(secondClone);
    }
    else {
        firstElement.addEventListener('click', firstElementFunction);
        secondElement.addEventListener('click', secondElementFunction);

        firstElement.parentElement.lastElementChild.remove();
        secondElement.parentElement.lastElementChild.remove();

        firstText.classList.remove('display-n');
        secondText.classList.remove('display-n');
    }

    //меняем цвет бордера двух эдементов
    firstElement.classList.toggle('list-content__blue-border');
    firstElement.classList.toggle('list-content__grey-border');
    firstElement.firstElementChild.classList.toggle('list-content__block-shadow');

    secondElement.classList.toggle('list-content__grey-border');
    secondElement.classList.toggle('list-content__blue-border');
    secondElement.firstElementChild.classList.toggle('list-content__block-shadow');


    //меняем цвет бордера уголка
    firstElement.classList.toggle('list-content__angle-blue');
    firstElement.classList.toggle('list-content__angle-grey');

    secondElement.classList.toggle('list-content__angle-pink');
    secondElement.classList.toggle('list-content__angle-grey');


    //меняем цвет кругов
    pinkCircle.classList.toggle('list-content__pink-background');
    pinkCircle.classList.toggle('list-content__grey-background');

    blueCircle.classList.toggle('list-content__blue-background');
    blueCircle.classList.toggle('list-content__grey-background');
 
}

