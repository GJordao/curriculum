// React
import React from "react";

const styles = {
    email: {
        marginLeft: 5
    },
    header: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        height: "35mm",
        marginLeft: "12mm",
        marginRight: "12mm"
    },
    headerLowerLine: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        fontStyle: "italic",
        fontWeight: 300,
        justifyContent: "space-between",
        width: "100%"
    },
    line: {
        backgroundColor: "#000000",
        height: 1,
        marginBottom: 10,
        marginTop: 10,
        width: "100%"
    },
    name: {
        fontSize: 26,
        marginRight: 10
    },
    secondName: {
        color: "#808080"
    },
    title: {
        marginRight: 10
    }
};

const Header = () => {
    return (
        <div style={styles.header}>
            <div style={styles.name}>
                <span>{"Gustavo "}</span>
                <span style={styles.secondName}>{"Jordão"}</span>
            </div>
            <div style={styles.line} />
            <div style={styles.headerLowerLine}>
                <div style={styles.email}>{"jordao.f.gustavo@gmail.com"}</div>
                <div style={styles.title}>{"Fullstack developer"}</div>
            </div>
        </div>
    );
};

export default Header;
