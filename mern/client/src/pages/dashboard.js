import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from 'react'
import Emojis from '../components/emojis.js'
import Header from '../components/Header.js'
import Comment from '../components/comment.js'
const Dashboard = () => {
    if (!localStorage.getItem('user')){
        window.location.href = '/';
    }
    const user = JSON.parse(localStorage.getItem('user'));
    const decodedToken = jwtDecode(user.token)
    console.log(decodedToken.isAdmin)
    if(!decodedToken.isAdmin){
        window.location.href = '/';
    }
    console.log(user.username)
    const [message, setMessage] = useState(null)
    const handleSubmit = async() => {
        const ret = await fetch('/api/phone/push?message=' + message);
        console.log(ret)
    }
    const [ratings, setRatings] = useState(null);
    const fetchRatings = async () => {
        const response = await fetch('/api/ratings/getAllRatings');
        const json = await response.json();
        
        if (response.ok) {
          setRatings(json);
        }
      };
    
      useEffect(() => {
        fetchRatings(); // Fetch ratings data initially
      }, []);
      console.log(ratings)
      const [comments, setComments] = useState(null);
      const fetchComments = async () => {
          const response = await fetch('/api/comments/getComments');
          const json = await response.json();
          
          if (response.ok) {
            setComments(json);
          }
        };
      
        useEffect(() => {
          fetchComments(); // Fetch ratings data initially
        }, []);
        console.log(comments)
    return (
        <div>
        <br></br>
        <h3>Hi {user.username}! Welcome to the Dashboard.</h3>
        <form className = "sendBlast" onSubmit={handleSubmit}>
            <h4>Send SMS to Users!</h4>
            <label>Message:</label>
            <input type = "text" onChange={(e) => setMessage(e.target.value)}/>
            
            <button>Submit</button>
        </form>
        <br></br>
        <h3>SMS Responses:</h3>
        {comments && comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
        ))}
        <Emojis ratings={ratings} />        
        </div>
    )
}

export default Dashboard
