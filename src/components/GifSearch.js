import React, {Component} from 'react'
// import GifSearch from '../components/GifSearch'

class GifSearch extends React.Component{
  constructor(){
    super()
    this.state = {searchValue: ""}
  }

  handleChange = (event)=>{
    console.log(event.target.value);
    this.setState({searchValue: event.target.value})
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    console.log("handleSubmit");
    console.log(event);
    //send back searchValue to parent to do something.
    //clear searchValue
  }

  render(){
    return(
      <div>
        Hi From Gif Search
        <br/>
        Enter a Search Term
        <form className="" onSubmit={this.handleSubmit}>
        <input type="text" name="" value={this.state.input} placeholder="Enter text here" onChange={this.handleChange}/>
        <input type="submit" name="" value="Find GIFs"/>
        </form>
      </div>
    )//return
  }//render
}//component
export default GifSearch
