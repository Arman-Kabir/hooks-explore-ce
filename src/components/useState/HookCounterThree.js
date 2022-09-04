import React from 'react';
import { useState } from 'react';

const HookCounterThree = () => {
    const [name, setname] = useState({ firstName: '', lastName: '' });
    return (
        <form>
            <input type="text" name="" id="" value={name.firstName} onChange={e => setname({...name, firstName: e.target.value })} />

            <input type="text" name="" id="" value={name.lastName} onChange={e => setname({...name, lastName: e.target.value })} />

            <h2>First Name is - {name.firstName} </h2>
            <h2>Last Name is - {name.lastName} </h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    );
};

export default HookCounterThree;