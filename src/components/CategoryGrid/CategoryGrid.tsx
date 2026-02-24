import React from 'react';
import styles from './CategoryGrid.module.css';

interface Category {
  id: number;
  title: string;
  image: string;
}

const categories: Category[] = [
  { id: 1, title: 'Sofas', image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?cs=srgb&dl=pexels-pixabay-276583.jpg&fm=jpg' },
  { id: 2, title: 'Dining', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-fK0QuCsaW9Sp68bFE7AEPjabV_v47_q9g&s' },
  { id: 3, title: 'Bedding', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45CQecmh2bO93YB2kPeXfkWDndwnkrrbdSQ&s' },
  { id: 4, title: 'Occasional', image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=500' },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className={styles.container}>
      {categories.map((cat) => (
        <div key={cat.id} className={styles.card} style={{ backgroundImage: `url(${cat.image})` }}>
          <div className={styles.overlay}>
            <h3 className={styles.title}>{cat.title}</h3>
            <button className={styles.shopBtn}>Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;