// Données de l'anamnèse par spécialité
const anamneseQuestions = {
    gyneco: {
        title: "Anamnèse Gynéco-Obstétrique",
        steps: [
            {
                title: "Informations générales",
                fields: [
                    { label: "Âge", type: "number", id: "age", required: true },
                    { label: "Date des dernières règles", type: "date", id: "dernieres_regles", required: true },
                    { label: "Nombre de grossesses", type: "number", id: "nb_grossesses", required: true },
                ]
            },
            {
                title: "Symptômes actuels",
                fields: [
                    { label: "Symptôme principal", type: "textarea", id: "symptome_principal", required: true },
                    { label: "Douleurs pelviennes (0-10)", type: "range", id: "douleur", required: true },
                    { label: "Saignements anormaux", type: "select", id: "saignements", options: ["Non", "Légers", "Modérés", "Abondants"], required: true },
                ]
            },
            {
                title: "Antécédents médicaux",
                fields: [
                    { label: "Antécédents gynécologiques", type: "textarea", id: "antecedents_gyneco", required: true },
                    { label: "Chirurgies antérieures", type: "textarea", id: "chirurgies", required: false },
                    { label: "Allergies", type: "text", id: "allergies", required: true },
                ]
            },
            {
                title: "Mode de vie",
                fields: [
                    { label: "Tabac", type: "select", id: "tabac", options: ["Non", "Occasionnel", "Régulier"], required: true },
                    { label: "Alcool", type: "select", id: "alcool", options: ["Non", "Occasionnel", "Régulier"], required: true },
                    { label: "Activité physique", type: "select", id: "activite_physique", options: ["Sédentaire", "Modérée", "Intense"], required: true },
                ]
            },
            {
                title: "Médicaments et traitements",
                fields: [
                    { label: "Médicaments actuels", type: "textarea", id: "medicaments", required: true },
                    { label: "Contraception", type: "select", id: "contraception", options: ["Aucune", "Pilule", "DIU", "Implant", "Autre"], required: true },
                ]
            }
        ]
    },
    pediatrie: {
        title: "Anamnèse Pédiatrique",
        steps: [
            {
                title: "Informations de l'enfant",
                fields: [
                    { label: "Âge de l'enfant", type: "number", id: "age_enfant", required: true },
                    { label: "Poids (kg)", type: "number", id: "poids", required: true },
                    { label: "Taille (cm)", type: "number", id: "taille", required: true },
                ]
            },
            {
                title: "Symptômes",
                fields: [
                    { label: "Symptôme principal", type: "textarea", id: "symptome_principal", required: true },
                    { label: "Température (°C)", type: "number", id: "temperature", required: true },
                    { label: "Durée des symptômes (jours)", type: "number", id: "duree_symptomes", required: true },
                ]
            },
            {
                title: "Antécédents",
                fields: [
                    { label: "Vaccinations à jour", type: "select", id: "vaccinations", options: ["Oui", "Non", "Partiellement"], required: true },
                    { label: "Antécédents médicaux", type: "textarea", id: "antecedents", required: true },
                    { label: "Allergies connues", type: "text", id: "allergies", required: true },
                ]
            },
            {
                title: "Alimentation",
                fields: [
                    { label: "Type d'alimentation", type: "select", id: "alimentation", options: ["Allaitement", "Lait maternisé", "Diversifiée", "Normale"], required: true },
                    { label: "Appétit récent", type: "select", id: "appetit", options: ["Normal", "Diminué", "Absent"], required: true },
                ]
            },
            {
                title: "Environnement",
                fields: [
                    { label: "Fratrie", type: "number", id: "fratrie", required: true },
                    { label: "Mode de garde", type: "select", id: "garde", options: ["Maison", "Crèche", "École", "Autre"], required: true },
                ]
            }
        ]
    },
    chirurgie: {
        title: "Anamnèse Chirurgicale",
        steps: [
            {
                title: "Informations générales",
                fields: [
                    { label: "Âge", type: "number", id: "age", required: true },
                    { label: "Motif de consultation chirurgicale", type: "textarea", id: "motif", required: true },
                ]
            },
            {
                title: "Symptômes",
                fields: [
                    { label: "Localisation du problème", type: "text", id: "localisation", required: true },
                    { label: "Intensité de la douleur (0-10)", type: "range", id: "douleur", required: true },
                    { label: "Depuis quand", type: "date", id: "date_debut", required: true },
                ]
            },
            {
                title: "Antécédents chirurgicaux",
                fields: [
                    { label: "Chirurgies antérieures", type: "textarea", id: "chirurgies_anterieures", required: true },
                    { label: "Complications antérieures", type: "textarea", id: "complications", required: false },
                ]
            },
            {
                title: "État de santé général",
                fields: [
                    { label: "Maladies chroniques", type: "textarea", id: "maladies_chroniques", required: true },
                    { label: "Médicaments en cours", type: "textarea", id: "medicaments", required: true },
                    { label: "Allergies", type: "text", id: "allergies", required: true },
                ]
            },
            {
                title: "Habitudes",
                fields: [
                    { label: "Tabac", type: "select", id: "tabac", options: ["Non", "Oui"], required: true },
                    { label: "Alcool", type: "select", id: "alcool", options: ["Non", "Occasionnel", "Régulier"], required: true },
                ]
            }
        ]
    },
    "medecine-interne": {
        title: "Anamnèse Médecine Interne",
        steps: [
            {
                title: "Informations générales",
                fields: [
                    { label: "Âge", type: "number", id: "age", required: true },
                    { label: "Sexe", type: "select", id: "sexe", options: ["Féminin", "Masculin"], required: true },
                    { label: "Profession", type: "text", id: "profession", required: true },
                ]
            },
            {
                title: "Symptômes",
                fields: [
                    { label: "Symptôme principal", type: "textarea", id: "symptome_principal", required: true },
                    { label: "Autres symptômes", type: "textarea", id: "autres_symptomes", required: true },
                    { label: "Depuis quand", type: "date", id: "date_debut", required: true },
                ]
            },
            {
                title: "Antécédents médicaux",
                fields: [
                    { label: "Maladies chroniques", type: "textarea", id: "maladies_chroniques", required: true },
                    { label: "Antécédents familiaux", type: "textarea", id: "antecedents_familiaux", required: true },
                    { label: "Hospitalisations antérieures", type: "textarea", id: "hospitalisations", required: false },
                ]
            },
            {
                title: "Traitements",
                fields: [
                    { label: "Médicaments actuels", type: "textarea", id: "medicaments", required: true },
                    { label: "Allergies médicamenteuses", type: "text", id: "allergies", required: true },
                ]
            },
            {
                title: "Mode de vie",
                fields: [
                    { label: "Tabac", type: "select", id: "tabac", options: ["Non", "Occasionnel", "Régulier"], required: true },
                    { label: "Alcool", type: "select", id: "alcool", options: ["Non", "Occasionnel", "Régulier"], required: true },
                    { label: "Alimentation", type: "select", id: "alimentation", options: ["Équilibrée", "Déséquilibrée", "Régime particulier"], required: true },
                ]
            }
        ]
    },
    "neuro-psy": {
        title: "Anamnèse Neuro-Psychiatrique",
        steps: [
            {
                title: "Informations générales",
                fields: [
                    { label: "Âge", type: "number", id: "age", required: true },
                    { label: "Sexe", type: "select", id: "sexe", options: ["Féminin", "Masculin"], required: true },
                    { label: "Statut professionnel", type: "select", id: "statut_pro", options: ["Actif", "Étudiant", "Sans emploi", "Retraité"], required: true },
                ]
            },
            {
                title: "Symptômes neurologiques",
                fields: [
                    { label: "Céphalées", type: "select", id: "cephalees", options: ["Absentes", "Occasionnelles", "Fréquentes", "Quotidiennes"], required: true },
                    { label: "Troubles de la mémoire", type: "select", id: "memoire", options: ["Aucun", "Légers", "Modérés", "Sévères"], required: true },
                    { label: "Vertiges", type: "select", id: "vertiges", options: ["Non", "Occasionnels", "Fréquents"], required: true },
                ]
            },
            {
                title: "Symptômes psychiatriques",
                fields: [
                    { label: "Anxiété (0-10)", type: "range", id: "anxiete", required: true },
                    { label: "Troubles du sommeil", type: "select", id: "sommeil", options: ["Aucun", "Insomnie", "Hypersomnie", "Sommeil perturbé"], required: true },
                    { label: "Humeur actuelle", type: "select", id: "humeur", options: ["Normale", "Triste", "Irritable", "Exaltée", "Variable"], required: true },
                ]
            },
            {
                title: "Antécédents",
                fields: [
                    { label: "Antécédents psychiatriques familiaux", type: "textarea", id: "antecedents_familiaux", required: true },
                    { label: "Traumatismes crâniens", type: "select", id: "traumatismes", options: ["Aucun", "Léger", "Modéré", "Sévère"], required: true },
                ]
            },
            {
                title: "Traitements et habitudes",
                fields: [
                    { label: "Traitements en cours", type: "textarea", id: "traitements", required: true },
                    { label: "Consommation de substances", type: "select", id: "substances", options: ["Aucune", "Tabac", "Alcool", "Autres"], required: true },
                    { label: "Suivi psychologique antérieur", type: "select", id: "suivi_psy", options: ["Jamais", "Passé", "En cours"], required: true },
                ]
            }
        ]
    }
};

