import React, {Component} from 'react'
// import GifSearch from '../components/GifSearch'

class GifSearch extends React.Component{
  constructor(){
    super()
    this.state = {searchValue: ""}
  }

  handleChange = (event)=>{
    this.setState({searchValue: event.target.value})
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    //send back searchValue to parent to do something.
    // this.setState({callbackValue: this.state.searchValue})
    let returnValue = this.state.searchValue
    // this.props.handleSearch(returnValue)
    this.setState({searchValue: ""}, ()=>{ this.props.handleSearch(returnValue)})
    // this.props.handleSearch(this.state.searchValue)
    //clear searchValue
    // this.setState({searchValue: ""})
  }

  render(){
    return(
      <div>

        Enter a Search Term
        <form className="" onSubmit={this.handleSubmit}>
        <input type="text" name="" value={this.state.searchValue} placeholder="Enter text here" onChange={this.handleChange}/>
        <input type="submit" name="" value="Find GIFs"/>
        </form>
      </div>
    )//return
  }//render
}//component
export default GifSearch
