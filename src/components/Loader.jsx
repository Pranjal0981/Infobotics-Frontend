import React from "react";
import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";

const Spinner = ({ loading }) => {
    const override = css`
        display: block;
        margin: 0 auto;
    `;

    return (
        <div className="flex justify-center items-center h-32">
            <PropagateLoader color={"#ff5722"} loading={loading} css={override} size={15} />
        </div>
    );
};

export default Spinner;
