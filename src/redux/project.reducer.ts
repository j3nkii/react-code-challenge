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
    CLEAR_LIST = 'CLEAR_LIST'
};

const projectReducer = (state: ProjectState = initialState, action: AnyAction) => {
    switch (action.type) {
        case ProjectActionType.ADD_PROJECT:
            const project = Object.assign({}, (action as AnyAction).payload);
            return { ...state, projects: [...state.projects, project] };
        case ProjectActionType.CLEAR_LIST:
            return { ...state, projects: [] };
        default:
            return state;
    }
};

export default projectReducer;