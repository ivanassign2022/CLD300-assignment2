import * as React from 'react';
import {Rating} from '@mui/material';
import './NextRating.css'

function NextRating({title}) {
    const [value, setValue] = React.useState(0);

    return (
        <>
        <div className="rating-wrapper">
            <div>{title}</div>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                />
        </div>
        </>
    )
}

export default NextRating;

