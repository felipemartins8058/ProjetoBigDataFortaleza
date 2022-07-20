import { useState, useEffect } from "react";
import * as s from "./styles";

function App() {
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [nomemae, setNomemae] = useState("");
    const [datacadastro, setDatacadastro] = useState("");
    const [datanascimento, setDatanascimento] = useState("");
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/usuario/getAll")
            .then((res) => res.json())
            .then((result) => {
                setUsuarios(result);
            });
    }, [usuarios]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = { rg, cpf, nome, nomemae, datacadastro, datanascimento };
        console.log(usuario);
        fetch("http://localhost:8080/usuario/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        }).then(() => {
            console.log("Usuário adicionado com sucesso!");
        });
    };

    return (
        <div className="App">
            <s.appWrapper>
                <div>
                    <s.title>Cadastro de Usuários</s.title>
                    <s.formWrapper>
                        <form>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" name="nome" id="nome" onChange={(e) => setNome(e.target.value)} />
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" name="cpf" id="cpf" onChange={(e) => setCpf(e.target.value)} />
                            <label htmlFor="rg">RG</label>
                            <input type="text" name="rg" id="rg" onChange={(e) => setRg(e.target.value)} />
                            <label htmlFor="nomemae">Nome da mãe</label>
                            <input type="text" name="nomemae" id="nomemae" onChange={(e) => setNomemae(e.target.value)} />
                            <label htmlFor="datacadastro">Data de cadastro</label>
                            <input type="text" name="datacadastro" id="datacadastro" onChange={(e) => setDatacadastro(e.target.value)} />
                            <label htmlFor="datanascimento">Data de nascimento</label>
                            <input type="text" name="datanascimento" id="datanascimento" onChange={(e) => setDatanascimento(e.target.value)} />
                            <button type="submit" onClick={handleSubmit}>
                                Enviar
                            </button>
                        </form>
                    </s.formWrapper>
                </div>
                <div>
                    <s.title>Usuários cadastrados</s.title>
                    {usuarios.map((usuario) => (
                        <s.usuarioCard>
                          <p>Nome: <span>{usuario.nome}</span></p>
                          <p>CPF: <span>{usuario.cpf}</span></p>
                          <p>RG: <span>{usuario.rg}</span></p>
                          <p>Nome da Mãe: <span>{usuario.nomemae}</span></p>
                          <p>Data de nascimento: <span>{usuario.datanascimento}</span></p>
                          <p>Data de Cadastro: <span>{usuario.datacadastro}</span></p>
                        </s.usuarioCard>
                    ))}
                </div>
            </s.appWrapper>
        </div>
    );
}

export default App;
