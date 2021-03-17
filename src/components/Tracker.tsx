import React, { useState } from 'react';
import { User } from '../API';

export type TrackedItem = {
    username: string;
    projectname: string;
    projectdes: string;
}

type Props = {
    users: User[],
    handleTrackedItems: (item: TrackedItem) => void;
}

const Tracker: React.FC<Props> = ({ users, handleTrackedItems }) => {
    const [selectedUserName, setSelectedUserName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectDes, setProjectDes] = useState("");

    const handelSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedUserName(e.target.value);
    }

    const handleProjectName = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setProjectName(e.target.value);
    }
    const handleProjectDes = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setProjectDes(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        handleTrackedItems({ username: selectedUserName, projectname: projectName, projectdes: projectDes });
        e.preventDefault();
    } 

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <select onChange={handelSelect} required>
                    <option value="">Please select User</option>
                    {users.map(({ id, name, username }) => <option value={username} key={id}>{name}</option>)}
                </select>
            </div>
            <div>
                <label>Project Name</label>
                <input
                    type="text"
                    value={projectName}
                    onChange={handleProjectName} />
            </div>
            <div>
                <label>Project discription</label>
                <textarea
                    value={projectDes}
                    onChange={handleProjectDes} />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default Tracker;