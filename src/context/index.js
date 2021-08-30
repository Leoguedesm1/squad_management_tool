import React from "react";

import { TeamProvider } from "./Team"
import { TeamsProvider } from "./Teams";

const AppProvider = ({ children }) => (
    <TeamsProvider>
        <TeamProvider>
            {children}
        </TeamProvider>
    </TeamsProvider>
)

export default AppProvider;
