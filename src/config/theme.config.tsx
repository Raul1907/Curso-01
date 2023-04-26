import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";


type ThemeProp= {
    children: JSX.Element;
};

export enum themPalette {
    BG = "#12181b",
    LIME = "#C8FA5F",
    FONT_GLOBAL = "'JetBrains Mono', monospace",
    //alert styles
    ERROR_MAIN = "#F44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
    SUCCESS_MAIN = "#66BB6A",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
}

const theme = createTheme({
    palette: {
        mode: "dark",
        background:{
            default: themPalette.BG,
        },
        primary:{
            main: themPalette.LIME
        }
    },
    typography: {
        fontFamily: themPalette.FONT_GLOBAL,
    },
    components:{
        MuiButton: {
            defaultProps: {
                style:{
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em",
                }
            }
        },
        MuiAlert:{
            defaultProps: {
                style:{
                    borderRadius: "0.8em",
                    fontSize: "1em",
                },
            },
            //permite apuntar a los estilos de un tipo de componente
            styleOverrides:{
                standardError:{
                    border: `1px solid ${themPalette.ERROR_MAIN}`,
                    background: themPalette.BG_ERROR_MAIN,
                },
                standardSuccess:{
                    border: `1px solid ${themPalette.SUCCESS_MAIN}`,
                    background: themPalette.BG_SUCCESS_MAIN,
                },
            },
        }
    }
});

export const ThemeConfig:React.FC<ThemeProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
};