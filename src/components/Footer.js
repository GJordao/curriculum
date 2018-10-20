// React
import React from "react";

const styles = {
    footer: {
        alignItems: "flex-end",
        display: "flex",
        flexDirection: "row",
        height: "25mm",
        justifyContent: "center",
        marginLeft: "12mm",
        marginRight: "12mm"
    },
    footerInnerContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
        width: "50%"
    },
    icon: {
        height: 15,
        marginRight: 5,
        width: 15
    },
    link: {
        alignItems: "cemter",
        color: "inherit",
        display: "flex",
        flexDirection: "row",
        fontSize: 14,
        fontStyle: "none",
        textDecoration: "none"
    }
};

const Footer = () => {
    return (
        <div style={styles.footer}>
            <div style={styles.footerInnerContainer}>
                <a
                    href={"https://www.linkedin.com/in/gjord%C3%A3o/"}
                    rel={"noopener noreferrer"}
                    style={styles.link}
                    target={"_blank"}
                >
                    <img
                        src={require("./../images/ic_linkedin.svg")}
                        style={styles.icon}
                    />
                    /in/gjordão
                </a>
                <a
                    href={"https://jordao.xyz"}
                    rel={"noopener noreferrer"}
                    style={styles.link}
                    target={"_blank"}
                >
                    <img
                        src={require("./../images/ic_website.svg")}
                        style={styles.icon}
                    />
                    jordao.xyz
                </a>
                <a
                    href={"https://github.com/gjordao"}
                    rel={"noopener noreferrer"}
                    style={styles.link}
                    target={"_blank"}
                >
                    <img
                        src={require("./../images/ic_github.svg")}
                        style={styles.icon}
                    />
                    gjordao
                </a>
            </div>
        </div>
    );
};

export default Footer;
