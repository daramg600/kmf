import React from 'react';
import { IonCard, IonCardContent } from '@ionic/react';

interface RiderCardProps {
  image: string;
  name: string;
  description: string;
}

const RiderCard: React.FC<RiderCardProps> = ({ image, name, description }) => {
  return (
    <IonCard>
      <IonCardContent className="rider-card">
        <img 
          src={image} 
          alt={name} 
          className="rider-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/favicon.png';
          }}
        />
        <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{name}</h3>
        <p style={{ color: '#666', fontSize: '0.875rem' }}>{description}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default RiderCard; 