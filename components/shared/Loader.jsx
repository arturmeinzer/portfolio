import React from "react";
import { Puff } from "react-loader-spinner";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const CenterBox = styled(Stack)({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
});

const Loader = () => (
    <CenterBox>
        <Puff
            height="80"
            width="80"
            radisu={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </CenterBox>
);

export default Loader;
