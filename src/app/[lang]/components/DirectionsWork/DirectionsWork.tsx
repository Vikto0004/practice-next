import CustomButton from '../CustomButton/CustomButton';
import DirectionsWorkList from '../DirectionsWorkList/DirectionsWorkList';
import Section from '../Section/Section';
import Title from '../Title/Title';
import css from './DirectionsWork.module.css';

export default function DirectionsWork() {
  return (
    <Section>
      <Title text="Напрямки роботи фонду" />
      <DirectionsWorkList />
      <div className={css.wrap}>
        <CustomButton text="До напрямків роботи" link="/lignes-of-work" />
      </div>
    </Section>
  );
}
