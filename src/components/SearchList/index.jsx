import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


SearchList.propTypes = {
    onSubmit: PropTypes.func,
};

SearchList.defaultProps = {
    onSubmit: null,
};

const useStyles = makeStyles((theme) => ({
    Label: {
        marginLeft: 0,
    },
    TextField: {
        width: 200,
        marginLeft: 0,
    }
}));

function SearchList(props) {
    const classes = useStyles();
    const { onSubmit } = props;
    const [values, setValues] = useState('');
    const typingTimeoutRef = useRef(null);
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
            <label className={classes.Label}>Từ khóa: </label>
            <br />
            <input className={classes.TextField} type="text" value={values} onChange={handleValuesOnChange} />
        </form>
    );
}

export default SearchList;