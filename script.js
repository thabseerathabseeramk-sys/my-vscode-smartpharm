// Simple client-side login demo
// IMPORTANT: This is a demo only. Do NOT use client-side credential checks in production.

const demoUser = { email: 'user@example.com', password: 'password123', name: 'Jane' };

// i18n translations (English, Hindi, Kannada)
const translations = {
	en: {
		login: 'Login',
		cart: 'Cart',
		delivery_label: 'Delivery Address',
		search_address: 'Type or choose address',
		hero_title: 'Buy Medicines and Essentials',
		search_placeholder: 'Search Medicines',
		search: 'Search',
		nav_buy: 'Buy Medicines',
		nav_doctors: 'Find Doctors',
		nav_lab: 'Lab Tests',
		nav_circle: 'Circle Membership',
		nav_records: 'Health Records',
		nav_credit: 'Credit Card',
		nav_insurance: 'Buy Insurance',
		sub_products: 'Products',
		sub_baby: 'Baby Care',
		sub_nutrition: 'Nutritional Drinks & Supplements',
		sub_women: 'Women Care',
		sub_personal: 'Personal Care',
		sub_ayurveda: 'Ayurveda',
		sub_devices: 'Health Devices',
		sub_home: 'Home Essentials',
		sub_conditions: 'Health Condition',
		cond_heading: 'Browse by Health Conditions',
		cond_diabetes: 'Diabetes Care',
		cond_cardiac: 'Cardiac Care',
		cond_stomach: 'Stomach Care',
		cond_pain: 'Pain Relief',
		cond_liver: 'Liver Care',
		cond_oral: 'Oral Care',
		cond_respiratory: 'Respiratory',
		cond_sexual: 'Sexual Health',
		cond_elderly: 'Elderly Care',
		cond_cold: 'Cold & Immunity',
		footer: '© 2025 Smart Pharmacy | All Rights Reserved'
	},
	hi: {
		login: 'लॉगिन',
		cart: 'कार्ट',
		delivery_label: 'वितरण पता',
		search_address: 'पता टाइप या चुनें',
		hero_title: 'दवाइयां और आवश्यकताएँ खरीदें',
		search_placeholder: 'दवाइयों की खोज करें',
		search: 'खोज',
		nav_buy: 'दवाइयां खरीदें',
		nav_doctors: 'डॉक्टर खोजें',
		nav_lab: 'लैब टेस्ट',
		nav_circle: 'सर्कल सदस्यता',
		nav_records: 'स्वास्थ्य रिकॉर्ड',
		nav_credit: 'क्रेडिट कार्ड',
		nav_insurance: 'बीमा खरीदें',
		sub_products: 'उत्पाद',
		sub_baby: 'बेबी केयर',
		sub_nutrition: 'पोषक पेय और सप्लीमेंट्स',
		sub_women: 'महिला देखभाल',
		sub_personal: 'पर्सनल केयर',
		sub_ayurveda: 'आयुर्वेद',
		sub_devices: 'स्वास्थ्य उपकरण',
		sub_home: 'होम आवश्यकताएँ',
		sub_conditions: 'स्वास्थ्य स्थिति',
		cond_heading: 'स्वास्थ्य स्थितियों के अनुसार ब्राउज़ करें',
		cond_diabetes: 'मधुमेह देखभाल',
		cond_cardiac: 'हृदय संबंधी देखभाल',
		cond_stomach: 'पाचन देखभाल',
		cond_pain: 'दर्द से राहत',
		cond_liver: 'यकृत देखभाल',
		cond_oral: 'मौखिक देखभाल',
		cond_respiratory: 'श्वसन',
		cond_sexual: 'यौन स्वास्थ्य',
		cond_elderly: 'वृद्ध देखभाल',
		cond_cold: 'सर्दी और प्रतिरक्षा',
		footer: '© 2025 स्मार्ट फार्मेसी | सर्वाधिकार सुरक्षित'
	},
	kn: {
		login: 'ಲಾಗಿನ್',
		cart: 'ಕಾರ್ಟ್',
		delivery_label: 'ವಿತರಣೆ ವಿಳಾಸ',
		search_address: 'ವಿಳಾಸವನ್ನು ಟೈಪ್ ಅಥವಾ ಆಯ್ಕೆ ಮಾಡಿ',
		hero_title: 'ಮೆಡಿಸಿನ್‌ಗಳು ಮತ್ತು ಅಗತ್ಯ ವಸ್ತುಗಳು ಖರೀದಿಸಿ',
		search_placeholder: 'ಮಾನವ ವೈದ್ಯಕೀಯಗಳನ್ನು ಹುಡುಕಿ',
		search: 'ಹುಡುಕಿ',
		nav_buy: 'ಮೆಡಿಸಿನ್‌ಗಳು ಖರೀದಿಸಿ',
		nav_doctors: 'ಡಾಕ್ಟರ್‌ಗಳನ್ನು ಕಂಡುಹಿಡಿ',
		nav_lab: 'ಲ್ಯಾಬ್ ಪರೀಕ್ಷೆಗಳು',
		nav_circle: 'ಸರ್ಕಲ್ ಸದಸ್ಯತೆ',
		nav_records: 'ಆರೋಗ್ಯ ದಾಖಲೆಗಳು',
		nav_credit: 'ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್',
		nav_insurance: 'ಇನ್ಸೂರನ್ಸ್ ಖರೀದಿಸಿ',
		sub_products: 'ಉತ್ಪನ್ನಗಳು',
		sub_baby: 'ಬೇಬಿ ಕೇರ್',
		sub_nutrition: 'ಪೌಷ್ಟಿಕೀಯ ಪಾನೀಯಗಳು ಮತ್ತು ಪೂರಕಗಳು',
		sub_women: 'ಹೆಣ್ಣುಗಳ ಕಾಳಜಿ',
		sub_personal: 'ವೈಯಕ್ತಿಕ ಕಾಳಜಿ',
		sub_ayurveda: 'ಆಯುರ್ವೇದ',
		sub_devices: 'ಆರೋಗ್ಯ ಸಾಧನಗಳು',
		sub_home: 'ಗೃಹ ಅಗತ್ಯಗಳು',
		sub_conditions: 'ಆರೋಗ್ಯ ಸ್ಥಿತಿಗಳು',
		cond_heading: 'ಆರೋಗ್ಯ ಸ್ಥಿತಿಗಳ ಮೂಲಕ ಬ್ರೌಸ್ ಮಾಡಿ',
		cond_diabetes: 'ಸಕ್ಕರೆ ಕಾಯಿಲೆ ಕಾಳಜಿ',
		cond_cardiac: 'ಹೃದ್ರೋಗ ಕಾಳಜಿ',
		cond_stomach: 'ಜೀರ್ಣದ ಪರಿಹಾರ ಕಾಳಜಿ',
		cond_pain: 'ನೋವು ನಿವಾರದ',
		cond_liver: 'ಕಲೆಜು ಕಾಳಜಿ',
		cond_oral: 'ಒರಲ್ ಕಾಳಜಿ',
		cond_respiratory: 'ಉಸಿರಾಟದ ಸಮಸ್ಯೆಗಳು',
		cond_sexual: 'ಲೈಂಗಿಕ ಆರೋಗ್ಯ',
		cond_elderly: 'ಮೂಕ್ತೃ ಕಾಳಜಿ',
		cond_cold: 'ಚಳಿ ಮತ್ತು ರೋಗ ನಿರೋಧಕತೆ',
		footer: '© 2025 ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮೆಸಿ | ಎಲ್ಲಾ ಹಕ್ಕುಗಳೂ ರಕ್ಷಿಸಲಾಗಿದೆ'
	}
};

