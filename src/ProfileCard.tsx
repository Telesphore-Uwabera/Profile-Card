import React from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, title, description, imageUrl }) => {

  const isVIP = name === "Telesphore Uwabera";
  const cardStyle = isVIP ? styles.vipProfile : styles.defaultProfile;

  return (
    <div className={`${styles.profileCard} ${cardStyle}`}>
      <div className={styles.avatar}>
        <img src={imageUrl} alt={`Avatar of ${name}`} className={styles.avatarImg} />
      </div>
      <h2 className={styles.profileCardH2}>{name}</h2>
      <h3 className={styles.profileCardH3}>{title}</h3>
      <p className={styles.profileCardP}>{description}</p>
    </div>
  );
};

export default ProfileCard;
