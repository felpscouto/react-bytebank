import { validaCPF } from '../validacao/validaCPF'
import { cadastrarClientes } from "../../api/cliente";

const eventoEnvia = (form) => {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = event.target.querySelector("[data-nome]").value;
        const cpf = event.target.querySelector("[data-cpf]").value;

        cadastrarClientes(nome, cpf);

        /*
        if (validaCPF(cpf) === true) {
            cadastrarClientes(nome, cpf);
        } else {
            alert("O CPF não é válido");
        }
        */
    });
};

export default eventoEnvia;