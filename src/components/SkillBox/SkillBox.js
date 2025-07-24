import styles from './SkillBox.module.css';

// TODO: Make no-gradient option for glass-dark-soft.
// IDEA: 
// 1.   Thin line go horizontally across quickly, expanding right all the way,
//      then shrink from left.
// 2.   The sides come down from the horizontal expanding line...
// Too much processing? Probs.us
export default function SkillBox({title}) {
	return (
		<>
			<div className={`${styles['half-box']} glass-dark-soft-no-gradient`}>
                <span className={`${styles['box-title']}`}>{title}</span>
				<div className={`${styles['vertical-line']}`} />
			</div>
		</>
	);
}
