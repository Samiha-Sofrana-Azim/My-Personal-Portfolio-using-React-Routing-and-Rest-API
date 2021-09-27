import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import "./style.css";

const initialState = {
	loading: true,
	error: '',
	post: {}
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: 'Something went wrong!'
			}
		default:
			return state
	}
}

function FeedBack() {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/1`)
		
			.then(response => {
				dispatch({ type: 'FETCH_SUCCESS', payload: response.data })
			})
			.catch(error => {
				dispatch({ type: 'FETCH_ERROR' })
			})
		}, [])
	return (
		 <div><h1>Feedback</h1>
		 
  	     <div>{state.loading ? 'Loading' : state.post.userId}</div>	
		 <div>{state.loading ? 'Loading' : state.post.id}</div>
		 <div>{state.loading ? 'Loading' : state.post.title}</div>
		 <div>{state.loading ? 'Loading' : state.post.body}</div> 
		 {state.error ? state.error : null} 
		 </div>
	)
 }

export default FeedBack;