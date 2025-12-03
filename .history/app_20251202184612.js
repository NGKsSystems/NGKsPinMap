// NGKs Pin Map - Sophisticated Subscriber Management Application

const COUNTRIES = {
    US: {
        name: "United States",
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        cities: {
            "Alabama": ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
            "Alaska": ["Anchorage", "Juneau", "Fairbanks", "Ketchikan", "Sitka"],
            "Arizona": ["Phoenix", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria"],
            "Arkansas": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"],
            "California": ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Irvine", "Chula Vista", "Fremont"],
            "Colorado": ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton"],
            "Connecticut": ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury", "Norwalk"],
            "Delaware": ["Wilmington", "Dover", "Newark", "Middletown"],
            "Florida": ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Fort Lauderdale", "Tallahassee", "Port St. Lucie", "Fontainebleau"],
            "Georgia": ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Alpharetta", "Marietta"],
            "Hawaii": ["Honolulu", "Hilo", "Kailua", "Kaneohe", "Wailuku"],
            "Idaho": ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
            "Illinois": ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin"],
            "Indiana": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Bloomington", "Gary"],
            "Iowa": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City"],
            "Kansas": ["Kansas City", "Wichita", "Overland Park", "Topeka", "Olathe"],
            "Kentucky": ["Louisville", "Lexington", "Covington", "Bowling Green", "Owensboro"],
            "Louisiana": ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
            "Maine": ["Portland", "Lewiston", "Bangor", "Augusta", "Biddeford"],
            "Maryland": ["Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie", "College Park"],
            "Massachusetts": ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford"],
            "Michigan": ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint"],
            "Minnesota": ["Minneapolis", "St. Paul", "Rochester", "Bloomington", "Duluth", "Maple Grove"],
            "Mississippi": ["Jackson", "Gulfport", "Biloxi", "Hattiesburg", "Meridian"],
            "Missouri": ["Kansas City", "St. Louis", "Springfield", "Independence", "Columbia", "Lee's Summit"],
            "Montana": ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte"],
            "Nebraska": ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"],
            "Nevada": ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"],
            "New Hampshire": ["Manchester", "Nashua", "Concord", "Derry", "Rochester"],
            "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton", "Atlantic City"],
            "New Mexico": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"],
            "New York": ["New York", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle"],
            "North Carolina": ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary"],
            "North Dakota": ["Bismarck", "Fargo", "Grand Forks", "Minot", "Williston"],
            "Ohio": ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma"],
            "Oklahoma": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"],
            "Oregon": ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Bend"],
            "Pennsylvania": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton"],
            "Rhode Island": ["Providence", "Warwick", "Cranston", "Pawtucket", "Woonsocket"],
            "South Carolina": ["Charleston", "Columbia", "Greenville", "Myrtle Beach", "Spartanburg"],
            "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
            "Tennessee": ["Memphis", "Nashville", "Knoxville", "Chattanooga", "Clarksville"],
            "Texas": ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Garland"],
            "Utah": ["Salt Lake City", "Provo", "West Valley City", "Ogden", "Taylorsville"],
            "Vermont": ["Burlington", "Rutland", "Montpelier", "Bennington", "Barre"],
            "Virginia": ["Virginia Beach", "Norfolk", "Richmond", "Alexandria", "Arlington", "Roanoke"],
            "Washington": ["Seattle", "Spokane", "Tacoma", "Bellevue", "Kent", "Everett"],
            "West Virginia": ["Charleston", "Huntington", "Parkersburg", "Morgantown", "Wheeling"],
            "Wisconsin": ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"],
            "Wyoming": ["Cheyenne", "Laramie", "Casper", "Gillette", "Rock Springs"]
        }
    },
    CA: {
        name: "Canada",
        states: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"]
    },
    UK: {
        name: "United Kingdom",
        states: ["England", "Scotland", "Wales", "Northern Ireland"]
    },
    AU: {
        name: "Australia",
        states: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia"]
    },
    MX: {
        name: "Mexico",
        states: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"]
    }
};

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

        // Country change
        document.getElementById('country').addEventListener('change', (e) => this.updateStates(e));

        // State change
        document.getElementById('state').addEventListener('change', (e) => this.updateCities(e));

        // Form submit
        document.getElementById('pin-form').addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    populateCountries() {
        const countrySelect = document.getElementById('country');
        Object.entries(COUNTRIES).forEach(([code, data]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = data.name;
            countrySelect.appendChild(option);
        });
    }

    updateStates(e) {
        const countryCode = e.target.value;
        const stateSelect = document.getElementById('state');
        stateSelect.innerHTML = '<option value="">Select State/Province...</option>';

        if (countryCode && COUNTRIES[countryCode]) {
            const states = COUNTRIES[countryCode].states;
            states.forEach(state => {
                const option = document.createElement('option');
                option.value = state;
                option.textContent = state;
                stateSelect.appendChild(option);
            });
        }
    }

    selectTier(e) {
        e.preventDefault();
        // Remove active class from all buttons
        document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
        // Add active to clicked button
        e.target.classList.add('active');
        // Store selected tier
        this.selectedTier = e.target.dataset.tier;
        document.getElementById('tier-level').value = this.selectedTier;
    }

    openModal() {
        this.resetForm();
        document.getElementById('pin-modal').classList.remove('hidden');
    }

    closeModal() {
        document.getElementById('pin-modal').classList.add('hidden');
        this.resetForm();
    }

    resetForm() {
        document.getElementById('pin-form').reset();
        document.querySelectorAll('.tier-btn').forEach(btn => btn.classList.remove('active'));
        this.selectedTier = null;
        document.getElementById('tier-level').value = '';
        document.getElementById('state').innerHTML = '<option value="">Select State/Province...</option>';
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const formData = {
            id: this.nextId++,
            userName: document.getElementById('user-name').value,
            fullName: document.getElementById('full-name').value,
            tier: document.getElementById('tier-level').value,
            country: document.getElementById('country').options[document.getElementById('country').selectedIndex].text,
            state: document.getElementById('state').value,
            city: document.getElementById('city').value,
            locationNotes: document.getElementById('location-notes').value,
            phone: document.getElementById('phone').value,
            notes: document.getElementById('notes').value,
            timestamp: new Date().toISOString()
        };

        // Get map center as default location
        const center = this.map.getCenter();
        const lat = center.lat + (Math.random() - 0.5) * 0.1; // Add slight variation
        const lng = center.lng + (Math.random() - 0.5) * 0.1;

        this.addPin(formData, lat, lng);
        this.savePins();
        this.closeModal();
    }

    addPin(data, lat, lng) {
        const pin = {
            ...data,
            lat,
            lng
        };

        this.pins.push(pin);

        // Create marker
        const tierColors = {
            member: '#FF6B6B',
            subscriber: '#4ECDC4',
            viewer: '#95E1D3'
        };

        const color = tierColors[pin.tier] || '#FF6B6B';

        const marker = L.circleMarker([lat, lng], {
            radius: 8,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.map);

        // Create popup with pin info
        const popupContent = `
            <div class="marker-popup">
                <strong>${pin.fullName}</strong><br>
                <small><span class="tier-badge tier-${pin.tier}">${pin.tier.toUpperCase()}</span></small><br>
                <em>${pin.city}, ${pin.state}</em><br>
                <small>@${pin.userName}</small>
            </div>
        `;

        marker.bindPopup(popupContent);
        this.markers.set(pin.id, marker);
    }

    clearAllPins() {
        if (confirm('Are you sure you want to clear all pins? This cannot be undone.')) {
            this.pins = [];
            this.markers.forEach(marker => this.map.removeLayer(marker));
            this.markers.clear();
            this.nextId = 1;
            this.savePins();
        }
    }

    exportData() {
        const dataStr = JSON.stringify(this.pins, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ngks-pinmap-${new Date().getTime()}.json`;
        link.click();
        URL.revokeObjectURL(url);
    }

    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    if (Array.isArray(imported)) {
                        imported.forEach(pinData => {
                            this.addPin(pinData, pinData.lat, pinData.lng);
                        });
                        this.savePins();
                        alert(`Successfully imported ${imported.length} pins!`);
                    }
                } catch (err) {
                    alert('Error importing file: ' + err.message);
                }
            };
            reader.readAsText(file);
        };
        input.click();
    }

    savePins() {
        localStorage.setItem('ngks-pins', JSON.stringify(this.pins));
        localStorage.setItem('ngks-nextId', this.nextId.toString());
    }

    loadPins() {
        const saved = localStorage.getItem('ngks-pins');
        const savedNextId = localStorage.getItem('ngks-nextId');

        if (saved) {
            try {
                this.pins = JSON.parse(saved);
                this.pins.forEach(pin => {
                    this.addPin(pin, pin.lat, pin.lng);
                });
            } catch (err) {
                console.error('Error loading pins:', err);
            }
        }

        if (savedNextId) {
            this.nextId = parseInt(savedNextId);
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PinMapApp();
});
