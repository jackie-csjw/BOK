import { usePost } from "../contexts/PostContext"
import { useAsyncFn } from "../hooks/useAsync"
import { createComment } from "../services/comments"
import { CommentForm } from "./CommentForm"
import { CommentList } from "./CommentList"
import '../App.css';

export function Post() {
    const { post, rootComments, createLocalComment } = usePost()
    const { loading, error, execute: createCommentFn } = useAsyncFn(createComment)

    function onCommentCreate(message) {
        return createCommentFn({ postId: post.id, message}).then(
            createLocalComment
        )
    }

    return (
        <>
        <div className="post">
            <div className="post_title2">{post.title}</div>
            <div className="post_body">{post.body}</div>
            <div className="comments-title">Comments</div>
            <section>
                <CommentForm loading={loading} error={error} onSubmit={onCommentCreate} />
                {rootComments != null && rootComments.length > 0 && (
                    <div className="comments_container">
                        <CommentList comments={rootComments} />
                    </div>
                )}
            </section>
        </div>
        </>
    )
}