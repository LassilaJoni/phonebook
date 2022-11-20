import { useState } from 'react'
import AddPersonsForm from './components/PersonForm'
import ShowPersons from './components/Persons'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showFilter, setFilter] = useState('')


  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }



    const alreadyAdded = persons.find(person => person.name.toUpperCase() === newName.toUpperCase())
    alreadyAdded ? alert(`${newName} is already added to phonebook`)

    : setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const showAll = () => {
    return persons
  }

  const personsToShow = showFilter ?
    persons.filter(person => person.name.toLowerCase().includes(showFilter)) :
    persons


  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with a
    <li key={showFilter}>{persons.name}
     
    </li>

    <AddPersonsForm 
         addName={ (e) => addName(e) }
         handleNameChange={ (e) => handleNameChange(e) }
         handleNumberChange= { (e) => handleNumberChange(e) }
         showAll= { (e) => showAll(e) }
         handleFilter= { (e) => handleFilter(e) }
        
        />
      <h2>Numbers</h2>
      <ShowPersons
      persons={ persons }
      personsToShow ={personsToShow}
      />
    </div>
  )

}

export default App