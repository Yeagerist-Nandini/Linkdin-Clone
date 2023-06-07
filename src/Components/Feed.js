import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import './css/Feed.css'
import InputOption from './InputOption';
import Posts from './Posts';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp, onSnapshot,orderBy } from "firebase/firestore";
import FlipMove from 'react-flip-move'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Feed() {
    const user=useSelector(selectUser);
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

      useEffect(() => {
        const newPost = onSnapshot(collection(db, 'posts'),orderBy("timeStamp",'desc'), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({ 
               id: doc.id, 
               data: doc.data(),
            })));
        });
        return newPost
    }, []);
    
    
      const sendPost = async (e) =>{
        e.preventDefault();
        // Send data to firestore
        const docRef=await addDoc(collection(db,"posts"),{
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp()
        })
        console.log("Document written with ID: ", docRef.id);
        setInput("");
      };

    return (
        <div className='feed'>
            <div className='feed-inputContainer'>
                <div className='feed-input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>

                <div className='feed-inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />
                </div>
            </div>

            <FlipMove>
            {/* Posts */}
            {posts.map(({id,data: {name,description,message,photoUrl} })=>(
                <Posts 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
                
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed