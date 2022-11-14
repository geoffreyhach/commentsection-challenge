import React from "react";
import CommentItem from "./CommentItem";
import Replies from "./Replies";

function Comment({ data, setComments }) {
    return (
        <>
            <CommentItem data={data} setComments={setComments} />

            {data.replies.length ? <Replies data={data.replies} /> : ""}
        </>
    );
}

export default Comment;
