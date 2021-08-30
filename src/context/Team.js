import React from 'react';

export const TeamContext = React.createContext();

export const TeamProvider = ({ children }) => {
    const [team, setTeam] = React.useState({});

    return(
        <TeamContext.Provider value={{ team, setTeam }}>
            {children}
        </TeamContext.Provider>
    )
}

export default { 
    TeamContext,
    TeamProvider
};
