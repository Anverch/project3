import React from 'react';
import { Header } from 'semantic-ui-react';
import "./styles.css";

const styles = {
    headerColor: {
        float: "left",
        color: "#f27405",
        fontFamily: "Times New Roman",
        fontSize: 55,
        fontWeight: "bold",
        textShadow: "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"

    },
    headerPosition: {
        position: "absolute",
        top: "calc(50% - 35px)",
        left: "calc(50% - 255px)",
        zIndex: 2
    },
    spanColor: {
        color: "darkcyan",
        textShadow: "2px 2px 0 rgba(0,0,0,.95), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    }
    
    
}

const LoginHeader = () => (
    <Header style={styles.headerColor}>
        <div style={styles.headerPosition}>
            job<span style={styles.spanColor}>Spot</span>
        </div>
    </Header>
)
export default LoginHeader;