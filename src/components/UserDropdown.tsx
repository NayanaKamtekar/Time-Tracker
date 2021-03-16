import React from 'react';
import { User } from '../API';

type Props = {
    users: User[],
    callback: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const UsersDropdown: React.FC<Props> = ({ users, callback }) => {
    return (
        <select onChange={callback}>
            {users.map(({ id, name, username }) => <option value={username} key={id}>{name}</option>)}
        </select>
    )
}

export default UsersDropdown;