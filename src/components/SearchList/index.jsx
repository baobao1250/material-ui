import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import CBox from '../CheckBox';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Maximize } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';





const useStyles = makeStyles((theme) => ({
    Label: {
        marginLeft: 100,
        float: 'left',
    },
    TextField: {
        marginLeft: 0,
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            flexGrow: 1,
        },
    },
    Button: {
        padding: 10,
        marginRight: 10,
        float: 'right',
    }
}));


//----------------SimpleDialog--------------
SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, open, onSubmit } = props;
    const [value, setValue] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!onSubmit) return;

        const FValues = {
            name: value,
            active: <CheckOutlinedIcon />,
            quyen: <CreateOutlinedIcon />,

        };
        onSubmit(FValues);
    }


    const handleClose = () => {
        onClose();
    };


    const handleChange = (event) => {
        setValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Thêm mới danh mục</DialogTitle>
            <div className={classes.root}>
                <label>Tên danh mục</label>
                <br />
                <TextField
                    onChange={handleChange}
                    value={value}
                    id="outlined-basic"
                    variant="outlined"
                />
                <br />
                <label >
                    Mô tả
                    </label>
                <br />
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    variant="outlined"
                />
                <CBox />
                <Button onClick={handleSubmit} variant="contained" >
                    Lưu
                    </Button>
                <Button variant="contained" color="primary">
                    Xóa
                    </Button>
                <Button variant="contained" color="secondary" onClick={handleClose}>
                    Trở về
                    </Button>
            </div>
        </Dialog>
    );
}
//----------------SearchList--------------
function SearchList(props) {
    const classes = useStyles();
    const { onSubmit } = props;
    const [values, setValues] = useState('');
    const typingTimeoutRef = useRef(null);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    //enter ko bi reload
    function handleSubmit(e) {
        e.preventDefault();
    }
    //300ms sau khi nhập sẽ cập nhật 
    function handleValuesOnChange(e) {
        const value = e.target.value
        setValues(value);
        if (!onSubmit) return;
        //làm mới time khi nhập
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const val = { value };
            onSubmit(val);
        }, 300);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputLabel>Từ khóa: </InputLabel>
                    <br />
                    <Input className={classes.TextField} fullWidth type="text" value={values} onChange={handleValuesOnChange} />
                </Grid>
                <Grid item xs={9}>
                    <Button className={classes.Button} variant="contained" color="primary" >
                        tìm kiếm
                    </Button>
                    <Button className={classes.Button} variant="contained" color="primary" onClick={handleClickOpen}>
                        Thêm
                    </Button>
                </Grid>
                <SimpleDialog open={open} onClose={handleClose} />
            </Grid>
        </form>
    );
}

export default SearchList;