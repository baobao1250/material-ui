import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function CBox(props) {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        console.log(event.target.checked)
        setChecked(event.target.checked);
    };

    return (
        <div>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleChange} />}
                label="Hoạt động"
            />
        </div>
    );
}

export default CBox;