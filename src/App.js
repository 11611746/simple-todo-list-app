import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faListUl } from '@fortawesome/free-solid-svg-icons';
import List from './List'
import CompletedList from './CompletedList'

const App = () => {

  const [list,updateList] = useState('');
  const [listItems,updateListItems] = useState([]);

  //insert character one by one
  const listItem = (character) => {
    updateList(character.target.value);
  }

  //to insert and delete list
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
  
    //to insert and delete completed list
    const [listComp,updateListComp] = useState([]);
    const strikeItem = (id,val) =>{ 
      updateListItems((oldListItems) => {
          return oldListItems.filter((currentItem, indexNo) => {
            return indexNo !== id;
          })
        })
      updateListComp((oldListItems) => {
      return [...oldListItems, val];
    });        
    }

    const removeCompletedItem = (id) =>{  
        updateListComp((oldListItems) => {
          return oldListItems.filter((currentItem, indexNo) => {
            return indexNo !== id;
          })
        })
    }

    //display menu
    const [dis,updateDis] = useState('mr-3 d-none');
    const showListMenu = () =>{
      updateDis('mr-3');
    }

    //hide menu
    const hideListMenu = () =>{
      updateDis('mr-3 d-none');
    }

    //to check the list id=s empty or not    
    let footerText;
    if(listItems.length===0 && listComp.length===0){
      footerText = 'Your Bucket Is Empty';
    }

    //to check complete list
    let headingComp;
    if(listComp.length>0){
      headingComp = "Completed List"
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
                        onClicked = {strikeItem}
                        onShowMenu = {showListMenu}
                        onDoubleClicked = {hideListMenu}
                        display = {dis}
                      />
                    )
                  })}
                  <li className="mt-5 mb-3">{headingComp}</li>
                  {listComp.map((listValue,index)=>{
                    return (
                      <CompletedList 
                        key = {index}
                        id = {index}
                        propsValue = {listValue}
                        onSelect = {removeCompletedItem}
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