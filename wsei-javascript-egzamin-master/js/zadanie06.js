////// ZADANIE 6

window.addEventListener('DOMContentLoaded', function(){
    let list = document.querySelector('ul#shopping-list');

    document.getElementById('button-1').addEventListener('click', function(){
        // dopisanie nowego produktu do listy
        let obj = document.createElement('li');
        obj.textContent = 'Chleb';

        list.appendChild(obj);
    });

    document.getElementById('button-2').addEventListener('click', function(){
        list.removeChild(list.lastChild);
    });

    document.getElementById('button-3').addEventListener('click', function(){
        let obj = list.children[1].cloneNode(true);
        list.appendChild(obj);
    });
}); 