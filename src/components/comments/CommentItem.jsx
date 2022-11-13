import React from "react";
import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import ReplyIcon from "@mui/icons-material/Reply";

function CommentItem({ data, reply }) {
    return (
        <Card
            display="flex"
            gap="2rem"
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
                    <ReplyIcon color="primary" />
                    <Button>Reply</Button>
                </Box>
            </Box>
            <Typography>{data.content}</Typography>
        </Card>
    );
}

export default CommentItem;
