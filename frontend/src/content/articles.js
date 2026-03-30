export const articles = [
  {
    slug: 'how-to-spot-phishing-emails',
    title: 'How to Spot Phishing Emails Before You Click',
    description: 'Learn a practical checklist to identify fake emails and protect your accounts from phishing attacks.',
    category: 'Phishing',
    readTime: '7 min read',
    publishedDate: '2026-03-01',
    intro:
      'Phishing messages are designed to create urgency and confusion. The good news is that most scams leave clues if you know what to check.',
    sections: [
      {
        heading: 'Red Flags in the Sender and Subject Line',
        paragraphs: [
          'Look for slight spelling changes in domain names, odd punctuation, and subject lines that demand immediate action. Legitimate companies rarely threaten account closure in one email.',
          'When in doubt, do not reply directly. Open a new tab and sign in to the official website from your bookmarks.',
        ],
        bullets: [
          'Unexpected password reset or invoice messages',
          'Attachments from unknown senders',
          'Requests for OTPs, PINs, or card details',
        ],
      },
      {
        heading: 'Verify Links and Attachments Safely',
        paragraphs: [
          'Hover over links before clicking to preview the destination. On mobile, long-press links to inspect the URL. If the link looks unfamiliar, do not open it.',
          'Attachments with macro-enabled documents can install malware. Confirm with the sender through another channel before opening files.',
        ],
      },
      {
        heading: 'What To Do If You Already Clicked',
        paragraphs: [
          'Disconnect from the internet if a suspicious file was downloaded, change affected passwords, and enable two-factor authentication. Report the incident to your email provider and local cybercrime portal.',
        ],
      },
    ],
    faq: [
      { question: 'Are phishing emails always full of grammar mistakes?', answer: 'No. Many are polished. Focus on context, sender identity, and suspicious requests.' },
      { question: 'Can phishing happen through QR codes?', answer: 'Yes. QR phishing is increasing. Scan only trusted codes and inspect the final URL.' },
    ],
    related: ['password-security-basics', 'safe-browsing-habits', 'what-to-do-after-data-breach'],
  },
  {
    slug: 'ransomware-prevention-checklist',
    title: 'Ransomware Prevention Checklist for Home and Small Teams',
    description: 'A practical prevention plan to reduce ransomware risk and recover quickly without panic.',
    category: 'Ransomware',
    readTime: '8 min read',
    publishedDate: '2026-03-02',
    intro:
      'Ransomware can lock your files within minutes. Preparation is the difference between a bad day and a business shutdown.',
    sections: [
      {
        heading: 'Build a Backup Strategy That Actually Works',
        paragraphs: [
          'Use the 3-2-1 backup rule: three copies of data, two different media types, and one offline copy. Test recovery every month.',
        ],
        bullets: ['Versioned cloud backup', 'Offline external drive', 'Automated backup schedule'],
      },
      {
        heading: 'Reduce Infection Paths',
        paragraphs: [
          'Most ransomware starts with phishing, remote desktop exposure, or unpatched software. Close unused services and patch all devices promptly.',
        ],
        bullets: ['Disable macros by default', 'Use endpoint protection', 'Limit admin privileges'],
      },
      {
        heading: 'Incident Response Basics',
        paragraphs: [
          'If encrypted files appear, isolate the device immediately and preserve logs. Contact your cyber insurer or incident response provider if available.',
        ],
      },
    ],
    faq: [
      { question: 'Should you pay ransom?', answer: 'Security experts generally advise against payment because recovery is not guaranteed and payment funds criminal activity.' },
      { question: 'Can antivirus alone stop ransomware?', answer: 'No. You need layered controls including backups, patching, access controls, and user training.' },
    ],
    related: ['malware-basics-for-beginners', 'incident-response-first-hour', 'secure-home-wifi-guide'],
  },
  {
    slug: 'password-security-basics',
    title: 'Password Security Basics: Strong Passwords Without the Stress',
    description: 'Create strong, unique passwords and manage them safely with modern best practices.',
    category: 'Account Security',
    readTime: '6 min read',
    publishedDate: '2026-03-03',
    intro:
      'Password reuse is still one of the biggest reasons accounts get hijacked. A few habits can drastically reduce your risk.',
    sections: [
      {
        heading: 'Use Long Passphrases and a Password Manager',
        paragraphs: [
          'A passphrase of 16+ characters is harder to crack than short complex strings. Store unique passwords in a trusted manager so you do not reuse them.',
        ],
      },
      {
        heading: 'Turn On 2FA Everywhere',
        paragraphs: [
          'Two-factor authentication blocks many takeover attempts even when passwords leak. Prefer authenticator apps or hardware keys over SMS when possible.',
        ],
      },
      {
        heading: 'Audit and Rotate High-Risk Accounts',
        paragraphs: [
          'Prioritize email, banking, and social media accounts. Change credentials immediately after breach alerts or suspicious sign-in notifications.',
        ],
      },
    ],
    faq: [
      { question: 'How often should I change passwords?', answer: 'Change them after compromise or suspicion. Frequent forced changes are less useful than strong unique passwords plus 2FA.' },
      { question: 'Are browser password managers safe?', answer: 'They can be safe for many users, but dedicated managers provide stronger cross-device and sharing controls.' },
    ],
    related: ['two-factor-authentication-guide', 'how-to-spot-phishing-emails', 'social-media-privacy-settings-guide'],
  },
  {
    slug: 'two-factor-authentication-guide',
    title: 'Two-Factor Authentication Guide: SMS vs App vs Security Key',
    description: 'Understand 2FA options and choose the right method for your most important accounts.',
    category: 'Account Security',
    readTime: '7 min read',
    publishedDate: '2026-03-04',
    intro:
      '2FA is one of the fastest ways to improve account security. Not all second factors are equally strong, so setup choices matter.',
    sections: [
      {
        heading: 'Compare 2FA Methods',
        paragraphs: [
          'SMS codes are common but vulnerable to SIM-swap attacks. Authenticator apps are stronger and easier to deploy. Hardware keys are strongest for high-risk users.',
        ],
      },
      {
        heading: 'Configure Backup Access',
        paragraphs: [
          'Store backup codes in a secure location and register at least two second factors. This prevents lockout if your phone is lost.',
        ],
      },
      {
        heading: 'Protect Recovery Options',
        paragraphs: [
          'Attackers often target recovery email and phone settings. Review recovery channels after enabling 2FA.',
        ],
      },
    ],
    faq: [
      { question: 'Is SMS 2FA better than no 2FA?', answer: 'Yes. SMS is not perfect but still much better than password-only accounts.' },
      { question: 'Do I need 2FA on every account?', answer: 'Start with email, financial services, social media, and cloud storage.' },
    ],
    related: ['password-security-basics', 'hacked-social-media-recovery', 'account-recovery-plan-template'],
  },
  {
    slug: 'hacked-social-media-recovery',
    title: 'Hacked Social Media Recovery: A Step-by-Step Plan',
    description: 'Recover compromised social accounts and reduce the chance of repeat attacks.',
    category: 'Recovery',
    readTime: '8 min read',
    publishedDate: '2026-03-05',
    intro:
      'When social accounts are hijacked, speed matters. Take control of sessions, recovery options, and public communication quickly.',
    sections: [
      {
        heading: 'Lock Down Access',
        paragraphs: [
          'Reset the password from a trusted device, sign out of all sessions, and review connected apps. Remove unknown integrations and API tokens.',
        ],
      },
      {
        heading: 'Recover Trust With Your Audience',
        paragraphs: [
          'Post a short security notice to warn followers about suspicious messages and fake payment requests sent during compromise.',
        ],
      },
      {
        heading: 'Prevent Repeat Compromise',
        paragraphs: [
          'Enable stronger 2FA and review account email security. Many social compromises begin with a breached email account.',
        ],
      },
    ],
    faq: [
      { question: 'What if I cannot log in at all?', answer: 'Use official account recovery pages and provide identity verification where required.' },
      { question: 'Should I create a new account immediately?', answer: 'Recover first when possible. New accounts can confuse followers and lose recovery evidence.' },
    ],
    related: ['two-factor-authentication-guide', 'how-to-spot-phishing-emails', 'reporting-online-scams-effectively'],
  },
  {
    slug: 'safe-browsing-habits',
    title: 'Safe Browsing Habits That Prevent Everyday Cyber Risks',
    description: 'Simple browsing behaviors that reduce malware, phishing, and identity theft risk.',
    category: 'Online Safety',
    readTime: '6 min read',
    publishedDate: '2026-03-06',
    intro:
      'Most internet threats rely on rushed clicks. Slow down, verify context, and use browser security features intentionally.',
    sections: [
      {
        heading: 'Check URLs and Website Identity',
        paragraphs: [
          'Typosquatting domains mimic trusted brands with minor spelling changes. Bookmark important services and avoid login pages from ads or random messages.',
        ],
      },
      {
        heading: 'Use Browser Security Features',
        paragraphs: [
          'Keep browser updates enabled, block popups by default, and use built-in safe browsing protections. Remove unused extensions regularly.',
        ],
      },
      {
        heading: 'Treat Downloads as Risky by Default',
        paragraphs: [
          'Only download software from official vendor pages. Verify digital signatures for high-risk tools and avoid cracked software sources.',
        ],
      },
    ],
    faq: [
      { question: 'Is HTTPS always safe?', answer: 'HTTPS encrypts traffic but does not guarantee the website is trustworthy.' },
      { question: 'Are ad blockers useful for safety?', answer: 'Yes. They can reduce malicious ad exposure and improve page performance.' },
    ],
    related: ['secure-home-wifi-guide', 'malware-basics-for-beginners', 'how-to-spot-phishing-emails'],
  },
  {
    slug: 'reporting-online-scams-effectively',
    title: 'How to Report Online Scams Effectively',
    description: 'Report cyber scams with useful evidence to improve response speed and outcomes.',
    category: 'Reporting',
    readTime: '7 min read',
    publishedDate: '2026-03-07',
    intro:
      'Good reporting protects both you and others. The quality of evidence often determines how fast investigators can act.',
    sections: [
      {
        heading: 'Collect Evidence First',
        paragraphs: [
          'Capture full screenshots with timestamps, transaction IDs, sender handles, and URLs. Save original messages without editing.',
        ],
      },
      {
        heading: 'File in the Correct Channels',
        paragraphs: [
          'Submit to your national cybercrime portal, platform abuse teams, and financial providers. Include concise timelines and contact details.',
        ],
      },
      {
        heading: 'Follow Up and Monitor',
        paragraphs: [
          'Track complaint numbers, check account activity, and update reports with new evidence. Early follow-up can improve recovery possibilities.',
        ],
      },
    ],
    faq: [
      { question: 'Can I report if I did not lose money?', answer: 'Yes. Reporting attempted scams helps authorities identify patterns and stop wider campaigns.' },
      { question: 'How fast should I report payment fraud?', answer: 'Immediately. The first few hours are critical for possible transaction reversal.' },
    ],
    related: ['hacked-social-media-recovery', 'incident-response-first-hour', 'what-to-do-after-data-breach'],
  },
  {
    slug: 'social-media-privacy-settings-guide',
    title: 'Social Media Privacy Settings Guide for 2026',
    description: 'Review privacy controls that reduce oversharing, impersonation risk, and account abuse.',
    category: 'Privacy',
    readTime: '7 min read',
    publishedDate: '2026-03-08',
    intro:
      'Privacy settings change often. A quarterly review helps you control who sees your content and how your data is used.',
    sections: [
      {
        heading: 'Control Profile Visibility',
        paragraphs: [
          'Limit who can view contact information, friends lists, and tagged content. Public-by-default settings increase impersonation and social engineering risk.',
        ],
      },
      {
        heading: 'Restrict DMs and Mention Permissions',
        paragraphs: [
          'Reduce spam and harassment by limiting who can message, mention, or add you to groups. Use keyword filters where available.',
        ],
      },
      {
        heading: 'Audit App Permissions',
        paragraphs: [
          'Remove stale third-party app access and reset your session logins. Revoke permissions that no longer serve a clear purpose.',
        ],
      },
    ],
    faq: [
      { question: 'Should my profile be private?', answer: 'For most personal users, yes. Public profiles should be intentional and carefully managed.' },
      { question: 'Do old posts matter?', answer: 'Yes. Old public posts can leak personal details used in targeted scams.' },
    ],
    related: ['hacked-social-media-recovery', 'password-security-basics', 'safe-browsing-habits'],
  },
  {
    slug: 'what-to-do-after-data-breach',
    title: 'What to Do After a Data Breach Alert',
    description: 'A calm, ordered response plan after receiving data breach notifications.',
    category: 'Breach Response',
    readTime: '6 min read',
    publishedDate: '2026-03-09',
    intro:
      'Breach alerts can be overwhelming, but a structured response prevents further damage. Focus on priority accounts first.',
    sections: [
      {
        heading: 'Prioritize Critical Accounts',
        paragraphs: [
          'Start with email, banking, and cloud storage. Change passwords, enable 2FA, and review recovery settings immediately.',
        ],
      },
      {
        heading: 'Watch Financial and Identity Signals',
        paragraphs: [
          'Monitor statements, credit activity, and login alerts. Set transaction notifications and investigate unknown activity quickly.',
        ],
      },
      {
        heading: 'Harden Long-Term Security',
        paragraphs: [
          'Move to a password manager, rotate reused credentials, and review your phishing awareness habits.',
        ],
      },
    ],
    faq: [
      { question: 'Do all breach alerts require password changes?', answer: 'If credentials or personal data may be exposed, yes, especially for reused passwords.' },
      { question: 'Can breach data be used years later?', answer: 'Yes. Stolen data is often reused in new scam campaigns over time.' },
    ],
    related: ['password-security-basics', 'two-factor-authentication-guide', 'account-recovery-plan-template'],
  },
  {
    slug: 'malware-basics-for-beginners',
    title: 'Malware Basics for Beginners',
    description: 'Understand common malware families and how infections spread across devices.',
    category: 'Malware',
    readTime: '8 min read',
    publishedDate: '2026-03-10',
    intro:
      'Malware is a broad term that includes viruses, trojans, spyware, and ransomware. Knowing infection paths improves prevention.',
    sections: [
      {
        heading: 'Common Malware Types',
        paragraphs: [
          'Trojans disguise themselves as legitimate files. Spyware monitors user behavior. Ransomware encrypts files and demands payment.',
        ],
      },
      {
        heading: 'How Infections Happen',
        paragraphs: [
          'Common sources include malicious attachments, fake updates, pirated apps, and vulnerable software with missing patches.',
        ],
      },
      {
        heading: 'Practical Defense',
        paragraphs: [
          'Use endpoint protection, regular patching, and backup discipline. Restrict admin access and teach users to verify download sources.',
        ],
      },
    ],
    faq: [
      { question: 'Can phones get malware too?', answer: 'Yes. Mobile malware spreads through fake apps, phishing links, and malicious profiles.' },
      { question: 'Does a reset always remove malware?', answer: 'Often, but not always. Backup, reflash if needed, and restore only clean files.' },
    ],
    related: ['ransomware-prevention-checklist', 'safe-browsing-habits', 'secure-home-wifi-guide'],
  },
  {
    slug: 'secure-home-wifi-guide',
    title: 'Secure Home Wi-Fi Guide: Router Settings That Matter',
    description: 'Harden your home network with practical router and Wi-Fi security settings.',
    category: 'Network Security',
    readTime: '7 min read',
    publishedDate: '2026-03-11',
    intro:
      'Your router is the front door of your home network. Basic configuration changes can stop common attacks and snooping.',
    sections: [
      {
        heading: 'Use WPA3 and Strong Admin Credentials',
        paragraphs: [
          'Set WPA3 if supported and replace default router admin credentials immediately. Disable remote admin unless needed.',
        ],
      },
      {
        heading: 'Segment Guest Devices',
        paragraphs: [
          'Create a guest network for visitors and IoT devices. Keep work laptops and sensitive devices on a separate trusted network.',
        ],
      },
      {
        heading: 'Maintain Firmware and DNS Hygiene',
        paragraphs: [
          'Update firmware regularly and verify DNS settings to prevent redirection attacks. Watch for unexplained router reboots.',
        ],
      },
    ],
    faq: [
      { question: 'Should I hide my Wi-Fi SSID?', answer: 'It is not a strong security control. Strong encryption and passwords matter more.' },
      { question: 'Is public Wi-Fi safe with VPN?', answer: 'VPN improves privacy, but you should still avoid sensitive actions on unknown networks.' },
    ],
    related: ['safe-browsing-habits', 'malware-basics-for-beginners', 'incident-response-first-hour'],
  },
  {
    slug: 'incident-response-first-hour',
    title: 'Incident Response in the First Hour: What to Do First',
    description: 'A first-hour action checklist after a suspected cyber incident.',
    category: 'Incident Response',
    readTime: '8 min read',
    publishedDate: '2026-03-12',
    intro:
      'The first hour after detection is about containment and evidence preservation, not blame. Clear priorities reduce long-term impact.',
    sections: [
      {
        heading: 'Containment Before Cleanup',
        paragraphs: [
          'Isolate affected devices from network access to stop spread. Do not immediately wipe systems that may contain forensic evidence.',
        ],
      },
      {
        heading: 'Document What Happened',
        paragraphs: [
          'Record timeline, affected accounts, suspicious IPs, and screenshots. Good documentation helps legal, insurance, and technical teams.',
        ],
      },
      {
        heading: 'Escalate and Communicate',
        paragraphs: [
          'Notify leadership, IT support, and relevant authorities. Use consistent messaging to avoid misinformation during incident response.',
        ],
      },
    ],
    faq: [
      { question: 'Should we shut everything down immediately?', answer: 'Not always. Targeted isolation is usually better than broad shutdown without analysis.' },
      { question: 'When should we involve law enforcement?', answer: 'As early as practical for serious financial, identity, or extortion incidents.' },
    ],
    related: ['reporting-online-scams-effectively', 'ransomware-prevention-checklist', 'what-to-do-after-data-breach'],
  },
  {
    slug: 'account-recovery-plan-template',
    title: 'Build an Account Recovery Plan Before You Need It',
    description: 'Create a personal account recovery checklist that works under stress.',
    category: 'Recovery',
    readTime: '6 min read',
    publishedDate: '2026-03-13',
    intro:
      'People usually think about recovery after compromise. A pre-built plan saves critical time during emergencies.',
    sections: [
      {
        heading: 'Inventory Critical Accounts',
        paragraphs: [
          'List primary accounts, linked recovery channels, and support URLs. Include account ownership proofs where available.',
        ],
      },
      {
        heading: 'Store Recovery Details Securely',
        paragraphs: [
          'Keep backup codes and emergency contacts in encrypted storage. Avoid storing recovery details only in the compromised email account.',
        ],
      },
      {
        heading: 'Run Recovery Drills',
        paragraphs: [
          'Test recovery workflows quarterly for your most important services. Practice from a secondary trusted device.',
        ],
      },
    ],
    faq: [
      { question: 'Is this only for businesses?', answer: 'No. Individuals benefit greatly from a simple personal recovery plan.' },
      { question: 'How detailed should the plan be?', answer: 'Keep it practical and action-focused so you can execute it under pressure.' },
    ],
    related: ['hacked-social-media-recovery', 'two-factor-authentication-guide', 'what-to-do-after-data-breach'],
  },
  {
    slug: 'protect-children-from-online-scams',
    title: 'Protect Children From Online Scams and Grooming Risks',
    description: 'Parent-friendly safety practices for gaming, social apps, and school devices.',
    category: 'Family Safety',
    readTime: '7 min read',
    publishedDate: '2026-03-14',
    intro:
      'Children and teens are frequently targeted in games and social apps. Safety improves when conversations are proactive and non-judgmental.',
    sections: [
      {
        heading: 'Set Device and Account Controls',
        paragraphs: [
          'Use parental controls, age-appropriate privacy settings, and purchase restrictions. Keep software and game clients updated.',
        ],
      },
      {
        heading: 'Teach Safe Communication Rules',
        paragraphs: [
          'No sharing real names, school details, addresses, or private photos with online strangers. Encourage children to report uncomfortable interactions.',
        ],
      },
      {
        heading: 'Build Family Escalation Habits',
        paragraphs: [
          'Agree on steps for suspicious messages, account lockouts, or extortion threats. Keep reporting channels visible at home.',
        ],
      },
    ],
    faq: [
      { question: 'Should children have public profiles?', answer: 'In most cases, private-by-default settings are safer for minors.' },
      { question: 'How often should parents review settings?', answer: 'At least every three months or whenever platform policies change.' },
    ],
    related: ['social-media-privacy-settings-guide', 'reporting-online-scams-effectively', 'safe-browsing-habits'],
  },
  {
    slug: 'romance-scam-warning-signs',
    title: 'Romance Scam Warning Signs and Safe Response Steps',
    description: 'Recognize emotional manipulation patterns in romance scams and respond safely.',
    category: 'Scam Awareness',
    readTime: '7 min read',
    publishedDate: '2026-03-15',
    intro:
      'Romance scams exploit trust and urgency. Victims should never feel ashamed; these scams are sophisticated and emotionally manipulative.',
    sections: [
      {
        heading: 'Common Manipulation Patterns',
        paragraphs: [
          'Scammers quickly move conversations off-platform, avoid video verification, and create emergency money requests tied to travel, health, or legal issues.',
        ],
      },
      {
        heading: 'How To Verify Identity',
        paragraphs: [
          'Request live video calls, check image reverse-search results, and verify details across trusted channels before sharing personal information.',
        ],
      },
      {
        heading: 'If Money Was Sent',
        paragraphs: [
          'Contact your payment provider immediately, preserve chat history, and report to law enforcement and platform safety teams.',
        ],
      },
    ],
    faq: [
      { question: 'Can scam profiles look highly realistic?', answer: 'Yes. Many use stolen photos and scripted personas to build false trust.' },
      { question: 'Should victims confront scammers?', answer: 'No. Stop contact, preserve evidence, and report through official channels.' },
    ],
    related: ['reporting-online-scams-effectively', 'safe-browsing-habits', 'incident-response-first-hour'],
  },
  {
    slug: 'job-scam-detection-guide',
    title: 'Job Scam Detection Guide for Students and Job Seekers',
    description: 'Avoid fake job offers, advance fee scams, and credential harvesting attempts.',
    category: 'Scam Awareness',
    readTime: '6 min read',
    publishedDate: '2026-03-16',
    intro:
      'Job scams target people during stressful career transitions. Verification steps can prevent financial loss and identity theft.',
    sections: [
      {
        heading: 'Signs of Fake Recruiters',
        paragraphs: [
          'Immediate offer letters without interviews, requests for registration fees, and communication from personal email domains are major warning signs.',
        ],
      },
      {
        heading: 'Verify Employers and Roles',
        paragraphs: [
          'Cross-check recruiter profiles, company domains, and public job listings. Contact companies using official websites, not message links.',
        ],
      },
      {
        heading: 'Protect Personal Data',
        paragraphs: [
          'Share only necessary resume details until legitimacy is confirmed. Never send OTPs, banking PINs, or scans of sensitive documents early.',
        ],
      },
    ],
    faq: [
      { question: 'Are work-from-home scams common?', answer: 'Yes. They often involve fake training kits, cheque scams, or payment requests.' },
      { question: 'Can scammers use real company names?', answer: 'Yes. Always verify through official company contact channels.' },
    ],
    related: ['how-to-spot-phishing-emails', 'reporting-online-scams-effectively', 'safe-browsing-habits'],
  },
];

export const articleBySlug = Object.fromEntries(articles.map((article) => [article.slug, article]));
