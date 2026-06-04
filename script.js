// ============================================
// TELE MED MWANSA - JavaScript Principal
// ============================================

// Données d'anamnèse par spécialité
const anamneseData = {
    gyneco: {
        title: 'Anamnèse Gynéco-Obstétrique',
        steps: [
            {
                title: 'Informations générales',
                fields: [
                    { label: 'Âge', type: 'number', id: 'age', required: true, placeholder: 'Votre âge' },
                    { label: 'Date des dernières règles', type: 'date', id: 'dernieres_regles', required: true },
                    { label: 'Nombre de grossesses', type: 'number', id: 'nb_grossesses', required: true, placeholder: '0' },
                ]
            },
            {
                title: 'Symptômes actuels',
                fields: [
                    { label: 'Symptôme principal', type: 'textarea', id: 'symptome_principal', required: true, placeholder: 'Décrivez votre symptôme principal...' },
                    { label: 'Douleurs pelviennes', type: 'range', id: 'douleur', required: true },
                    { label: 'Saignements anormaux', type: 'select', id: 'saignements', options: ['Non', 'Légers', 'Modérés', 'Abondants'], required: true },
                ]
            },
            {
                title: 'Antécédents médicaux',
                fields: [
                    { label: 'Antécédents gynécologiques', type: 'textarea', id: 'antecedents_gyneco', required: true, placeholder: 'Décrivez vos antécédents...' },
                    { label: 'Chirurgies antérieures', type: 'textarea', id: 'chirurgies', required: false, placeholder: 'Listez vos chirurgies...' },
                    { label: 'Allergies', type: 'text', id: 'allergies', required: true, placeholder: 'Aucune si pas d\'allergie' },
                ]
            },
            {
                title: 'Mode de vie',
                fields: [
                    { label: 'Tabac', type: 'select', id: 'tabac', options: ['Non', 'Occasionnel', 'Régulier'], required: true },
                    { label: 'Alcool', type: 'select', id: 'alcool', options: ['Non', 'Occasionnel', 'Régulier'], required: true },
                    { label: 'Activité physique', type: 'select', id: 'activite_physique', options: ['Sédentaire', 'Modérée', 'Intense'], required: true },
                ]
            },
            {
                title: 'Médicaments',
                fields: [
                    { label: 'Médicaments actuels', type: 'textarea', id: 'medicaments', required: true, placeholder: 'Listez vos médicaments...' },
                    { label: 'Contraception', type: 'select', id: 'contraception', options: ['Aucune', 'Pilule', 'DIU', 'Implant', 'Autre'], required: true },
                ]
            }
        ],
        diagnosis: [
            {
                condition: 'Possible syndrome prémenstruel sévère',
                probabilite: 'Élevée (75%)',
                recommandations: [
                    'Consultation gynécologique recommandée dans les 2 semaines',
                    'Échographie pelvienne à prévoir',
                    'Bilan hormonal complet conseillé',
                    'Tenir un journal des symptômes'
                ],
                urgence: 'Modérée'
            },
            {
                condition: 'Suspicion de ménorragies fonctionnelles',
                probabilite: 'Moyenne (60%)',
                recommandations: [
                    'Bilan sanguin (NFS, ferritine) urgent',
                    'Consultation spécialisée dans la semaine',
                    'Surveillance du cycle menstruel',
                    'Supplémentation en fer si nécessaire'
                ],
                urgence: 'Modérée à élevée'
            }
        ]
    },
    pediatrie: {
        title: 'Anamnèse Pédiatrique',
        steps: [
            {
                title: 'Informations de l\'enfant',
                fields: [
                    { label: 'Âge de l\'enfant', type: 'number', id: 'age_enfant', required: true, placeholder: 'Âge en années' },
                    { label: 'Poids (kg)', type: 'number', id: 'poids', required: true, placeholder: 'Poids en kg' },
                    { label: 'Taille (cm)', type: 'number', id: 'taille', required: true, placeholder: 'Taille en cm' },
                ]
            },
            {
                title: 'Symptômes',
                fields: [
                    { label: 'Symptôme principal', type: 'textarea', id: 'symptome_principal', required: true, placeholder: 'Décrivez le symptôme...' },
                    { label: 'Température (°C)', type: 'number', id: 'temperature', required: true, placeholder: '37.0' },
                    { label: 'Durée des symptômes (jours)', type: 'number', id: 'duree_symptomes', required: true, placeholder: '1' },
                ]
            },
            {
                title: 'Antécédents',
                fields: [
                    { label: 'Vaccinations à jour', type: 'select', id: 'vaccinations', options: ['Oui', 'Non', 'Partiellement'], required: true },
                    { label: 'Antécédents médicaux', type: 'textarea', id: 'antecedents', required: true, placeholder: 'Antécédents importants...' },
                    { label: 'Allergies connues', type: 'text', id: 'allergies', required: true, placeholder: 'Aucune si pas d\'allergie' },
                ]
            },
            {
                title: 'Alimentation',
                fields: [
                    { label: 'Type d\'alimentation', type: 'select', id: 'alimentation', options: ['Allaitement', 'Lait maternisé', 'Diversifiée', 'Normale'], required: true },
                    { label: 'Appétit récent', type: 'select', id: 'appetit', options: ['Normal', 'Diminué', 'Absent'], required: true },
                ]
            },
            {
                title: 'Environnement',
                fields: [
                    { label: 'Fratrie', type: 'number', id: 'fratrie', required: true, placeholder: '0' },
                    { label: 'Mode de garde', type: 'select', id: 'garde', options: ['Maison', 'Crèche', 'École', 'Autre'], required: true },
                ]
            }
        ],
        diagnosis: [
            {
                condition: 'Possible infection virale infantile',
                probabilite: 'Élevée (80%)',
                recommandations: [
                    'Surveillance de la température toutes les 4 heures',
                    'Hydratation abondante',
                    'Consultation pédiatrique si fièvre > 38.5°C',
                    'Repos au domicile recommandé'
                ],
                urgence: 'Faible à modérée'
            }
        ]
    },
    chirurgie: {
        title: 'Anamnèse Chirurgicale',
        steps: [
            {
                title: 'Informations générales',
                fields: [
                    { label: 'Âge', type: 'number', id: 'age', required: true, placeholder: 'Votre âge' },
                    { label: 'Motif de consultation', type: 'textarea', id: 'motif', required: true, placeholder: 'Décrivez le motif de consultation...' },
                ]
            },
            {
                title: 'Symptômes',
                fields: [
                    { label: 'Localisation du problème', type: 'text', id: 'localisation', required: true, placeholder: 'Où se situe le problème ?' },
                    { label: 'Intensité de la douleur', type: 'range', id: 'douleur', required: true },
                    { label: 'Date d\'apparition', type: 'date', id: 'date_debut', required: true },
                ]
            },
            {
                title: 'Antécédents chirurgicaux',
                fields: [
                    { label: 'Chirurgies antérieures', type: 'textarea', id: 'chirurgies_anterieures', required: true, placeholder: 'Listez vos chirurgies...' },
                    { label: 'Complications antérieures', type: 'textarea', id: 'complications', required: false, placeholder: 'Complications éventuelles...' },
                ]
            },
            {
                title: 'État de santé général',
                fields: [
                    { label: 'Maladies chroniques', type: 'textarea', id: 'maladies_chroniques', required: true, placeholder: 'Diabète, HTA, etc...' },
                    { label: 'Médicaments en cours', type: 'textarea', id: 'medicaments', required: true, placeholder: 'Listez vos médicaments...' },
                    { label: 'Allergies', type: 'text', id: 'allergies', required: true, placeholder: 'Aucune si pas d\'allergie' },
                ]
            },
            {
                title: 'Habitudes',
                fields: [
                    { label: 'Tabac', type: 'select', id: 'tabac', options: ['Non', 'Oui'], required: true },
                    { label: 'Alcool', type: 'select', id: 'alcool', options: ['Non', 'Occasionnel', 'Régulier'], required: true },
                ]
            }
        ],
        diagnosis: [
            {
                condition: 'Pathologie chirurgicale nécessitant une évaluation',
                probabilite: 'Moyenne (65%)',
                recommandations: [
                    'Consultation chirurgicale nécessaire sous 1 semaine',
                    'Bilan pré-opératoire à prévoir',
                    'Imagerie médicale recommandée (échographie/ scanner)',
                    'Éviter l\'automédication'
                ],
                urgence: 'Modérée'
            }
        ]
    },
    'medecine-interne': {
        title: 'Anamnèse Médecine Interne',
        steps: [
            {
                title: 'Informations générales',
                fields: [
                    { label: 'Âge', type: 'number', id: 'age', required: true, placeholder: 'Votre âge' },
                    { label: 'Sexe', type: 'select', id: 'sexe', options: ['Féminin', 'Masculin'], required: true },
                    { label: 'Profession', type: 'text', id: 'profession', required: true, placeholder: 'Votre profession' },
                ]
            },
            {
                title: 'Symptômes',
                fields: [
                    { label: 'Symptôme principal', type: 'textarea', id: 'symptome_principal', required: true, placeholder: 'Décrivez votre symptôme...' },
                    { label: 'Autres symptômes', type: 'textarea', id: 'autres_symptomes', required: true, placeholder: 'Autres symptômes associés...' },
                    { label: 'Date de début', type: 'date', id: 'date_debut', required: true },
                ]
            },
            {
                title: 'Antécédents médicaux',
                fields: [
                    { label: 'Maladies chroniques', type: 'textarea', id: 'maladies_chroniques', required: true, placeholder: 'Diabète, HTA, asthme...' },
                    { label: 'Antécédents familiaux', type: 'textarea', id: 'antecedents_familiaux', required: true, placeholder: 'Maladies dans la famille...' },
                ]
            },
            {
                title: 'Traitements',
                fields: [
                    { label: 'Médicaments actuels', type: 'textarea', id: 'medicaments', required: true, placeholder: 'Listez vos traitements...' },
                    { label: 'Allergies médicamenteuses', type: 'text', id: 'allergies', required: true, placeholder: 'Aucune si pas d\'allergie' },
                ]
            },
            {
                title: 'Mode de vie',
                fields: [
                    { label: 'Tabac', type: 'select', id: 'tabac', options: ['Non', 'Occasionnel', 'Régulier'], required: true },
                    { label: 'Alcool', type: 'select', id: 'alcool', options: ['Non', 'Occasionnel', 'Régulier'], required: true },
                    { label: 'Alimentation', type: 'select', id: 'alimentation', options: ['Équilibrée', 'Déséquilibrée', 'Régime particulier'], required: true },
                ]
            }
        ],
        diagnosis: [
            {
                condition: 'Pathologie systémique suspectée',
                probabilite: 'Moyenne (55%)',
                recommandations: [
                    'Bilan biologique complet recommandé',
                    'Consultation en médecine interne sous 10 jours',
                    'Suivi régulier à prévoir',
                    'Modification du mode de vie conseillée'
                ],
                urgence: 'Modérée'
            }
        ]
    },
    'neuro-psy': {
        title: 'Anamnèse Neuro-Psychiatrique',
        steps: [
            {
                title: 'Informations générales',
                fields: [
                    { label: 'Âge', type: 'number', id: 'age', required: true, placeholder: 'Votre âge' },
                    { label: 'Sexe', type: 'select', id: 'sexe', options: ['Féminin', 'Masculin'], required: true },
                    { label: 'Statut professionnel', type: 'select', id: 'statut_pro', options: ['Actif', 'Étudiant', 'Sans emploi', 'Retraité'], required: true },
                ]
            },
            {
                title: 'Symptômes neurologiques',
                fields: [
                    { label: 'Céphalées', type: 'select', id: 'cephalees', options: ['Absentes', 'Occasionnelles', 'Fréquentes', 'Quotidiennes'], required: true },
                    { label: 'Troubles de la mémoire', type: 'select', id: 'memoire', options: ['Aucun', 'Légers', 'Modérés', 'Sévères'], required: true },
                    { label: 'Vertiges', type: 'select', id: 'vertiges', options: ['Non', 'Occasionnels', 'Fréquents'], required: true },
                ]
            },
            {
                title: 'Symptômes psychiatriques',
                fields: [
                    { label: 'Niveau d\'anxiété', type: 'range', id: 'anxiete', required: true },
                    { label: 'Troubles du sommeil', type: 'select', id: 'sommeil', options: ['Aucun', 'Insomnie', 'Hypersomnie', 'Sommeil perturbé'], required: true },
                    { label: 'Humeur actuelle', type: 'select', id: 'humeur', options: ['Normale', 'Triste', 'Irritable', 'Exaltée', 'Variable'], required: true },
                ]
            },
            {
                title: 'Antécédents',
                fields: [
                    { label: 'Antécédents psychiatriques familiaux', type: 'textarea', id: 'antecedents_familiaux', required: true, placeholder: 'Décrivez...' },
                    { label: 'Traumatismes crâniens', type: 'select', id: 'traumatismes', options: ['Aucun', 'Léger', 'Modéré', 'Sévère'], required: true },
                ]
            },
            {
                title: 'Traitements et habitudes',
                fields: [
                    { label: 'Traitements en cours', type: 'textarea', id: 'traitements', required: true, placeholder: 'Médicaments actuels...' },
                    { label: 'Consommation de substances', type: 'select', id: 'substances', options: ['Aucune', 'Tabac', 'Alcool', 'Autres'], required: true },
                    { label: 'Suivi psychologique antérieur', type: 'select', id: 'suivi_psy', options: ['Jamais', 'Passé', 'En cours'], required: true },
                ]
            }
        ],
        diagnosis: [
            {
                condition: 'Possible trouble anxio-dépressif',
                probabilite: 'Élevée (70%)',
                recommandations: [
                    'Consultation neuro-psychiatrique recommandée rapidement',
                    'Psychothérapie à envisager (TCC recommandée)',
                    'Bilan biologique pour éliminer une cause organique',
                    'Activité physique régulière conseillée'
                ],
                urgence: 'Modérée'
            }
        ]
    }
};

