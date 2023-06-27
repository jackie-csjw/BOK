import { useState } from "react"
import '../App.css';
import { Button } from "./Button";
import { IconBtn } from "./IconBtn";
import { FaEdit, FaHeart, FaRegHeart, FaReply, FaTrash } from "react-icons/fa"

export function CommentForm({ 
    initialValue = "", 
    loading, 
    error,
    onSubmit, 
    autoFocus=false
}){
    const [message, setMessage] = useState(initialValue)
    
    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(message).then(() => setMessage(""))
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="comment-form-row">
                <textarea
                    autoFocus
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className="message-input"
                />
                <button className="btn sub" type="submit" disabled={loading}>
                    {loading? "Loading":<><i class="fa-regular fa-sun" /><br/><span className="post_btnText">post</span></>}
                </button>
            </div>
            <div className="error-msg">{error}</div>
        </form>
    )
}