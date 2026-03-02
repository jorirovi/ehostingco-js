const d = document;
const cabecera = d.querySelector('header');
const nombreEmpresa = 'eHostingCO';
const $menuIco = d.createElement('button');
$menuIco.id = 'btnMenu';

// Armar Menu
const itemsMenu = [
    {
        item: 'Inicio',
        url: '#'
    },
    {
        item: 'Galeria',
        url: '#'
    },
    {
        item: 'Presupuesto',
        url: '#'
    },
    {
        item: 'Contacto',
        url: '#'
    }
];
function armarMenu() {
    const $nav = d.createElement('nav');
    $nav.classList.add('items-menu');
    itemsMenu.forEach(i => {
        const $ancla = d.createElement('a');
        $ancla.classList.add('ancla')
        $ancla.href = i.url;
        $ancla.textContent = i.item;
        $nav.appendChild($ancla);
    });
    return $nav;
}
const myMenu = armarMenu()

function menuModal() {
    const $menuMod = d.createElement('div');
    $menuMod.classList.add('menu-modal');
    const $menucont = d.createElement('div');
    $menucont.classList.add('menu-contenido');
    const $spanMenu = d.createElement('span');
    $spanMenu.id = 'cerrarMenu';
    $spanMenu.classList.add('material-symbols-outlined', 'cerrar');
    $spanMenu.textContent = 'close';
    const $navMenu = d.createElement('nav');
    const $ul = d.createElement('ul');
    itemsMenu.forEach(i => {
        const $li = d.createElement('li');
        const $a = d.createElement('a');
        $a.href = i.url;
        $a.textContent = i.item
        $li.appendChild($a);
        $ul.appendChild($li);
    });
    $navMenu.appendChild($ul);
    $menucont.append($navMenu, $spanMenu);
    $menuMod.appendChild($menucont);
    return $menuMod;
}

function myHeader(){
    //codigo para el header
    cabecera.classList.add('contenedor-cabecera');
    const $linkP = d.createElement('a');
    $linkP.classList.add('link-logo');
    $linkP.href = '#'
    const $tituloP = d.createElement('h1');
    $tituloP.textContent = nombreEmpresa;
    const $contentIconoMenu = d.createElement('div');
    $contentIconoMenu.classList.add('contenedor-icono-menu');
    $menuIco.classList.add('material-symbols-outlined', 'icono-menu');
    $menuIco.textContent = 'menu'
    $linkP.appendChild($tituloP);
    $contentIconoMenu.appendChild($menuIco);
    cabecera.append($linkP, myMenu, $contentIconoMenu);

    $menuIco.addEventListener('click', () => {
        console.log('hola Mundo');
        const myMenuModal = menuModal();
        d.body.appendChild(myMenuModal);
        myMenuModal.style.display = 'block';
    });

    return cabecera;
}


export const headerPages = myHeader();