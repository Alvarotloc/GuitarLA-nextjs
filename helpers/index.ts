export const formatearFecha = (fecha:string) => {
    const fechaNueva = new Date(fecha);

    interface IOpciones {
        year : 'numeric',
        day : '2-digit',
        month : 'long'
    }

    const opciones:IOpciones = {
        year : 'numeric',
        month : 'long',
        day : '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES',opciones);
}