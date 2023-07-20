import React from "react";
import Box from "@mui/material/Box";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";

function StarBox (activeStars) {
    const totalStars = 5;
    return (
        <Box>
            {[...new Array(totalStars)].map((arr, index) => {
                return index < activeStars ? <Star /> : <StarBorder />;
            })}
        </Box>
    );
};

export default StarBox;