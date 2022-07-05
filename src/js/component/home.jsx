import React from "react";

const Home = ({ borrar, id, tarea }) => {
	const borrarTarea = () => {
		borrar(id);
	};

	return (
		<div>
			<div className="tarea text-center">
				<span>{tarea.label}</span>
				<span onClick={borrarTarea}>Borrar</span>
			</div>
		</div>
	);
};

export default Home;