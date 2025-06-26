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
  IonButton,
  IonIcon,
  useIonViewDidEnter
} from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import Footer from '../components/Footer';

interface Document {
  name: string;
  date: string;
  size: string;
}

const Documents: React.FC = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>('regulations');
  const contentRef = useRef<HTMLIonContentElement>(null);

  useIonViewDidEnter(() => {
    // Scroll to top when page enters
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  });

  const regulations2023: Document[] = [
    { name: 'KMF 2023 General Regulations', date: '2023-01-15', size: '2.5MB' },
    { name: 'Road Racing Technical Rules', date: '2023-02-01', size: '1.8MB' },
    { name: 'Motocross Competition Rules', date: '2023-02-15', size: '1.2MB' },
    { name: 'Safety Equipment Standards', date: '2023-03-01', size: '3.1MB' },
    { name: 'Anti-Doping Regulations', date: '2023-03-15', size: '0.9MB' }
  ];

  const regulations2022: Document[] = [
    { name: 'KMF 2022 General Regulations', date: '2022-01-10', size: '2.3MB' },
    { name: 'Road Racing Technical Rules', date: '2022-01-25', size: '1.7MB' },
    { name: 'Motocross Competition Rules', date: '2022-02-10', size: '1.1MB' },
    { name: 'Safety Equipment Standards', date: '2022-02-25', size: '2.9MB' },
    { name: 'Anti-Doping Regulations', date: '2022-03-10', size: '0.8MB' }
  ];

  const results: Document[] = [
    { name: '2024 Road Racing Championship R1', date: '2024-03-15', size: '0.5MB' },
    { name: '2024 Motocross Championship R1', date: '2024-04-01', size: '0.4MB' },
    { name: '2024 Enduro Championship R1', date: '2024-05-01', size: '0.3MB' },
    { name: '2023 Final Championship Results', date: '2023-12-01', size: '1.2MB' },
    { name: '2023 Season Statistics', date: '2023-12-15', size: '0.8MB' }
  ];

  const entryLists: Document[] = [
    { name: '2024 Road Racing Entry List', date: '2024-03-01', size: '0.2MB' },
    { name: '2024 Motocross Entry List', date: '2024-03-15', size: '0.3MB' },
    { name: '2024 Enduro Entry List', date: '2024-04-01', size: '0.2MB' },
    { name: '2024 Trial Entry List', date: '2024-05-01', size: '0.1MB' },
    { name: '2024 Supermoto Entry List', date: '2024-04-15', size: '0.2MB' }
  ];

  const notices: Document[] = [
    { name: '2024 Season Calendar Update', date: '2024-02-15', size: '0.1MB' },
    { name: 'Safety Protocol Changes', date: '2024-02-01', size: '0.3MB' },
    { name: 'Registration Deadline Notice', date: '2024-01-20', size: '0.1MB' },
    { name: 'Technical Regulation Updates', date: '2024-01-10', size: '0.4MB' },
    { name: 'COVID-19 Guidelines', date: '2024-01-05', size: '0.2MB' }
  ];

  const DocumentTable: React.FC<{ documents: Document[], title: string }> = ({ documents, title }) => (
    <IonCard style={{ marginBottom: '1.5rem' }}>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <th style={{ textAlign: 'left', padding: '0.5rem', fontWeight: 'bold' }}>Document Name</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', fontWeight: 'bold' }}>Date</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', fontWeight: 'bold' }}>Size</th>
                <th style={{ textAlign: 'left', padding: '0.5rem', fontWeight: 'bold' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '0.75rem' }}>{doc.name}</td>
                  <td style={{ padding: '0.75rem', color: '#666' }}>{doc.date}</td>
                  <td style={{ padding: '0.75rem', color: '#666' }}>{doc.size}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <IonButton fill="clear" size="small">
                      <IonIcon icon={downloadOutline} slot="start" />
                      Download
                    </IonButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </IonCardContent>
    </IonCard>
  );

  const renderContent = () => {
    switch (selectedSegment) {
      case 'regulations':
        return (
          <>
            <DocumentTable documents={regulations2023} title="2023 Regulations" />
            <DocumentTable documents={regulations2022} title="2022 Regulations" />
          </>
        );
      case 'results':
        return <DocumentTable documents={results} title="Competition Results" />;
      case 'entry-lists':
        return <DocumentTable documents={entryLists} title="Entry Lists" />;
      case 'notices':
        return <DocumentTable documents={notices} title="Official Notices" />;
      default:
        return (
          <>
            <DocumentTable documents={regulations2023} title="2023 Regulations" />
            <DocumentTable documents={regulations2022} title="2022 Regulations" />
          </>
        );
    }
  };

  return (
    <IonContent ref={contentRef} fullscreen>
      <div className="content-section">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
          Documents
        </h1>
        
        <IonSegment 
          value={selectedSegment} 
          onIonChange={e => setSelectedSegment(e.detail.value as string)}
          style={{ marginBottom: '2rem' }}
        >
          <IonSegmentButton value="regulations">
            <IonLabel>Regulations</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="results">
            <IonLabel>Results</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="entry-lists">
            <IonLabel>Entry Lists</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="notices">
            <IonLabel>Official Notices</IonLabel>
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

export default Documents; 