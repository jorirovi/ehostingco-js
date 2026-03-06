//Funcion para obtener datos
export async function obtenerNoticias(){
    try {
        const response = await fetch('../../data/noticias.json');
        if(!response.ok){
            throw new Error(`Error de conexion: ${response.status}`);
        };
        const datos = await response.json();
        return datos.articles;

    } catch (err) {
        console.error('Error:', err.message);
    }
}