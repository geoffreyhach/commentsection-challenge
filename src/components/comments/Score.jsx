import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Score({ id, score, setComments }) {
    const [isUpped, setIsUpped] = useState(false);
    const [isDowned, setIsDowned] = useState(false);
    const upRef = useRef(null);
    const downRef = useRef();

    //TODO : revoir logique de la desactivation des boutons

    const handleUpVote = () => {
        setIsUpped((prevState) => !prevState);

        if (isUpped === true) upRef.current.classList.add("Mui-disabled");
        downRef.current.classList.remove("Mui-disabled");
        setComments((prevState) =>
            prevState.map((comment) => {
                if (Number(comment.id) === Number(id))
                    return { ...comment, score: score + 1 };
                else return comment;
            })
        );
    };

    const handleDownVote = () => {
        setIsDowned(true);

        downRef.current.classList.add("Mui-disabled");
        upRef.current.classList.remove("Mui-disabled");

        setComments((prevState) =>
            prevState.map((comment) => {
                if (Number(comment.id) === Number(id))
                    return { ...comment, score: score - 1 };
                else return comment;
            })
        );
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
                    padding: ".2rem",
                }}
            >
                <IconButton ref={upRef} onClick={handleUpVote}>
                    <KeyboardArrowUpIcon />
                </IconButton>
                <Typography>{score}</Typography>
                <IconButton ref={downRef} onClick={handleDownVote}>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Score;
