import React, {Component} from 'react'

class GifList extends React.Component{
  // constructor(){
  //   super()
  // }
  // 
  //   <img src=
  // "https://media0.giphy.com/media/5VKbvrjxpVJCM/100w.gif?cid=e1bb72ff5ae76d416e71534273b8b2be"        />
  render(){
    return(
      <div>
        Hi from GifList
        <br/>
        <ul>

        {this.props.gifs}


        </ul>
      </div>
    )//return
  }//render
}//component
export default GifList
