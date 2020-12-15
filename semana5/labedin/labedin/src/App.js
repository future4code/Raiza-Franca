import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ProfilePicture from './img/raiza.jpg';
import PictureContax from './img/contax.jpg';
import PictureKenya from './img/kenya.jpg'
import PictureEmail from './img/enviar.png'
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEndereco from './img/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ProfilePicture}  nome="Raíza" 
          descricao="Olá, Meu nome é Raíza. Sou aluna da Labena na Turma Epps, estudando React no curso FullStack Developer"/>
      <div>
        <h2>E-mail</h2>
      <CardPequeno
      imagem ={PictureEmail}
        email='raizale@hotmail.com' 
        />
      </div>
      <div>
        <h2>Endereço</h2>
      <CardPequeno
        imagem ={ImagemEndereco} 
        endereco='Belo Horizonte - Minas Gerais'/>
      </div>
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={PictureContax}
          nome="Contax TNL" 
          descricao="Ajudando clientes a resolver seus problemas" 
        />
        
        <CardGrande 
          imagem={PictureKenya}
          nome="Kenya Transportes" 
          descricao="Entregando soluções em transporte" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
