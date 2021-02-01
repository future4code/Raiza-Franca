import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
margin:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
background-color:lightcoral;
padding-bottom:55px;
`
const Button = styled.button`
width:300px;
height:300px;
border-radius:150px;
outline-style: none;
background-color:lightgoldenrodyellow;
font-size:24px;
`
const Title = styled.h1`
font-style:italic;
`
const Answer = styled.p`
font-size:24px;
text-transform:capitalize;
`


export default class App extends React.Component {
  state = {
    activity: '',

  }
  getActivity = () => {
    axios.get('http://www.boredapi.com/api/activity')
      .then((res) => {
        this.setState({ activity: res.data.activity })

      }).catch((err) => {
        console.log(err)
      })
  }
  render() {

    return (
      
        <Container>
          <Title>Ball Magic</Title>
          <h2>What should I do?</h2>
          <Button onClick={this.getActivity}>Click Here!</Button>
          <Answer>{this.state.activity}</Answer>
        </Container>
      
    )
  }
}