// IA de diagnostic simulée
function generateDiagnosis(specialite, data) {
    const diagnoses = {
        gyneco: [
            {
                condition: "Possible syndrome prémenstruel",
                probabilite: "Élevée",
                recommandations: [
                    "Consultation gynécologique recommandée",
                    "Échographie pelvienne à prévoir",
                    "Bilan hormonal à envisager"
                ],
                urgence: "Modérée"
            },
            {
                condition: "Possibilité de ménorragies fonctionnelles",
                probabilite: "Moyenne",
                recommandations: [
                    "Bilan sanguin (NFS, ferritine)",
                    "Consultation spécialisée dans la semaine",
                    "Surveillance des cycles"
                ],
                urgence: "Modérée"
            }
        ],
        pediatrie: [
            {
                condition: "Possible infection virale infantile",
                probabilite: "Élevée",
                recommandations: [
                    "Surveillance de la température",
                    "Hydratation abondante",
                    "Consultation pédiatrique si fièvre > 38.5°C"
                ],
                urgence: "Faible à modérée"
            }
        ],
        chirurgie: [
            {
                condition: "Pathologie chirurgicale à évaluer",
                probabilite: "Moyenne",
                recommandations: [
                    "Consultation chirurgicale nécessaire",
                    "Bilan pré-opératoire à prévoir",
                    "Imagerie médicale recommandée"
                ],
                urgence: "Modérée"
            }
        ],
        "medecine-interne": [
            {
                condition: "Pathologie systémique suspectée",
                probabilite: "Moyenne",
                recommandations: [
                    "Bilan biologique complet",
                    "Consultation médecine interne",
                    "Suivi régulier à prévoir"
                ],
                urgence: "Modérée"
            }
        ],
        "neuro-psy": [
            {
                condition: "Possible trouble anxio-dépressif",
                probabilite: "Élevée",
                recommandations: [
                    "Consultation neuro-psychiatrique recommandée",
                    "Psychothérapie à envisager",
                    "Bilan biologique pour éliminer cause organique"
                ],
                urgence: "Modérée"
            }
        ]
    };

    const specialiteDiags = diagnoses[specialite] || diagnoses["medecine-interne"];
    return specialiteDiags[Math.floor(Math.random() * specialiteDiags.length)];
}

