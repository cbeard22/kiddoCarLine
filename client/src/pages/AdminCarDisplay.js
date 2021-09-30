import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

class CarLine extends Component {
    render() {
        return (
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Row 1</th>
                            <th>Row 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Position 1</td>
                            <td>Bob</td>
                            <td>Julie</td>
                            
                        </tr>
                        <tr>
                            <td>Position 2</td>
                            <td>Tilda</td>
                            <td>Flamingo</td>
                            
                        </tr>
                        <tr>
                            <td>Position 3</td>
                            <td>D'lawn-tee</td>
                            <td>morningstar</td>

                        </tr>
                        <tr>
                            <td>Position 4</td>
                            <td>testername</td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>Position 5</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Position 6</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default CarLine;