import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram, logoYoutube } from 'ionicons/icons';

const Footer: React.FC = () => {
    return (
        <footer style={{
            background: 'linear-gradient(135deg, #012557 0%, #013298 100%)',
            color: 'white',
            padding: '3rem 1rem 1rem',
            marginTop: '4rem'
        }}>
            {/* Social Media Icons */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '3rem',
                marginBottom: '3rem',
                paddingBottom: '2rem',
                borderBottom: '1px solid rgba(255,255,255,0.2)'
            }}>
                <IonIcon
                    icon={logoFacebook}
                    style={{ fontSize: '2rem', cursor: 'pointer', opacity: 0.8 }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
                />
                <IonIcon
                    icon={logoInstagram}
                    style={{ fontSize: '2rem', cursor: 'pointer', opacity: 0.8 }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
                />
                <IonIcon
                    icon={logoYoutube}
                    style={{ fontSize: '2rem', cursor: 'pointer', opacity: 0.8 }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
                />
            </div>

            {/* Partner Logos */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4rem',
                marginBottom: '3rem',
                flexWrap: 'wrap'
            }}>
                <div style={{
                    padding: '1rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '120px',
                    height: '60px'
                }}>
                    <img 
                        src="/motul-logo.svg" 
                        alt="MOTUL" 
                        style={{ 
                            maxHeight: '40px', 
                            maxWidth: '100px',
                            width: 'auto',
                            height: 'auto'
                        }} 
                    />
                </div>
                <div style={{
                    padding: '1rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '120px',
                    height: '60px'
                }}>
                    <img 
                        src="/hertz-logo.svg" 
                        alt="Hertz" 
                        style={{ 
                            maxHeight: '40px', 
                            maxWidth: '100px',
                            width: 'auto',
                            height: 'auto'
                        }} 
                    />
                </div>
                <div style={{
                    padding: '1rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '120px',
                    height: '60px'
                }}>
                    <img 
                        src="/redsoda-logo.png" 
                        alt="REDSODA" 
                        style={{ 
                            maxHeight: '40px', 
                            maxWidth: '100px',
                            width: 'auto',
                            height: 'auto'
                        }} 
                    />
                </div>
            </div>

            {/* Bottom Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.2)',
                flexWrap: 'wrap',
                gap: '1rem'
            }}>
                {/* Left: FIM Logo and Text */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <img
                        src="/kmf-logo-footer.png"
                        alt="KMF Logo"
                        style={{
                            marginLeft: '1em',
                            height: '40px',
                            width: 'auto',
                        }}
                    />
                    <div style={{
                        fontSize: '0.7rem',
                        opacity: 0.8,
                        lineHeight: '1.6'
                    }}>
                       <div>대한모터사이클연맹(KMF) | 회장 : 이동기 | 고유번호 : 121-82-94081 | 주소 : 경기도 남양주시 다산자금로163번길6 239호</div>
                       <div>개인정보 관리담당자 : 이승재 | 대표전화 : 02) 591-0088 | 팩스번호 : 02) 533-7953 | E-mail : info@kmf.or.kr</div>
                    </div>
                </div>

                {/* Right: Links and Copyright */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.5rem'
                }}>
                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        fontSize: '0.9rem',
                        marginRight: '1em',
                    }}>
                        <span style={{ cursor: 'pointer', opacity: 0.8 }}>서비스이용약관</span>
                        <span style={{ opacity: 0.6 }}>/</span>
                        <span style={{ cursor: 'pointer', opacity: 0.8 }}>개인정보처리방침</span>
                        <span style={{ opacity: 0.6 }}>/</span>
                        <span style={{ cursor: 'pointer', opacity: 0.8 }}>문의하기</span>
                    </div>
                    <div style={{
                        fontSize: '0.8rem',
                        opacity: 0.6,
                        textAlign: 'right',
                        marginRight: '1em',
                    }}>
                        <span>©KMF 2025 - All rights reserved - </span>
                        <span style={{ cursor: 'pointer' }}>Legal mentions</span>
                        <span> - </span>
                        <span style={{ cursor: 'pointer' }}>Privacy policy</span>
                        <span> - </span>
                        <span style={{ cursor: 'pointer' }}>Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 