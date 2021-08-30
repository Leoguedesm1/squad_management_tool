import React from 'react';

export const TeamsContext = React.createContext();

export const TeamsProvider = ({ children }) => {
    const [teams, setTeams] = React.useState([]);

    return(
        <TeamsContext.Provider value={{ teams, setTeams }}>
            {children}
        </TeamsContext.Provider>
    )
}

export default { 
    TeamsContext,
    TeamsProvider
};
