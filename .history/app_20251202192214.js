// NGKs Pin Map - Sophisticated Subscriber Management Application
// With complete CSV-based US cities database and 193 countries

// Will be populated from CSV
let US_CITIES_DATABASE = {};

// Complete list of 193 UN-recognized countries
const COUNTRIES_LIST = {
    US: { name: "United States", states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"] },
    CA: { name: "Canada", states: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"] },
    UK: { name: "United Kingdom", states: ["England", "Scotland", "Wales", "Northern Ireland"] },
    AU: { name: "Australia", states: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"] },
    MX: { name: "Mexico", states: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"] },
    AF: { name: "Afghanistan", states: [] },
    AL: { name: "Albania", states: [] },
    DZ: { name: "Algeria", states: [] },
    AD: { name: "Andorra", states: [] },
    AO: { name: "Angola", states: [] },
    AG: { name: "Antigua and Barbuda", states: [] },
    AR: { name: "Argentina", states: [] },
    AM: { name: "Armenia", states: [] },
    AT: { name: "Austria", states: [] },
    AZ: { name: "Azerbaijan", states: [] },
    BS: { name: "Bahamas", states: [] },
    BH: { name: "Bahrain", states: [] },
    BD: { name: "Bangladesh", states: [] },
    BB: { name: "Barbados", states: [] },
    BY: { name: "Belarus", states: [] },
    BE: { name: "Belgium", states: [] },
    BZ: { name: "Belize", states: [] },
    BJ: { name: "Benin", states: [] },
    BT: { name: "Bhutan", states: [] },
    BO: { name: "Bolivia", states: [] },
    BA: { name: "Bosnia and Herzegovina", states: [] },
    BW: { name: "Botswana", states: [] },
    BR: { name: "Brazil", states: [] },
    BN: { name: "Brunei", states: [] },
    BG: { name: "Bulgaria", states: [] },
    BF: { name: "Burkina Faso", states: [] },
    BI: { name: "Burundi", states: [] },
    KH: { name: "Cambodia", states: [] },
    CM: { name: "Cameroon", states: [] },
    CV: { name: "Cape Verde", states: [] },
    CF: { name: "Central African Republic", states: [] },
    TD: { name: "Chad", states: [] },
    CL: { name: "Chile", states: [] },
    CN: { name: "China", states: [] },
    CO: { name: "Colombia", states: [] },
    KM: { name: "Comoros", states: [] },
    CG: { name: "Congo", states: [] },
    CR: { name: "Costa Rica", states: [] },
    HR: { name: "Croatia", states: [] },
    CU: { name: "Cuba", states: [] },
    CY: { name: "Cyprus", states: [] },
    CZ: { name: "Czech Republic", states: [] },
    DK: { name: "Denmark", states: [] },
    DJ: { name: "Djibouti", states: [] },
    DM: { name: "Dominica", states: [] },
    DO: { name: "Dominican Republic", states: [] },
    EC: { name: "Ecuador", states: [] },
    EG: { name: "Egypt", states: [] },
    SV: { name: "El Salvador", states: [] },
    GQ: { name: "Equatorial Guinea", states: [] },
    ER: { name: "Eritrea", states: [] },
    EE: { name: "Estonia", states: [] },
    ET: { name: "Ethiopia", states: [] },
    FJ: { name: "Fiji", states: [] },
    FI: { name: "Finland", states: [] },
    FR: { name: "France", states: [] },
    GA: { name: "Gabon", states: [] },
    GM: { name: "Gambia", states: [] },
    GE: { name: "Georgia", states: [] },
    DE: { name: "Germany", states: [] },
    GH: { name: "Ghana", states: [] },
    GR: { name: "Greece", states: [] },
    GD: { name: "Grenada", states: [] },
    GT: { name: "Guatemala", states: [] },
    GN: { name: "Guinea", states: [] },
    GW: { name: "Guinea-Bissau", states: [] },
    GY: { name: "Guyana", states: [] },
    HT: { name: "Haiti", states: [] },
    HN: { name: "Honduras", states: [] },
    HU: { name: "Hungary", states: [] },
    IS: { name: "Iceland", states: [] },
    IN: { name: "India", states: [] },
    ID: { name: "Indonesia", states: [] },
    IR: { name: "Iran", states: [] },
    IQ: { name: "Iraq", states: [] },
    IE: { name: "Ireland", states: [] },
    IL: { name: "Israel", states: [] },
    IT: { name: "Italy", states: [] },
    JM: { name: "Jamaica", states: [] },
    JP: { name: "Japan", states: [] },
    JO: { name: "Jordan", states: [] },
    KZ: { name: "Kazakhstan", states: [] },
    KE: { name: "Kenya", states: [] },
    KI: { name: "Kiribati", states: [] },
    KP: { name: "North Korea", states: [] },
    KR: { name: "South Korea", states: [] },
    KW: { name: "Kuwait", states: [] },
    KG: { name: "Kyrgyzstan", states: [] },
    LA: { name: "Laos", states: [] },
    LV: { name: "Latvia", states: [] },
    LB: { name: "Lebanon", states: [] },
    LS: { name: "Lesotho", states: [] },
    LR: { name: "Liberia", states: [] },
    LY: { name: "Libya", states: [] },
    LI: { name: "Liechtenstein", states: [] },
    LT: { name: "Lithuania", states: [] },
    LU: { name: "Luxembourg", states: [] },
    MG: { name: "Madagascar", states: [] },
    MW: { name: "Malawi", states: [] },
    MY: { name: "Malaysia", states: [] },
    MV: { name: "Maldives", states: [] },
    ML: { name: "Mali", states: [] },
    MT: { name: "Malta", states: [] },
    MH: { name: "Marshall Islands", states: [] },
    MR: { name: "Mauritania", states: [] },
    MU: { name: "Mauritius", states: [] },
    MD: { name: "Moldova", states: [] },
    MC: { name: "Monaco", states: [] },
    MN: { name: "Mongolia", states: [] },
    ME: { name: "Montenegro", states: [] },
    MA: { name: "Morocco", states: [] },
    MZ: { name: "Mozambique", states: [] },
    MM: { name: "Myanmar", states: [] },
    NA: { name: "Namibia", states: [] },
    NR: { name: "Nauru", states: [] },
    NP: { name: "Nepal", states: [] },
    NL: { name: "Netherlands", states: [] },
    NZ: { name: "New Zealand", states: [] },
    NI: { name: "Nicaragua", states: [] },
    NE: { name: "Niger", states: [] },
    NG: { name: "Nigeria", states: [] },
    NO: { name: "Norway", states: [] },
    OM: { name: "Oman", states: [] },
    PK: { name: "Pakistan", states: [] },
    PW: { name: "Palau", states: [] },
    PS: { name: "Palestine", states: [] },
    PA: { name: "Panama", states: [] },
    PG: { name: "Papua New Guinea", states: [] },
    PY: { name: "Paraguay", states: [] },
    PE: { name: "Peru", states: [] },
    PH: { name: "Philippines", states: [] },
    PL: { name: "Poland", states: [] },
    PT: { name: "Portugal", states: [] },
    QA: { name: "Qatar", states: [] },
    RO: { name: "Romania", states: [] },
    RU: { name: "Russia", states: [] },
    RW: { name: "Rwanda", states: [] },
    KN: { name: "Saint Kitts and Nevis", states: [] },
    LC: { name: "Saint Lucia", states: [] },
    VC: { name: "Saint Vincent and the Grenadines", states: [] },
    WS: { name: "Samoa", states: [] },
    SM: { name: "San Marino", states: [] },
    ST: { name: "Sao Tome and Principe", states: [] },
    SA: { name: "Saudi Arabia", states: [] },
    SN: { name: "Senegal", states: [] },
    RS: { name: "Serbia", states: [] },
    SC: { name: "Seychelles", states: [] },
    SL: { name: "Sierra Leone", states: [] },
    SG: { name: "Singapore", states: [] },
    SK: { name: "Slovakia", states: [] },
    SI: { name: "Slovenia", states: [] },
    SB: { name: "Solomon Islands", states: [] },
    SO: { name: "Somalia", states: [] },
    ZA: { name: "South Africa", states: [] },
    SS: { name: "South Sudan", states: [] },
    ES: { name: "Spain", states: [] },
    LK: { name: "Sri Lanka", states: [] },
    SD: { name: "Sudan", states: [] },
    SR: { name: "Suriname", states: [] },
    SE: { name: "Sweden", states: [] },
    CH: { name: "Switzerland", states: [] },
    SY: { name: "Syria", states: [] },
    TW: { name: "Taiwan", states: [] },
    TJ: { name: "Tajikistan", states: [] },
    TZ: { name: "Tanzania", states: [] },
    TH: { name: "Thailand", states: [] },
    TL: { name: "Timor-Leste", states: [] },
    TG: { name: "Togo", states: [] },
    TO: { name: "Tonga", states: [] },
    TT: { name: "Trinidad and Tobago", states: [] },
    TN: { name: "Tunisia", states: [] },
    TR: { name: "Turkey", states: [] },
    TM: { name: "Turkmenistan", states: [] },
    TV: { name: "Tuvalu", states: [] },
    UG: { name: "Uganda", states: [] },
    UA: { name: "Ukraine", states: [] },
    AE: { name: "United Arab Emirates", states: [] },
    UY: { name: "Uruguay", states: [] },
    UZ: { name: "Uzbekistan", states: [] },
    VU: { name: "Vanuatu", states: [] },
    VA: { name: "Vatican City", states: [] },
    VE: { name: "Venezuela", states: [] },
    VN: { name: "Vietnam", states: [] },
    YE: { name: "Yemen", states: [] },
    ZM: { name: "Zambia", states: [] },
    ZW: { name: "Zimbabwe", states: [] }
};

// Load US cities from CSV
function loadUSCitiesFromCSV() {
    fetch('./uscities.csv')
        .then(response => response.text())
        .then(csvContent => {
            const lines = csvContent.split('\n');
            
            // Skip header, parse CSV
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i].trim();
                if (!line) continue;
                
                // Parse CSV - handle quoted fields
                const regex = /"([^"]*)"|([^,]+)/g;
                const parts = [];
                let match;
                while ((match = regex.exec(line)) !== null) {
                    parts.push(match[1] || match[2]);
                }
                
                if (parts.length < 3) continue;
                
                const city = parts[0].trim();
                const stateId = parts[2].trim();
                
                if (stateId && city) {
                    // Map state abbreviations to full names
                    const stateMap = {
                        'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas',
                        'CA': 'California', 'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware',
                        'FL': 'Florida', 'GA': 'Georgia', 'HI': 'Hawaii', 'ID': 'Idaho',
                        'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa', 'KS': 'Kansas',
                        'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
                        'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi',
                        'MO': 'Missouri', 'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada',
                        'NH': 'New Hampshire', 'NJ': 'New Jersey', 'NM': 'New Mexico', 'NY': 'New York',
                        'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio', 'OK': 'Oklahoma',
                        'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
                        'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah',
                        'VT': 'Vermont', 'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia',
                        'WI': 'Wisconsin', 'WY': 'Wyoming'
                    };
                    
                    const state = stateMap[stateId];
                    if (state) {
                        if (!US_CITIES_DATABASE[state]) {
                            US_CITIES_DATABASE[state] = [];
                        }
                        // Only add if not duplicate
                        if (!US_CITIES_DATABASE[state].includes(city)) {
                            US_CITIES_DATABASE[state].push(city);
                        }
                    }
                }
            }
            
            // Sort cities within each state
            Object.keys(US_CITIES_DATABASE).forEach(state => {
                US_CITIES_DATABASE[state].sort();
            });
            
            console.log('US Cities loaded successfully', Object.keys(US_CITIES_DATABASE).length, 'states');
        })
        .catch(error => console.error('Error loading CSV:', error));
}

