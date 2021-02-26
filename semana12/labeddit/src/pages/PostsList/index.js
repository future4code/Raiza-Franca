import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useProtectedPage } from '../../hooks/useProtectPage'
import { baseUrl } from '../../axios/axiosConfig';
import { StyledCard, Button } from './styled'
import { useHistory } from 'react-router-dom'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { goToPost } from '../../route/cordinator';
import useForm from '../../hooks/useForm';
import { Container, Input } from '../../components/CreatePost/styled';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function PostsList() {

  const history = useHistory()
  const classes = useStyles();
  const [postsList, setPostsList] = useState([])
  const [vote, setVote] = useState(1)
  const params = useParams()
  useProtectedPage();

  useEffect(() => {
    getPosts()

  }, [])


  const [form, onChange, clear] = useForm({ text: "", title: "" });


  const newPost = (event) => {

    event.preventDefault();
    clear()


    axios.post(`${baseUrl}/posts`, form, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {

      }).catch((err) => {
        alert(err.response.data.message)
      })
  }

  const getPosts = () => {

    axios.get(`${baseUrl}/posts`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => {

        setPostsList(res.data.posts)
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  const newVoteUp = (postId) => {
    const body = {
      "direction": 1
    }

    axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setVote(res.data.success)
      

    }).catch((err) => {
      alert(err.response.data.message)
    })

  }
  const newVoteDown = (postId) => {
    const body = {
      "direction": -1
    }

    axios.put(`${baseUrl}/posts/${postId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setVote(res.data.success)
      

    }).catch((err) => {
      alert(err.response.data.message)
    })

  }
  const onClickVoteUp = (postId) => {
    newVoteUp(postId)


  }
  const onClickVoteDown = (postId) => {
    newVoteDown(postId)


  }
  const onClickCard = (postId) => {

    goToPost(history, postId)
  }


  return (


    <StyledCard>
      <Container>

        <form onSubmit={newPost}>
          <Input
            name='title'
            value={form.title}
            onChange={onChange}
            type={'text'}
            placeholder={'title'}
            required>
          </Input>

          <Input
            name='text'
            value={form.text}
            onChange={onChange}
            type={'text'}
            placeholder={'text'}
            required>
          </Input>

          <Button type={'submit'} onClick={newPost} size="small">Write your post</Button>


        </form>



      </Container>

      {postsList && postsList.map((postList) => {
        return (
          <Card variant="outlined"
            key={postList.id}
            className={classes.root}
          >

            <CardContent

            >

              <Typography className={classes.title} variant="h5" component="h2">
                {postList.username}
              </Typography>
              <Typography color="textSecondary" gutterBottom>
                {postList.text}
              </Typography>
              <IconButton onClick={() => onClickVoteDown(postList.id)} color="palevioletred" aria-label="add to shopping cart">
                <ArrowDownwardIcon />
                <p>{postList.votesCount}</p>
              </IconButton>

              <IconButton onClick={() => onClickVoteUp(postList.id)} color="palevioletred" aria-label="add to shopping cart">

                <ArrowUpwardIcon />
              </IconButton>


            </CardContent>

            <IconButton onClick={() => onClickCard(postList.id)} color="palevioletred" aria-label="add to shopping cart">
              <p>{postList.commentsCount}</p> <ModeCommentIcon />
            </IconButton>

          </Card>
        )
      })}
    </StyledCard>

  )

}

export default PostsList;


