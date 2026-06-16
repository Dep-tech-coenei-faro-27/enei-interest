import { useState } from 'react';

export default function NameForm () {

    const [name, setName] = useState<string>('');

    const handleChange = (e : string) => {
        setName(e)
    }

    const handleSubmit = () => {

        if (name.trim() === ""){
            alert("Nome tem de estar preenchido")
            return
        }

        const mens = {
            name: name.trim()
        }

        console.log(JSON.stringify(mens))
    }

    return (
        <>
            <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}}>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="name" value={name} onChange={(e) => handleChange(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Submeter"/>
                </div>
            </form>
        </>
    );
}