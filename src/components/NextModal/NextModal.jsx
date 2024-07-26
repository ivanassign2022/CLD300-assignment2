import * as React from 'react';
import {Modal, Box, Button, Typography  } from '@mui/material';


function NextModal(props,ref){
    const children = props.children
    const title = props.title;
    // let children = props.children 
    // let title =  props.title

    React.useImperativeHandle(ref, () => ({
        handleClose() {
            handleClose()
        }
      }))

    const [open, setOpen] = React.useState(false)

    const handleOpen = function(){
        setOpen(true);
    }
    const handleClose = function(){
        setOpen(false);
    }
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      };

      
    return (
        <>
        <Button onClick={handleOpen}>{title}</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
            </Typography>
            <div>
            {children}
            </div>
        </Box>
        </Modal>
        </>
      );
}

export default React.forwardRef(NextModal)
;