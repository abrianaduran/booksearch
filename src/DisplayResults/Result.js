
export default function Result(props) {

    return (
    `<div>
    <h2>${props.responseJson.volumeInfo.title}</h2>
    <h3>${props.responseJson.volumeInfo.authors}</h3>
    <h3>Price:${props.responseJson.saleInfo.saleability}</h3>
    <p>${props.responseJson.volumeInfo.description}<p>
    ${props.responseJson.volumeInfo.imageLinks.thumbnail}`)

}
