import React, { useState } from 'react';
import { User } from '../API';

export type TrackedItem = {
    username: string;
    projectname: string;
    projectdes: string;
    timespent: string;
}

type Props = {
    users: User[],
    handleTrackedItems: (item: TrackedItem) => void;
}

const Tracker: React.FC<Props> = ({ users, handleTrackedItems }) => {
    const [selectedUserName, setSelectedUserName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDes, setProjectDes] = useState("");
    const [timeSpent, setTimeSpent] = useState("");

    const handelSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedUserName(e.target.value);
    }

    const handleProjectName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setProjectName(e.target.value);
    }
    const handleProjectDes = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setProjectDes(e.target.value);
    }
    const handleTimeSpent = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTimeSpent(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        handleTrackedItems({ username: selectedUserName, projectname: projectName, projectdes: projectDes, timespent: timeSpent });
        e.preventDefault();
        setProjectName("");
        setProjectDes("");
        setTimeSpent("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 mt-3">
                <label htmlFor="user" className="form-label fst-italic">User</label>
                <select id="user" onChange={handelSelect} className="form-select shadow-sm" required>
                    <option value="">Please select User</option>
                    {users.map(({ id, name, username }) => <option value={username} key={id}>{name}</option>)}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="projectName" className="form-label fst-italic">Project Name</label>
                <input
                    id="projectName"
                    type="text"
                    value={projectName}
                    onChange={handleProjectName} 
                    className="form-control shadow-sm"/>
            </div>
            <div className="mb-3">
                <label htmlFor="projectDes" className="form-label fst-italic">Project discription</label>
                <textarea
                    id="projectDes"
                    value={projectDes}
                    onChange={handleProjectDes} 
                    className="form-control shadow-sm"/>
            </div>
            <div className="mb-3">
                <label htmlFor="timeSpent" className="form-label fst-italic">Time spent(mins)</label>
                <input
                    id="timeSpent"
                    type="text"
                    value={timeSpent}
                    onChange={handleTimeSpent} 
                    className="form-control shadow-sm"/>
            </div>
            <button className="btn btn-primary">Add</button>
        </form>
    )
}

export default Tracker;