export const ValidationError = ({error}: { key: string; error: string | null}) => {
    if(!error){
        return null;
    }
    return (
        <div>{error}</div>
    );
};

export default ValidationError;