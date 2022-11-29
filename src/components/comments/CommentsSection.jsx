import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Comment from "./Comment";
import Data from "../../data/data.json";
import AddComment from "../AddComment";

function CommentsSection() {
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUSer] = useState({});
    const [isReplying, setIsReplying] = useState(false);

    useEffect(() => {
        setComments(
            JSON.parse(window.localStorage.getItem("COMMENTS")) || Data.comments
        );

        setCurrentUSer({
            username: Data.currentUser.username,
            image: {
                png: Data.currentUser.image.png,
                webp: Data.currentUser.image.webp,
            },
        });
    }, []);

    useEffect(() => {
        if (comments.length !== 0)
            window.localStorage.setItem("COMMENTS", JSON.stringify(comments));
    }, [comments]);

    return (
        <Stack
            spacing={2}
            sx={{
                backgroundColor: "hsl(228, 33%, 97%)",
                padding: "2rem",
                maxWidth: "800px",
            }}
        >
            {comments.map((comment) => {
                return (
                    <Comment
                        key={comment.id}
                        data={comment}
                        user={currentUser}
                        comments={comments}
                        setComments={setComments}
                        isReplying={isReplying}
                        setIsReplying={setIsReplying}
                    />
                );
            })}
            <AddComment
                user={currentUser}
                comments={comments}
                setComments={setComments}
            />
        </Stack>
    );
}

export default CommentsSection;
