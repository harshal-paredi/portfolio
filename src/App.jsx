import React from 'react';

// --- Data Imports ---
// Yahan hum alag-alag JSON data ko seedhe istemal kar rahe hain.
const academicProjectsData = [
  {
    "title": "E-commerce Website for Local Artisans",
    "techStack": ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    "description": "Built a full-stack e-commerce platform for local artisans with user authentication, product management, and secure payment processing.",
    "outcome": "Successfully deployed the application, resulting in a 30% increase in sales for participating artisans within the first three months. The project was awarded 'Best Final Year Project' in the department."
  },
  {
    "title": "Real-time Weather Dashboard",
    "techStack": ["Python", "Flask", "JavaScript", "Chart.js", "OpenWeatherMap API"],
    "description": "Developed a dynamic web app to display real-time global weather data, featuring interactive charts for temperature, humidity, and wind speed.",
    "outcome": "Gained hands-on experience with REST APIs and data visualization libraries. The application was noted for its clean UI and fast response time."
  },
  {
    "title": "Sentiment Analysis of Movie Reviews",
    "techStack": ["Python", "NLTK", "Scikit-learn", "Flask"],
    "description": "Created a machine learning model to perform sentiment analysis on movie reviews, with a Flask web interface for real-time predictions.",
    "outcome": "Achieved an accuracy of 88% on the test dataset. Gained a strong understanding of natural language processing (NLP) techniques and model deployment."
  },
  {
    "title": "COVID-19 Data Analysis and Visualization",
    "techStack": ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    "description": "Analyzed a public COVID-19 dataset to identify regional trends, presenting findings through time-series plots and geographical heatmaps.",
    "outcome": "The project report, including all visualizations, was shared on GitHub and received positive feedback for its clear and insightful presentation of complex data. Developed strong data wrangling and visualization skills."
  }
];

const addressData = {
  "permanent": { "street": "B 302 Dwarkadhish Ap Gokuldham Soc", "city": "Junagadh", "state": "Gujarat", "zipCode": "362001", "country": "India" },
  "current": { "street": "150 Feet Ring Road", "city": "Rajkot", "state": "Gujarat", "zipCode": "360005", "country": "India" },
  "correspondence": { "street": "150 Feet Ring Road", "city": "Rajkot", "state": "Gujarat", "zipCode": "360005", "country": "India" }
};

const certificationData = [
  { "courseName": "Google Data Analytics Professional Certificate", "platform": "Coursera", "date": "2025-07-15", "credentialURL": "https://www.coursera.org/account/accomplishments/specialization/certificate" },
  { "courseName": "The Complete 2024 Web Development Bootcamp", "platform": "Udemy", "date": "2024-12-20", "credentialURL": "https://www.udemy.com/certificate/GUID/" },
  { "courseName": "AWS Certified Cloud Practitioner", "platform": "Amazon Web Services", "date": "2024-07-01", "credentialURL": "https://www.credly.com/badges/BADGE-ID" },
  { "courseName": "Certified Associate in Python Programming (PCAP)", "platform": "Python Institute", "date": "2023-09-10", "credentialURL": "https://www.credly.com/badges/PYTHON-BADGE" },
  { "courseName": "Microsoft Certified: Azure Fundamentals (AZ-900)", "platform": "Microsoft", "date": "2024-02-18", "credentialURL": "https://learn.microsoft.com/en-us/users/harshalparedi/credentials/AZ-900" }
];

const emergencyContactData = [
  { "name": "Hitesh Paredi", "relation": "Father", "phone": "+91-9328891553", "address": "B 302 Dwarkadhish Ap, Junagadh, Gujarat, 362001" },
  { "name": "Ravi Hadwani", "relation": "Friend", "phone": "+91-9574452947", "address": "KKV Hall, Rajkot, Gujarat, 360001" }
];

const languageSkillData = {
  "languages": [
    { "name": "English", "spoken": "Fluent", "written": "Professional", "reading": "Professional" },
    { "name": "Hindi", "spoken": "Fluent", "written": "Proficient", "reading": "Proficient" },
    { "name": "Gujarati", "spoken": "Native", "written": "Native", "reading": "Native" }
  ]
};

