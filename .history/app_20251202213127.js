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
                
                if (parts.length < 8) continue;
                
                const city = parts[0].trim();
                const stateId = parts[2].trim();
                const lat = parseFloat(parts[6].trim());
                const lng = parseFloat(parts[7].trim());
                
                if (stateId && city && !isNaN(lat) && !isNaN(lng)) {
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
                            US_CITIES_DATABASE[state] = {};
                        }
                        // Store city with coordinates {city: [lat, lng]}
                        if (!US_CITIES_DATABASE[state][city]) {
                            US_CITIES_DATABASE[state][city] = [lat, lng];
                        }
                    }
                }
            }
            
            // Sort cities within each state
            Object.keys(US_CITIES_DATABASE).forEach(state => {
                const cities = Object.keys(US_CITIES_DATABASE[state]).sort();
                const sortedCities = {};
                cities.forEach(city => {
                    sortedCities[city] = US_CITIES_DATABASE[state][city];
                });
                US_CITIES_DATABASE[state] = sortedCities;
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
        
        // Add CartoDB Positron tiles (English language)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 19
        }).addTo(this.map);
    }

    setupEventListeners() {
        // Add pin button
        document.getElementById('add-pin-btn').addEventListener('click', () => this.openModal());

        // Export button
        document.getElementById('export-btn').addEventListener('click', () => this.exportData());

        // Import button
        document.getElementById('import-btn').addEventListener('click', () => this.importData());

        // Settings button
        document.getElementById('settings-btn').addEventListener('click', () => this.openSettings());

        // Logo click
        document.getElementById('footer-logo').addEventListener('click', () => this.openLogoModal());

        // Logo modal controls
        document.getElementById('logo-modal-close').addEventListener('click', () => this.closeLogoModal());
        document.getElementById('logo-modal').addEventListener('click', (e) => {
            if (e.target.id === 'logo-modal') this.closeLogoModal();
        });

        // Settings modal controls
        document.getElementById('settings-close').addEventListener('click', () => this.closeSettings());
        document.getElementById('settings-done-btn').addEventListener('click', () => this.closeSettings());
        document.getElementById('clear-data-btn').addEventListener('click', () => this.clearAllData());
        document.getElementById('settings-modal').addEventListener('click', (e) => {
            if (e.target.id === 'settings-modal') this.closeSettings();
        });

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

        // Load cities for selected US state (now stored as object with coordinates)
        const citiesObj = US_CITIES_DATABASE[state] || {};
        const cities = Object.keys(citiesObj).sort();
        
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
        document.getElementById('location-notes').value = '';
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

    openSettings() {
        this.populateStorageInfo();
        document.getElementById('settings-modal').style.display = 'flex';
    }

    closeSettings() {
        document.getElementById('settings-modal').style.display = 'none';
    }

    openLogoModal() {
        document.getElementById('logo-modal').style.display = 'flex';
    }

    closeLogoModal() {
        document.getElementById('logo-modal').style.display = 'none';
    }

    populateStorageInfo() {
        const storageKey = 'ngks_pins';
        
        // Get stored data
        const storedData = localStorage.getItem(storageKey);
        let pins = [];
        let storageSize = 0;

        if (storedData) {
            try {
                pins = JSON.parse(storedData);
                storageSize = new Blob([storedData]).size;
            } catch (e) {
                console.error('Error parsing stored data:', e);
            }
        }

        // Update display
        document.getElementById('pins-count').textContent = pins.length;
        document.getElementById('storage-size').textContent = this.formatBytes(storageSize);
    }

    formatBytes(bytes) {
        if (bytes === 0) return '0 bytes';
        const k = 1024;
        const sizes = ['bytes', 'KB', 'MB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }

    clearAllData() {
        if (confirm('Are you sure you want to clear all pins? This cannot be undone.')) {
            localStorage.removeItem('ngks_pins');
            this.loadPinsFromStorage();
            this.populateStorageInfo();
            alert('All pins have been cleared.');
        }
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

        const name = document.getElementById('full-name').value.trim();
        const username = document.getElementById('user-name').value.trim();
        const country = document.getElementById('country').dataset.value;
        const state = document.getElementById('state').dataset.value;
        const city = document.getElementById('city').dataset.value;
        const foreignCity = document.getElementById('location-notes').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const notes = document.getElementById('notes').value.trim();

        // For US: require state and city
        // For non-US: require foreignCity
        if (!name || !username || !country) {
            alert('Please fill in all required fields');
            return;
        }

        if (country === 'US') {
            if (!state || !city) {
                alert('Please select state and city for US locations');
                return;
            }
        } else {
            if (!foreignCity) {
                alert('Please enter a city/town for this country');
                return;
            }
        }

        this.addPin(name, username, country, state, city, phone, notes, foreignCity);
        this.closeModal();
    }

    addPin(name, company, country, state, city, email, phone, foreignCity = '') {
        const pin = {
            id: this.nextId++,
            name,
            company,
            country,
            state,
            city,
            email,
            phone,
            foreignCity,
            tier: this.selectedTier,
            lat: 0,
            lng: 0,
            timestamp: new Date().toISOString()
        };

        this.pins.push(pin);
        
        // Use geocoding API or approximate location
        this.geocodeLocation(state, city, country, foreignCity, (lat, lng) => {
            pin.lat = lat;
            pin.lng = lng;
            this.addMarker(pin);
            this.savePins();
        });
    }

    geocodeLocation(state, city, country, foreignCity, callback) {
        let query;
        
        if (country === 'US') {
            // US: Use city and state
            if (state && city) {
                query = `${city}, ${state}, USA`;
            } else {
                callback(39.8283, -98.5795); // Default to US center if not found
                return;
            }
        } else {
            // Foreign: Use city and country name
            if (foreignCity) {
                const countryObj = COUNTRIES_LIST[country];
                const countryName = countryObj ? countryObj.name : '';
                query = `${foreignCity}, ${countryName}`;
            } else {
                callback(20, 0); // Default to equator if not found
                return;
            }
        }
        
        // Use Nominatim geocoding API (free, no key required)
        const nominatimUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;
        
        fetch(nominatimUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    const result = data[0];
                    callback(parseFloat(result.lat), parseFloat(result.lon));
                } else {
                    // Fallback to default if not found
                    if (country === 'US') {
                        callback(39.8283, -98.5795);
                    } else {
                        callback(20, 0);
                    }
                }
            })
            .catch(error => {
                console.error('Geocoding error:', error);
                // Fallback to default on error
                if (country === 'US') {
                    callback(39.8283, -98.5795);
                } else {
                    callback(20, 0);
                }
            });
    }

    createPushPinIcon(tier) {
        const tierColors = {
            'member': '#9C27B0',      // Purple for Member
            'subscriber': '#FFD700',   // Gold for Subscriber
            'viewer': '#8B4513'        // Brown for Viewer
        };
        
        const color = tierColors[tier] || '#808080';
        
        // Symbol for tier indicator (using simple text that's Latin1 compatible)
        const tierSymbol = {
            'member': 'M',
            'subscriber': 'S',
            'viewer': 'V'
        }[tier] || '●';

        // SVG push pin icon
        const svgString = `
            <svg width="32" height="40" viewBox="0 0 32 40" xmlns="http://www.w3.org/2000/svg">
                <!-- Pin body -->
                <path d="M16 2 C23 2, 29 8, 29 16 C29 25, 16 38, 16 38 C16 38, 3 25, 3 16 C3 8, 9 2, 16 2 Z" fill="${color}" stroke="white" stroke-width="1.5"/>
                <!-- Inner circle -->
                <circle cx="16" cy="15" r="7" fill="white" opacity="0.9"/>
                <!-- Tier indicator -->
                <text x="16" y="19" font-size="12" font-weight="bold" text-anchor="middle" fill="${color}">${tierSymbol}</text>
            </svg>
        `;

        // Use encodeURIComponent for proper UTF-8 encoding
        const encodedSvg = encodeURIComponent(svgString).replace(/'/g, "%27").replace(/"/g, "%22");
        
        const icon = L.icon({
            iconUrl: 'data:image/svg+xml;charset=utf-8,' + encodedSvg,
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40],
            className: 'tier-marker'
        });

        return icon;
    }

    addMarker(pin) {
        const icon = this.createPushPinIcon(pin.tier);

        const marker = L.marker([pin.lat, pin.lng], {
            icon: icon
        }).addTo(this.map);

        marker.bindPopup(`
            <div class="pin-popup">
                <strong>${pin.name}</strong><br>
                ${pin.company ? `Company: ${pin.company}<br>` : ''}
                ${pin.country === 'US' ? `${pin.city}, ${pin.state}` : pin.foreignCity}<br>
                <span class="tier-badge tier-${pin.tier}">Tier: ${pin.tier}</span><br>
                Lat: ${pin.lat.toFixed(4)}, Lng: ${pin.lng.toFixed(4)}
                <div class="pin-popup-actions">
                    <button class="pin-edit-btn" data-pin-id="${pin.id}">Edit</button>
                    <button class="pin-delete-btn" data-pin-id="${pin.id}">Delete</button>
                </div>
            </div>
        `);

        marker.on('popupopen', () => {
            document.querySelector(`[data-pin-id="${pin.id}"].pin-edit-btn`)?.addEventListener('click', () => this.editPin(pin));
            document.querySelector(`[data-pin-id="${pin.id}"].pin-delete-btn`)?.addEventListener('click', () => this.deletePin(pin.id));
        });

        this.markers.set(pin.id, marker);
    }

    editPin(pin) {
        // Populate form with pin data
        document.getElementById('full-name').value = pin.name;
        document.getElementById('user-name').value = pin.company;
        document.getElementById('country').value = pin.country;
        document.getElementById('country').dataset.value = pin.country;
        
        if (pin.country === 'US') {
            document.getElementById('state').value = pin.state;
            document.getElementById('state').dataset.value = pin.state;
            document.getElementById('city').value = pin.city;
            document.getElementById('city').dataset.value = pin.city;
        } else {
            document.getElementById('location-notes').value = pin.foreignCity;
        }
        
        document.getElementById('phone').value = pin.email || '';
        document.getElementById('notes').value = pin.notes || '';
        
        // Set tier
        document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`[data-tier="${pin.tier}"]`)?.classList.add('active');
        this.selectedTier = pin.tier;
        
        // Store the pin ID for update
        this.editingPinId = pin.id;
        
        // Open modal
        this.openModal();
    }

    deletePin(pinId) {
        if (!confirm('Are you sure you want to delete this pin?')) return;
        
        // Remove from pins array
        this.pins = this.pins.filter(p => p.id !== pinId);
        
        // Remove marker from map
        const marker = this.markers.get(pinId);
        if (marker) {
            marker.remove();
            this.markers.delete(pinId);
        }
        
        // Save and close popup
        this.savePins();
        const popup = document.querySelector('.leaflet-popup');
        if (popup) {
            popup.closest('.leaflet-popup-pane')?.querySelector('.leaflet-popup-close-button')?.click();
        }
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
