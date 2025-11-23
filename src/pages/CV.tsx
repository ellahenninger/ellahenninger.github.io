

import { cvSections } from './CVData';
import cvPdf from '../assets/CV.pdf';

// Helper to detect the Skills section
function isSkillsSection(title: string) {
    return title.toLowerCase().includes('skills');
}

export default function CVPage() {
    const sectionIds = cvSections.map(s => s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''));
    return (
        <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 1100, margin: '3.5rem auto' }}>
            {/* Floating vertical tab menu */}
            <nav
                className="cv-tab-bar-vertical"
                style={{
                    position: 'sticky',
                    top: '3.5rem',
                    alignSelf: 'flex-start',
                    minWidth: 180,
                    marginRight: 32,
                    zIndex: 10,
                    background: 'none',
                    padding: 0,
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem', marginBottom: '2.2rem' }}>
                <a
                    href={cvPdf}
                    download
                    style={{
                        display: 'inline-block',
                        marginTop: '0.7rem',
                        background: '#222222',
                        color: '#fff',
                        fontWeight: 500,
                        fontSize: '1.04rem',
                        borderRadius: 8,
                        padding: '0.48em 1.5em',
                        textDecoration: 'none',
                        boxShadow: '0 1px 4px rgba(32,82,149,0.08)',
                        transition: 'background 0.18s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = '#000000ff')}
                    onMouseOut={e => (e.currentTarget.style.background = '#222222')}
                >
                    Download PDF
                </a>
            </div>
                <style>{`
                    .cv-tab-btn {
                        background: none;
                        color: #222;
                        border: none;
                        border-radius: 1.2rem;
                        padding: 0.38em 1.1em;
                        font-weight: 400;
                        font-size: 1.01rem;
                        cursor: pointer;
                        text-decoration: none !important;
                        display: block;
                        margin: 0.1rem 0;
                        transition: color 0.16s, font-weight 0.16s, background 0.16s;
                    }
                    .cv-tab-btn.active, .cv-tab-btn:focus {
                        color: #111 !important;
                        background: #f5f5f7 !important;
                        font-weight: 600;
                    }
                    .cv-tab-btn:hover:not(.active) {
                        color: #333;
                        background: #f5f5f7;
                    }
                `}</style>
                {cvSections.map((section, idx) => (
                    <a
                        key={section.title}
                        href={`#${sectionIds[idx]}`}
                        className="cv-tab-btn"
                        tabIndex={0}
                    >
                        {section.title}
                    </a>
                ))}
            </nav>
            <main
                className="cv-page"
                style={{
                    flex: 1,
                    maxWidth: 900,
                    padding: '2.5rem 1.2rem',
                    background: '#fff',
                    borderRadius: 14,
                    boxShadow: '0 2px 16px rgba(32,82,149,0.08)'
                }}
            >
            <style>{`
                .cv-page a {
                    color: #222222 !important;
                    text-decoration: underline;
                    transition: color 0.18s;
                }
                .cv-page a:hover {
                    color: #000 !important;
                }
                .cv-page a[download] {
                    color: #fff !important;
                    text-decoration: none;
                }
                .cv-page a[download]:hover {
                    color: #fff !important;
                }
                .cv-tab-btn.active, .cv-tab-btn:focus {
                    color: #111 !important;
                    background: #f5f5f7 !important;
                    border-radius: 1.2rem;
                    font-weight: 600;
                }
            `}</style>
            
            {cvSections.map((section, idx) => {
                const isSkills = isSkillsSection(section.title);
                return (
                    <Section key={section.title} title={section.title} divider={idx !== cvSections.length - 1} id={sectionIds[idx]}>
                        {isSkills ? (
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.7rem',
                                marginTop: 8,
                                justifyContent: 'center',
                            }}>
                                {section.items.map((item, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            display: 'inline-block',
                                            background: '#222222',
                                            color: '#f1f1f1ff',
                                            borderRadius: 14,
                                            padding: '0.38em 1.1em',
                                            fontSize: '1.01rem',
                                            fontWeight: 500,
                                            letterSpacing: 0.01,
                                        }}
                                    >
                                        {item.title}
                                        {item.content ? `: ${item.content}` : ''}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            section.items.map((item, i) => (
                                <CVItem key={i} years={item.years} title={item.title}>
                                    {item.content}
                                </CVItem>
                            ))
                        )}
                    </Section>
                );
            })}
        </main>
        </div>
    );
}

function Section({ title, children, divider, id }: { title: string, children: React.ReactNode, divider?: boolean, id?: string }) {
    return (
        <section
            id={id}
            style={{
                marginBottom: '2.5rem',
                padding: '2.2rem 2.2rem 2rem 3.5rem', // extra left padding for connector
                borderBottom: divider ? '1.5px solid #e5e8ef' : undefined,
                background: '#f8fafc',
                borderRadius: 10,
                boxShadow: divider ? 'none' : '0 1px 4px rgba(32,82,149,0.03)',
            }}
        >
            <h2 style={{ fontSize: '1.35rem', color: '#222222', fontWeight: 600, marginBottom: '1.1rem', letterSpacing: 0.01, textAlign: 'center' }}> {title} </h2>
            <div>{children}</div>
        </section>
    );
}

function CVItem({ years, title, children }: { years?: string, title?: string, children?: React.ReactNode }) {
    return (
        <div
            style={{
                marginBottom: '1.1rem',
                display: 'grid',
                gridTemplateColumns: years ? '180px 1fr' : '1fr',
                gap: '1.2rem',
                alignItems: 'start',
                wordBreak: 'break-word',
            }}
        >
            {years && (
                <div
                    style={{
                        color: '#888',
                        fontSize: '0.98rem',
                        fontWeight: 500,
                        textAlign: 'right',
                        paddingRight: 8,
                        lineHeight: 1.5,
                        minWidth: 0,
                        whiteSpace: 'pre-line',
                    }}
                >
                    {years}
                </div>
            )}
            <div style={{ flex: 1, minWidth: 0 }}>
                {title && <div style={{ fontWeight: 500, marginBottom: 2, color: '#222222' }}>{title}</div>}
                {children && <div style={{ fontSize: '1.04rem', lineHeight: 1.5, color: '#444' }}>{children}</div>}
            </div>
        </div>
    );
    {/* Vertical connector line */ }
    <div
        style={{
            position: 'absolute',
            left: 36,
            top: 'calc(120px + 2.5rem)',
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, #e5e8ef 60%, #d0d6e1 100%)',
            zIndex: 1,
            borderRadius: 2,
            pointerEvents: 'none',
        }}
    />
}
