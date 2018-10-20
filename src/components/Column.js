// React
import React from "react";

const styles = {
    column: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        paddingTop: 50,
        width: "100%"
    }
};

const Column = ({ children }) => {
    return <div style={styles.column}>{children}</div>;
};

export default Column;
