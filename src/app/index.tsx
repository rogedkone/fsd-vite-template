import './index.css';
import {Router} from "@app/router";
import styles from './app.module.css';

const App = () => {
    return (
        <div className={styles.app}>
            <Router/>
        </div>
    );
};

export default App;
