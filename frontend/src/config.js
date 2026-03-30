export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, '');
export const SITE_NAME = 'CyberRescue';

export const EDITORIAL_INFO = {
	authorName: 'CyberRescue Editorial Team',
	reviewerName: 'A. N. Security Reviewer',
	reviewerTitle: 'Cyber Safety Research Lead',
	methodologyPath: '/about',
};
