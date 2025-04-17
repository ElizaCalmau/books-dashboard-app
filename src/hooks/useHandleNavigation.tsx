import {useNavigate} from "react-router-dom";

export const useHandleNavigation = () => {
    const navigate = useNavigate();
    const handleNavigation = ( path : string) => navigate(path);
    return handleNavigation;
}