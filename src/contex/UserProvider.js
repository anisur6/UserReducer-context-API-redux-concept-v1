import React, { useEffect } from 'react';
import { useReducer } from 'react';
import { createContext, useContext } from 'react';
import UserState, { inititialState } from '../state/UserState';




const UserContext = createContext();

const UserProvider = ({children}) => {


    const [state, dispatch] = useReducer(UserState , inititialState);

    console.log(state);

    useEffect(() => {

        dispatch({type : "F_START"});

        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => dispatch({type: "F_SUCCESS", payload: data}))
        .catch( () => { dispatch({ type: "F_ERROR"})
        })
      }, []);

      const value = {
        state,
        dispatch,
      }

    return (
        <>
            <UserContext.Provider value={value}>
            {children}
            </UserContext.Provider>
        </>
        
    );
};

export const UseUsers = () => {
    const context = useContext(UserContext);
    return context;
}

export default UserProvider;