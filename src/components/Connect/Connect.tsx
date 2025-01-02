import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/joy";
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export const Connect: React.FC = () => {
    const [open, setOpen] = React.useState(true);

    return (
        <div>
            <center style={{color: '#008080'}}>
                Contact Us!
            </center>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Name" variant="filled"/>
            </Box>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Age" variant="filled"/>
            </Box>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Contact number" variant="filled"/>
            </Box>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Location" variant="filled"/>
            </Box>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
            >
                <TextField id="filled-basic" label="Your child  is suffering from? (i.e. Autism/MR/Down syndrome etc.)"
                           variant="filled"/>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2
                }}
            >
                <Button variant={'solid'}>Submit</Button>
            </Box>
            <Box sx={{ width: '100%', marginTop: 4 }}>
                <Collapse in={open}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Click the close icon to see the Collapse transition in action!
                    </Alert>
                </Collapse>
            </Box>
        </div>
    );
}