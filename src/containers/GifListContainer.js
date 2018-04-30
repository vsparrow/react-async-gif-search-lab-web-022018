import React, {Component} from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{
  constructor(){
    super()
    this.state={ gifarray: []}
  }

  // componentDidUpdate(prevProps, prevState, snapshot){
  callAPI(searchValue){
    // if(this.state.parentSearchValue !== ""){
      let url = "http://api.giphy.com/v1/gifs/search?q="
      // let query = this.state.parentSearchValue
      let query = searchValue
      let key = "&api_key=dc6zaTOxFJmzC"
      fetch(url+query+key)
      .then(res => res.json())
      .then(json => this.getJSON(json))
      // .then(json => console.log(json))
    // }
  }//componentDidUpdate

  getJSON=(json)=>{
    console.log(json);
    console.log(json.data[0].images.downsized_small.mp4);
    //create array of 3 gifs
    // console.log(json.data);
    // let gifarray = json.data.map(gif => gif.url)
    // let gifarray = json.data.map(gif => gif.images.downsized_small.mp4)
    let gifarray = json.data.map(gif => gif.images.fixed_width_small.url)
    // console.log(gifarray.slice(0,3));
    console.log(gifarray);
    let slice = gifarray.slice(0,3)
    let x = slice.map(gif => <li><img src={gif} /></li>)
    console.log("logging li");
    console.log(x);
    // this.setState({gifarray: gifarray.slice(0,3)});
    this.setState({gifarray: x});

  }//getJSON

  handleSearch=(searchValue)=>{
    // this.setState({parentSearchValue:  searchValue})
    this.callAPI(searchValue)
  }//handleSearch

  // show = ()=>{
  //   let x =this.props.gifs.map(gif => <li><img src={gif} /></li>)
  //   console.log(x);
  // }
  //

  render(){
    return(
      <div>
        Hi from GifListContainer
        <GifSearch handleSearch={this.handleSearch}/>

        <br/>
        <GifList gifs={this.state.gifarray}/>
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
