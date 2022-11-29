import React, { useEffect, useRef, useState } from "react";
import { Avatar, Box, Button, TextField } from "@mui/material";

function AddComment({
    user,
    comments,
    setComments,
    value = "",
    isReplying,
    setIsReplying,
}) {
    const [comment, setComment] = useState({
        id: 1,
        content: "",
        createdAt: "",
        score: 0,
        user: user,

        replies: [],
    });

    useEffect(() => {
        setComment((prevState) => ({ ...prevState, user: user }));
    }, [user]);

    const ref = useRef();

    useEffect(() => {
        ref.current.value = `${value} `;
        ref.current.focus();
        setComment((prevState) => ({ ...prevState, content: value }));
    }, [value]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isReplying) postComment();
        if (isReplying) postReply(isReplying.id);
        e.target.reset();
    };

    const postComment = () => {
        setComments([...comments, comment]);
    };

    const postReply = (id) => {
        setComments([
            ...comments.map((item) => {
                if (item.id === id) {
                    item.replies.push(comment);
                    return item;
                } else return item;
            }),
        ]);
        setIsReplying(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" alignItems="start" gap="1rem">
                {user.image ? (
                    <Avatar alt={user.username} src={user.image.png} />
                ) : (
                    ""
                )}
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    inputRef={ref}
                    label="Your comment..."
                    id="commentinput"
                    data-cy="comment-input"
                    onChange={(e) =>
                        setComment((prevState) => ({
                            ...prevState,
                            content: e.target.value,
                            createdAt: "à l'instant",
                            id: new Date().valueOf(),
                        }))
                    }
                />
                <Button
                    type="submit"
                    variant="contained"
                    data-cy="post-comment-btn"
                >
                    {isReplying ? "Reply" : "Send"}
                </Button>
            </Box>
        </form>
    );
}

export default AddComment;
