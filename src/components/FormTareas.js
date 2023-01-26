import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import ListaTareas from './ListaTareas';

const FormTareas = () => {

    let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
    const [tareas, setTareas] = useState(tareasLocalStorage);
    const [tareaIndividual, setTareaIndividual] = useState('');

    useEffect(() => {
        localStorage.setItem('listaTareas', JSON.stringify(tareas));
    },[tareas]); //array de dependencias  

    const handleSubmit = (e)=>{
        e.preventDefault();

        setTareas([...tareas, tareaIndividual]);
        setTareaIndividual('');

    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control 
                    type="text" placeholder="Tarea..." 
                    onChange={(e) => setTareaIndividual(e.target.value)}
                    value={tareaIndividual}
                    />
                </Form.Group>
                
            </Form>
            <section className="container">
                <ListaTareas arregloTareas={tareas}> </ListaTareas>
            </section>
        </>
    );
};

export default FormTareas;