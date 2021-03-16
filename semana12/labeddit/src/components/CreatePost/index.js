import React from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import {baseUrl} from '../../axios/axiosConfig';
import {Container, Title, Input, Button} from './styled'

function CreatePost (){

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
             console.log(res.data)
            }).catch((err) => {
                alert(err.response.data.message)
            })
    }

    return(
        <Container>


            <Title>Log In </Title>
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
                <Button type={'submit'}>Create</Button>

            </form>

            

        </Container>
    )
}
export default CreatePost