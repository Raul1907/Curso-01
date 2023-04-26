import React from 'react'
import { Notification } from '../components';
import { AlertColor } from '@mui/material';

type ContextProps = {
    getError: (msg:string) => void;
    getSuccess: (msg:string) => void;
}

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC< {children: JSX.Element} > = ({ children }) =>{
    
    const handleClose = () =>{
        setOpen(false);
    }
    const [msg, setMsg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<AlertColor | undefined>(undefined);

    const getError = (msg:string) => {
        setSeverity("error")
        setOpen(true);
        setMsg(msg);
    }
    const getSuccess = (msg:string) => {
        setSeverity("success")
        setOpen(true);
        setMsg(msg);
    }
    const value = {getError, getSuccess}
    
    return (
        <NotificationContext.Provider value= {value}>
            <Notification handleClose={handleClose} msg={msg} open={open} severity={severity}
                />
            {children}
        </NotificationContext.Provider>
    )
};

export const useNotification = () => {
    const context = React.useContext(NotificationContext)
    if(!context) throw new Error ("No existe contexto")
    return context;

}
