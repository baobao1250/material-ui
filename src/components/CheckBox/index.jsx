import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function CBox(props) {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
    return (
        <div>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <label>Hoạt động</label>
        </div>
    );
}

export default CBox;