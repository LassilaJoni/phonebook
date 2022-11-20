import React from 'react'


    const AddPersonsForm = ({handleNameChange, handleNumberChange, addName, handleFilter })=>{
      return(
        
        <div>
        <form onSubmit={addName}>
        Filter
        <input
          onChange={handleFilter}
        />
        <br/>
          Name
        <input
          onChange={handleNameChange}
        />

        <br/>
        Number
        <input
          onChange={handleNumberChange}
        />
        <br/>
        <button type="submit">save</button>
      </form>
        </div>

      )
    }
    export default AddPersonsForm