// État de la consultation
let state = {
    currentSpecialty: null,
    currentStep: 0,
    formData: {}
};

// ============================================
// Initialisation
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCursor();
    initNavigation();
    initBackToTop();
    initStatsCounter();
    initContactForm();
    initModals();
    initSmoothScroll();
});

// ============================================
// Preloader
// ============================================
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        });
    }
}

// ============================================
// Custom Cursor
// ============================================
function initCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    
    if (!cursor || !follower) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            follower.style.left = e.clientX - 16 + 'px';
            follower.style.top = e.clientY - 16 + 'px';
        }, 100);
    });
    
    // Effet hover sur les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, .btn, input, select, textarea');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
            follower.style.borderColor = 'rgba(10, 132, 255, 0.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
            follower.style.borderColor = 'rgba(10, 132, 255, 0.3)';
        });
    });
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ============================================
// Back to Top
// ============================================
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Stats Counter Animation
// ============================================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = parseInt(target.getAttribute('data-target'));
                let current = 0;
                const increment = targetNumber / 50;
                
                const updateCounter = () => {
                    if (current < targetNumber) {
                        current += increment;
                        target.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = targetNumber;
                    }
                };
                
                updateCounter();
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(number => observer.observe(number));
}

// ============================================
// Consultation Functions
// ============================================
function scrollToConsultation() {
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
}

