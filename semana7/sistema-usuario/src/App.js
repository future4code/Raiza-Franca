import React from "react";
import RegisterUsers from './Pages/RegisterUsers'
import UsersList from './Pages/UsersList'
import styled from 'styled-components'

const Container = styled.div`

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;

`

export default class App extends React.Component {
  state = {
    page: true
  }
  onChangePage = () => {
    this.setState({ page: !this.state.page })
  };
  render() {

    return (
      <div>
        <Container>
          <h1>LabeUsers</h1>
          {this.state.page ? <RegisterUsers /> : <UsersList />}


          <button onClick={this.onChangePage}> Ir para outra página </button>
        </Container>
      </div>
    )
  }
}
