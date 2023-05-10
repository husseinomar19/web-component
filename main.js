const webcom = document.createElement('webcom');
webcom.innerHTML = `
<header id="hed">
        <h2 id="tit">Web-Com.nl</h2>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Over</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <button>Inloggen</button>
        <button id="sw">Dark mood</button>
    </header>
`
const titwebcom = document.createElement('titwebcom');
titwebcom.innerHTML = `
<div class="tit-webcom">
       <h2 id="titcolor">Hallo this is my custom component</h2>
   </div>
`


class husseinwebcom extends HTMLElement{
    connectedCallback(){
        this.innerHTML = webcom.innerHTML;
    }
}
class tithussein extends HTMLElement{
    connectedCallback(){
        this.innerHTML = titwebcom.innerHTML;
        

    }
}



customElements.define('nav-hussein',husseinwebcom);
customElements.define('tit-hussein',tithussein)


    let sw = document.getElementById('sw');
    let hed = document.getElementById('hed');
    let titcolorList = document.querySelectorAll('#titcolor');

sw.addEventListener('click', function(){
    const currentColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
    if (currentColor === 'rgb(255, 255, 255)') {
        document.body.style.backgroundColor = 'black';
        sw.innerHTML = "Dark mood"
        titcolorList.forEach(titcolor => titcolor.style.color = "white");
      } else {
        document.body.style.backgroundColor = 'white';
        sw.innerHTML = "white mood" 
        titcolorList.forEach(titcolor => titcolor.style.color = "black");
      }
    
})

