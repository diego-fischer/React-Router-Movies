import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Switch, Route, Link } from 'react-router-dom'

import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList'

export default function App() {
  const [saved, setSaved] = useState([]) // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([])
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:3000/api/movies') // Study this endpoint with Postman
        .then((res) => {
          console.log('GET ALL MOVIES (RES.DATA):', res.data)
          setMovieList(res.data)
        })
        .catch((error) => {
          console.error('Server Error', error)
        })
    }
    getMovies()
  }, [])

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  }

  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      <Route
        path='/movies/:id'
        render={(routeProps) => <Movie {...routeProps} />}
      />
      <Route
        exact
        path='/'
        render={(routeProps) => (
          <MovieList {...routeProps} movies={movieList} />
        )}
      />
    </div>
  )
}
