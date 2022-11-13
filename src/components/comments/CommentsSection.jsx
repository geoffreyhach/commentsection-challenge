import React from "react";
import { Stack } from "@mui/material";
import Comment from "./Comment";
import Data from "../../data/data.json";

function CommentsSection(props) {
    console.log(Data);
    return (
        <Stack
            spacing={2}
            sx={{
                backgroundColor: "hsl(228, 33%, 97%)",
                padding: "2rem",
                maxWidth: "800px",
            }}
        >
            {Data.comments.map((comment) => {
                return <Comment key={comment.id} data={comment} />;
            })}
        </Stack>
    );
}

export default CommentsSection;
