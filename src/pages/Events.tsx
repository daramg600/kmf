import React, { useRef } from 'react';
import { 
  IonContent, 
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  useIonViewDidEnter
} from '@ionic/react';
import Footer from '../components/Footer';

interface Event {
  title: string;
  date: string;
  location: string;
  image: string;
}

const Events: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement>(null);

  useIonViewDidEnter(() => {
    // Scroll to top when page enters
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  });

  const events2024: Event[] = [
    { title: 'KMF Road Racing Championship R1', date: '2024-03-15', location: 'Korea International Circuit', image: '/kmf-logo-footer.png' },
    { title: 'KMF Motocross Championship R1', date: '2024-04-01', location: 'Chuncheon MX Park', image: '/kmf-logo-footer.png' },
    { title: 'KMF Enduro Championship R1', date: '2024-05-01', location: 'Gangwon Province', image: '/kmf-logo-footer.png' },
    { title: 'KMF Trial Championship R1', date: '2024-06-01', location: 'Seoul Trial Park', image: '/kmf-logo-footer.png' },
    { title: 'KMF Supermoto Championship R1', date: '2024-07-01', location: 'Busan Supermoto Track', image: '/kmf-logo-footer.png' },
    { title: 'KMF Baja Championship R1', date: '2024-08-01', location: 'Taean Desert Course', image: '/kmf-logo-footer.png' }
  ];

  const events2023: Event[] = [
    { title: 'KMF Road Racing Championship Final', date: '2023-11-15', location: 'Korea International Circuit', image: '/kmf-logo-footer.png' },
    { title: 'KMF Motocross Championship Final', date: '2023-10-20', location: 'Chuncheon MX Park', image: '/kmf-logo-footer.png' },
    { title: 'KMF Enduro Championship Final', date: '2023-09-25', location: 'Gangwon Province', image: '/kmf-logo-footer.png' },
    { title: 'KMF Trial Championship Final', date: '2023-09-10', location: 'Seoul Trial Park', image: '/kmf-logo-footer.png' },
    { title: 'KMF Supermoto Championship Final', date: '2023-10-05', location: 'Busan Supermoto Track', image: '/kmf-logo-footer.png' },
    { title: 'KMF Awards Ceremony', date: '2023-12-01', location: 'Seoul Convention Center', image: '/kmf-logo-footer.png' }
  ];

  const EventCard: React.FC<{ event: Event }> = ({ event }) => (
    <IonCard style={{ marginBottom: '1rem', background: 'linear-gradient(135deg, #013298 0%, #012557 100%)' }}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="8">
              <IonCardHeader>
                <IonCardTitle style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'white' }}>{event.title}</IonCardTitle>
              </IonCardHeader>
              <div style={{ padding: '0 1rem 1rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 'bold', marginBottom: '0.25rem' }}>{event.date}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>{event.location}</p>
                <IonButton fill="outline" size="small" color="light">
                  View Details
                </IonButton>
              </div>
            </IonCol>
            <IonCol size="12" sizeMd="4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
              <img 
                src={event.image} 
                alt={event.title} 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  objectFit: 'contain', 
                  borderRadius: '8px',
                  opacity: 0.8
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/kmf-logo-footer.png';
                }}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );

  return (
    <IonContent ref={contentRef} fullscreen>
      <div className="content-section">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
          Events
        </h1>
        
        {/* 2024 Events */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'var(--ion-color-primary)' }}>
            2024 Upcoming Events
          </h2>
          <div>
            {events2024.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </section>

        {/* 2023 Events */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#666' }}>
            2023 Past Events
          </h2>
          <div>
            {events2023.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </section>

        {/* Event Information */}
        <section style={{ marginBottom: '3rem' }}>
          <IonCard color="light">
            <IonCardHeader>
              <IonCardTitle>Event Information</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1rem' 
              }}>
                <div>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>참가 신청</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.75rem' }}>
                    모든 이벤트는 사전 등록이 필요합니다. 
                    각 이벤트별 등록 마감일을 확인하세요.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>라이센스</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.75rem' }}>
                    KMF 공식 라이센스 보유자만 참가 가능합니다. 
                    라이센스 발급은 안전 교육 이수 후 가능합니다.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>안전 장비</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.75rem' }}>
                    모든 참가자는 승인된 안전 장비를 착용해야 합니다. 
                    헬멧, 보호복, 장갑 등이 필수입니다.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>기술 검사</h4>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.75rem' }}>
                    모든 참가 차량은 이벤트 전 기술 검사를 통과해야 합니다. 
                    검사 일정을 미리 확인하세요.
                  </p>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </section>
      </div>
      
      <Footer />
    </IonContent>
  );
};

export default Events; 