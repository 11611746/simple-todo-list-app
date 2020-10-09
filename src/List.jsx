import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare,faPlus,faListUl,faTimes,faTrash,faStrikethrough } from '@fortawesome/free-solid-svg-icons';

const List = (props) => {
    
    return (
        <>            
            <li class="list-group-item d-flex border-0 p-1">
                <span className="mr-3">
                    <FontAwesomeIcon icon={faTimes} 
                    className="text-danger" 
                    onClick={() => {
                        return props.onSelect(props.id);
                    }}/>
                </span>
                {props.propsValue}
            </li>
        </>
    );
}

export default List;