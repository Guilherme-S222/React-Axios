import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import './EditPost.css';

const EditPost = () => {

    const navigate = useNavigate()

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const { id } = useParams();

    const getPost = async () => {
        try {
            const response = await blogFetch.get(`/posts/${id}`); // Usar aspas invertidas
            const data = response.data
            setTitle(data.title);
            setBody(data.body);
            
        } catch (error) {
            console.log(error);
        }
    };

    const editPost = async(event) => {
        event.preventDefault()

        const post = {title, body, userId: 1}

        await blogFetch.put(`/posts/${id}`, {
            body: post,
        });

        navigate("/admin")

    }

    useEffect(() => {
        getPost();
    }, [])

  return (

    <div className="edit-post">
        <h2>Editando: {title}</h2>
        <form onSubmit={(event) => editPost(event)}>
            <div className="form-control">
                <label htmlFor="title">Título:</label>
                    <input 
                    type="text" 
                    name='title' 
                    id="title" 
                    placeholder="Digite o título"
                    onChange={(event) => setTitle(event.target.value)}
                    value={title || ""}
                    />
            </div>
            <div className="form-control">
                <label htmlFor="body">Conteúdo:</label>
                    <textarea 
                    name="body" 
                    id="body"
                    placeholder='Digite o conteúdo'
                    onChange={(event) => setBody(event.target.value)}
                    value={body || ""}
                ></textarea>
            </div>
            <input type="submit" value="Editar Post" className='btn' />
        </form>
    </div>

  )
}

export default EditPost