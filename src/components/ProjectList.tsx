import {useState} from 'react';

const ProjectList = () => {
    const [newProject, setNewProject] = useState({
        id: '',
        projectName: '',
        isActive: true,
    });
    const [projects, setProjects]: any = useState([]);
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
                    {/* <p>Active:</p> */}
                    <select name="isActive" id="active" onChange={e => handleChange(e)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button onClick={() => {
                        setNewProject({
                            id: '',
                            projectName: '',
                            isActive: true,
                        });
                        setProjects([
                            ...projects,
                            newProject
                        ])
                    }}>
                        Submit
                    </button>
                </div>
                {
                    projects.map((project: any) => (
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