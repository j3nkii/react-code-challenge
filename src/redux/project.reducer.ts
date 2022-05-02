import { AnyAction } from '@reduxjs/toolkit';
import { Project } from '../types/Project.type';

interface ProjectState {
    projects: Project[]
};

const sampleProject: Project = {
    id: '1',
    projectName: 'Demo Project',
    isActive: true,
};

const initialState: ProjectState = {
    projects: [
        sampleProject,
    ],
};

export enum ProjectActionType {
    ADD_PROJECT = 'ADD_PROJECT',
    CLEAR_LIST = 'CLEAR_LIST',
    SET_INACTIVE = 'SET_INACTIVE'
};

const projectReducer = (state: ProjectState = initialState, action: AnyAction) => {
    switch (action.type) {
        case ProjectActionType.ADD_PROJECT:
            const project = Object.assign({}, (action as AnyAction).payload);
            return { ...state, projects: [...state.projects, project] };
        case ProjectActionType.CLEAR_LIST:
            return { ...state, projects: [] };
        case ProjectActionType.SET_INACTIVE:
            console.log((action as AnyAction).payload)
            return {
                ...state, projects: findProject(state.projects, (action as AnyAction).payload)
            }
        default:
            return state;
    }
};

export default projectReducer;

function findProject(projects: any, act: any){
    console.log(act);
    
    let array = [];
    for(let proj of projects){
        console.log(proj.id, act);
        if(proj.id === act){
            console.log(true);
            
            array.push({...proj, isActive: 'false'})
        } else {
            array.push(proj)
        }
    }
    return array;
}