// Gestion de l'état de la consultation
let currentStep = 0;
let currentSpecialite = null;
let consultationData = {};

function openConsultation(specialite) {
    currentSpecialite = specialite;
    currentStep = 0;
    consultationData = {};
    document.getElementById('anamnese-form').style.display = 'block';
    document.getElementById('resultat-diagnostic').style.display = 'none';
    renderStep();
    
    // Scroll vers la section consultation
    document.getElementById('consultation').scrollIntoView({ behavior: 'smooth' });
}

function renderStep() {
    const specialiteData = anamneseQuestions[currentSpecialite];
    const steps = specialiteData.steps;
    const step = steps[currentStep];
    
    document.getElementById('step-indicator').textContent = `Étape ${currentStep + 1}/${steps.length}`;
    
    // Mise à jour de la barre de progression
    const progress = ((currentStep + 1) / steps.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
    
    let html = `<h3>${step.title}</h3>`;
    
    step.fields.forEach(field => {
        html += `<div class="form-group">`;
        html += `<label for="${field.id}">${field.label}</label>`;
        
        if (field.type === 'textarea') {
            html += `<textarea id="${field.id}" ${field.required ? 'required' : ''} rows="3">${consultationData[field.id] || ''}</textarea>`;
        } else if (field.type === 'select') {
            html += `<select id="${field.id}" ${field.required ? 'required' : ''}>`;
            html += `<option value="">Sélectionnez...</option>`;
            field.options.forEach(option => {
                const selected = consultationData[field.id] === option ? 'selected' : '';
                html += `<option value="${option}" ${selected}>${option}</option>`;
            });
            html += `</select>`;
        } else if (field.type === 'range') {
            html += `<input type="range" id="${field.id}" min="0" max="10" value="${consultationData[field.id] || '5'}" ${field.required ? 'required' : ''}>`;
            html += `<span id="${field.id}-value">${consultationData[field.id] || '5'}</span>`;
        } else {
            html += `<input type="${field.type}" id="${field.id}" value="${consultationData[field.id] || ''}" ${field.required ? 'required' : ''}>`;
        }
        
        html += `</div>`;
    });
    
    // Boutons de navigation
    html += `<div class="nav-buttons">`;
    if (currentStep > 0) {
        html += `<button class="nav-btn prev-btn" onclick="previousStep()">Précédent</button>`;
    } else {
        html += `<div></div>`;
    }
    
    if (currentStep < steps.length - 1) {
        html += `<button class="nav-btn next-btn" onclick="nextStep()">Suivant</button>`;
    } else {
        html += `<button class="nav-btn submit-btn" onclick="submitAnamnese()">Obtenir le diagnostic</button>`;
    }
    html += `</div>`;
    
    document.getElementById('form-steps').innerHTML = html;
    
    // Ajouter les écouteurs pour les range inputs
    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.addEventListener('input', function() {
            document.getElementById(this.id + '-value').textContent = this.value;
        });
    });
}

