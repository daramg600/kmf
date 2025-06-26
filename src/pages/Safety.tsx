import React, { useState, useRef } from 'react';
import { 
  IonContent, 
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  useIonViewDidEnter
} from '@ionic/react';
import Footer from '../components/Footer';

const Safety: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>('safety-guidelines');
  const contentRef = useRef<HTMLIonContentElement>(null);

  useIonViewDidEnter(() => {
    // Scroll to top when page enters
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  });

  const safetyGuidelines = [
    {
      title: 'Rider Safety',
      content: '라이더의 안전은 모든 모터사이클 활동의 최우선 과제입니다. 적절한 보호 장비 착용, 정기적인 건강 검진, 그리고 지속적인 기술 향상을 통해 안전한 라이딩 환경을 조성해야 합니다.'
    },
    {
      title: 'Track Safety',
      content: '트랙의 안전성 확보는 경기 진행의 필수 조건입니다. 정기적인 트랙 점검, 안전 시설 정비, 응급 의료진 배치 등을 통해 모든 참가자가 안전하게 경기에 참여할 수 있도록 합니다.'
    },
    {
      title: 'Event Management',
      content: '이벤트 관리 시 안전 프로토콜 준수가 중요합니다. 사전 안전 브리핑, 응급 상황 대응 계획, 그리고 모든 참가자의 안전 교육을 통해 사고 예방에 최선을 다합니다.'
    }
  ];

  const technicalRules = [
    {
      title: 'Motorcycle Specifications',
      content: '모터사이클은 각 클래스별 기술 규정을 준수해야 합니다. 엔진 배기량, 무게 제한, 안전 장치 등의 세부 사항을 정확히 확인하고 규정에 맞게 준비해야 합니다.'
    },
    {
      title: 'Modifications and Maintenance',
      content: '모터사이클의 개조는 승인된 범위 내에서만 허용됩니다. 정기적인 정비와 점검을 통해 최적의 성능과 안전성을 유지해야 하며, 모든 변경 사항은 사전 승인을 받아야 합니다.'
    },
    {
      title: 'Technical Inspections',
      content: '모든 참가 차량은 경기 전 기술 검사를 통과해야 합니다. 안전 장치, 성능 규격, 그리고 규정 준수 여부를 철저히 점검하여 공정하고 안전한 경기 환경을 보장합니다.'
    }
  ];

  const antiDoping = [
    {
      title: 'Prohibited Substances',
      content: '세계반도핑기구(WADA) 금지 목록에 따라 모든 금지 약물의 사용을 엄격히 금지합니다. 라이더는 복용하는 모든 약물에 대해 사전에 확인하고 필요시 치료용도 사용면제(TUE)를 신청해야 합니다.'
    },
    {
      title: 'Testing Procedures',
      content: '무작위 도핑 검사와 표적 검사를 통해 클린 스포츠 환경을 유지합니다. 검사는 국제 표준에 따라 진행되며, 모든 라이더는 검사에 협조할 의무가 있습니다.'
    },
    {
      title: 'Consequences of Violations',
      content: '도핑 규정 위반 시 경고, 자격 정지, 상금 몰수 등의 제재가 가해집니다. 심각한 위반의 경우 영구 자격 정지 처분을 받을 수 있으며, 모든 기록이 말소됩니다.'
    }
  ];

  const renderContent = () => {
    let content;
    switch (selectedSegment) {
      case 'safety-guidelines':
        content = safetyGuidelines;
        break;
      case 'technical-rules':
        content = technicalRules;
        break;
      case 'anti-doping':
        content = antiDoping;
        break;
      default:
        content = safetyGuidelines;
    }

    return content.map((item, index) => (
      <IonCard key={index} style={{ marginBottom: '1rem' }}>
        <IonCardHeader>
          <IonCardTitle>{item.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p style={{ color: '#666', lineHeight: '1.6' }}>{item.content}</p>
        </IonCardContent>
      </IonCard>
    ));
  };

  return (
    <IonContent ref={contentRef} fullscreen>
      <div className="content-section">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
          Safety & Regulations
        </h1>
        
        <IonSegment 
          value={selectedSegment} 
          onIonChange={e => setSelectedSegment(e.detail.value as string)}
          style={{ marginBottom: '2rem' }}
        >
          <IonSegmentButton value="safety-guidelines">
            <IonLabel>Safety Guidelines</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="technical-rules">
            <IonLabel>Technical Rules</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="anti-doping">
            <IonLabel>Anti-Doping</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <div style={{ marginTop: '1.5rem' }}>
          {renderContent()}
        </div>
      </div>
      
      <Footer />
    </IonContent>
  );
};

export default Safety; 