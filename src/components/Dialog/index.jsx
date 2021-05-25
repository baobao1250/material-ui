// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';
// import { blue } from '@material-ui/core/colors';
// import CBox from '../CheckBox';
// import Input from '@material-ui/core/Input';

// const useStyles = makeStyles((theme) => ({
//     avatar: {
//         backgroundColor: blue[100],
//         color: blue[600],
//     },
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
//     Button: {
//         paddingRight: 100,
//     }
// }));

// //SimpleDialog
// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// };

// function SimpleDialog(props) {
//     const classes = useStyles();
//     const { onClose, selectedValue, open } = props;

//     const handleClose = () => {
//         onClose(selectedValue);
//     };

//     function handleDelete() {

//     }


//     return (
//         <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
//             <DialogTitle id="simple-dialog-title">Thêm mới danh mục</DialogTitle>

//             <div className={classes.root}>
//                 <label>Tên danh mục</label>
//                 <br />
//                 <Input title='text' isRequire={true} />
//                 <br />
//                 <label >Mô tả</label>
//                 <br />
//                 <Input title='text' />
//                 <CBox />
//                 <Button variant="contained" >
//                     Lưu
//                 </Button>
//                 <Button variant="contained" color="primary">
//                     Xóa
//                 </Button>
//                 <Button variant="contained" color="secondary" onClick={handleClose}>
//                     Trở về
//                 </Button>
//             </div>
//         </Dialog>
//     );
// }


// //SimpleDialogDemo
// SimpleDialogDemo.propTypes = {

// };

// const useSty = makeStyles((theme) => ({
//     btn: {
//         marginRight: 20,
//     }
// }));


// function SimpleDialogDemo(props) {
//     const classes = useSty();
//     const [open, setOpen] = React.useState(false);


//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = (value) => {
//         setOpen(false);

//     };

//     return (
//         <div className={classes.Button}>
//             <Button className={classes.btn} variant="contained" color="primary" >
//                 tìm kiếm
//             </Button>
//             <Button className="btn" variant="contained" color="primary" onClick={handleClickOpen}>
//                 Thêm
//             </Button>

//             <SimpleDialog open={open} onClose={handleClose} />
//         </div>
//     );
// }

// export default SimpleDialogDemo;
