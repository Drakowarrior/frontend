import React from 'react';
import { Award, ExternalLink, FolderOpen } from 'lucide-react';

const Certificates = () => {
  // Update this link with your actual Google Drive folder link
  const certificatesDriveLink = 'https://drive.google.com/drive/folders/1_lhwqoDvvglL_YSutfVE_99rlUegMnTG?usp=sharing';
  const badgesDriveLink = 'https://drive.google.com/drive/folders/1PtOTCGGw4oYwvPtWLEV2jt20hYvnOze4?usp=sharing';

  return (
    <section id="certificates" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Certificates & Badges</h2>
          <p className="section-subtitle">My achievements and recognitions</p>
        </div>

        <div className="certificates-drive-container">
          <div className="drive-link-card">
            <div className="drive-card-icon badge-icon">
              <Award size={48} />
            </div>
            <h3 className="drive-card-title">Certificates</h3>
            <p className="drive-card-description">
              View all my professional certificates and course completions
            </p>
            <div 
              size="lg" 
              className="drive-btn"
              onClick={() => window.open(certificatesDriveLink, '_blank')}
            >
              <FolderOpen size={20} className="mr-2" />
              View All Certificates
              <ExternalLink size={18} className="ml-2" />
            </div>
          </div>

          <div className="drive-link-card">
            <div className="drive-card-icon badge-icon">
              <Award size={48} />
            </div>
            <h3 className="drive-card-title">Badges & Achievements</h3>
            <p className="drive-card-description">
              Explore my hackathon participations, competitions, and achievements
            </p>
            <div 
              size="lg" 
              className="drive-btn"
              onClick={() => window.open(badgesDriveLink, '_blank')}
            >
              <FolderOpen size={20} className="mr-2" />
              View All Badges
              <ExternalLink size={18} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;