import React from 'react' 
import SearchBooks from '../SearchBooks/SearchBooks'

export default function ƒormatUrl(props) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=`

    const params = {
        q : props.searchTerm,
        printType : props.printType,
        filter : props.filter, 
        key : 'AIzaSyCYrHpzgwcVwguxBvjxw4swmRIcQIp98PE',
    }

    const queryItems = Object.keys(params).map(key => 
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        const newUrl = url + queryItems.join('&');

        <SearchBooks newUrl={newUrl} />
        
        

    
}

//endpoint
//https://www.googleapis.com/books/v1/volumes?q=search+terms  

//print type
//https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=yourAPIKey 
//all, books, magazine

//book type
//https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey 
//partial, full, free-ebooks, paid-ebooks, ebooks

//AIzaSyCYrHpzgwcVwguxBvjxw4swmRIcQIp98PE 

