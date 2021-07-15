// styles
import styles from './Prediction.module.scss'
// components
import { Title } from "../common/Title/Title";
import { PrdeictionSlide } from "./PredictionSlide/PrdeictionSlide";

export function Prediction() {
    return (
        <div className={styles.container}>
            <Title
                locationInMainPage='prediction'
                textPathName='.title'
            />
            <PrdeictionSlide />
        </div>
    )
}
