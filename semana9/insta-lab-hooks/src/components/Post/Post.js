import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {
  const [valorCurtida, setValorCurtida] = useState(false)
  const [numeroCurtidas, setNumeroCurtida] = useState(0)
  const [valorComentario, setValorComentario] = useState(false)
  const [numeroComentarios, setNumeroComentario] = useState(0)
  const [comentarios, setComentarios] = useState([])


  const onClickCurtida = () => {

    if (valorCurtida) {
      setValorCurtida(!valorCurtida)
      setNumeroCurtida(numeroCurtidas - 1)

    } else {
      setValorCurtida(!valorCurtida)
      setNumeroCurtida(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    setValorComentario(!valorComentario)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...valorComentario, comentario]
    setComentarios(listaDeComentarios);
    setValorComentario(false)
    setNumeroComentario(numeroComentarios + 1);
    

  }

  const iconeCurtida = () => {
    setValorCurtida(valorCurtida ? (iconeCoracaoPreto) : (iconeCoracaoBranco))
  }
  const caixaDeComentario = () => {
    setValorComentario(valorComentario)
      return(
        <SecaoComentario enviarComentario={enviarComentario}/>
      )
    
        
  }

  {comentarios.map((comentario) => {

      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>

      )
    })
  }
  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post