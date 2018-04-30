import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state={parentSearchValue: ""}
  }

  handleSearch=(searchValue)=>{
    this.setState({parentSearchValue:  searchValue})
  }

  render(){
    return(
      <div>
        Hi from GifListContainer
        <GifSearch handleSearch={this.handleSearch}/>
        {this.state.parentSearchValue}
      </div>
    )//return
  }//render
}//component
export default GifListContainer

// <GifListContainer />
// responsible for fetching the data from the giphy api,
//   storing the first 3 gifs from the response in it's component state, and
//   passing that data down to it's child the <GifList> component as a prop.
// also render a <GifSearch /> component that
//   renders the form.
//   <GifListContainer /> should pass down a submit handler function to <GifSearch /> as a prop.
