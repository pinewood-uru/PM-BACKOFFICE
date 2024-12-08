export const formatearFiltrosDB = (valor) => valor ? new RegExp(valor, "gi") : undefined;

export const obtenerProximoId = async (modelo) => {
    const ultimoId = await modelo.findOne().sort("-id").exec();
    return ultimoId ? (ultimoId.id + 1) : 1;
};

export const tokenAleatorio = () => Math.random().toString(36).slice(5);