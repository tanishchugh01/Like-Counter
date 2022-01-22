window.addEventListener('load',mymain);

var count = 0;

function mymain()
{
    var buton=document.getElementsByTagName('button')[0];

    buton.addEventListener('click',counter);
}

function counter() {
    count++;

    document.getElementsByTagName("span")[0].innerHTML = `<i>${count}</i>`;
}