let currentLang = 'en';

function t(key) {
	return (translations[currentLang] && translations[currentLang][key]) || (translations['en'] && translations['en'][key]) || key;
}

function applyTranslations() {
	// elements with data-i18n -> textContent
	document.querySelectorAll('[data-i18n]').forEach(el => {
		const k = el.getAttribute('data-i18n');
		if (!k) return;
		// preserve structure for elements that contain HTML (rare here)
		el.textContent = t(k);
	});

	// placeholders
	document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
		const k = el.getAttribute('data-i18n-placeholder');
		if (!k) return;
		if ('placeholder' in el) el.placeholder = t(k);
		else el.setAttribute('placeholder', t(k));
	});
}

function openModal() {
	const modal = document.getElementById('login-modal');
	modal.setAttribute('aria-hidden', 'false');
	document.getElementById('email').focus();
}

function closeModal() {
	const modal = document.getElementById('login-modal');
	modal.setAttribute('aria-hidden', 'true');
}

function setLoggedIn(user) {
	localStorage.setItem('sp_user', JSON.stringify(user));
	updateAuthUI();
}

function clearLoggedIn() {
	localStorage.removeItem('sp_user');
	updateAuthUI();
}

function getLoggedIn() {
	const raw = localStorage.getItem('sp_user');
	return raw ? JSON.parse(raw) : null;
}

