import React from 'react';
import Counter from './components/Counter';
import NameTaker from './components/NameTaker';
import Sum from './components/Sum';
import Waiter from './components/Waiter';

const App = () => (
    <div>
        <Counter/>
        <NameTaker/>
        <Sum numbers={[1,2,3]}/>
        <Waiter/>
    </div>
);

export default App;