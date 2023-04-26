import {Alert, AlertColor, Snackbar} from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'

type NotificationProps = {
  open: boolean,
  msg: string,
  severity: AlertColor | undefined,
  handleClose: () => void
}
export const Notification: React.FC<NotificationProps> = ( { open, msg, severity, handleClose }) => {
  return (
    <>
    <div
      className={ `${open ? 'block' : 'hidden' }mb-4 rounded-lg bg-secondary-100 px-6 py-5 text-base text-success-700`}
      role="alert">
      {msg}
    </div>
    {/*
    <Snackbar anchorOrigin= {{vertical:"top", horizontal: "center"}}
              autoHideDuration={4000}
              open={open}
              onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          <Typography>{msg}</Typography>
        </Alert>
    </Snackbar>
  */}
    </>
  )
}
