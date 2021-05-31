import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { CheckIconDeActive, Cell, Row } from '../../components/commons/table/tableCommons';


TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

const columns = [
    { id: 'id', label: 'STT\u00a0', minWidth: 170, align: 'left', },
    { id: 'name', label: 'Tên danh mục\u00a0', minWidth: 100, align: 'left', },
    { id: 'description', label: 'Mô Tả\u00a0', minWidth: 100, align: 'left', },
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

    function handleClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <Cell component="th" scope="row" align="center" width="5%">STT</Cell>
                            <Cell component="th" scope="row" align="center" width="20%">Tên thể loại</Cell>
                            <Cell component="th" scope="row" align="center" width="75%">Mô tả</Cell>
                            <Cell component="th" scope="row" align="center" width="10%">Hoạt động</Cell>
                            <Cell component="th" scope="row" align="center" width="10%">Thao tác</Cell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                {columns.map((column) => (
                                    //đổ giá trị vô table
                                    <Cell key={column.id} onDoubleClick={() => handleClick(row)}>
                                        {row[column.id]}
                                    </Cell>
                                )
                                )}
                            </TableRow>
                        )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
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

