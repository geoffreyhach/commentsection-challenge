import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Score({ id, score, setComments }) {
    const [totalVotes, setTotalVotes] = useState(score);
    const upRef = useRef(null);
    const downRef = useRef();

    useEffect(() => {
        console.log("score", +score);
        console.log("votes", +totalVotes);
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
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                    backgroundColor: "lightblue",
                    borderRadius: "10px",
                    padding: "0",
                }}
            >
                <IconButton ref={upRef} onClick={handleUpVote}>
                    <KeyboardArrowUpIcon />
                </IconButton>
                <Typography>{totalVotes}</Typography>
                <IconButton ref={downRef} onClick={handleDownVote}>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Score;
