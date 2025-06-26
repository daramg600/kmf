import React, { useRef } from 'react';
import { 
  IonContent, 
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  useIonViewDidEnter
} from '@ionic/react';
import Footer from '../components/Footer';

const Championships: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement>(null);

  useIonViewDidEnter(() => {
    // Scroll to top when page enters
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  });

  const disciplines = [
    { name: 'Road Racing', description: '서킷 레이싱의 최고봉, 스피드와 기술의 조화' },
    { name: 'Motocross', description: '오프로드의 짜릿함, 점프와 코너링의 예술' },
    { name: 'Enduro', description: '장거리 내구 레이스, 라이더와 머신의 한계 도전' },
    { name: 'Trial', description: '정밀한 기술과 균형감각이 요구되는 경기' },
    { name: 'Supermoto', description: '온로드와 오프로드가 만나는 스릴 넘치는 레이스' },
    { name: 'Baja', description: '사막과 험로를 달리는 극한의 모험' }
  ];

  const championships = [
    { name: 'KMF Road Racing Championship', rounds: '8라운드', season: '3월-11월' },
    { name: 'KMF Motocross Championship', rounds: '6라운드', season: '4월-10월' },
    { name: 'KMF Enduro Championship', rounds: '5라운드', season: '5월-9월' },
    { name: 'KMF Trial Championship', rounds: '4라운드', season: '6월-9월' },
    { name: 'KMF Supermoto Championship', rounds: '6라운드', season: '4월-10월' },
    { name: 'KMF Baja Championship', rounds: '3라운드', season: '5월-10월' }
  ];

  return (
    <IonContent ref={contentRef} fullscreen>
      <div className="content-section">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
          Championships
        </h1>
        
        {/* Disciplines Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">모터사이클 종목</h2>
          <IonAccordionGroup>
            {disciplines.map((discipline, index) => (
              <IonAccordion key={index} value={`discipline-${index}`}>
                <IonItem slot="header" color="light">
                  <IonLabel style={{ fontWeight: 'bold' }}>{discipline.name}</IonLabel>
                </IonItem>
                <div style={{ padding: '1rem' }} slot="content">
                  <p style={{ color: '#666', marginBottom: '1rem' }}>{discipline.description}</p>
                  <div style={{ backgroundColor: '#f8f9fa', padding: '1rem', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>주요 특징:</h4>
                    <ul style={{ paddingLeft: '1.5rem', fontSize: '0.875rem', color: '#666' }}>
                      <li>전문적인 기술과 경험 필요</li>
                      <li>안전 장비 착용 필수</li>
                      <li>정기적인 기술 검사 실시</li>
                      <li>국제 규정 준수</li>
                    </ul>
                  </div>
                </div>
              </IonAccordion>
            ))}
          </IonAccordionGroup>
        </section>

        {/* Championships Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">2024 챔피언십</h2>
          <IonAccordionGroup>
            {championships.map((championship, index) => (
              <IonAccordion key={index} value={`championship-${index}`}>
                <IonItem slot="header" color="primary">
                  <IonLabel style={{ fontWeight: 'bold', color: 'white' }}>{championship.name}</IonLabel>
                </IonItem>
                <div style={{ padding: '1rem' }} slot="content">
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                    gap: '1rem', 
                    marginBottom: '1rem' 
                  }}>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: 'var(--ion-color-primary)' }}>라운드 수</h4>
                      <p style={{ color: '#666' }}>{championship.rounds}</p>
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold', color: 'var(--ion-color-primary)' }}>시즌 기간</h4>
                      <p style={{ color: '#666' }}>{championship.season}</p>
                    </div>
                  </div>
                  <div style={{ backgroundColor: '#e3f2fd', padding: '1rem', borderRadius: '8px' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>참가 안내:</h4>
                    <ul style={{ paddingLeft: '1.5rem', fontSize: '0.875rem', color: '#666' }}>
                      <li>라이센스 보유자만 참가 가능</li>
                      <li>사전 등록 필수</li>
                      <li>기술 검사 통과 필요</li>
                      <li>보험 가입 확인</li>
                    </ul>
                  </div>
                </div>
              </IonAccordion>
            ))}
          </IonAccordionGroup>
        </section>
      </div>
      
      <Footer />
    </IonContent>
  );
};

export default Championships; 