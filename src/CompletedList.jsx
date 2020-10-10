import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CompletedList = (props) => {
    
    return (
        <>            
            <li class="list-group-item d-flex border-0 p-1">
                <del className="text-danger">
                    {props.propsValue}
                </del>
                <span className="ml-3">
                    <FontAwesomeIcon icon={faTrash} 
                    className="text-danger" 
                    data-toggle="tooltip" 
                    data-placement="right" 
                    title="Remove"
                    onClick={() => {
                        return props.onSelect(props.id);
                    }}/>
                </span>
            </li>
        </>
    );
}

export default CompletedList;