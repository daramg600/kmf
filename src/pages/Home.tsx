import React, { useRef, useState, useEffect } from 'react';
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
  useIonViewDidEnter,
  IonIcon
} from '@ionic/react';
import { chevronBack, chevronForward } from 'ionicons/icons';
import RiderCard from '../components/RiderCard';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const contentRef = useRef<HTMLIonContentElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, slide: 0 });
  const [screenSize, setScreenSize] = useState('desktop');

  // 라이더 데이터
  const riders = [
    { image: "/rider2.png", name: "김춘식", description: "Road Racing / L3" },
    { image: "/rider1.png", name: "박삼룡", description: "Road Racing / L1" },
    { image: "/rider3.png", name: "이말복", description: "Road Racing / L2" },
    { image: "/rider2.png", name: "최영수", description: "Supermoto / L4" },
    { image: "/rider1.png", name: "정호영", description: "Track Racing / L3" },
    { image: "/rider3.png", name: "윤태현", description: "Speed Racing / L2" },
    { image: "/rider3.png", name: "윤태현", description: "Speed Racing / L2" },
    { image: "/rider1.png", name: "윤태현", description: "Speed Racing / L2" },
    { image: "/rider2.png", name: "김민재", description: "Enduro / P" },
    { image: "/rider1.png", name: "이준호", description: "Motocross / A" },
    { image: "/rider3.png", name: "박성철", description: "Trial / P" },
  ];

  // 화면 크기별 슬라이드당 라이더 수
  const getRidersPerSlide = () => {
    if (screenSize === 'mobile') return 2;  // 모바일: 2명
    if (screenSize === 'tablet') return 4;  // 태블릿: 4명
    return 6; // 데스크톱: 6명
  };

  const ridersPerSlide = getRidersPerSlide();
  const totalSlides = Math.ceil(riders.length / ridersPerSlide);

  useIonViewDidEnter(() => {
    // Scroll to top when page enters
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  });

  // 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScreenSize('mobile');
      } else if (window.innerWidth <= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // 초기 설정
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 화면 크기가 변경되면 슬라이드 초기화
  useEffect(() => {
    setCurrentSlide(0);
  }, [screenSize]);

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!isAutoPlaying || totalSlides <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000); // 6초마다 슬라이드 변경

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 드래그 시작
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart({ x: clientX, slide: currentSlide });

    // 터치 이벤트의 기본 동작 방지 (스크롤 등)
    if ('touches' in e) {
      e.preventDefault();
    }
  };

  // 드래그 중
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
  };

  // 드래그 종료
  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);

    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const deltaX = clientX - dragStart.x;

    // 모바일에서는 더 민감하게 반응하도록 threshold 조정
    const threshold = screenSize === 'mobile' ? 30 : 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0 && currentSlide > 0) {
        // 오른쪽으로 드래그 -> 이전 슬라이드
        setCurrentSlide(currentSlide - 1);
      } else if (deltaX < 0 && currentSlide < totalSlides - 1) {
        // 왼쪽으로 드래그 -> 다음 슬라이드
        setCurrentSlide(currentSlide + 1);
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 2000); // 2초 후 자동 슬라이드 재시작
  };

  return (
    <IonContent ref={contentRef} fullscreen>
      {/* Hero Banner */}
      <div className="hero-banner">
        {/* Background Video */}
        <div className="video-background">
          <iframe
            src="https://www.youtube.com/embed/wTkXT4wNzRc?autoplay=1&mute=1&loop=1&playlist=wTkXT4wNzRc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&widget_referrer=https://kmf.co.kr"
            title="KMF Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            style={{
              pointerEvents: 'none'
            }}
          ></iframe>
        </div>

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">Korea Motorcycle Federation</h1>
          <p className="hero-subtitle">대한민국 모터사이클 스포츠의 중심</p>
          <p className="hero-subtitle">FIM이 인증한 대한민국 유일의 모터사이클 연맹</p>
          <IonButton size="large" color="light">
            Learn More
          </IonButton>
        </div>
      </div>

      <div className="content-section" style={{ marginBottom: '0' }}>
        {/* Latest News */}
        <section style={{
          marginBottom: '0rem',
          backgroundColor: 'white',
          padding: '4rem 0 5rem 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="section-title">Latest News</h2>
            <IonCard style={{ marginBottom: '1rem' }}>
              <IonCardHeader>
                <IonCardTitle>KRRC 2025? 시즌 개막!</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    KMF KRRC 2025 시즌이 화려하게 시작되었습니다. 전국 각지에서 열리는 다양한 모터사이클 경기에 많은 관심 부탁드립니다.
                  </p>
                  <IonButton fill="solid" size="small" className="detail-button">
                    자세히 보기
                  </IonButton>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <img
                    src="/kmf-logo-s.png"
                    alt="KMF Logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      opacity: 0.5
                    }}
                  />
                </div>
              </IonCardContent>
            </IonCard>
            <IonCard style={{ marginBottom: '1rem' }}>
              <IonCardHeader>
                <IonCardTitle>YAMAHA YZF R3 CUP 4전</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    2025 KMF가 주관하는 YAMAHA YZF R3 CUP 4전이 개최됩니다. 보다 자세한 내용은 자세히 보기를 놀러 확인하세요!
                  </p>
                  <IonButton fill="solid" size="small" className="detail-button">
                    자세히 보기
                  </IonButton>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <img
                    src="/kmf-logo-s.png"
                    alt="KMF Logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      opacity: 0.5
                    }}
                  />
                </div>
              </IonCardContent>
            </IonCard>
            <IonCard style={{ marginBottom: '1rem' }}>
              <IonCardHeader>
                <IonCardTitle>KMRF 2025 시즌 개막!</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: '#666', marginBottom: '1rem' }}>
                    KMF KMRF 2025 시즌이 화려하게 시작되었습니다.
                  </p>
                  <IonButton fill="solid" size="small" className="detail-button">
                    자세히 보기
                  </IonButton>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <img
                    src="/kmf-logo-s.png"
                    alt="KMF Logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      opacity: 0.5
                    }}
                  />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </section>

        {/* Newly Licensed Riders */}
        <section style={{
          marginBottom: '0rem',
          backgroundColor: '#f8f9fa',
          padding: '4rem 0 5rem 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="section-title">Newly Licensed Riders</h2>

            {/* 슬라이드 컨테이너 */}
            <div
              style={{ position: 'relative', overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => {
                if (!isDragging) {
                  setTimeout(() => setIsAutoPlaying(true), 2000);
                }
              }}
            >
              <div
                ref={sliderRef}
                style={{
                  display: 'flex',
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: isDragging ? 'none' : 'transform 1s ease-in-out',
                  userSelect: 'none'
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
              >
                {Array.from({ length: totalSlides }, (_, slideIndex) => (
                  <div key={slideIndex} style={{ minWidth: '100%', flexShrink: 0 }}>
                    <IonGrid>
                      <IonRow>
                        {riders
                          .slice(slideIndex * ridersPerSlide, (slideIndex + 1) * ridersPerSlide)
                          .map((rider, index) => (
                            <IonCol key={index} size="6" sizeSm="3" sizeMd="2">
                              <RiderCard
                                image={rider.image}
                                name={rider.name}
                                description={rider.description}
                              />
                            </IonCol>
                          ))}
                      </IonRow>
                    </IonGrid>
                  </div>
                ))}
              </div>
            </div>

            {/* 페이지네이션 닷 */}
            <div className="slide-pagination" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem',
              gap: '0.5rem'
            }}>
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={(e) => {
                    if (currentSlide !== index) {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#8a9ba8';
                      (e.target as HTMLButtonElement).style.transform = 'scale(1.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentSlide !== index) {
                      (e.target as HTMLButtonElement).style.backgroundColor = '#d0d0d0';
                      (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                    }
                  }}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: currentSlide === index ? '#0133a0' : '#d0d0d0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: 'scale(1)'
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Official Announcements */}
        <section style={{
          marginBottom: '0rem',
          backgroundColor: 'white',
          padding: '4rem 0 5rem 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="section-title">Official Announcements</h2>
            <IonCard style={{ background: 'linear-gradient(135deg, #013298 0%, #012557 100%)', marginBottom: '1rem' }}>
              <IonCardHeader>
                <IonCardTitle style={{ color: 'white' }}>2025 공식 규정 안내</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                    2025년 공식 규정이 업데이트되었습니다. Documents 메뉴에서 최신 규정을 확인하세요.
                  </p>
                  <IonButton fill="solid" size="small" color="light" className="detail-button">
                    자세히 보기
                  </IonButton>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <img
                    src="/kmf-logo-s.png"
                    alt="KMF Logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      opacity: 0.5
                    }}
                  />
                </div>
              </IonCardContent>
            </IonCard>
            <IonCard style={{ background: 'linear-gradient(135deg, #013298 0%, #012557 100%)', marginBottom: '1rem' }}>
              <IonCardHeader>
                <IonCardTitle style={{ color: 'white' }}>2025 YZF-R3컵 규정 안내</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                    2025년 공식 규정이 업데이트되었습니다.
                  </p>
                  <IonButton fill="solid" size="small" color="light" className="detail-button">
                    자세히 보기
                  </IonButton>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <img
                    src="/kmf-logo-s.png"
                    alt="KMF Logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      opacity: 0.5
                    }}
                  />
                </div>
              </IonCardContent>
            </IonCard>
            <IonCard style={{ background: 'linear-gradient(135deg, #013298 0%, #012557 100%)', marginBottom: '1rem' }}>
              <IonCardHeader>
                <IonCardTitle style={{ color: 'white' }}>안전 수칙 업데이트</IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                    모터사이클 경기의 안전을 위한 새로운 규정이 적용됩니다.
                  </p>
                  <IonButton fill="solid" size="small" color="light" className="detail-button">
                    자세히 보기
                  </IonButton>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <img
                    src="/kmf-logo-s.png"
                    alt="KMF Logo"
                    style={{
                      width: '60px',
                      height: '60px',
                      objectFit: 'contain',
                      opacity: 0.5
                    }}
                  />
                </div>
              </IonCardContent>
            </IonCard>
          </div>
        </section>

        {/* Partner Logos */}
        <section style={{
          marginBottom: '0rem',
          backgroundColor: '#f8f9fa',
          padding: '4rem 0 8rem 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)'

        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Official Partners</h2>
            <div className="partner-grid">
              {[
                { name: 'APEX', logo: '/apex-logo.png', bgColor: '#ffffff' },
                { name: 'SeriesY', logo: '/seriesy-logo.png', bgColor: '#000000' },
                { name: 'APEX', logo: '/apex-logo.png', bgColor: '#ffffff' },
                { name: 'SeriesY', logo: '/seriesy-logo.png', bgColor: '#000000' },
                { name: 'APEX', logo: '/apex-logo.png', bgColor: '#ffffff' },
                { name: 'SeriesY', logo: '/seriesy-logo.png', bgColor: '#000000' },
              ].map((partner, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '2rem',
                  backgroundColor: partner.bgColor,
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-logo"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/apex-logo.png';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FIM Logo */}
        <section style={{
          marginBottom: '0rem',
          backgroundColor: 'white',
          padding: '6rem 0 2rem 0',
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          marginRight: 'calc(50% - 50vw)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0rem' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '0rem' }}></h2>
            <div className="fim-container">
              <img
                src="/fim.jpg"
                alt="FIM ASIA Logo"
                className="fim-logo"
              />
              <img
                src="/fim-asia.jpg"
                alt="FIM ASIA Logo"
                className="fim-logo"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </IonContent>
  );
};

export default Home; 