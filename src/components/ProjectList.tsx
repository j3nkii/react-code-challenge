import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const ProjectList = () => {
    const dispatch = useDispatch();
    const [newProject, setNewProject] = useState({
        id: '',
        projectName: '',
        isActive: true,
    });
    const projects = useSelector((store: any) => store.projects)
    const handleChange = (e: any) => {
        setNewProject({...newProject, [e.target.name]: e.target.value})
        console.log(newProject);
    }
    return (
        <>
            <h2>Function Compoent with Hooks and Redux</h2>
            <div style={{ padding: 20 }}>
                    ID: <input name='id' onChange={e => handleChange(e)} value={newProject.id} />
                    <br />
                    Name: <input name='projectName' onChange={e => handleChange(e)} value={newProject.projectName} />
                    <br />
                    Active:
                    <select name="isActive" id="active" onChange={e => handleChange(e)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button onClick={() => {
                        console.log(projects);
                        
                        setNewProject({
                            id: '',
                            projectName: '',
                            isActive: true,
                        });
                        dispatch({
                            type: 'ADD_PROJECT',
                            payload: newProject
                        });
                    }}>
                        Submit
                    </button>
                </div>
                {
                    projects.projects.map((project: any) => (
                        <div style={{borderStyle: 'solid', margin: 10 }}>
                            <p>ID: {project.id}</p>
                            <p>Name: {project.projectName}</p>
                        </div>
                    ))
                }
        </>
    );
}

export default ProjectList;