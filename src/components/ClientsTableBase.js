//import {  } from '@heroicons/react/24/solid'
import {Badge, Card, Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow, Title } from '@tremor/react'
import React from 'react'
//import data from '../data.json'

class ClientsTableBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataset: [],
        }
    }

    componentDidMount() {
        fetch('http://35.193.132.91:8000/clients/')
        .then(res => res.json())
        .then(
            json => {this.setState({ 'dataset': json });}
        )
    }


    

    render() {
        return (
            <Card>
                <Title>List of clients</Title>

                <Table marginTop='mt-5'>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>ID</TableHeaderCell>
                            <TableHeaderCell>Name</TableHeaderCell>
                            <TableHeaderCell>Personal ID</TableHeaderCell>
                            <TableHeaderCell>Celphone</TableHeaderCell>
                            <TableHeaderCell>Email</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.state.dataset.map((item) => (
                            <TableRow>
                                <TableCell> {item.id} </TableCell>
                                <TableCell> {item.firstname} {item.lastname}</TableCell>
                                <TableCell> {item.personal_id} </TableCell>
                                <TableCell> {item.celphone} </TableCell>
                                <TableCell> {item.email} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Card>
        )
    }
}

export default ClientsTableBase