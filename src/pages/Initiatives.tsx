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

const Initiatives: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>('education');
  const contentRef = useRef<HTMLIonContentElement>(null);

  useIonViewDidEnter(() => {
    // Scroll to top when page enters
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  });

  const educationContent = [
    {
      title: 'Rider Education Programs',
      content: '안전한 모터사이클 문화 조성을 위해 다양한 교육 프로그램을 운영하고 있습니다. 초보자부터 전문가까지 각 수준에 맞는 맞춤형 교육을 제공하여 기술 향상과 안전 의식 제고에 기여하고 있습니다.'
    },
    {
      title: 'Youth Development',
      content: '미래의 모터사이클 스포츠를 이끌어갈 청소년들을 위한 특별 프로그램을 운영합니다. 체계적인 기술 교육과 멘토링을 통해 젊은 라이더들의 성장을 지원하고 있습니다.'
    },
    {
      title: 'Safety Training',
      content: '정기적인 안전 교육을 통해 사고 예방과 응급 상황 대처 능력을 향상시킵니다. 실습 중심의 교육으로 실제 상황에서 활용할 수 있는 실용적인 지식을 제공합니다.'
    }
  ];

  const womenContent = [
    {
      title: 'Women Riders Support',
      content: '여성 라이더들의 참여를 확대하고 지원하기 위한 다양한 프로그램을 운영하고 있습니다. 여성 전용 교육 과정과 네트워킹 기회를 제공하여 더 많은 여성들이 모터사이클 스포츠에 참여할 수 있도록 돕고 있습니다.'
    },
    {
      title: 'Female Role Models',
      content: '성공한 여성 라이더들을 롤모델로 소개하고, 그들의 경험과 노하우를 공유하는 멘토링 프로그램을 운영합니다. 이를 통해 여성 라이더들의 자신감과 기술 향상을 지원합니다.'
    },
    {
      title: 'Gender Equality',
      content: '모터사이클 스포츠 분야에서 성별에 관계없이 공정한 기회를 제공하기 위해 노력하고 있습니다. 다양한 정책과 프로그램을 통해 성평등 문화를 조성하고 있습니다.'
    }
  ];

  const touringContent = [
    {
      title: 'Touring Routes',
      content: '국내 최고의 모터사이클 투어링 코스를 개발하고 홍보하고 있습니다. 안전하고 아름다운 경로를 선정하여 라이더들에게 최고의 투어링 경험을 제공합니다.'
    },
    {
      title: 'Group Tours',
      content: '정기적인 그룹 투어링을 조직하여 라이더들 간의 교류와 소통의 기회를 제공합니다. 경험 많은 가이드와 함께 안전하고 즐거운 투어링을 경험할 수 있습니다.'
    },
    {
      title: 'Tourism Promotion',
      content: '모터사이클 투어리즘 활성화를 통해 지역 경제 발전에 기여하고 있습니다. 지방자치단체와 협력하여 모터사이클 친화적인 관광 인프라 구축을 지원합니다.'
    }
  ];

  const sustainabilityContent = [
    {
      title: 'Environmental Protection',
      content: '환경 보호를 위한 다양한 활동을 전개하고 있습니다. 친환경 연료 사용 권장, 배출가스 저감 기술 도입, 그리고 자연 보호 캠페인을 통해 지속 가능한 모터사이클 문화를 만들어가고 있습니다.'
    },
    {
      title: 'Electric Motorcycle',
      content: '전기 모터사이클의 보급과 발전을 위해 노력하고 있습니다. 전기 모터사이클 경기 개최, 충전 인프라 확충 지원, 그리고 관련 기술 개발을 촉진하고 있습니다.'
    },
    {
      title: 'Green Events',
      content: '모든 KMF 주관 행사에서 친환경 운영을 실천하고 있습니다. 재활용품 사용, 폐기물 최소화, 그리고 탄소 발자국 줄이기를 통해 환경에 미치는 영향을 최소화하고 있습니다.'
    }
  ];

  const renderContent = () => {
    let content;
    switch (selectedSegment) {
      case 'education':
        content = educationContent;
        break;
      case 'women':
        content = womenContent;
        break;
      case 'touring':
        content = touringContent;
        break;
      case 'sustainability':
        content = sustainabilityContent;
        break;
      default:
        content = educationContent;
    }

    return content.map((item, index) => (
      <IonCard key={index} style={{ marginBottom: '1rem', background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)', border: '1px solid #e0e0e0' }}>
        <IonCardHeader>
          <IonCardTitle style={{ color: '#2d3748', fontWeight: 'bold' }}>{item.title}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p style={{ color: '#4a5568', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.content}</p>
        </IonCardContent>
      </IonCard>
    ));
  };

  return (
    <IonContent ref={contentRef} fullscreen>
      <div className="content-section">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
          Initiatives
        </h1>
        
        <IonSegment 
          value={selectedSegment} 
          onIonChange={e => setSelectedSegment(e.detail.value as string)}
          style={{ marginBottom: '2rem' }}
        >
          <IonSegmentButton value="education">
            <IonLabel>Education</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="women">
            <IonLabel>Women in Motorcycling</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="touring">
            <IonLabel>Touring</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="sustainability">
            <IonLabel>Sustainability</IonLabel>
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

export default Initiatives;