function previousStep() {
    saveCurrentStepData();
    if (currentStep > 0) {
        currentStep--;
        renderStep();
    }
}

function nextStep() {
    if (validateCurrentStep()) {
        saveCurrentStepData();
        currentStep++;
        renderStep();
    }
}

function validateCurrentStep() {
    const specialiteData = anamneseQuestions[currentSpecialite];
    const step = specialiteData.steps[currentStep];
    
    let isValid = true;
    step.fields.forEach(field => {
        if (field.required) {
            const element = document.getElementById(field.id);
            if (element) {
                if (!element.value) {
                    element.style.borderColor = 'red';
                    isValid = false;
                } else {
                    element.style.borderColor = '#e0e0e0';
                }
            }
        }
    });
    
    if (!isValid) {
        alert('Veuillez remplir tous les champs obligatoires.');
    }
    
    return isValid;
}

function saveCurrentStepData() {
    const specialiteData = anamneseQuestions[currentSpecialite];
    const step = specialiteData.steps[currentStep];
    
    step.fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            consultationData[field.id] = element.value;
        }
    });
}

function submitAnamnese() {
    if (validateCurrentStep()) {
        saveCurrentStepData();
        
        // Afficher un loader
        document.getElementById('form-steps').innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div class="loading"></div>
                <p style="margin-top: 1rem;">Analyse en cours par l'IA...</p>
            </div>
        `;
        
        // Simuler le traitement IA
        setTimeout(() => {
            const diagnosis = generateDiagnosis(currentSpecialite, consultationData);
            displayDiagnosis(diagnosis);
        }, 2000);
    }
}

function displayDiagnosis(diagnosis) {
    document.getElementById('anamnese-form').style.display = 'none';
    document.getElementById('resultat-diagnostic').style.display = 'block';
    
    const diagnosticHTML = `
        <div style="margin-bottom: 1rem;">
            <strong>Condition suspectée :</strong> ${diagnosis.condition}
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Probabilité :</strong> ${diagnosi