class PinMapApp {
    constructor() {
        this.map = null;
        this.pins = [];
        this.markers = new Map();
        this.nextId = 1;
        this.selectedTier = null;

        this.initializeMap();
        this.setupEventListeners();
        this.populateCountries();
        this.loadPins();
    }

    initializeMap() {
        // Initialize Leaflet map centered on North America
        this.map = L.map('map').setView([39.8283, -98.5795], 4);
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(this.map);
    }

    setupEventListeners() {
        // Add pin button
        document.getElementById('add-pin-btn').addEventListener('click', () => this.openModal());

        // Clear all pins button
        document.getElementById('clear-pins-btn').addEventListener('click', () => this.clearAllPins());

        // Export button
        document.getElementById('export-btn').addEventListener('click', () => this.exportData());

        // Import button
        document.getElementById('import-btn').addEventListener('click', () => this.importData());

        // Modal controls
        document.getElementById('modal-close').addEventListener('click', () => this.closeModal());
        document.getElementById('form-cancel').addEventListener('click', () => this.closeModal());
        document.getElementById('pin-modal').addEventListener('click', (e) => {
            if (e.target.id === 'pin-modal') this.closeModal();
        });

        // Tier level buttons
        document.querySelectorAll('.tier-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.selectTier(e));
        });

