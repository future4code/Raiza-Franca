import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

  state = {
    pessoas: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Joao',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nomeUsuario: 'amanda',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ],

    nomeUsuario='',
    fotoUsuario='',
    fotoPost=''
  }


  render() {
    const listaDeComponents = this.state.pessoas.map((pessoa, index) => {
      return (
        <div className={'app-container'} key={index}>
          <Post >
            {pessoa.nomeUsuario}
            {pessoa.fotoUsuario}
            {pessoa.fotoPost}

          </Post>
        </div>


      );
    });
    return (
      <div>
        {listaDeComponents}
      </div>
    )

  }
}

export default App;