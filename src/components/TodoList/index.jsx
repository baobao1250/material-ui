import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';


TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

const columns = [
    { id: 'id', label: 'STT\u00a0', minWidth: 170, align: 'left', },
    { id: 'name', label: 'Tên danh mục\u00a0', minWidth: 100, align: 'left', },
    {
        id: 'active',
        label: 'Hoạt động',
        minWidth: 170,
        align: 'left',
        //format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'quyen',
        label: 'Thao tác\u00a0',
        minWidth: 100,
        align: 'left',
        //format: (value) => value.toLocaleString('en-US'),
    },
];


const useStyles = makeStyles({
    root: {
        width: '80%',
        paddingLeft: '10%',

    },
    container: {
        maxHeight: 440,
    },
});
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    const { todos, onTodoClick } = props;
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            //đổ giá trị vô table
                                            <TableCell key={column.id}>
                                                {row[column.id]}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={todos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default TodoList;
/////////////////////////

