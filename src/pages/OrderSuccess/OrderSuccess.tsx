import React from 'react';
import styles from './OrderSuccess.module.css';

interface LayoutData {
  id: string;
  title: string;
  buttonText: string;
  imageUrl: string;
}

const OrderSuccess: React.FC = () => {
  // Using map as requested, even for a single primary view, to keep it extensible
  const pageContent: LayoutData[] = [
    {
      id: 'order-conf-1',
      title: 'THANK! YOUR ORDER IS ON THE WAY.',
      buttonText: 'TRACK YOUR ORDER',
      imageUrl: 'https://i.ibb.co/k2wxx5gn/markup-1000048949.png'
    }
  ];

  return (
    <div className={styles.wrapper}>
      {pageContent.map((item) => (
        <div key={item.id} className={styles.container}>
          <div className={styles.imageSection}>
            <img 
              src={item.imageUrl} 
              alt="Order Success Graphic" 
              className={styles.heroImage} 
            />
          </div>
          
          <h1 className={styles.title}>{item.title}</h1>
          
          <button 
            className={styles.button} 
            onClick={() => window.location.href = '/track'}
          >
            {item.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default OrderSuccess;