import { Comment } from "./Comment";
import '../App.css';

export function CommentList({ comments }) {
    return comments.map(comment => (
        <span key={comment.id} className="comment-stack">
            <Comment {...comment} />
        </span>
    ))
}