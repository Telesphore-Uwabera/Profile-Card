import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  imageUrl: string;
  altText: string;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText }) => (
  <div className={styles.avatar}>
    <img src={imageUrl} alt={altText} className={styles.avatarImg} />
  </div>
);

export default Avatar;
