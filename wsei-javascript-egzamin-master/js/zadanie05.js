////// ZADANIE 5
let container = document.getElementById('container');
document.querySelectorAll('*[data-text]').forEach(function(el){
    el.addEventListener('click', function(){
        container.innerHTML = this.getAttribute('data-text');
    });
});