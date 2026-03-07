const d = document;
const piePagina = d.querySelector('footer');
const nombreEmpresa = 'eHostingCO'
const direccion = 'C. de Basauri, 17, Moncloa - Aravaca, 28023 Madrid';
const derechos = "Todos los derechos reservados © 2026";

const itemsFooter = [
    {
        id: "whatsapp",
        ico: "fa-brands fa-whatsapp",
        url: "#"
    },
    {
        id: "instagram",
        ico: "fa-brands fa-instagram",
        url: "#"
    },
    {
        id: "facebook",
        ico: "fa-brands fa-facebook",
        url: "#"
    },
    {
        id: "x",
        ico: "fa-brands fa-x",
        url: "#"
    }
];
function iconosPiePagina(items){
    const $iconoContenedor = d.createElement('div');
    $iconoContenedor.classList.add('contenedor-iconos')
    items.forEach(item => {
        const $linkRS = d.createElement('a');
        $linkRS.href = item.url
        const $icono = d.createElement('i');
        $icono.classList.add(...item.ico.split(" "));
        $linkRS.appendChild($icono);
        $iconoContenedor.appendChild($linkRS);
    });
    return $iconoContenedor
}

const iconosPP = iconosPiePagina(itemsFooter);

export function myFooter() {
    const $tituloPie = d.createElement('h2');
    $tituloPie.classList.add('titulo-pie');
    $tituloPie.textContent = nombreEmpresa;
    const $direccion = d.createElement('p');
    $direccion.classList.add('pie-direccion-derechos');
    $direccion.textContent = direccion;
    const $derechos = d.createElement('p');
    $derechos.classList.add('pie-direccion-derechos');
    $derechos.textContent = derechos;
    piePagina.append($tituloPie, $direccion, iconosPP, $derechos);

    return piePagina;

}

//export const footerPages = myFooter();