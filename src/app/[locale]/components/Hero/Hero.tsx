import { useTranslations } from 'next-intl';
import css from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('HomePage');
  const features = 'keyFeatures.features';

  return (
    <>
      <div className={css.container}>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
      </div>
      <div className={css.container}>
        <h2>{t('keyFeatures.title')}</h2>
        <div className={css.featureItem}>
          <h3>{t(`${features}.effortless.title`)}</h3>
          <p>{t(`${features}.effortless.description`)}</p>
        </div>
        <div className={css.featureItem}>
          <h3>{t(`${features}.advanced.title`)}</h3>
          <p>{t(`${features}.advanced.description`)}</p>
        </div>
        <div className={css.featureItem}>
          <h3>{t(`${features}.crossDevice.title`)}</h3>
          <p>{t(`${features}.crossDevice.description`)}</p>
        </div>
        <div className={css.featureItem}>
          <h3>{t(`${features}.ourIntuitive.title`)}</h3>
          <p>{t(`${features}.ourIntuitive.description`)}</p>
        </div>
        <div className={css.featureItem}>
          <h3>{t(`${features}.secureAccess.title`)}</h3>
          <p>{t(`${features}.secureAccess.description`)}</p>
        </div>
      </div>
    </>
  );
}
