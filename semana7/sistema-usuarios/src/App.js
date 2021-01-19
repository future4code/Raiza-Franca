import React from 'react'
import axios from 'axios'


class App extends React.Component {
  state = {
    List: [],
    inputValueName: '',
    inputValueEmail: ''
  }
  componentDidMount = () => {
    this.GetList();
  };
  GetList = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: 'raiza-leal-epps'
      }
    }).then((resposta) => {
      
      console.log(resposta)
    }).catch((err) => {
      console.log(err.message)
    })

  };
  createList = () => {
    const body = {
      name: this.inputValueName,
      email: this.inputValueEmail
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: 'raiza-leal-epps'
      }
    }).then((resposta) => {
      this.setState({ List: resposta.data })
      this.setState({ List: "" });
      this.GetList();
    }).catch((err) => {
      console.log(err.message);
    })
  }
  onChangeListName = (event) => {
    this.setState({ inputValueName: event.target.value });
  };
  onChangeListEmail = (event) => {
    this.setState({ inputValueEmail: event.target.value });
  };
  render() {
    const renderizaLista = this.state.List.map((lista) => {
      return <p>{lista.name}</p>
    })
    return <div>
      <div>
        <p>Nome:</p>
        <input 
        value={this.state.inputValueName}
        onChange={this.onChangeListName}
        />
        <p>Email:</p>
        <input 
        value={this.state.inputValueEmail}
        onChange={this.onChangeListEmail}
        />
        <button onClick={this.createList}>Salvar</button>
      </div>

      <button>Ir para página de lista</button>
      {renderizaLista}
    </div>
  }
}

export default App;
