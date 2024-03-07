import React, { useState } from 'react';
import './App.css';

function App() {
  /*All required components*/
  const [length, changeLength] = useState(0);
  const [lengthStatus, changeLengthWarningStatus] = useState();
  const [lowercase, changeLC] = useState(false); //0
  const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const [uppercase, changeUC] = useState(false); //1
  const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const [numbers, changeNum] = useState(false); //2
  const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [specialCharacters, changeSC] = useState(false); //3
  const specialCharactersArray = ['!', '@', '#', '$', '%', '&', '*', '^'];
  const [password, changePassword] = useState('');

  /*Handles invalid password length specifications and displays error message*/
  const handleLengthWarning = (event) => {
    changeLength(event.target.value);
    if (parseInt(event.target.value) < 8) {
      changeLengthWarningStatus('Min length is 8');
    } else if (parseInt(event.target.value) > 40) {
      changeLengthWarningStatus('Max Length is 40');
    } else {
      changeLengthWarningStatus('');
    }
  }

  /* Helper functions for 'handlePassword()'*/
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getRandomIndex = (maxIndex) => {
    return Math.floor(Math.random() * maxIndex);
  }

  /* Activated when 'Generate' is clicked. Generates Password based on selections.*/
  const handlePassword = () => {
    changePassword('');
    if ((length >= 8) && (length <= 40) && !lowercase && !uppercase && !numbers && !specialCharacters) {
      changePassword((password) => password + 'Please select one or more fields');
      return null;
    } 
    else if ((length < 8) || (length > 40)){
      changePassword((password) => password + 'Please enter a valid length');
      return null;      
    } 
    else {
      for (let i = 0; i < length; i++) {
        if (lowercase && uppercase && numbers && specialCharacters) {
          let choice = getRandomInt(4);
          if (choice === 0) changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);
          else if (choice === 1) changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);
          else if (choice === 2) changePassword((password) => password + numbersArray[getRandomIndex(10)]);
          else if (choice === 3) changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]);
        } 
        else if (!lowercase && uppercase && numbers && specialCharacters) {
          let choice = getRandomInt(3);        
          if (choice === 0) changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);
          else if (choice === 1) changePassword((password) => password + numbersArray[getRandomIndex(10)]);
          else if (choice === 2) changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]);
        } 
        else if (lowercase && !uppercase && numbers && specialCharacters) {
          let choice = getRandomInt(3);        
          if (choice === 0) changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);
          else if (choice === 1) changePassword((password) => password + numbersArray[getRandomIndex(10)]);
          else if (choice === 2) changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]);
        } 
        else if (lowercase && uppercase && !numbers && specialCharacters) {
          let choice = getRandomInt(3);        
          if (choice === 0) changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);
          else if (choice === 1) changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);
          else if (choice === 2) changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]); 
        } 
        else if (lowercase && uppercase && numbers && !specialCharacters) {
          let choice = getRandomInt(3);
          if (choice === 0) changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);
          else if (choice === 1) changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);
          else if (choice === 2) changePassword((password) => password + numbersArray[getRandomIndex(10)]);
        } 
        else if (!lowercase && !uppercase && numbers && specialCharacters) {
          let choice = getRandomInt(2);
          if (choice === 0) changePassword((password) => password + numbersArray[getRandomIndex(10)]);
          else if (choice === 1) changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]); 
        } 
        else if (lowercase && uppercase && !numbers && !specialCharacters) {
          let choice = getRandomInt(2);        
          if (choice === 0) changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);
          else if (choice === 1) changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);
        } 
        else if (lowercase && !uppercase && numbers && !specialCharacters) {
          let choice = getRandomInt(2);
          if (choice === 0) changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);        
          else if (choice === 1) changePassword((password) => password + numbersArray[getRandomIndex(10)]);        
        } 
        else if (!lowercase && uppercase && !numbers && specialCharacters) {
          let choice = getRandomInt(2);        
          if (choice === 0) changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);        
          else if (choice === 1) changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]);
        } 
        else if (lowercase && !uppercase && !numbers && specialCharacters) {
          let choice = getRandomInt(2);
          if (choice === 0) changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);        
          else if (choice === 1) changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]);
        }
        else if (!lowercase && uppercase && numbers && !specialCharacters) {
          let choice = getRandomInt(2);
          if (choice === 0) changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);
          else if (choice === 1) changePassword((password) => password + numbersArray[getRandomIndex(10)]);        
        } 
        else if (lowercase && !uppercase && !numbers && !specialCharacters) {
          changePassword((password) => password + lowercaseLetters[getRandomIndex(26)]);
        } else if (!lowercase && uppercase && !numbers && !specialCharacters) {
          changePassword((password) => password + uppercaseLetters[getRandomIndex(26)]);
        } else if (!lowercase && !uppercase && numbers && !specialCharacters) {
          changePassword((password) => password + numbersArray[getRandomIndex(10)]);
        } else if (!lowercase && !uppercase && !numbers && specialCharacters) {
          changePassword((password) => password + specialCharactersArray[getRandomIndex(8)]);
        }
      }
    }
  }

  return (
    <div className='container'>
        <h1 className='title'>Generate Your Password!</h1>
        <div className='lengthSection'>
          <p className='lengthHeader'>Enter the length for your password</p>
          <input className='length' type="number" min="8" max="40" onChange={handleLengthWarning} placeholder="8 - 40"/>
          <p className='lengthError'>{lengthStatus}</p>
        </div>
        <div className='buttons'>
          <div><button className={lowercase ? 'Clicked': 'Not-Clicked'} onClick={() => changeLC(!lowercase)}>Lowercase Letters?</button></div>
          <div><button className={uppercase ? 'Clicked': 'Not-Clicked'} onClick={() => changeUC(!uppercase)}>Uppercase Letters?</button></div>
          <div><button className={numbers ? 'Clicked': 'Not-Clicked'} onClick={() => changeNum(!numbers)}>Numbers?</button></div>
          <div><button className={specialCharacters ? 'Clicked': 'Not-Clicked'} onClick={() => changeSC(!specialCharacters)}>Special Characters?</button></div>
        </div>
        <div className='output'>
          <input className='outputField' type="text" value={password} placeholder='Your password here'/>        
          <button className='generateButton' onClick={handlePassword}>Generate</button>        
        </div>
    </div>
    )
}

export default App;
