import React, {Component} from 'react';

class Animal extends React.Component{
constructor(props){
  super(props);
  this.state={
    petList:[],
    petName:'',
    petBreed:'',
    petAge:0
  }
}
  render(){
    return(
      <div>
        <h4>My Pet Store List</h4>
      </div>
    )
  }
}

export default Animal