import {GetKey} from './GetKey'
import {useEffect, useState, useReducer} from 'react'

export type responseType = {
  category: string | null,
  data: Movie[] | null
}

export type Movie = {
  id: number;
  title: string;
  rating: number;
  poster_path: string;
};


export const MakeRequest = () => {
  const [canceled, setCanceled] = useState<boolean>(false)
  const [response, setResponse] = useState<responseType>({category: "", data: {}} as responseType)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      "Authorization": `Bearer ${GetKey()}`
    }
  };

  const checkIfCanceled = () => {
    if (canceled) {
      return
    }
  }

  type Action = {
    type: string
  }

  const dispatchCategory = (state:URLType, action:Action) => {
    switch (action.type) {

      case "POPULAR":
        return {category: action.type, url: "https://api.themoviedb.org/3/movie/top_rated"}

      default:
        return state;
    }
  }

  const initialValue = {
    category: "",
    url: ""
  }

  type URLType = {
    category: string;
    url: string
  }

  const [url, setURL] = useReducer(dispatchCategory, initialValue)

  // const convertResponse = () => {

  // }

  const makeRequest = async () => {
    checkIfCanceled()

    if(url.category === "") return;

    try {
      const response = await fetch(url.url, options)
      const json = await response.json()

      const moviesData = json.results;

      const movies: Movie[] = moviesData.map((movie: any) => {
        return {
          id: movie.id,
          title: movie.title,
          rating: movie.rating,
          poster_path: movie.poster_path,
        };
      });

      setResponse({category: url.category, data: movies})
    } catch (e) {
      console.log(e)
    }
  }




  useEffect(() => {
    makeRequest()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])


  useEffect(() => {
    return () => setCanceled(true)
  }, [])

  return {
    response,
    setURL,
    makeRequest

  }
}
