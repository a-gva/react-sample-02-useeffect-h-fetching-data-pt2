import { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const DATA_URL = 'https://jsonplaceholder.typicode.com/posts/'

    const [post, setPost] = useState([])
    const [id, setId] = useState(1)

    const updateId = e => setId(e.target.value)

    const getData = () => {
        axios.get(`${DATA_URL}${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => { console.log(err) })
    }

    useEffect(getData, [id])

    return (
        <div>
            <input type="text" value={id} onChange={updateId} />
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
    { }
}
export default DataFetching