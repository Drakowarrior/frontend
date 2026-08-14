export const SITE_CONFIG = {
  name: "Karan Garg",
  title: "AI Engineer & Full-Stack Developer",
  email: "unisoldier2022@gmail.com",
  phone: "+91 84471 31813",
  location: "Manipal University Jaipur, India",
  
  // Resume configuration - verified actual PDF in public/
  resumeUrl: "/KaranGarg_Resume.pdf",
  resumeViewerPath: "/resume",
  resumeFileName: "Karan-Garg-Resume.pdf",
  
  // Social & Professional Profiles
  githubUrl: "https://github.com/Drakowarrior",
  linkedinUrl: "https://linkedin.com/in/karan-garg-244b242b1",
  
  // Certifications Common Google Drive Link
  certificationsDriveUrl: "https://drive.google.com/drive/folders/1_lhwqoDvvglL_YSutfVE_99rlUegMnTG",
  
  // Projects
  sarvaLiveUrl: "https://sarva-ai-one.vercel.app/",
  sarvaGithubUrl: "https://github.com/Drakowarrior/sarva-ai"
};

// Helper for programmatic resume download with feedback
export const downloadResume = (onStart, onComplete) => {
  if (onStart) onStart();
  
  try {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + SITE_CONFIG.resumeUrl;
    link.setAttribute('download', SITE_CONFIG.resumeFileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (onComplete) {
      setTimeout(onComplete, 1200);
    }
  } catch (error) {
    console.error("Resume download error:", error);
    // Fallback: open in new tab
    window.open(process.env.PUBLIC_URL + SITE_CONFIG.resumeUrl, '_blank');
    if (onComplete) onComplete();
  }
};
