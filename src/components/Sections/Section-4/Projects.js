import TextBox from '@/components/UI/TextBox/TextBox';
import styles from './Projects.module.css';
import ProjectGallery from '@/components/UI/ProjectGallery/ProjectGallery';

export default function Projects({}) {
  return (
    <div className={`${styles['projects-page-container']}`}>
      <TextBox width='100%' delay='0.3'>
        <h2>Projects</h2>WAAAAH
      </TextBox>
      <ProjectGallery />
    </div>
  );
}
