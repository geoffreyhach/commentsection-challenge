import React, { useState } from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
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
    const [isHovered, setIsHovered] = useState(false);
    const handleDelete = () => {
        if (isReply) {
            setComments([
                ...comments.map((comment) => {
                    if (comment.id === originalId) {
                        comment.replies = comment.replies.filter(
                            (reply) => reply.id !== data.id
                        );
                        return comment;
                    }
                    return comment;
                }),
            ]);
        }

        setComments(comments.filter((comment) => comment.id !== data.id));
    };

    const handleReply = () => {
        if (isReply) {
            setIsReplying({
                replyingto: `@${data.user.username}`,
                replyingToId: data.id,
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
                data-cy="comment-item"
                gap="2rem"
                sx={{
                    padding: "1rem 1rem 1rem 0.5rem",
                    backgroundColor: "hsl(0, 0%, 100%)",
                    display: "flex",
                    flexDirection: "row",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
                        <Box
                            display="flex"
                            alignItems="center"
                            gap=".5rem"
                            sx={{ minHeight: "2.5rem" }}
                        >
                            <Avatar
                                alt={data.user.username}
                                src={data.user.image.png}
                                sx={{ width: 32, height: 32 }}
                            />
                            <Typography
                                sx={{ fontWeight: "bold" }}
                                data-cy="comment-username"
                            >
                                {data.user.username}
                            </Typography>
                            {user.username === data.user.username && (
                                <Typography
                                    variant="button"
                                    display="block"
                                    sx={{
                                        backgroundColor: "#1565c0",
                                        color: "white",
                                        padding: "0rem .3rem",
                                        textTransform: "lowercase",
                                    }}
                                >
                                    you
                                </Typography>
                            )}
                            <Typography noWrap={true} sx={{ opacity: ".6" }}>
                                {data.createdAt}
                            </Typography>
                        </Box>
                        {isHovered && (
                            <Box display="flex" alignItems="center">
                                {user.username === data.user.username && (
                                    <Button
                                        onClick={handleDelete}
                                        color="error"
                                    >
                                        <DeleteIcon
                                            color="danger"
                                            fontSize="small"
                                            sx={{ marginRight: ".5rem" }}
                                        />
                                        DELETE
                                    </Button>
                                )}
                                <Button
                                    onClick={handleReply}
                                    data-cy="reply-btn"
                                >
                                    <ReplyIcon color="primary" /> Reply
                                </Button>
                            </Box>
                        )}
                    </Box>
                    <Typography>{data.content}</Typography>
                </Box>
            </Card>
            {!isReplying.replyingToId && isReplying.id === data.id ? (
                <AddComment
                    user={user}
                    comments={comments}
                    setComments={setComments}
                    value={isReplying.replyingto}
                    isReplying={isReplying}
                    setIsReplying={setIsReplying}
                />
            ) : null}

            {isReplying.replyingToId && isReplying.replyingToId === data.id ? (
                <AddComment
                    user={user}
                    comments={comments}
                    setComments={setComments}
                    value={isReplying.replyingto}
                    isReplying={isReplying}
                    setIsReplying={setIsReplying}
                />
            ) : null}
        </>
    );
}

export default CommentItem;
