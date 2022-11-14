import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, TextField } from "@mui/material";

function AddComment({ user, comments, setComments }) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setComment((prevState) => ({ ...prevState, id: new Date() }));
        setComments([...comments, comment]);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box display="flex" alignItems="start" gap="1rem">
                {user.image ? <Avatar src={user.image.png} /> : ""}
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Your comment..."
                    id="commentinput"
                    onChange={(e) =>
                        setComment((prevState) => ({
                            ...prevState,
                            content: e.target.value,
                        }))
                    }
                />
                <Button type="submit" variant="contained">
                    Envoyer
                </Button>
            </Box>
        </form>
    );
}

export default AddComment;
