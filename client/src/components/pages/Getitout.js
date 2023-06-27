import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../App.css';
import { PostProvider } from '../../contexts/PostContext';
import { Post } from '../Post';
import { PostList } from '../PostLists';
import { TypeAnimation } from 'react-type-animation';

export default function Getitout() {
    return (
        <div id='getitout' className='post_list'>
            <TypeAnimation
                sequence={[
                    'get it out', 6000, // type, then waits 1s
                    "i can't d", 1000,
                    'How long does i', 1000,
                    "i'm sa", 1000,
                    () => {
                    console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                    }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{    fontSize: '5rem',
                            play: 'inline-block',
                            textAlign: 'center',
                            color: '#d6c9c9',
                            padding: '1.2rem',
                            textShadow: '0px -4px 10px rgba(239, 225, 225, 0.5)',
                        }}
            />
            {/* <div className='getitout_title'>get it out</div> */}
            <div className='posts_container'>
                <Routes>
                    <Route path='/' element={<PostList />} />
                    <Route path='/posts/:id' 
                        element={
                            <PostProvider>
                                <Post />
                            </PostProvider>
                        } />
                </Routes>
            </div>
        </div>
    )
}