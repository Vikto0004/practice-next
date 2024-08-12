import css from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={css.container}>
        <h1>Welcome to ContactMaster</h1>
        <p>Streamline Your Contact Management</p>
      </div>
      <div className={css.container}>
        <h2>Key Features</h2>
        <div className={css.featureItem}>
          <h3>Effortless Contact Storage</h3>
          <p>
            Securely store all your phone contacts in one place. Easily add,
            edit, and delete entries to keep your contact list up-to-date.
          </p>
        </div>
        <div className={css.featureItem}>
          <h3>Advanced Filtering Options</h3>
          <p>
            Quickly find the contact you need with our powerful filtering tools.
            Search by name, phone number, or any custom tags you ve added to
            your contacts.
          </p>
        </div>
        <div className={css.featureItem}>
          <h3>Cross-Device Synchronization</h3>
          <p>
            Access your contact list from any device, anywhere. Whether you re
            using your smartphone, tablet, or computer, your contacts are always
            synchronized and up-to-date.
          </p>
        </div>
        <div className={css.featureItem}>
          <h3>User-Friendly Interface</h3>
          <p>
            Our intuitive design makes managing your contacts a breeze. Enjoy a
            clean, modern interface that simplifies navigation and enhances your
            productivity.
          </p>
        </div>
        <div className={css.featureItem}>
          <h3>Secure Access</h3>
          <p>
            Your contact information is protected with state-of-the-art
            encryption and security measures. Rest easy knowing your data is
            safe and secure.
          </p>
        </div>
      </div>
    </>
  );
}
