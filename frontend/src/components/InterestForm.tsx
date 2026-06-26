import { useState } from 'react';
import './InterestForm.css'
import { envHostBackend } from '../shared/env';

export default function InterestForm () {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [policy, setPolicy] = useState<boolean>(false);

    async function handleSubmit() {

        if (name.trim() === "") {
            alert("Nome tem de estar preenchido")
            return
        }

        if (email.trim() === "") {
            alert("E-mail tem de estar preenchido")
            return
        }

        if (!policy) {
            alert("Necessita de aceitar os Termos de Proteção de Dados")
            return
        }

        const mens = {
            email: email.trim(),
            name: name.trim(),
        }

        console.log(JSON.stringify(mens))

        try {
            const res = await fetch(`http://${envHostBackend()}/api/submissions`, { //TODO: remover link hardcoded
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mens)
            }) 

            if(res.status == 201) {
                alert("Submetido com sucesso")
            } else {
                alert("Erro ao submeter")
            }
        }      
        catch {
            alert("Erro inesperado")
        }
    }

    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Concordo com os Termos de Proteção de Dados</label>
                    <input type="checkbox" checked={policy} onChange={(e) => setPolicy(e.target.checked)}/>
                </div>
                <div>
                    <input type="submit" value="Submeter"/>
                </div>
            </form>
        </>
    );
}
