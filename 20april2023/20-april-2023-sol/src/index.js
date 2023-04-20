/* import React from 'react'
import ReactDOM from 'react-dom'

function Hello(props){
  return (<h1>Hello {props.name}</h1>)
}

ReactDOM.render(
  // <h1>Hello </h1>,
<Hello name='Rashmi'/>,
document.getElementById('root')
); */

import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component{
render(){
  return (<h1>Hello {this.props.name}</h1>)
}
}

ReactDOM.render(
  <>
    <Hello name="saurav"/>
    <Hello name="anjali"/>
    <Hello name="krishau"/>
    <Hello name="rashmi"/>
  </>,
  document.getElementById('root')
);