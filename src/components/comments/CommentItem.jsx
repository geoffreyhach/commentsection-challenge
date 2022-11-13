import React from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import img from "./geoff.png";

function CommentItem({ data, reply }) {
    return (
        <Card
            sx={{
                padding: "1rem",
                backgroundColor: "hsl(0, 0%, 100%)",
            }}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap="2rem"
            >
                <Box display="flex" alignItems="center" gap=".5rem">
                    <Avatar
                        alt={data.user.username}
                        src={data.user.image.png}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                        {data.user.username}
                    </Typography>
                    <Typography>{data.createdAt}</Typography>
                </Box>
                <Button>Reply</Button>
            </Box>
            <Typography>{data.content}</Typography>
        </Card>
    );
}

export default CommentItem;
