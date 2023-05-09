const webcom = document.createElement('webcom');
webcom.innerHTML = `
<header>
        <h2 id="tit">Web-Com.nl</h2>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Over</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <button>Inloggen</button>
    </header>
`
const titwebcom = document.createElement('titwebcom');
titwebcom.innerHTML = `
<div class="tit-webcom">
       <h2>Hallo this is my custom component</h2>
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