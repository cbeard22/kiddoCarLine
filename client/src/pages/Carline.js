import React from 'react';
import { Grid, Cell } from 'react-mdl';
import studentsCard from '../components/studentsCard';

export default function Cars() {
    return (
        <Grid>
            <Cell className= "StudentsNames"col={6}>
                <studentsCard />
            </Cell>
        </Grid>
    )
}