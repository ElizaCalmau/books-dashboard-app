import styles from './ValidationError.module.scss';

export const ValidationError = ({error}: { key: string; error: string | null}) => {
    if(!error){
        return null;
    }
    return (
        <div className={styles.validationError}>{error}</div>
    );
};

export default ValidationError;