const socialProfilesData = {
  "linkedIn": "https://www.linkedin.com/in/harshal_paredi",
  "github": "https://github.com/harshal_paredi",
  "instagram": "https://www.instagram.com/hey_hxrsh",
  "twitter": "https://twitter.com/harshal_paredi"
};

// --- Icon Components ---
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);
const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.849-.757-.024-1.467-.232-2.094-.577v.062c0 2.248 1.605 4.125 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.598 1.845 2.333 3.197 4.394 3.233-1.595 1.248-3.604 1.991-5.79 1.991-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.475 2.323-2.41z"/></svg>
);
const CertificateIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
);
const ExternalLinkIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
);


// --- Main App Component ---
const App = () => {
    // Helper function to format date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-IN', options);
    };

    // CSS styles ko ek string mein define kiya gaya hai.
    const styles = `
        body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif; }
        .portfolio-body { background-color: #F3F4F6; min-height: 100vh; color: #1F2937; }
        .container { max-width: 1550px; margin-left: auto; margin-right: auto; padding: 1rem; }
        .header { background-color: #ffffff; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); padding: 1.5rem; margin-bottom: 2rem; text-align: center; }
        .header-title { font-size: 2.25rem; line-height: 2.5rem; font-weight: 700; color: #111827; }
        .header-subtitle { font-size: 1.125rem; line-height: 1.75rem; color: #4B5563; margin-top: 0.5rem; }
        .social-links { display: flex; justify-content: center; gap: 1rem; margin-top: 1.5rem; }
        .social-links a { color: #6B7280; transition: color 0.3s; }
        .social-links a:hover { color: #3B82F6; } /* Default hover */
        .social-links a.github-icon:hover { color: #111827; }
        .social-links a.insta-icon:hover { color: #EC4899; }
        .social-links a.twitter-icon:hover { color: #38BDF8; }
        .main-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .left-column, .right-column { display: flex; flex-direction: column; gap: 2rem; }
        .section-title { font-size: 1.875rem; line-height: 2.25rem; font-weight: 700; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 4px solid #3B82F6; }
        .card { background-color: #ffffff; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); padding: 1.5rem; transition: box-shadow 0.3s; }
        .card:hover { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
        .project-title { font-size: 1.25rem; line-height: 1.75rem; font-weight: 700; color: #111827; }
        .tech-stack { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.75rem 0; }
        .tech-badge { background-color: #DBEAFE; color: #1E40AF; font-size: 0.75rem; font-weight: 600; padding: 0.25rem 0.625rem; border-radius: 9999px; }
        .description { color: #374151; margin-bottom: 0.75rem; }
        .outcome { font-size: 0.875rem; line-height: 1.25rem; color: #4B5563; background-color: #F9FAFB; padding: 0.75rem; border-radius: 0.5rem; }
        .outcome strong { color: #1F2937; font-weight: 600; }
        .cert-list, .lang-list, .address-section, .emergency-section { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 1rem; }
        .cert-item, .lang-item { display: flex; align-items: flex-start; }
        .cert-icon { height: 1.25rem; width: 1.25rem; margin-right: 0.5rem; display: inline-block; color: #3B82F6; }
        .cert-link { font-weight: 700; color: #111827; text-decoration: none; }
        .cert-link:hover { color: #3B82F6; }
        .external-link-icon { height: 1rem; width: 1rem; margin-left: 0.25rem; display: inline-block; }
        .cert-details { font-size: 0.875rem; line-height: 1.25rem; color: #4B5563; }
        .cert-details .italic { font-style: italic; }
        .section-title-sm { font-size: 1.5rem; line-height: 2rem; font-weight: 700; margin-bottom: 1rem; }
        .address-item, .contact-item { margin-bottom: 1rem; }
        .item-title { font-weight: 700; color: #111827; }
        .item-text { color: #374151; }
        .item-text-sm { font-size: 0.875rem; line-height: 1.25rem; color: #4B5563; }
        .contact-relation { font-size: 0.875rem; line-height: 1.25rem; font-weight: 400; color: #6B7280; }
        .footer { text-align: center; margin-top: 3rem; padding-top: 1rem; padding-bottom: 1rem; color: #6B7280; }
        
        @media (min-width: 768px) {
            .container { padding: 2rem; }
            .header { text-align: left; display: flex; align-items: center; justify-content: space-between; }
            .header-title { font-size: 3rem; line-height: 1; }
            .social-links { justify-content: flex-end; margin-top: 0; }
        }
        @media (min-width: 1024px) {
            .main-grid { grid-template-columns: repeat(3, 1fr); }
            .left-column { grid-column: span 2 / span 2; }
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="portfolio-body">
                <div className="container">
                    <header className="header">
                        <div>
                            <h1 className="header-title">Harshal Paredi</h1>
                            <p className="header-subtitle">Full Stack Developer & Data Enthusiast</p>
                        </div>
                        <div className="social-links">
                            {socialProfilesData.linkedIn && <a href={socialProfilesData.linkedIn} target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>}
                            {socialProfilesData.github && <a href={socialProfilesData.github} target="_blank" rel="noopener noreferrer" className="github-icon"><GitHubIcon /></a>}
                            {socialProfilesData.instagram && <a href={socialProfilesData.instagram} target="_blank" rel="noopener noreferrer" className="insta-icon"><InstagramIcon /></a>}
                            {socialProfilesData.twitter && <a href={socialProfilesData.twitter} target="_blank" rel="noopener noreferrer" className="twitter-icon"><TwitterIcon /></a>}
                        </div>
                    </header>

                    <main className="main-grid">
                        <div className="left-column">
                            <section id="projects">
                                <h2 className="section-title">Academic Projects</h2>
                                <div className="card-container">
                                    {academicProjectsData.map((project, index) => (
                                        <div key={index} className="card">
                                            <h3 className="project-title">{project.title}</h3>
                                            <div className="tech-stack">
                                                {project.techStack.map((tech, i) => (
                                                    <span key={i} className="tech-badge">{tech}</span>
                                                ))}
                                            </div>
                                            <p className="description">{project.description}</p>
                                            <p className="outcome"><strong>Outcome:</strong> {project.outcome}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section id="certifications">
                                <h2 className="section-title">Certifications</h2>
                                <div className="card">
                                    <ul className="cert-list">
                                        {certificationData.map((cert, index) => (
                                            <li key={index} className="cert-item">
                                                <CertificateIcon className="cert-icon" />
                                                <div>
                                                    <a href={cert.credentialURL} target="_blank" rel="noopener noreferrer" className="cert-link">
                                                        {cert.courseName}
                                                        <ExternalLinkIcon className="external-link-icon" />
                                                    </a>
                                                    <p className="cert-details"><span className="italic">Issued {formatDate(cert.date)}</span></p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="right-column">
                            <section id="languages">
                                <h2 className="section-title-sm">Language Skills</h2>
                                <div className="card">
                                    <ul className="lang-list">
                                        {languageSkillData.languages?.map((lang, index) => (
                                            <li key={index} className="lang-item">
                                                <div>
                                                    <p className="item-title">{lang.name}</p>
                                                    <div className="item-text-sm">
                                                        <span>Spoken: {lang.spoken}</span> 
                                                        <span> Written: {lang.written}</span> 
                                                        <span> Reading: {lang.reading}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <section id="address">
                                <h2 className="section-title-sm">Contact Address</h2>
                                <div className="card">
                                    <div className="address-section">
                                        {addressData.current && (
                                            <div className="address-item">
                                                <h4 className="item-title">Current Address</h4>
                                                <p className="item-text">{addressData.current.street}, {addressData.current.city}, {addressData.current.state} - {addressData.current.zipCode}</p>
                                            </div>
                                        )}
                                        {addressData.permanent && (
                                            <div className="address-item">
                                                <h4 className="item-title">Permanent Address</h4>
                                                <p className="item-text">{addressData.permanent.street}, {addressData.permanent.city}, {addressData.permanent.state} - {addressData.permanent.zipCode}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>

                            <section id="emergency">
                                <h2 className="section-title-sm">Emergency Contacts</h2>
                                <div className="card">
                                    <div className="emergency-section">
                                        {emergencyContactData.map((contact, index) => (
                                            <div key={index} className="contact-item">
                                                <p className="item-title">{contact.name} <span className="contact-relation">({contact.relation})</span></p>
                                                <p className="item-text">{contact.phone}</p>
                                                <p className="item-text-sm">{contact.address}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>

                    <footer className="footer">
                        <p>&copy; {new Date().getFullYear()} Harshal Paredi. All rights reserved.</p>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default App;
