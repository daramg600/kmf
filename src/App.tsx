import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonPage,
  IonRouterOutlet,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  setupIonicReact
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { home, trophy, shield, document, calendar, leaf, people, newspaper } from 'ionicons/icons';


// Import our custom pages
import Home from './pages/Home';
import Championships from './pages/Championships';
import Safety from './pages/Safety';
import Documents from './pages/Documents';
import Events from './pages/Events';
import Initiatives from './pages/Initiatives';
import Footer from './components/Footer';
import Header from './components/Header';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables - Light mode only */
import './theme/variables.css';

setupIonicReact();

// 햄버거 메뉴용 전체 메뉴
const sideMenuItems = [
  { name: 'Home', link: '/home', icon: home },
  { name: 'About KMF', link: '/results', icon: home },
  { name: 'Race Info', link: '/championships', icon: trophy },
  { name: 'Safety & Regulations', link: '/safety', icon: shield },
  { name: 'Documents', link: '/documents', icon: document },
  { name: 'Events', link: '/events', icon: calendar },
  { name: 'Initiatives', link: '/initiatives', icon: leaf },
  { name: 'License', link: '/news', icon: shield },
  { name: 'Riders', link: '/riders', icon: people },
  { name: 'Notice', link: '/results', icon: newspaper },
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* 사이드 메뉴 (모바일용) */}
      <IonMenu contentId="main" type="overlay" side="start">
        <IonContent style={{ '--background': 'linear-gradient(180deg, #04265c 0%, #012557 100%)' }}>
          <IonList style={{ background: 'transparent' }}>
            {/* 로고 헤더 */}
            <IonItem 
              style={{ '--background': 'transparent' }}
              button
              routerLink="/home"
              className="logo-item"
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'left', 
                justifyContent: 'left',
                padding: '1rem 0',
                width: '100%',
                cursor: 'pointer'
              }}>
                <img 
                  src="/kmf-logo-s.png" 
                  alt="KMF Logo" 
                  style={{ 
                    height: '34px', 
                    width: 'auto'
                  }} 
                />
              </div>
            </IonItem>
            
            {/* 메뉴 아이템들 */}
            {sideMenuItems.map((item, index) => (
              <IonItem 
                key={index} 
                routerLink={item.link} 
                routerDirection="none" 
                lines="none" 
                detail={false}
                button
                style={{ '--background': 'transparent', '--color': 'white' }}
              >
                <IonIcon 
                  slot="start" 
                  icon={item.icon} 
                  style={{ color: 'white' }}
                />
                <IonLabel style={{ color: 'white' }}>{item.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <IonPage>
            <Header />
            <Home />
          </IonPage>
        </Route>
        <Route exact path="/championships">
          <IonPage>
            <Header />
            <Championships />
          </IonPage>
        </Route>
        <Route exact path="/safety">
          <IonPage>
            <Header />
            <Safety />
          </IonPage>
        </Route>
        <Route exact path="/documents">
          <IonPage>
            <Header />
            <Documents />
          </IonPage>
        </Route>
        <Route exact path="/events">
          <IonPage>
            <Header />
            <Events />
          </IonPage>
        </Route>
        <Route exact path="/initiatives">
          <IonPage>
            <Header />
            <Initiatives />
          </IonPage>
        </Route>
        <Route exact path="/news">
          <IonPage>
            <Header />
            <IonContent>
              <div className="content-section">
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
                  News
                </h1>
                <p style={{ textAlign: 'center', color: '#666' }}>뉴스 페이지가 곧 추가될 예정입니다.</p>
              </div>
              <Footer />
            </IonContent>
          </IonPage>
        </Route>
        <Route exact path="/riders">
          <IonPage>
            <Header />
            <IonContent>
              <div className="content-section">
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
                  Riders
                </h1>
                <p style={{ textAlign: 'center', color: '#666' }}>라이더 페이지가 곧 추가될 예정입니다.</p>
              </div>
              <Footer />
            </IonContent>
          </IonPage>
        </Route>
        <Route exact path="/results">
          <IonPage>
            <Header />
            <IonContent>
              <div className="content-section">
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
                  Results
                </h1>
                <p style={{ textAlign: 'center', color: '#666' }}>결과 페이지가 곧 추가될 예정입니다.</p>
              </div>
              <Footer />
            </IonContent>
          </IonPage>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App; 