import { AuthContextProvider } from "./context/auth-context";
import React from "react";

const combineComponents = (...components) => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) => {
            return ({ children }) => {
                return (
                    <AccumulatedComponents>
                        <CurrentComponent>{children}</CurrentComponent>
                    </AccumulatedComponents>
                );
            };
        },
        ({ children }) => <>{children}</>
    );
};

const providers = [AuthContextProvider];

export const AppContextProvider = combineComponents(...providers);
