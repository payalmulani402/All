import React, { useCallback, useState } from 'react'

const Index = () => {
    const [count, setcount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setcount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    }
    return (
        <>
            <todos todos={todos} addTodo={addTodo} />
            <hr/>
            <div>
                count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};


export default Index
