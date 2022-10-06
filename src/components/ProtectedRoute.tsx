import {Navigate} from "react-router-dom";

export type ProtectedRouteProps = {
    isAuthenticated: any;
    authenticationPath: string;
    outlet: JSX.Element;
};

export const ProtectedRoute = ({isAuthenticated, authenticationPath, outlet}: ProtectedRouteProps) => {
    if(isAuthenticated._id) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} replace />;
    }
};
