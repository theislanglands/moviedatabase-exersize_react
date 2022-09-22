import React, { Component, useEffect, useState } from "react";

const KeyContext = React.createContext({});

const KeyProvider = ({ children }) => {
    const [key, setKey] = useState("api")

    return (
        <KeyContext.Provider
            value={{
                key,
                setKey,
            }}
        >
            {children}
        </KeyContext.Provider>);
};

export default KeyContext;
export { KeyProvider };