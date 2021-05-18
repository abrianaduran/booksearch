import React from 'react' 
import DisplayResults from '../DisplayResults/DisplayResults'
export default function searchBooks(props) {
    const newUrl = props.newUrl;

    fetch(newUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.text);
    })
    .then(responseJson => <DisplayResults responseJson={responseJson}/>)
    .catch(err => {
      return(`Something went wrong: ${err.message}`);
    });
   
}