function updateAuthUI() {
	const user = getLoggedIn();
	const loginBtn = document.getElementById('login-btn');
	if (!loginBtn) return;
	const loginText = loginBtn.querySelector('.login-text');
	if (user) {
		if (loginText) loginText.textContent = `Hi, ${user.name}`;
		// show logout on click
		loginBtn.onclick = () => {
			if (confirm('Log out?')) clearLoggedIn();
		};
	} else {
		if (loginText) loginText.textContent = t('login');
		loginBtn.onclick = openModal;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('Page loaded!');

	// initialize language from storage (or default)
	const savedLang = localStorage.getItem('sp_lang') || 'en';
	currentLang = savedLang;
	const langSelect = document.getElementById('lang-select');
	if (langSelect) {
		langSelect.value = currentLang;
		langSelect.addEventListener('change', (e) => {
			currentLang = e.target.value;
			localStorage.setItem('sp_lang', currentLang);
			applyTranslations();
			updateAuthUI();
		});
	}

	// apply translations on load
	applyTranslations();
	// Wire buttons
	const loginBtn = document.getElementById('login-btn');
	if (loginBtn) loginBtn.addEventListener('click', openModal);

	const closeBtn = document.getElementById('modal-close');
	if (closeBtn) closeBtn.addEventListener('click', closeModal);

	const cancelBtn = document.getElementById('modal-cancel');
	if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

	const loginForm = document.getElementById('login-form');
	if (loginForm) {
		loginForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const email = document.getElementById('email').value.trim();
			const password = document.getElementById('password').value;
			// Simple client-side check against demo user
			if (email.toLowerCase() === demoUser.email && password === demoUser.password) {
				setLoggedIn({ email: demoUser.email, name: demoUser.name });
				closeModal();
				alert('Signed in successfully');
			} else {
				alert('Invalid credentials for demo. Use user@example.com / password123');
			}
		});
	}

	// close modal on overlay click
	const modal = document.getElementById('login-modal');
	if (modal) modal.addEventListener('click', (e) => {
		if (e.target === modal) closeModal();
	});

	// Address input: save and go to next section
	const addressInput = document.getElementById('address-input');
	function handleAddressValue(val) {
		if (!val) return;
		localStorage.setItem('sp_selected_address', val);
		alert('Delivery address selected: ' + val);
		const infoP = document.querySelector('.delivery-info p');
		if (infoP) infoP.textContent = val;
		const next = addressInput.getAttribute('data-next');
		if (next) {
			if (next.startsWith('#') || next.startsWith('.')) {
				const el = document.querySelector(next);
				if (el) el.scrollIntoView({ behavior: 'smooth' });
			} else if (next.startsWith('http')) {
				window.location.href = next;
			}
		}
	}
	if (addressInput) {
		// live preview as user types
		addressInput.addEventListener('input', (e) => {
			const infoP = document.querySelector('.delivery-info p');
			if (infoP) infoP.textContent = e.target.value.trim() || t('delivery_label');
		});

		// persist and go next on change/Enter/blur
		addressInput.addEventListener('change', (e) => handleAddressValue(e.target.value.trim()));
		addressInput.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				e.preventDefault();
				handleAddressValue(e.target.value.trim());
			}
		});
		addressInput.addEventListener('blur', (e) => {
			// persist on blur if non-empty
			const v = e.target.value.trim();
			if (v) handleAddressValue(v);
		});
		// Pre-fill from storage if present
		const saved = localStorage.getItem('sp_selected_address');
		if (saved) {
			addressInput.value = saved;
			const infoP = document.querySelector('.delivery-info p');
			if (infoP) infoP.textContent = saved;
		}
	}

	updateAuthUI();
});
const apolloBtn = document.getElementById('apollo-btn');
const apolloMenu = document.getElementById('apollo-menu');

apolloBtn.addEventListener('click', (e) => {
  e.preventDefault();
  apolloMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!apolloBtn.contains(e.target) && !apolloMenu.contains(e.target)) {
    apolloMenu.classList.remove('show');
  }
});
