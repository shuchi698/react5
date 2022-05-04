import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Students = (props) => {

    const { students } = props;

    return (
        <div className='Students'>
            <div className='students-header'>
                <h1>Students Details</h1>
                <button>Add new student</button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Course</TableCell>
                            <TableCell align="right">Batch</TableCell>
                            <TableCell align="right">Change</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {students.map((student) => (
                        <TableRow
                        key={student.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {student.name}
                            </TableCell>
                            <TableCell align="right">{student.age}</TableCell>
                            <TableCell align="right">{student.course}</TableCell>
                            <TableCell align="right">{student.batch}</TableCell>
                            <TableCell align="right">Edit</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Students;