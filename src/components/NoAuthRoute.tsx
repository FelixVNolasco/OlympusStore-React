import { Navigate } from "react-router-dom";

export type NoAuthProps = {
    isAuthenticated: any;
    redirectPath: string;
};
export const NoAuthRoute = ({ isAuthenticated, redirectPath }: NoAuthProps) => {
    if (isAuthenticated) {
        return <Navigate to={{ pathname: redirectPath }} replace />;
    }
};