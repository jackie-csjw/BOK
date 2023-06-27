import React, { useState, useEffect, useCallback, useRef} from 'react';
import { PostList } from '../PostLists';
import '../../App.css';
import { Route, Routes } from 'react-router-dom';

export default function Services() { 
    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<PostList />} />
                <Route path="/posts/:id" element={<h1>Post</h1>} />
            </Routes>
        </div>
        // <PostList />
    )
}