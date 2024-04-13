import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
    }),
    section: style({
        width: "100vw",
        display: "flex",
        justifyContent: "center",
    }),
    picture: style({
        width: 522,
        height: 260,
    }),
    linkBox: style({
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        "@media": {
            "screen and (max-width:349px)": {
                display: "block",
                textAlign: "center",
            },
        },
    }),
    title: style({
        color: "white",
        fontSize: 36,
    }),
}

export default styles
