import React from 'react' 
import Result from './Result'

export default function displayResults(props) {
    props.responseJson.map( response => {
        return <Result response={response}/>
    });
    
}
