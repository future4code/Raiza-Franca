import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { baseUrl } from '../../axios/axiosConfig'
import { useParams } from 'react-router-dom'
import { useProtectedPage } from '../../hooks/useProtectPage';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import useForm from '../../hooks/useForm'
import { Container, Input, StyledCard, Button } from './styled';


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

function Post() {
  useProtectedPage()
  const params = useParams()
  const classes = useStyles();
  const [form, onChange, clear] = useForm({ text: "" });
  const [postDetails, setPostDetails] = useState([])
  const [voteCommentUp, setVoteCommentUp] = useState(0)
  const [voteCommentDown, setVoteCommentDown] = useState(0)

  useEffect(() => {
    getPostDetail()

  }, [])

  const createComment = () => {
    axios.post(`${baseUrl}/posts/${params.postId}/comment`, form, {

      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      alert(err.response.data.message)
    })
  }

  const getPostDetail = () => {
    axios.get(`${baseUrl}/posts/${params.postId}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {

      setPostDetails(res.data.post.comments)
    }
    ).catch((err) => {
      alert(err.response.data.message)
    })
  }

  const newVoteCommentUp = (commentId) => {
    const body = {
      "direction": 1
    }

    axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setVoteCommentUp(res.data)
    }).catch((err) => {
      alert(err.response.data.message)
    })

  }
  const newVoteCommentDown = (commentId) => {
    const body = {
      "direction": -1
    }

    axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then((res) => {
      setVoteCommentDown(res.data)
    }).catch((err) => {
      alert(err.response.data.message)
    })

  }
  const onClickVoteCommentUp = (commentId) => {
    newVoteCommentUp(commentId, 1)


  }
  const onClickVoteCommentDown = (commentId) => {
    newVoteCommentDown(commentId, -1)

  }

  return (
    <StyledCard>
      <Container>
        <form onSubmit={createComment}>

          <Input
            name='text'
            value={form.text}
            onChange={onChange}
            type={'text'}
            placeholder={'text'}
            required>
          </Input>

          <Button margin={24} onClick={createComment} type={'submit'} size="small">Write your comment</Button>


        </form>


      </Container>

      {postDetails && postDetails.map((comments) => {
        return (
          <Card
            key={comments.id}
            className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {comments.username}
              </Typography>
              <Typography variant="h5" component="h2">
                {comments.text}
              </Typography>
            </CardContent>

            <IconButton onClick={() => onClickVoteCommentDown(comments.id, -1)} color="#palevioletred"aria-label="add to shopping cart">
              <ArrowDownwardIcon />
              <p>{comments.votesCount}</p>
            </IconButton>

            <IconButton onClick={() => onClickVoteCommentUp(comments.id, 1)} color="palevioletred" aria-label="add to shopping cart">

              <ArrowUpwardIcon />
            </IconButton>
          </Card>

        )
      })}
    </StyledCard>
  )

}

export default Post;




