import React from 'react';
import img from './assets/images/img.jpg';
import './assets/styles/main.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosStart } from './store/reducers/todoSlice';
const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getTodosStart());
    }, []);
    return (
        <div>
            <h1>React + Babel</h1>
            <img src={img} />
        </div>
    );
};

export default App;
