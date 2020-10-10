import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTrash } from '@fortawesome/free-solid-svg-icons';

const List = (props) => {
    
    return (
        <>            
            <li class="list-group-item d-flex border-0 p-1 text-dark">
                <span className={props.display}>
                    <FontAwesomeIcon icon={faTrash} 
                    className="text-danger" 
                    data-toggle="tooltip" 
                    data-placement="right" 
                    title="Remove"
                    onClick={() => {
                        return props.onSelect(props.id);
                    }}/>
                </span>
                <span className={props.display}>
                    <FontAwesomeIcon icon={faCheck} 
                    className="text-success" 
                    data-toggle="tooltip" 
                    data-placement="right" 
                    title="Completed"
                    onClick={() => {
                        return props.onClicked(props.id,props.propsValue);
                    }}/>
                </span>
                <span onClick={props.onDoubleClicked} onDoubleClick={props.onShowMenu}>{props.propsValue}</span>
            </li>
        </>
    );
}

export default List;