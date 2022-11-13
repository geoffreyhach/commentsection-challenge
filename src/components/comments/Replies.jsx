import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import CommentItem from "./CommentItem";

function Replies({ data }) {
    return (
        <Box display="flex" justifyContent="space-evenly">
            <Box
                display="flex"
                justifyContent="center"
                sx={{ minWidth: "10%" }}
            >
                <Divider orientation="vertical" />
            </Box>
            <Stack spacing={2} sx={{ maxWidth: "90%", margin: "auto" }}>
                {data.map((reply) => (
                    <CommentItem data={reply} />
                ))}
            </Stack>
        </Box>
    );
}

export default Replies;
