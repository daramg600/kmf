import React, { useState, useEffect } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonIcon, IonList, IonItem, IonLabel, IonPopover, IonMenuButton } from '@ionic/react';
import { menuOutline, closeOutline, home, trophy, shield, document, newspaper } from 'ionicons/icons';

const menuItems = [
  { name: 'Home', link: '/home', icon: home },
  { name: 'About KMF', link: '/results', icon: home },
  { name: 'Race Info', link: '/championships', icon: trophy },
  { name: 'License', link: '/news', icon: shield },
  { name: 'Documents', link: '/documents', icon: document },
  { name: 'Notice', link: '/results', icon: newspaper },
];

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <IonHeader>
        <IonToolbar>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '0.5rem 1rem',
            minHeight: '60px'
          }}>
            {/* 좌측: 햄버거 메뉴 버튼 (모바일만) + 로고 */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {isMobile && <IonMenuButton style={{ color: 'white', marginRight: '0.5rem' }} />}
              <img 
                src="/kmf-logo.png" 
                alt="KMF Logo" 
                style={{ height: '30px', width: 'auto', marginRight: '0.5rem' }} 
              />
              <IonTitle style={{ 
                fontSize: isMobile ? '1rem' : '1.25rem', 
                fontWeight: 'bold',
                padding: '0'
              }}>
              </IonTitle>
            </div>

            {/* 우측: PC 네비게이션 또는 모바일 추가 메뉴 */}
            {!isMobile ? (
              // PC 네비게이션
              <nav style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem'
              }}>
                {menuItems.map((item) => (
                  <IonButton 
                    key={item.name} 
                    fill="clear" 
                    routerLink={item.link}
                    routerDirection="none"
                    style={{ 
                      '--color': '#ffffff',
                      color: '#ffffff',
                      fontWeight: '500',
                      fontSize: '0.9rem',
                      '--padding-start': '0.8rem',
                      '--padding-end': '0.8rem',
                      '--padding-top': '0.4rem',
                      '--padding-bottom': '0.4rem',
                      margin: '0 0.1rem',
                      minWidth: 'auto'
                    }}
                  >
                    {item.name}
                  </IonButton>
                ))}
              </nav>
            ) : (
              // 모바일 추가 메뉴 (필요시)
              <div style={{ 
                display: 'flex', 
                alignItems: 'center' 
              }}>
                <IonButton 
                  fill="clear" 
                  id="mobile-extra-menu"
                  style={{ color: 'white' }}
                  onClick={() => setIsMenuOpen(true)}
                >
                  <IonIcon icon={menuOutline} />
                </IonButton>

                <IonPopover
                  isOpen={isMenuOpen}
                  onDidDismiss={() => setIsMenuOpen(false)}
                  trigger="mobile-extra-menu"
                  side="end"
                  alignment="start"
                  showBackdrop={true}
                >
                  <div style={{ 
                    minWidth: '220px',
                    backgroundColor: 'white'
                  }}>
                    {/* 메뉴 헤더 */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      borderBottom: '1px solid #e0e0e0',
                      background: 'linear-gradient(135deg, #012557 0%, #013298 100%)'
                    }}>
                      <span style={{ 
                        color: 'white', 
                        fontWeight: 'bold',
                        fontSize: '1.1rem'
                      }}>
                        Quick Menu
                      </span>
                      <IonButton 
                        fill="clear" 
                        style={{ color: 'white' }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <IonIcon icon={closeOutline} />
                      </IonButton>
                    </div>

                    {/* 메뉴 아이템들 */}
                    <IonList lines="none">
                      {menuItems.slice(0, 4).map((item) => (
                        <IonItem 
                          key={item.name} 
                          button 
                          routerLink={item.link}
                          routerDirection="none"
                          onClick={() => setIsMenuOpen(false)}
                          style={{
                            '--padding-start': '1.5rem',
                            '--padding-end': '1.5rem',
                            '--padding-top': '0.8rem',
                            '--padding-bottom': '0.8rem'
                          }}
                        >
                          <IonLabel style={{ 
                            fontSize: '1rem',
                            fontWeight: '500',
                            color: '#333'
                          }}>
                            {item.name}
                          </IonLabel>
                        </IonItem>
                      ))}
                    </IonList>
                  </div>
                </IonPopover>
              </div>
            )}
          </div>
        </IonToolbar>
      </IonHeader>
  );
};

export default Header; 