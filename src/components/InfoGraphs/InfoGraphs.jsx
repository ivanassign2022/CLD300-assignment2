import * as React from 'react';
import {PieChart} from '@mui/x-charts';
import './InfoGraphs.css'

function InfoGraphs({title,stat}){
    return (
        <>
        <div className="infograph-wrapper">
            <PieChart
                series={stat}
                width={400}
                height={200}
                />
            <div className="title">{title}</div>
        </div>
        </>
    )
}

export default InfoGraphs;