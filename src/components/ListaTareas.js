import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemTarea from './ItemTarea';

const ListaTareas = (props) => {
    return (
        <ListGroup>
         {props.arregloTareas.map((item, posicion) => <ItemTarea key={posicion} dato={item}/>)}
        </ListGroup>
    );
};

export default ListaTareas;
