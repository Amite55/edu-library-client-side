import { Navigate } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if(loading) {
        return <span className="loading loading-spinner text-accent"></span>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={location.pathname} replace={true} />
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children: PropTypes.any
  };