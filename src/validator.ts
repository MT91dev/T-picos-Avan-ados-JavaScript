function validarChamado(titulo: string): boolean {
    if (!titulo || titulo.trim() === "") {
        throw new Error("O titulo do chamado não pode ser chamado vazio")
    }

    return true;
}

export default validarChamado;

