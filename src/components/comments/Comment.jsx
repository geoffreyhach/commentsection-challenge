import React from "react";
import CommentItem from "./CommentItem";
import Replies from "./Replies";

function Comment({ data }) {
    console.log(data);
    return (
        <>
            <CommentItem data={data} />

            {data.replies.length ? <Replies data={data.replies} /> : ""}
        </>
    );
}

export default Comment;
