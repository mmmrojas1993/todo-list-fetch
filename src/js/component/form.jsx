import React, { useState } from "react";

 const Form = ({ nuevaTarea }) => {
	const [inputText, setInputText] = useState("");
	const [valido, setValido] = useState(true);

	const manejarFormulario = (event) => {
		setInputText(event.target.value);
	};

	const agregarTarea = (event) => {
		event.preventDefault();

		if (inputText === "") {
			setValido(false);
		} else {
			nuevaTarea(inputText);
			setInputText("");
			setValido(true);
		}
	};

	return (
		<div>
			<form className="form text-center" onSubmit={agregarTarea}>
				<span>Añadir tarea</span>
				<input
					value={inputText}
					onChange={manejarFormulario}
					placeholder="Ej: Correr"
				/>
			</form>
			{!valido ? (
				<div className="validacion text-center">Añada una tarea, por favor</div>
			) : null}
		</div>
	);
};


export default Form;