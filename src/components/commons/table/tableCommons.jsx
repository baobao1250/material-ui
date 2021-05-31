import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CheckIcon from '@material-ui/icons/Check';
import { grey, green } from '@material-ui/core/colors';
export const Cell = withStyles((theme) =>
    createStyles({
        head: {
            backgroundColor: "#aaaaaaa5",
            border: "solid 1px #fff",
            color: "#030303",
            fontWeight: "bold",
            lineHeight: "1rem",
            padding: "8px 5px"
        },
        body: {
            fontSize: 14,
            border: "solid 1px #d7d7d7",
            padding: "2px 5px",
            color: "#555555",
            wordBreak: "break-word"
        },
    }),
)(TableCell);

export const Row = withStyles((theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: "#f7f7f7",
            },
            '&:nth-of-type(even)': {
                backgroundColor: "#fff",
            },
        },
    }),
)(TableRow);
export const CheckIconActive = () => {
    return (
        <CheckIcon style={{ color: green[500] }} fontSize="small" />
    )
}

export const CheckIconDeActive = () => {
    return (
        <CheckIcon style={{ color: grey[800] }} fontSize="small" />
    )
}