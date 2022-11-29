import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Score({ id, score, setComments }) {
    const [totalVotes, setTotalVotes] = useState(score);
    const upRef = useRef(null);
    const downRef = useRef();

    useEffect(() => {
        if (totalVotes < score)
            return downRef.current.classList.add("Mui-disabled");
        if (totalVotes > score)
            return upRef.current.classList.add("Mui-disabled");
        if (totalVotes === score) {
            upRef.current.classList.remove("Mui-disabled");
            downRef.current.classList.remove("Mui-disabled");
        }
    }, [totalVotes, score]);

    const handleUpVote = () => {
        setTotalVotes(totalVotes + 1);
    };

    const handleDownVote = () => {
        setTotalVotes(totalVotes - 1);
    };

    return (
        <Box sx={{ padding: "0rem .5rem" }}>
            <Box
                data-cy="scores-comp"
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                    backgroundColor: "lightblue",
                    borderRadius: "10px",
                    padding: "0",
                }}
            >
                <IconButton data-cy="upvote" ref={upRef} onClick={handleUpVote}>
                    <AddIcon />
                </IconButton>
                <Typography data-cy="score">{totalVotes}</Typography>
                <IconButton
                    data-cy="downvote"
                    ref={downRef}
                    onClick={handleDownVote}
                >
                    <RemoveIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Score;