function openConsultation(specialty) {
    state.currentSpecialty = specialty;
    state.currentStep = 0;
    state.formData = {};
    
    document.getElementById('specialtySelection').style.display = 'none';
    document.getElementById('anamneseForm').style.display = 'block';
    document.getElementById('diagnosticResult').style.display = 'none';
    
    document.getElementById('formTitle').textContent = anamneseData[specialty].title;
    
    renderStep();
    createProgressSteps();
    
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
}

function backToSpecialties() {
    document.getElementById('specialtySelection').style.display = 'block';
    document.getElementById('anamneseForm').style.display = 'none';
    document.getElementById('diagnosticResult').style.display = 'none';
    
    state.currentSpecialty = null;
    state.currentStep = 0;
    state.formData = {};
}

function createProgressSteps() {
    const stepsContainer = document.getElementById('progressSteps');
    const steps = anamneseData[state.currentSpecialty].steps;
    
    stepsContainer.innerHTML = '';
    steps.forEach((_, index) => {
        const stepDot = document.createElement('div');
        stepDot.className = 'progress-step-indicator';
        stepDot.textContent = index + 1;
        if (index < state.currentStep) stepDot.classList.add('completed');
        if (index === state.currentStep) stepDot.classList.add('active');
        stepsContainer.appendChild(stepDot);
    });
}

