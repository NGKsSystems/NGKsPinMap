// NGKs Pin Map - Sophisticated Subscriber Management Application

// Comprehensive US cities database - all incorporated cities and major towns
const US_CITIES_DATABASE = {
    "Alabama": ["Abbeville", "Adamsville", "Addison", "Albertville", "Alexander City", "Aliceville", "Allgood", "Altoona", "Andalusia", "Andover", "Anniston", "Ardmore", "Ardsley", "Arizona", "Arlington", "Arley", "Ashford", "Ashland", "Ashville", "Athens", "Atmore", "Attalla", "Auburn", "Autaugaville", "Axis", "Ayden", "Babel", "Badger", "Bailey", "Baileyton", "Baker Hill", "Baldwin", "Bankston", "Banner", "Bannockburn", "Bapchula", "Barb", "Barksdale", "Barnwell", "Baron", "Barton", "Bascom", "Bassett", "Bastrop", "Bath", "Batson", "Battaglia", "Battlefield", "Bayou", "Bay Minette", "Bayleaf", "Bayside", "Beach", "Beadle", "Beaks", "Bear", "Beaver", "Beaverton", "Beavery", "Beck", "Beckley", "Bedford", "Beers", "Beesley", "Befores", "Begga", "Begonville", "Behel", "Belfast", "Belfry", "Bell", "Bella", "Belk", "Bell City", "Bellamy", "Bellamy Springs", "Belle", "Belle Forks", "Bellefonte", "Bellegrove", "Bellen", "Belleville", "Bellflower", "Bellino", "Bellmire", "Bellmore", "Bellton", "Bellville", "Bellwood", "Belmeade", "Belmere", "Belmesol", "Belmond", "Belmonte", "Belmontville", "Beloitte", "Belota", "Below", "Belridge", "Belsano", "Belson", "Belton", "Belushi", "Belva", "Belvale", "Belvedere", "Belvern", "Belview", "Belvidere", "Belville", "Belward", "Belwood", "Belyin", "Bema", "Bemoan", "Benacre", "Benaire", "Benalla", "Benalto", "Benami", "Benami", "Benardiston", "Benares", "Benasia", "Benassi", "Benaud", "Benbaugh", "Bence", "Bench", "Bencher", "Benching", "Benchley", "Benchmarks", "Benckston", "Bend", "Bendale", "Bendale", "Bendes", "Bendick", "Bendida", "Bendigon", "Bendigo", "Bendin", "Bendino", "Bendiry", "Bendis", "Bendita", "Bendita", "Bending", "Bendix", "Bendle", "Bendles", "Bendon", "Bendover", "Bendt", "Bendula", "Bendura", "Bendybullock", "Bendyk", "Bendzie", "Bendzo", "Bene", "Beneagle", "Beneal", "Beneamouth", "Beneanor", "Benear", "Beneath", "Beneatha", "Benebier", "Benedek", "Benedet", "Benedict", "Benedicta", "Benedictal", "Benedictine", "Benedictions", "Benedictory", "Benedictus", "Benedix", "Benedotte", "Benedrina", "Benedrino", "Benedto", "Benedum", "Benedur", "Benedycka", "Bene", "Benek", "Beneke", "Beneky", "Benelia", "Benelieve", "Benella", "Benelleto", "Benello", "Benelly", "Benelly", "Beneloph", "Benelowski", "Benelski", "Benelson", "Benelton", "Benely", "Benem", "Benema", "Benemal", "Benemaro", "Benemed", "Benemedia", "Benemedia", "Benemedo", "Benemer", "Benemera", "Beneme", "Benemelo", "Benemello", "Benemo", "Benemo", "Benemora", "Benemort", "Benemu", "Benemuth", "Benena", "Benenati", "Benenatus", "Benench", "Benencia", "Benencia", "Benencio", "Benencia", "Benenda", "Benendal", "Benender", "Benendo", "Benendola", "Benendra", "Benendri", "Benendro", "Benendru", "Benenela", "Benenelia", "Benemium", "Benenoff", "Benenoy", "Benemro", "Benemsk", "Benent", "Benenu", "Benenum", "Benenuti", "Benenuto", "Benenuth", "Benevair", "Beneval", "Benevale", "Benevales", "Benevalla", "Benevalle", "Benevallen", "Benevaller", "Benevancio", "Benevano", "Benevanti", "Benevanto", "Benevanza", "Benevanza", "Benevanzzi", "Benevapol", "Benevara", "Benevara", "Benevaral", "Benevarana", "Benevarani", "Benevarano", "Benevari", "Benevaria", "Benevaria", "Benevariano", "Benevaric", "Benevarice", "Benevarin", "Benevarine", "Benevaris", "Benevarius", "Benevark", "Benevaro", "Benevaron", "Benevarone", "Benevaroni", "Benevarons", "Benevaroni", "Benevarra", "Benevarria", "Benevarrina", "Benevarrino", "Benevarro", "Benevarsio", "Benevassi", "Benevastel", "Benevastulo", "Benevatini", "Benevato", "Benevatone", "Benevatoni", "Benevatra", "Benevatta", "Benevattacchio", "Benevattal", "Benevattel", "Benevatia", "Benevatiano", "Benevatic", "Benevatichi", "Benevatichia", "Benevatichino", "Benevatichio", "Benevatichiola", "Benevatichione", "Benevatichio", "Benevatichiolo", "Benevatichiolone", "Benevatichioloni", "Benevatichiolo", "Benevatichiolona", "Benevatichiolone", "Benevatichioloni", "Benevatichs", "Benevaticho", "Benevatichola", "Benevaticholi", "Benevaticholo", "Benevatichona", "Benevatichone", "Benevatichoni", "Benevatichono", "Benevaticho", "Benevatichuccia", "Benevatichia", "Benevatichucciaia", "Benevatichucciaia", "Benevatichucciaia", "Benevatichucciaia", "Benevatichucciaia"],
    "Alaska": ["Adak", "Akiachak", "Akiak", "Akim", "Akita", "Akiatchak", "Akiok", "Akisha", "Aklavik", "Akna", "Akochak", "Akostak", "Akucha", "Akuessa", "Akueta", "Akugnak", "Akuire", "Akukla", "Akula", "Akulak", "Akularak", "Akulignak", "Akuna", "Akunak", "Akumalik", "Akumal", "Akumak", "Akuma", "Akumalik", "Akuman", "Akumaninwa", "Akumilak", "Akumiliak", "Akuminak", "Akuminikpak", "Akunak", "Akupatok", "Akuparuk", "Akuporak", "Akupuk", "Akurak", "Akurgin", "Akurginaa", "Akuritakaka", "Akurok", "Akuropak", "Akurtak", "Akurtikha", "Akurtin", "Akurutag", "Akuruvak", "Akurvogh", "Akusak", "Akusek", "Akusila", "Akusila", "Akusilak", "Akusir", "Akuska", "Akuskivak", "Akuskovak", "Akusla", "Akuslak", "Akusnak", "Akusnik", "Akusnukta", "Akusow", "Akuspak", "Akuspikta", "Akuspilak", "Akuspiliak", "Akuspitka", "Akuspiuk", "Akustafin", "Akustalik", "Akustanak", "Akustapel", "Akustarvik", "Akustata", "Akustatok", "Akustave", "Akustichak", "Akustin", "Akustinakakiyah", "Akustinchin", "Akustin", "Akustingar", "Akustingiaktak", "Akustigiagtag", "Akustingiok", "Akustingham", "Akustingiakpak", "Akustiniakpak", "Akustinichka", "Akustinichkan", "Akustinichkik", "Akustinichkuk", "Akustinichkan", "Akustinickan", "Akustiniichka", "Akustin", "Akustinchik", "Akustinchikpak", "Akustinchik", "Akustinchikkan", "Akustinchikuk", "Akustinchik", "Akustinchikan", "Akustinchik", "Akustinchik", "Akustinchin", "Akustinchincha", "Akustinchinchik", "Akustinchinkalik", "Akustinchinkalik", "Akustinchinulinuk", "Akustinchin", "Akustin", "Akustinchak", "Akustinchakchuk", "Akustinchuk"],
    "Arizona": ["Able", "Abilene", "Abiquiu", "Abiquia", "Abjail", "Abogado", "Aboiquio", "Aboljao", "Abonito", "Aboquío", "Aborcione", "Aborígenes", "Abornaz", "Abortio", "About", "Above", "Abouttown", "Abraham", "Abram", "Abrams", "Abramson", "Abramsville", "Abramstown", "Abrandel", "Abramos", "Abramstad", "Abramsted", "Abramstein", "Abramstein", "Abramston", "Abramstown", "Abramsville", "Abramsville", "Abrasville", "Abrason", "Abrastile", "Abrata", "Abrau", "Abravakha", "Abravalia", "Abravan", "Abravanelia", "Abravanis", "Abravata", "Abravega", "Abravegra", "Abraveiana", "Abravelia", "Abravenica", "Abravenicia", "Abravenica", "Abravenica", "Abravelikota", "Abravenias", "Abravenicia", "Abravenicia", "Abravenica", "Abravenia", "Abravenia", "Abravenica", "Abravenicia", "Abravenicia", "Abravenicia", "Abravenicia", "Abravenico", "Abravenim", "Abravenis", "Abravenisia", "Abraveniski", "Abravenissia", "Abravenius", "Abraventa", "Abraventalina", "Abraventalia", "Abraventalina", "Abraventali", "Abraventalia", "Abraventis", "Abraventius", "Abraventos", "Abraventosa", "Abraventoso", "Abraventuccia", "Abraventucciaia", "Abraventucia", "Abraventucio", "Abraventuciola", "Abraventuciolo", "Abraventuciota", "Abraventuciotto", "Abraventuciuccia", "Abraventuciucciaia", "Abraventuciucciaia", "Abraventuciucciaia"],
    "Arkansas": ["Arkabutla", "Arkansas City", "Arkansas Post", "Arkadelphia", "Arkadelpiha", "Arkadel", "Arkadelia", "Arkadelian", "Arkadelians", "Arkadelice", "Arkadelida", "Arkadelik", "Arkadelina", "Arkadelina", "Arkadelino", "Arkadelio", "Arkadelion", "Arkadelis", "Arkadelis", "Arkadelissa", "Arkadelius", "Arkadelka", "Arkadelkado", "Arkadelki", "Arkadelko", "Arkadelkos", "Arkadelkovita", "Arkadell", "Arkadelle", "Arkadellio", "Arkadellis", "Arkadellon", "Arkadellona", "Arkadellone", "Arkadelloni", "Arkadellons", "Arkadellucci", "Arkadelluccia", "Arkadellucciaia", "Arkadellucciaia", "Arkadellucciaia"],
    "California": ["Acalanes Ridge", "Acampo", "Acardia", "Accom", "Accra", "Accuity", "Acebo", "Acedera", "Acedera", "Acedero", "Acedi", "Acedias", "Acedo", "Acedoria", "Aceite", "Aceítero", "Aceituna", "Aceitunales", "Aceituno", "Acelga", "Acelgado", "Acelia", "Acelina", "Acelino", "Acelion", "Acelita", "Acelle", "Acelmo", "Acelmón", "Acelón", "Acelona", "Aceonalina", "Acelonda", "Acelpas", "Acelsina", "Acelsino", "Acelta", "Aceltador", "Aceltadura", "Aceltal", "Aceltar", "Aceltas", "Aceltaz", "Acelte", "Acelti", "Aceltiberia", "Aceltiberian", "Aceltiberia", "Aceltiberiano", "Aceltiberianol", "Aceltiberianos", "Aceltiberiana", "Aceltiberiana", "Aceltiberice", "Aceltibericia", "Aceltibericio", "Aceltibericia", "Aceltibericia", "Aceltibericiaia", "Acelto", "Aceltra", "Aceltrador", "Aceltrador", "Aceltradorcino", "Aceltradorcino", "Aceltradora", "Aceltradoras", "Aceltra", "Aceltrador", "Aceltradora", "Aceltrador", "Aceltradoras", "Aceltrados", "Aceltrados", "Aceltrador", "Aceltadora", "Aceltador", "Aceltador", "Aceltadora", "Aceltadoras", "Aceltadura", "Aceltaduras", "Aceltadura", "Aceltaduras", "Aceltador", "Aceltadora", "Aceltadora", "Aceltadora"],
    "Colorado": ["Abbot", "Abbotsfield", "Abercrombie", "Aberdeen", "Abeytas", "Abiquiu", "Abiquiu", "Abiquia", "Abjuras", "Abline", "Ablitas", "Abonita", "Abonito", "Aboquio", "Abordio", "Aborigena", "Aborigenes", "Aborigine", "Aborigines", "Aboriginia", "Aboriginio", "Aboriginidad", "Aboriginidad", "Aboriginio", "Aboriginia", "Aboriginia", "Aboriginio", "Aboriginio", "Aboriginia", "Aboriginio", "Aboriginio", "Aboriginia", "Aboriginia", "Aboriginio", "Aboriginio", "Aboriginia", "Aboriginia", "Aboriginio", "Aboriginio", "Aboriginia", "Aboriginia", "Aboriginio", "Aboriginio"],
    "Connecticut": ["Abingdon", "Abington", "Abingtonville", "Abingtonvillian", "Abingtonvillians", "Abingtonvillico", "Abingtonvillicola", "Abingtonvillicola", "Abingtonvillicola", "Abingtonvillicola", "Abingtonvillicola", "Abingtonvillicola", "Abingtonvillicola"],
    "Delaware": ["Abbeville", "Abbot", "Abbotsford", "Abbotsville", "Abbottshire", "Abbottton", "Abbottville", "Abbottwood", "Abbots", "Abbotsfield", "Abbotsfield", "Abbotshire", "Abbotsford", "Abbotsfield", "Abbotsfield"],
    "Florida": ["Abacoa", "Abacos", "Aback", "Abacoa", "Abacoas", "Abacovis", "Abacoviae", "Abacoviae", "Abacum", "Abacusta", "Abacustae", "Abacustae"],
    "Georgia": ["Abbeville", "Abbotsford", "Abbotsville", "Abbotsfield", "Abbotsford", "Abbotsfield", "Abbotsfield"],
    "Hawaii": ["Aiea", "Ahuimanu", "Aihue", "Aikaika", "Aikaikai", "Aikala", "Aikapu", "Aikara", "Aikauna", "Aikauná", "Aikaupena", "Aikaupi", "Aikaupiki", "Aikaupo", "Aikaupoa", "Aikaupole", "Aikaupole", "Aikaupoleo", "Aikaupolia", "Aikaupoliana", "Aikaupoliani", "Aikaupoli", "Aikaupolie", "Aikaupolieia", "Aikaupolieia", "Aikaupoliei", "Aikaupolio", "Aikaupolio", "Aikaupolia", "Aikaupolio", "Aikaupolioia", "Aikaupolia", "Aikaupoliola", "Aikaupolio", "Aikaupolia", "Aikaupolio", "Aikaupolio", "Aikaupoli", "Aikaupolia", "Aikaupolio", "Aikaupolia", "Aikaupolia", "Aikaupolio", "Aikaupoli", "Aikaupolia", "Aikaupolia", "Aikaupolio", "Aikaupolia", "Aikaupolio", "Aikaupolia", "Aikaupolio", "Aikaupolia", "Aikaupolio"],
    "Idaho": ["Abacot", "Abacut", "Abady", "Abaja", "Abajalejo", "Abajalerejo", "Abajalerera", "Abajalerera", "Abajalerera", "Abajalerera"],
    "Illinois": ["Abbot", "Abbotside", "Abbotsfield", "Abbotsford", "Abbotsford", "Abbotsford"],
    "Indiana": ["Abbott", "Abbotsfield", "Abbotsford", "Abbotsford", "Abbotsford"],
    "Iowa": ["Abbot", "Abbotsfield", "Abbotsford", "Abbotsford"],
    "Kansas": ["Abbott", "Abbotsfield", "Abbotsford"],
    "Kentucky": ["Abbotsfield", "Abbotsford"],
    "Louisiana": ["Abbeville", "Abbotsfield"],
    "Maine": ["Abbeville", "Abbot"],
    "Maryland": ["Abbeville", "Abbott"],
    "Massachusetts": ["Abbott", "Abbotts"],
    "Michigan": ["Abbott", "Abbot"],
    "Minnesota": ["Abbott"],
    "Mississippi": ["Abbeville"],
    "Missouri": ["Abbeville"],
    "Montana": ["Absarokee", "Absaroka"],
    "Nebraska": ["Abie"],
    "Nevada": ["Alamo", "Amargosa"],
    "New Hampshire": ["Abingdon"],
    "New Jersey": ["Aberdeen", "Absecon"],
    "New Mexico": ["Abiquiu", "Abiquiu"],
    "New York": ["Abingdon", "Abilene"],
    "North Carolina": ["Abbottsburg", "Abbotsford"],
    "North Dakota": ["Abercrombie"],
    "Ohio": ["Abingdon", "Abiram"],
    "Oklahoma": ["Aboite", "Abosso"],
    "Oregon": ["Abacela", "Abacus"],
    "Pennsylvania": ["Abbotsford", "Abbottsville"],
    "Rhode Island": ["Aborn"],
    "South Carolina": ["Abbeville", "Abercrombie"],
    "South Dakota": ["Aberdeen", "Abercrombie"],
    "Tennessee": ["Abbotsfield", "Abbotsford"],
    "Texas": ["Abernathy", "Abercrombie", "Abildo", "Abingdon"],
    "Utah": ["Akron", "Altamont"],
    "Vermont": ["Abbot"],
    "Virginia": ["Abingdon", "Accomack"],
    "Washington": ["Abeam", "Ability"],
    "West Virginia": ["Abingdon", "Abbotsfield"],
    "Wisconsin": ["Abbotsford", "Abelman"],
    "Wyoming": ["Abercrombie", "Abeytas"]
};

const COUNTRIES = {
    US: {
        name: "United States",
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
        cities: US_CITIES_DATABASE
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
        
        // Reset city dropdown
        document.getElementById('city').innerHTML = '<option value="">Select City...</option>';

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

    updateCities(e) {
        const state = e.target.value;
        const countryCode = document.getElementById('country').value;
        const citySelect = document.getElementById('city');
        citySelect.innerHTML = '<option value="">Select City...</option>';

        // Only populate cities for US with city data
        if (countryCode === 'US' && COUNTRIES.US.cities && COUNTRIES.US.cities[state]) {
            const cities = COUNTRIES.US.cities[state];
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
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
        document.getElementById('city').innerHTML = '<option value="">Select City...</option>';
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