        // Searchable dropdowns
        this.setupSearchableDropdown('country', null, (value) => this.onCountryChange(value));
        this.setupSearchableDropdown('state', null, (value) => this.onStateChange(value));
        this.setupSearchableDropdown('city', null, null);

        // Form submit
        document.getElementById('pin-form').addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    populateCountries() {
        const input = document.getElementById('country');
        const dropdown = document.getElementById('country-dropdown');
        dropdown.innerHTML = '';
        
        Object.entries(COUNTRIES_LIST).forEach(([code, data]) => {
            const option = document.createElement('div');
            option.className = 'select-option';
            option.textContent = data.name;
            option.dataset.value = code;
            option.addEventListener('click', () => {
                input.value = data.name;
                input.dataset.value = code;
                this.closeDropdown('country-dropdown');
                this.onCountryChange(code);
            });
            dropdown.appendChild(option);
        });
    }

    setupSearchableDropdown(id, options, onChangeCallback) {
        const input = document.getElementById(id);
        const dropdown = document.getElementById(id + '-dropdown');
        const wrapper = document.getElementById(id + '-wrapper');

        // Open dropdown on focus
        input.addEventListener('focus', () => {
            dropdown.classList.add('open');
        });

        // Close dropdown on blur (with small delay for click handling)
        input.addEventListener('blur', () => {
            setTimeout(() => {
                if (dropdown.classList.contains('open')) {
                    dropdown.classList.remove('open');
                }
            }, 200);
        });

        // Filter on input
        input.addEventListener('input', (e) => {
            const search = e.target.value.toLowerCase();
            const allOptions = dropdown.querySelectorAll('.select-option');
            let visibleCount = 0;

            allOptions.forEach(option => {
                const text = option.textContent.toLowerCase();
                if (text.includes(search)) {
                    option.classList.remove('hidden');
                    visibleCount++;
                } else {
                    option.classList.add('hidden');
                }
            });

            // Show "no results" message if needed
            if (visibleCount === 0 && allOptions.length > 0) {
                if (!dropdown.querySelector('.no-results')) {
                    const noResults = document.createElement('div');
                    noResults.className = 'select-option no-results';
                    noResults.textContent = 'No matches found';
                    dropdown.appendChild(noResults);
                }
            } else {
                const noResults = dropdown.querySelector('.no-results');
                if (noResults) noResults.remove();
            }
        });

        // Prevent dropdown from closing when scrolling
        dropdown.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('select-option')) {
                e.preventDefault();
            }
        });
    }

    onCountryChange(countryCode) {
        const stateInput = document.getElementById('state');
        const stateDropdown = document.getElementById('state-dropdown');
        const cityInput = document.getElementById('city');
        const cityDropdown = document.getElementById('city-dropdown');

        // Clear state and city
        stateInput.value = '';
        stateInput.dataset.value = '';
        stateDropdown.innerHTML = '';
        cityInput.value = '';
        cityInput.dataset.value = '';
        cityDropdown.innerHTML = '';

        if (!countryCode) return;

        const country = COUNTRIES_LIST[countryCode];
        if (country && country.states && country.states.length > 0) {
            country.states.forEach(state => {
                const option = document.createElement('div');
                option.className = 'select-option';
                option.textContent = state;
                option.dataset.value = state;
                option.addEventListener('click', () => {
                    stateInput.value = state;
                    stateInput.dataset.value = state;
                    this.closeDropdown('state-dropdown');
                    this.onStateChange(state, countryCode);
                });
                stateDropdown.appendChild(option);
            });
        }
    }

    onStateChange(state, countryCode) {
        const cityInput = document.getElementById('city');
        const cityDropdown = document.getElementById('city-dropdown');
        const country = countryCode || document.getElementById('country').dataset.value;

        cityInput.value = '';
        cityInput.dataset.value = '';
        cityDropdown.innerHTML = '';

        if (!state || country !== 'US') return;

        // Load cities for selected US state
        const cities = US_CITIES_DATABASE[state] || [];
        cities.forEach(city => {
            const option = document.createElement('div');
            option.className = 'select-option';
            option.textContent = city;
            option.dataset.value = city;
            option.addEventListener('click', () => {
                cityInput.value = city;
                cityInput.dataset.value = city;
                this.closeDropdown('city-dropdown');
            });
            cityDropdown.appendChild(option);
        });
    }

    closeDropdown(dropdownId) {
        document.getElementById(dropdownId).classList.remove('open');
    }

    updateStates(e) {
        const countryCode = e.target.value;
        const stateSelect = document.getElementById('state');
        const citySelect = document.getElementById('city');
        
        stateSelect.innerHTML = '<option value="">Select a state/region...</option>';
        citySelect.innerHTML = '<option value="">Select a city...</option>';
        
        if (!countryCode) return;
        
        const country = COUNTRIES_LIST[countryCode];
        if (country && country.states && country.states.length > 0) {
            country.states.forEach(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }
    }

    updateCities(e) {
        const state = e.target.value;
        const countryCode = document.getElementById('country').value;
        const citySelect = document.getElementById('city');
        
        citySelect.innerHTML = '<option value="">Select a city...</option>';
        
        if (!state || countryCode !== 'US') return;
        
        // Load cities for selected US state
        const cities = US_CITIES_DATABASE[state] || [];
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    resetForm() {
        document.getElementById('pin-form').reset();
        document.getElementById('country').value = '';
        document.getElementById('country').dataset.value = '';
        document.getElementById('state').value = '';
        document.getElementById('state').dataset.value = '';
        document.getElementById('state-dropdown').innerHTML = '';
        document.getElementById('city').value = '';
        document.getElementById('city').dataset.value = '';
        document.getElementById('city-dropdown').innerHTML = '';
        document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
        this.selectedTier = null;
    }

    openModal() {
        this.resetForm();
        document.getElementById('pin-modal').style.display = 'flex';
    }

    closeModal() {
        document.getElementById('pin-modal').style.display = 'none';
        this.resetForm();
    }

    selectTier(e) {
        document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.selectedTier = e.target.dataset.tier;
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        if (!this.selectedTier) {
            alert('Please select a tier level');
            return;
        }

        const name = document.getElementById('name').value.trim();
        const company = document.getElementById('company').value.trim();
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (!name || !country || !state || !city) {
            alert('Please fill in all required fields');
            return;
        }

        this.addPin(name, company, country, state, city, email, phone);
        this.closeModal();
    }

    addPin(name, company, country, state, city, email, phone) {
        const pin = {
            id: this.nextId++,
            name,
            company,
            country,
            state,
            city,
            email,
            phone,
            tier: this.selectedTier,
            lat: 0,
            lng: 0,
            timestamp: new Date().toISOString()
        };

        this.pins.push(pin);
        
        // Use geocoding API or approximate location
        this.geocodeLocation(state, city, country, (lat, lng) => {
            pin.lat = lat;
            pin.lng = lng;
            this.addMarker(pin);
            this.savePins();
        });
    }

    geocodeLocation(state, city, country, callback) {
        // Approximate coordinates for demonstration
        // In production, use a proper geocoding service
        const coords = {
            'US-Texas-Houston': [29.7604, -95.3698],
            'US-California-Los Angeles': [34.0522, -118.2437],
            'US-New York-New York': [40.7128, -74.0060]
        };
        
        const key = `${country}-${state}-${city}`;
        const coord = coords[key] || [39.8283, -98.5795];
        callback(coord[0], coord[1]);
    }

    addMarker(pin) {
        const markerColor = {
            'tier1': '#FF6B6B',
            'tier2': '#4ECDC4',
            'tier3': '#45B7D1'
        }[pin.tier] || '#808080';

        const marker = L.circleMarker([pin.lat, pin.lng], {
            radius: 8,
            fillColor: markerColor,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.map);

        marker.bindPopup(`
            <strong>${pin.name}</strong><br>
            ${pin.company ? `Company: ${pin.company}<br>` : ''}
            ${pin.city}, ${pin.state}<br>
            Tier: ${pin.tier}
        `);

        this.markers.set(pin.id, marker);
    }

    clearAllPins() {
        if (!confirm('Delete all pins? This cannot be undone.')) return;
        
        this.markers.forEach(marker => marker.remove());
        this.markers.clear();
        this.pins = [];
        this.savePins();
    }

    exportData() {
        const dataStr = JSON.stringify(this.pins, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `pins-export-${Date.now()}.json`;
        link.click();
    }

    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const importedPins = JSON.parse(event.target.result);
                    if (Array.isArray(importedPins)) {
                        this.pins = importedPins;
                        this.nextId = Math.max(...importedPins.map(p => p.id)) + 1;
                        this.savePins();
                        this.loadPins();
                        alert('Pins imported successfully');
                    }
                } catch (error) {
                    alert('Error importing file: ' + error.message);
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    savePins() {
        localStorage.setItem('pins', JSON.stringify(this.pins));
    }

    loadPins() {
        const saved = localStorage.getItem('pins');
        if (saved) {
            try {
                this.pins = JSON.parse(saved);
                this.nextId = Math.max(...this.pins.map(p => p.id), 0) + 1;
                this.pins.forEach(pin => this.addMarker(pin));
            } catch (error) {
                console.error('Error loading pins:', error);
            }
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadUSCitiesFromCSV();
    new PinMapApp();
});