function renderStep() {
    const specialtyData = anamneseData[state.currentSpecialty];
    const step = specialtyData.steps[state.currentStep];
    const totalSteps = specialtyData.steps.length;
    
    // Update progress
    document.getElementById('progressFill').style.width = ((state.currentStep + 1) / totalSteps * 100) + '%';
    createProgressSteps();
    
    // Render fields
    let html = `<h4 style="margin-bottom: 1.5rem; color: var(--gray-700);">${step.title}</h4>`;
    
    step.fields.forEach(field => {
        html += '<div class="form-group">';
        html += `<label for="${field.id}">${field.label} ${field.required ? '<span style="color: var(--error);">*</span>' : ''}</label>`;
        
        if (field.type === 'textarea') {
            html += `<textarea id="${field.id}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''} rows="3">${state.formData[field.id] || ''}</textarea>`;
        } else if (field.type === 'select') {
            html += `<select id="${field.id}" ${field.required ? 'required' : ''}>`;
            html += '<option value="">Sélectionnez...</option>';
            field.options.forEach(option => {
                const selected = state.formData[field.id] === option ? 'selected' : '';
                html += `<option value="${option}" ${selected}>${option}</option>`;
            });
            html += '</select>';
        } else if (field.type === 'range') {
            const value = state.formData[field.id] || '5';
            html += `<div style="display: flex; align-items: center; gap: 1rem;">`;
            html += `<input type="range" id="${field.id}" min="0" max="10" value="${value}" ${field.required ? 'required' : ''} style="flex: 1;">`;
            html += `<span class="range-value" id="${field.id}-value">${value}/10</span>`;
            html += `</div>`;
        } else {
            html += `<input type="${field.type}" id="${field.id}" value="${state.formData[field.id] || ''}" placeholder="${field.placeholder || ''}" ${field.required ? 'required' : ''}>`;
        }
        
        html += '</div>';
    });
    
    document.getElementById('formSteps').innerHTML = html;
    
    // Update navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    prevBtn.style.display = state.currentStep > 0 ? 'inline-flex' : 'none';
    nextBtn.style.display = state.currentStep < totalSteps - 1 ? 'inline-flex' : 'none';
    submitBtn.style.display = state.currentStep === totalSteps - 1 ? 'inline-flex' : 'none';
    
    // Add event listeners for range inputs
    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.addEventListener('input', function() {
            const valueSpan = document.getElementById(this.id + '-value');
            if (valueSpan) {
                valueSpan.textContent = this.value + '/10';
            }
        });
    });
}

