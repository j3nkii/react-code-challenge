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
    const clearList = () =>{
        dispatch({
            type: 'CLEAR_LIST'
        })
    }
    const setInactive = (project: any) => {
        console.log(project);
        
        dispatch({
            type: 'SET_INACTIVE',
            payload: project.id
        })
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
                            isActive: newProject.isActive,
                        });
                        dispatch({
                            type: 'ADD_PROJECT',
                            payload: newProject
                        });
                    }}>
                        Submit
                    </button>
                </div>
                <button onClick={() => clearList()}>Clear List</button>
                {
                    projects.projects.map((project: any) => (
                        project.isActive !== 'false' && 
                        <div key={project.id} style={{borderStyle: 'solid', margin: 10 }}>
                            <p>ID: {project.id}</p>
                            <p>Name: {project.projectName}</p>
                            {/* <p>isActive: {String(project.isActive)}</p> */}
                            {/* <button onClick={() => setInactive(project)}>Set to Inactive</button> */}
                        </div>
                    ))
                }
        </>
    );
}

export default ProjectList;