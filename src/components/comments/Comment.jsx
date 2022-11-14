import React from "react";
import CommentItem from "./CommentItem";
import Replies from "./Replies";

function Comment({
    data,
    comments,
    setComments,
    isReplying,
    setIsReplying,
    user,
}) {
    return (
        <>
            <CommentItem
                data={data}
                setComments={setComments}
                comments={comments}
                user={user}
                isReplying={isReplying}
                setIsReplying={setIsReplying}
            />

            {data.replies.length ? (
                <Replies
                    data={data.replies}
                    isReplying={isReplying}
                    setIsReplying={setIsReplying}
                    setComments={setComments}
                    comments={comments}
                    user={user}
                    originalId={data.id}
                />
            ) : (
                ""
            )}
        </>
    );
}

export default Comment;
