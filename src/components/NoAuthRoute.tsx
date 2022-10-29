import { Navigate } from "react-router-dom";

export type NoAuthProps = {
    isAuthenticated: any;
    redirectPath: string;
    outlet: JSX.Element;
};
export const NoAuthRoute = ({ isAuthenticated, redirectPath, outlet }: NoAuthProps) => {
    if (isAuthenticated) {
        return <Navigate to={{ pathname: redirectPath }} replace />;
    } else {
        return outlet;
    }
};