function previousStep() {
    if (state.currentStep > 0) {
        saveStepData();
        state.currentStep--;
        renderStep();
    }
}

function nextStep() {
    if (validateStep()) {
        saveStepData();
        state.currentStep++;
        renderStep();
    }
}

function validateStep() {
    const specialtyData = anamneseData[state.currentSpecialty];
    const step = specialtyData.steps[state.currentStep];
    let isValid = true;
    
    step.fields.forEach(field => {
        if (field.required) {
            const element = document.getElementById(field.id);
            if (element && !element.value) {
                element.style.borderColor = 'var(--error)';
                element.style.background = 'rgba(239, 68, 68, 0.05)';
                isValid = false;
                
                setTimeout(() => {
                    element.style.borderColor = 'var(--gray-200)';
                    element.style.background = 'var(--gray-50)';
                }, 3000);
            }
        }
    });
    
    if (!isValid) {
        alert('Veuillez remplir tous les champs obligatoires avant de continuer.');
    }
    
    return isValid;
}

function saveStepData() {
    const specialtyData = anamneseData[state.currentSpecialty];
    const step = specialtyData.steps[state.currentStep];
    
    step.fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            state.formData[field.id] = element.value;
        }
    });
}

function submitAnamnese() {
    if (validateStep()) {
        saveStepData();
        
        // Show loading
        document.getElementById('formSteps').innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <div class="spinner"></div>
                <p style="margin-top: 1rem; color: var(--gray-500);">Analyse en cours par l'IA médicale...</p>
                <p style="color: var(--gray-400); font-size: 0.9rem;">Veuillez patienter quelques instants</p>
            </div>
        `;
        document.getElementById('prevBtn').style.display = 'none';
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';
        
        // Simulate AI processing
        setTimeout(() => {
            const diagnosis = generateDiagnosis();
            displayDiagnosis(diagnosis);
        }, 2500);
    }
}

function generateDiagnosis() {
    const diagnoses = anamneseData[state.currentSpecialty].diagnosis;
    const randomIndex = Math.floor(Math.random() * diagnoses.length);
    return diagnoses[randomIndex];
}

function displayDiagnosis(diagnosis) {
    document.getElementById('anamneseForm').style.display = 'none';
    document.getElementById('diagnosticResult').style.display = 'block';
    
    const diagnosticHTML = `
        <div class="diagnostic-card">
            <h4><i class="fas fa-robot"></i> Pré-diagnostic IA</h4>
            <div class="diagnostic-info">
                <p><strong>🏥 Condition suspectée :</strong> ${diagnosis.condition}</p>
                <p><strong>📊 Probabilité :</strong> ${diagnosis.probabilite}</p>
                <p><strong>⚠️ Niveau d'urgence :</strong> ${diagnosis.urgence}</p>
                <div style="margin-top: 1rem;">
                    <strong>📋 Recommandations :</strong>
                    <ul>
                        ${diagnosis.recommandations.map(rec => `<li>${rec}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.2); border-radius: var(--radius-md);">
                    <i class="fas fa-info-circle"></i> 
                    <strong>Important :</strong> Ce pré-diagnostic est fourni à titre informatif par l'IA. 
                    Il ne remplace en aucun cas une consultation médicale professionnelle.
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('diagnosticCard').innerHTML = diagnosticHTML;
    document.getElementById('diagnosticResult').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// Contact Form
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalHTML = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                submitBtn.style.background = 'var(--success)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                    contactForm.reset();
                }, 3000);
            }, 1500);
        });
    }
}

// ============================================
// Modals
// ============================================
function initModals() {
    const modal = document.getElementById('contactModal');
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', closeContactModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeContactModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeContactModal();
        }
    });
}

function showContactModal() {
    document.getElementById('contactModal').classList.add('active');
}

function closeContactModal() {
    document.getElementById('contactModal').classList.remove('active');
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Scroll Animations
// ============================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .team-card, .testimonial-card, .process-step');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
};

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ============================================
// Error Handling
// ============================================
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Erreur détectée:', {
        message: msg,
        url: url,
        ligne: lineNo,
        colonne: columnNo,
        erreur: error
    });
    return false;
};

// ============================================
// Service Worker Registration (PWA Ready)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Service worker peut être ajouté ici pour le support PWA
        console.log('Service Worker prêt à être enregistré');
    });
}