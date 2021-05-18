import React, { Component } from 'react';
import './App.css';
import FormatUrl from './FormatUrl/FormatUrl'

class App extends Component{
  state = {
    searchTerm: '',
    filter: '',
    printType: '',

  }
render(){
  return (
  <>
    <div className="App">
      <h1>Google Book Search</h1>
      <div>

        <form onSubmit={this.handleChange}>
          <label>
            Search:
  <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          <button type="submit">Search</button>
        </form>
        <form onChange={this.handleChange}>
          <label>
            Print Type:
  <select value={this.state.printType} onChange={this.handleChange}>
              <option value="all">all</option>
              <option value="books">books</option>
              <option value="magazines">magazines</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <form onChange={this.handleChange}>
          <label>
            Book Type:
  <select value={this.state.filter} onChange={this.handleChange}>
              <option value="partial">partial</option>
              <option value="full">full</option>
              <option value="free-ebooks">free-ebooks</option>
              <option value="paid-ebooks">paid-ebooks</option>
              <option value="ebooks">ebooks</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
      <FormatUrl
        searchTerm={this.state.searchTerm}
        filter={this.state.filter}
        printType={this.state.printType}
      />
      </div>
    </div>
</>
  );}
}

export default App;

