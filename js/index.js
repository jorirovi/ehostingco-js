import { footerPages } from "./comunes/footer.js";
import { headerPages } from "./comunes/header.js";
import { obtenerNoticias } from "./servicios/noticias.js";

//Constantes y variables
const d = document;
const eslogan = "Empresa líder en soluciones 360º dentro de la industria de tecnologia."
const vision = "<span class='sub-titulo'>Vision</span>: Transformamos la manera en que las <strong>empresas</strong> y <strong>emprendedores</strong> construyen su presencia digital. Somos una compañía especializada en servicios de <strong>Hosting</strong>, <strong>desarrollo web</strong>, <strong>soluciones en la nube</strong> y <strong>arquitectura tecnológica personalizada</strong>, orientada a ofrecer rendimiento, seguridad y escalabilidad en cada proyecto."
const mision = "<span class='sub-titulo'>Mision</span>: Brindar una infraestructura <strong>confiable</strong> y <strong>moderna</strong>, combinada con un equipo experto en innovación digital, para que nuestros clientes puedan enfocarse en hacer crecer su negocio mientras nosotros nos ocupamos del entorno tecnológico que lo impulsa."
const principal = d.querySelector('main');
const piePagina = d.querySelector('footer');


//Header
headerPages;

//codigo para el main
const $seccionUno = d.createElement('section');
const $seccionVisMis = d.createElement('section');
const $seccionNoticias = d.createElement('section')
//contenido de video
$seccionUno.classList.add('seccion-uno', 'mb-100');
const $subTitulo1 = d.createElement('h2');
$subTitulo1.classList.add('titulo-seccion-uno')
$subTitulo1.textContent = eslogan;
$seccionUno.appendChild($subTitulo1)

//contenido de Mision y Vision
$seccionVisMis.classList.add('seccion-dos');

const $vision = d.createElement('div')
$vision.classList.add('seccion', 'mb-100');
const $seccionImgV = d.createElement('div');
$seccionImgV.classList.add('secion-imagen');
const $imagenV = d.createElement('img');
$imagenV.classList.add('imagen');
$imagenV.src = '../assets/images/vision.jpg';
$imagenV.alt = 'vision';
$imagenV.height = 400;
$imagenV.width = 400;
$imagenV.loading = 'lazy';
$seccionImgV.appendChild($imagenV)
const $visionTexto = d.createElement('p');
$visionTexto.classList.add('texto')
$visionTexto.innerHTML = vision;
$vision.append($seccionImgV, $visionTexto);
const $mision = d.createElement('div');
$mision.classList.add('seccion', 'mb-100', 'seccion-inversa');
const $misionTexto = d.createElement('p');
$misionTexto.classList.add('texto');
$misionTexto.innerHTML = mision;
const $seccionImgM = d.createElement('div');
$seccionImgM.classList.add('secion-imagen');
const $imagenM = d.createElement('img');
$imagenM.src = '../assets/images/mision.jpg';
$imagenM.alt = 'mision';
$imagenM.height = 400;
$imagenM.width = 400;
$imagenM.loading = 'lazy';
$imagenM.classList.add('imagen');
$seccionImgM.appendChild($imagenM);
$mision.append($seccionImgM, $misionTexto);
$seccionVisMis.append($vision, $mision);

//contenido de Noticias
const noticias = await obtenerNoticias();
console.log(noticias);
$seccionNoticias.classList.add('seccion-noticias', 'mb-100');
const $noticiasTitulo = d.createElement('div');
$noticiasTitulo.classList.add('noticias-titulo')
const $subTitulo3 = d.createElement('h2');
$subTitulo3.textContent = 'Noticias Tech';
$noticiasTitulo.appendChild($subTitulo3);
const $noticiasCont = d.createElement('div');
$noticiasCont.classList.add('noticias-contenedor') 
const $ul = d.createElement('ul');
noticias.forEach(noticia => {
    const $li = d.createElement('li');
    const $card = d.createElement('div');
    $card.classList.add('card-noticia');
    const $cardImgCont = d.createElement('div');
    $cardImgCont.classList.add('card-noticia-img-contenedor');
    const $cardImg = d.createElement('img');
    $cardImg.src = noticia.image;
    $cardImg.height = 75;
    $cardImg.width = 150;
    $cardImg.alt = noticia.id;
    const $cardInfo = d.createElement('div');
    $cardInfo.classList.add('card-texto-contenedor');
    const $texto = d.createElement('p');
    $texto.classList.add('card-texto');
    $texto.textContent = noticia.title;
    const $cardBoton = d.createElement('button');
    $cardBoton.classList.add('card-boton');
    $cardBoton.textContent = 'Ver mas';
    $cardInfo.append($texto, $cardBoton);
    $cardImgCont.appendChild($cardImg);
    $card.append($cardImgCont, $cardInfo);
    $li.appendChild($card);
    $ul.appendChild($li);
});
$noticiasCont.appendChild($ul)
$seccionNoticias.append($noticiasTitulo, $noticiasCont);

principal.append($seccionUno, $seccionVisMis, $seccionNoticias);

//Footer
footerPages;