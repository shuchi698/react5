import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './../App.css';
import { ContextData } from "./StudentsAdd";

const StudentsInfo = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [btnText, setBtnText] = useState('Submit');

    const [students, setStudents] = useContext(ContextData);

    const [details, setDetails] = useState({
        name: "",
        age: "",
        course: "",
        batch: "",
        id: ""
    });

    useEffect(() => {
        students.forEach((item) => {
            if(item.id === id) {
                setBtnText('Update')
                setDetails({
                    name: item.name,
                    age: item.age,
                    course: item.course,
                    batch: item.batch
                })
            }
        })
    }, [students, id]);

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === undefined) {
            let newDetails = {...details, id: new Date().getTime().toString()};
            setStudents([...students, newDetails]);
        } else {
            setStudents((previousState) =>
                previousState.map((student) =>
                    student.id === id ? {
                        id: id,
                        name: details.name,
                        age: details.age,
                        course: details.course,
                        batch: details.batch
                    }
                    : student
                )
            )
        }
        navigate("/students");
    }

return (
    <Box>
        <form onSubmit={handleSubmit}>
            <div className='input-container'>
                <TextField
                    id="name"
                    type="text"
                    label="Name"
                    variant="outlined"
                    className='input'
                    required
                    name="name"
                    value={details.name}
                    onChange={handleChange}
                />
                <TextField
                    id="age"
                    type="number"
                    label="Age"
                    variant="outlined"
                    className='input'
                    required
                    name="age"
                    value={details.age}
                    onChange={handleChange}
                />
                <TextField
                    id="course"
                    type="text"
                    label="Course"
                    variant="outlined"
                    className='input'
                    required
                    name="course"
                    value={details.course}
                    onChange={handleChange}
                />
                <TextField
                    id="batch"
                    type="text"
                    label="Batch"
                    variant="outlined"
                    className='input'
                    required
                    name="batch"
                    value={details.batch}
                    onChange={handleChange}
                />
            </div>
            <div className='btn-container'>
                {
                    <Link to="/students" className="link">
                        <button className="cancel-btn">Cancel</button>
                    </Link>
                }
                <button type='submit' className='submit-btn'>{btnText}</button>
            </div>
        </form>
    </Box>
);

}

export default StudentsInfo;