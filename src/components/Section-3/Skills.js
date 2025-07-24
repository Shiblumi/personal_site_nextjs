import SkillBox from "../SkillBox/SkillBox";
import styles from "./Skills.module.css"

export default function Skills() {

    return(
        <div className={`${styles['skills-container']}`}>
            <div className={`${styles['skills-showcase']}`}>
                <SkillBox title='Frontend'/>
                <SkillBox title='Backend'/>
                <SkillBox title='General'/>
            </div>

        </div>
    );

}
