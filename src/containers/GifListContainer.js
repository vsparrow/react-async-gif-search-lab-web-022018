import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state={parentSearchValue: "", gifarray: []}
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // if(this.state.parentSearchValue !== ""){
      let url = "http://api.giphy.com/v1/gifs/search?q="
      let query = this.state.parentSearchValue
      let key = "&api_key=dc6zaTOxFJmzC"
      fetch(url+query+key)
      .then(res => res.json())
      .then(json => this.getJSON(json))
      // .then(json => console.log(json))
    // }
  }//componentDidUpdate

  getJSON=(json)=>{
    // console.log(json);
    //create array of 3 gifs
    // console.log(json.data);
    let gifarray = json.data.map(gif => gif.url)
    // console.log(gifarray.slice(0,3));
    console.log(gifarray);
    this.setState({gifarray: gifarray.slice(0,3)});

  }//getJSON

  handleSearch=(searchValue)=>{
    this.setState({parentSearchValue:  searchValue})
  }//handleSearch

  render(){
    return(
      <div>
        Hi from GifListContainer
        <GifSearch handleSearch={this.handleSearch}/>
        {this.state.parentSearchValue}
        {this.state.gifarray}
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
