import { Box, Divider, Stack } from "@mui/material";
import React from "react";
import CommentItem from "./CommentItem";

function Replies({
    data,
    isReplying,
    setIsReplying,
    comments,
    setComments,
    user,
    originalId,
}) {
    return (
        <Box display="flex" justifyContent="space-evenly">
            <Box
                display="flex"
                justifyContent="center"
                sx={{ minWidth: "10%" }}
            >
                <Divider orientation="vertical" />
            </Box>
            <Stack
                data-cy="replies"
                spacing={2}
                sx={{ maxWidth: "90%", minWidth: "90%", margin: "auto" }}
            >
                {data.map((reply) => (
                    <CommentItem
                        key={reply.id}
                        data={reply}
                        isReplying={isReplying}
                        setIsReplying={setIsReplying}
                        setComments={setComments}
                        comments={comments}
                        user={user}
                        originalId={originalId}
                        isReply
                    />
                ))}
            </Stack>
        </Box>
    );
}

export default Replies;
