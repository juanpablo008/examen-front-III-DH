import { useState } from "react";
import Alert from "./Alert";
import Card from "./Card";

const Form = () => {

    const [data, setData] = useState({})
    const [nombre, setNombre] = useState("");
    const [apellido,setApellido]=useState("");
    const [edad, setEdad] = useState(0);
    const [color, setColor] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [showCard, setShowCard] = useState(false);

    const handleChange = ({target}, setValue) => {
        setValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setShowAlert(false);
        setShowCard(false);

        if(nombre.length < 3 || /^\s/.test(nombre)){
            setShowAlert(true);
            return
        }

        if(apellido.length < 6){
            setShowAlert(true);
            return;
        }

        setShowAlert(false);
        setShowCard(true);
    }

    return (
        <>
            <form className="mx-10 mt-5 py-5 flex flex-col gap-2 w-1/3 items-center bg-slate-200 rounded-2xl" onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold">Formulario</h2>
                <div className="flex gap-4">
                    <label htmlFor="nombre">Nombre:</label>
                    <input value={nombre} onChange={(e) => handleChange(e, setNombre)} id="nombre" type="text" placeholder="Nombre" />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="apellido">Apellido:</label>
                    <input value={apellido} onChange={(e) => handleChange(e, setApellido)} id="apellido" type="text" placeholder="Apellido" />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="edad">Edad:</label>
                    <input value={edad} onChange={(e) => handleChange(e, setEdad)} id="edad" type="number" placeholder="Edad" />
                </div>
                <div className="flex gap-4">
                    <label htmlFor="color">Color favorito:</label>
                    <input value={color} onChange={(e) => handleChange(e, setColor)} id="color" type="text" placeholder="Color favorito (#HEX)" />
                </div>

                <button className="flex justify-center bg-slate-400 px-10" type="submit">Enviar</button>
                {showAlert && <Alert msg={"Por favor chequea que la información sea correcta"} />}
            </form>

            {showCard && <Card data={{nombre, apellido, edad, color}} />}

        </>
    )
}

export default Form