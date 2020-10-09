import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare,faPlus,faListUl,faMinusSquare,faTrash,faStrikethrough } from '@fortawesome/free-solid-svg-icons';
import List from './List'

const App = () => {

  let footerText;

  const [list,updateList] = useState('');
  const [listItems,updateListItems] = useState([]);

  const listItem = (character) => {
    updateList(character.target.value);
  }

  const InsertList = () => {
    updateListItems((oldListItems) => {
      return [...oldListItems, list];
    });
    updateList('');
  }

  const removeItem = (id) =>{
  
        updateListItems((oldListItems) => {
          return oldListItems.filter((currentItem, indexNo) => {
            return indexNo !== id;
          })
        })
    }

    if(listItems.length===0){
      footerText = 'Your Bucket Is Empty';
    }

  return (
    <>
      <div className="container py-5">
        <h4 className="display-4 text-center">Todo-App</h4>
        <div className="row">
          <div className="col-md-7 mx-auto bg-white text-center my-5">
            <div className="card rounded shadow">
              <h5 class="card-header"><FontAwesomeIcon icon={faListUl} /> Create Your List</h5>
              <div className="card-body">
                <div className="row my-4 d-flex justify-content-sm-center">
                  <div className="col-sm-9 my-1">
                    <input type="text" placeholder="Add item" class="form-control form-control card-title shadow-none border-top-0 border-left-0 border-right-0 border-bottom" 
                    name="list" 
                    onChange={listItem} 
                    value={list}
                    />
                  </div>
                  <div className="col-sm-1 p-0 my-1">
                    <button className="btn btn btn-primary rounded-circle shadow " onClick={InsertList}><FontAwesomeIcon icon={faPlus} /></button>
                  </div>
                </div>
                <ol className="list-group list-unstyled lead text-dark">
                  {listItems.map((listValue,index)=>{
                    return (
                      <List 
                        key = {index}
                        id = {index}
                        propsValue = {listValue}
                        onSelect = {removeItem}
                      />
                    )
                  })}                  
                </ol>
                <p class="card-text py-4">{footerText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;