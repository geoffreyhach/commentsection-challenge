import React from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";
import Score from "./Score";
import AddComment from "../AddComment";

function CommentItem({
    data,
    comments,
    setComments,
    isReplying,
    setIsReplying,
    user,
    isReply = false,
    originalId = "",
}) {
    const handleReply = () => {
        // if (isReplying.id !== data.id) {
        //     setIsReplying({
        //         replyingto: `@${data.user.username}`,
        //         id: data.id,
        //     });
        // }
        if (isReply) {
            console.log(originalId);
            setIsReplying({
                replyingto: `@${data.user.username}`,
                id: originalId,
            });
            return;
        }
        if (isReplying.id !== data.id) {
            setIsReplying({
                replyingto: `@${data.user.username}`,
                id: data.id,
            });
        } else setIsReplying(false);
    };

    return (
        <>
            <Card
                gap="2rem"
                sx={{
                    padding: "1rem 1rem 1rem 0.5rem",
                    backgroundColor: "hsl(0, 0%, 100%)",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Score
                    score={data.score}
                    id={data.id}
                    setComments={setComments}
                />

                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="2rem"
                        marginBottom="1rem"
                    >
                        <Box display="flex" alignItems="center" gap=".5rem">
                            <Avatar
                                alt={data.user.username}
                                src={data.user.image.png}
                            />
                            <Typography sx={{ fontWeight: "bold" }}>
                                {data.user.username}
                            </Typography>
                            <Typography sx={{ opacity: ".8" }}>
                                {data.createdAt}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Button onClick={handleReply}>
                                <ReplyIcon color="primary" /> Reply
                            </Button>
                        </Box>
                    </Box>
                    <Typography>{data.content}</Typography>
                </Box>
            </Card>
            {isReplying.id === data.id ? (
                <AddComment
                    user={user}
                    comments={comments}
                    setComments={setComments}
                    value={isReplying.replyingto}
                    isReplying={isReplying}
                    setIsReplying={setIsReplying}
                />
            ) : (
                ""
            )}
        </>
    );
}

export default CommentItem;
