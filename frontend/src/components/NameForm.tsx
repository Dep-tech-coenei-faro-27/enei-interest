import { useState } from "react";

export default function NameForm () {

    const [name, setName] = useState<string>();

    const handleChange = (e : string) => {
        setName(e)
    }

    return (
        <>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="name" value={name} onChange={() => handleChange}/>
                </div>
                <div>
                    <input type="submit" value="Submeter"/>
                </div>
            </form>
        </>
    );
}