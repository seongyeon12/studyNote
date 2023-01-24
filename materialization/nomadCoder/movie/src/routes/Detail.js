import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

function Detail() {
  const {id} = useParams()
  const alist = []

  useEffect(() => {
		const fetchData = async() => {
          const res = await fetch(`http://52.194.161.226:8080/`);
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => alist(res));
    });

  const getMovie = async () => {
    const json = await(
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json()
    console.log(json)
  }

    console.log(alist)
  useEffect(() => {
    getMovie()
  }, [])
  return <h1>Datail</h1>
}

export default Detail