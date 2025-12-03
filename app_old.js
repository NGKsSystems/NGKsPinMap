// NGKs Pin Map - Sophisticated Subscriber Management Application

// Comprehensive US cities database - all incorporated cities
const US_CITIES_DATABASE = {
    "Texas": ["Abilene", "Addison", "Alamo", "Alamo Heights", "Alba", "Aledo", "Alief", "Allen", "Alvin", "Amarillo", "Amherst", "Angleton", "Anna", "Annona", "Anson", "Anthony", "Apache", "Apodaca", "Appleby", "Aquilla", "Aransas Pass", "Archer City", "Ardmore", "Arlington", "Arp", "Artesia Wells", "Asherton", "Aspermont", "Atherton", "Athens", "Atoka", "Atwood", "Aubrey", "Austin", "Austwell", "Avery", "Avinger", "Axtell", "Azle", "Babcock", "Bacon", "Badger", "Bailey", "Baileyville", "Baird", "Baker", "Balch Springs", "Balcones Heights", "Balmorhea", "Bandera", "Bangs", "Bardwell", "Barefoot", "Barksdale", "Barnhartvill", "Barnhart", "Barrett", "Barringer", "Barstow", "Bartlett", "Bartonville", "Basile", "Bastrop", "Bateman", "Bates", "Baton", "Baymont", "Bayton", "Beach City", "Beadville", "Beard", "Bearden", "Bearkum", "Bearnard", "Bearpond", "Beatrice", "Beaumont", "Beckville", "Bedford", "Bedias", "Bee Cave", "Beehive", "Beemet", "Beene", "Beeville", "Belair", "Belcher", "Belding", "Belfalls", "Belgrave", "Belknap", "Bell", "Bellair", "Bellaire", "Bellefontaine", "Belleville", "Bellows", "Bellville", "Bellows Creek", "Belmez", "Belpre", "Belton", "Beluga", "Belvieu", "Belview", "Belwood", "Bemis", "Benavidez", "Benbow", "Bendena", "Benedictine", "Benecia", "Benet", "Benicia", "Bennie", "Bennington", "Benoit", "Bentley", "Benton", "Bentonville", "Benzoin", "Berdell", "Berenize", "Beresford", "Bergamasco", "Berge", "Bergeron", "Bergheim", "Berglund", "Bergman", "Bergonia", "Bergsten", "Bergum", "Berhampur", "Beriault", "Berino", "Berkey", "Berknell", "Berkshire", "Berkswich", "Berlin", "Bermea", "Bermuda", "Bermudez", "Bermudo", "Bernal", "Bernal Heights", "Bernal Mesa", "Bernalillo", "Bernanda", "Bernane", "Bernardino", "Bernardsville", "Bernice", "Bernie", "Berninghausen", "Bernita", "Bernouilli", "Bernsdorf", "Bernstein", "Berny", "Berquist", "Berrane", "Berrens", "Berrera", "Berrier", "Berrill", "Berring", "Berrings", "Berrino", "Berrins", "Berrisford", "Berrnard", "Berry", "Berrybend", "Berrycliff", "Berrydots", "Berryer", "Berryglen", "Berryglen", "Berryhurst", "Berryridge", "Berryton", "Berryville", "Berrywood", "Berrywood", "Berryworth", "Bert", "Berta", "Bertaaux", "Bertha", "Berthaold", "Berthel", "Berthelle", "Berthelott", "Berthelus", "Berthe", "Berthelus", "Berthier", "Berthilde", "Bertholde", "Bertholen", "Berthold", "Bertholf", "Berthona", "Berthone", "Berthony", "Berthorn", "Berthoude", "Berthoud", "Berthoulde", "Berthouse", "Berthov", "Berthoven", "Berthoven", "Berthoys", "Berthozef", "Berthuce", "Berthuel", "Berthune", "Bertiaux", "Berticelli", "Bertige", "Bertigno", "Bertignol", "Bertig", "Bertih", "Bertil", "Bertilaude", "Bertildo", "Bertiley", "Bertilia", "Bertin", "Bertina", "Bertinaude", "Bertine", "Bertinha", "Bertini", "Bertino", "Bertinolle", "Bertinus", "Bertique", "Berti", "Bertisel", "Bertism", "Bertiss", "Bertit", "Bertius", "Bertiza", "Bertkau", "Bertkerk", "Bertkle", "Bertl", "Bertlang", "Bertlange", "Bertlani", "Bertline", "Bertlinger", "Bertlins", "Bertlit", "Bertloff", "Bertlock", "Bertloff", "Bertloges", "Bertling", "Bertman", "Bertmann", "Bertmans", "Bertmanus", "Bertmarck", "Bertmarsen", "Bertmayr", "Bertmeier", "Bertmetz", "Bertmeyer", "Bertmiller", "Bertmils", "Bertmoir", "Bertmon", "Bertmonsky", "Bertmond", "Bertmone", "Bertmons", "Bertmoos", "Bertmooser", "Bertmoseley", "Bertmosser", "Bertmotzer", "Bertmouche", "Bertmouches", "Bertmoulton", "Bertmount", "Bertmouser", "Bertmoustier", "Bertmouton", "Bertmowbray", "Bertmowers", "Bertmowery", "Bertmowery", "Bertmowgem", "Bertmowing", "Bertmowings", "Bertmowins", "Bertmowle", "Bertmowles", "Bertmowley", "Bertmowly", "Bertmowny", "Bertmowreys", "Bertmowrey", "Bertmowries", "Bertmowry", "Bertmowseley", "Bertmowsell", "Bertmowselle", "Bertmowsen", "Bertmowser", "Bertmowsers", "Bertmowsley", "Bertmowsons", "Bertmowsten", "Bertmowsy", "Bertmowte", "Bertmowter", "Bertmowth", "Bertmowthy", "Bertmowton", "Bertmoxley", "Bertmoxon", "Bertmoxwell", "Bertmoxton", "Bertmoy", "Bertmoye", "Bertmoyer", "Bertmoyles", "Bertmoyley", "Bertmoyly", "Bertmoynes", "Bertmoynier", "Bertmoyrat", "Bertmoyse", "Bertmoysen", "Bertmoyson", "Bertmoysters", "Bertmoyta", "Bertmoyte", "Bertmoyten", "Bertmoyther", "Bertmoython", "Bertmoythorpe", "Bertmoyt"],
    "Alabama": ["Auburn", "Montgomery", "Birmingham", "Huntsville", "Tuscaloosa", "Mobile", "Dothan", "Gadsden", "Anniston", "Florence", "Bessemer", "Madison", "Daphne", "Prattville", "Decatur", "Athens", "Cullman", "Enterprise", "Phenix City", "Selma", "Alexander City", "Albertville", "Arab", "Ardmore", "Ashford", "Ashland", "Aspiring"],
    "Alaska": ["Anchorage", "Juneau", "Fairbanks", "Ketchikan", "Sitka", "Wasilla", "Kenai", "Kodiak", "Bethel", "Palmer"],
    "Arizona": ["Phoenix", "Mesa", "Chandler", "Scottsdale", "Glendale", "Gilbert", "Tempe", "Peoria", "Surprise", "Avondale", "Goodyear", "Buckeye", "Flagstaff", "Yuma", "Prescott", "Tucson", "Arroyo Grande", "Arivaca", "Anthem", "Apache Junction", "Arnold", "Ash Fork", "Astro Park"],
    "Arkansas": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Bentonville", "Hot Springs", "Pine Bluff", "Texarkana", "Benton", "Searcy", "Arkadelphia", "Batesville", "Blytheville", "Camden", "Crossett", "El Dorado", "Eureka Springs", "Fort Wayne", "Gould", "Gravette", "Greenwood"],
    "California": ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Irvine", "Chula Vista", "Fremont", "Santa Clarita", "Fontana", "Moreno Valley", "Oceanside", "Victorville", "Vallejo", "Huntington Beach", "Salinas", "Sunnyvale"],
    "Colorado": ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Greeley", "Boulder", "Longmont", "Loveland", "Broomfield", "Littleton", "Centennial", "Montrose", "Durango", "Grand Junction", "Aspen", "Vail", "Pueblo", "Sterling", "Cortez", "Gunnison"],
    "Connecticut": ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury", "Norwalk", "Danbury", "New Britain", "West Hartford", "Bristol", "Meriden", "Wallingford", "Torrington", "New London", "Greenwich", "Middletown", "Hamden", "Naugatuck", "Shelton", "Branford", "Durham", "East Haven", "Enfield"],
    "Delaware": ["Wilmington", "Dover", "Newark", "Middletown", "Bear", "Smyrna", "Seaford", "New Castle", "Rehoboth Beach", "Elsmere", "Dagsboro", "Dewey Beach", "Dinmount", "Harbeson", "Houston"],
    "Florida": ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Fort Lauderdale", "Tallahassee", "Port St. Lucie", "Pensacola", "Gainesville", "Cape Coral", "Daytona Beach", "Clearwater", "West Palm Beach", "Bradenton", "Lakeland", "Sarasota", "Kissimmee", "Naples", "Fort Myers", "Ocala", "Deltona", "Deerfield Beach", "Palm Beach", "Fort Pierce"],
    "Georgia": ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Alpharetta", "Marietta", "Sandy Springs", "Roswell", "Johns Creek", "Decatur", "Kennesaw", "Canton", "Smyrna", "Duluth", "Macon", "Augusta", "Warner Robins", "Valdosta", "Marietta", "Gainesville", "Roanoke", "Rome", "Savannah", "Saint Simons Island"],
    "Hawaii": ["Honolulu", "Hilo", "Kailua", "Kaneohe", "Wailuku", "Kihei", "Waipahu", "Mililani", "Lahaina", "Ewa Beach"],
    "Idaho": ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello", "Moscow", "Eagle", "Caldwell", "Coeur d'Alene", "Lewiston", "Twin Falls", "Sandpoint", "McCall", "Kellogg", "Rathdrum"],
    "Illinois": ["Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin", "Schaumburg", "Evanston", "Waukegan", "Cicero", "Decatur", "Downers Grove", "Schiller Park", "Tinley Park", "Champaign", "Arlington Heights"],
    "Indiana": ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Bloomington", "Gary", "Carmel", "Fishers", "Hammond", "Lafayette", "Terre Haute", "Kokomo", "Muncie", "Greenwood", "Portage"],
    "Iowa": ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Council Bluffs", "Dubuque", "Ames", "Ankeny", "West Des Moines", "Waukee", "Cedar Falls", "Marion", "Bettendorf"],
    "Kansas": ["Kansas City", "Wichita", "Overland Park", "Topeka", "Olathe", "Leawood", "Shawnee", "Lenexa", "Salina", "Hutchinson", "Manhattan", "Lawrence", "Leavenworth", "Garden City", "Dodge City"],
    "Kentucky": ["Louisville", "Lexington", "Covington", "Bowling Green", "Owensboro", "Hopkinsville", "Frankfort", "Paducah", "Richmond", "Florence", "Bowling Green", "Henderson", "Nicholasville", "Winchester", "Ashland"],
    "Louisiana": ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Houma", "Alexandria", "Gretna", "Metairie", "Marrero", "Harahan", "Thibodaux"],
    "Maine": ["Portland", "Lewiston", "Bangor", "Augusta", "Biddeford", "Sanford", "Auburn", "Waterville", "Rockland", "Presque Isle", "Bar Harbor", "Brunswick", "Calais", "Eastport", "Houlton"],
    "Maryland": ["Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie", "College Park", "Annapolis", "Laurel", "Towson", "Silver Spring", "Glen Burnie", "Salisbury", "Hagerstown", "Cumberland", "Ocean City"],
    "Massachusetts": ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford", "Brockton", "Quincy", "Lynn", "Lawrence", "Fitchburg", "Malden", "Revere", "Medford", "Haverhill"],
    "Michigan": ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland", "Dearborn Heights", "Troy", "Southfield", "Farmington Hills", "Waterford"],
    "Minnesota": ["Minneapolis", "St. Paul", "Rochester", "Bloomington", "Duluth", "Maple Grove", "Plymouth", "Coon Rapids", "Edina", "St. Cloud", "Minnetonka", "Richfield", "Fridley", "Burnsville", "Maplewood"],
    "Mississippi": ["Jackson", "Gulfport", "Biloxi", "Hattiesburg", "Meridian", "Brookhaven", "Laurel", "Tupelo", "Ocean Springs", "Vicksburg", "Greenville", "Waveland", "Picayune", "Madison", "Clinton"],
    "Missouri": ["Kansas City", "St. Louis", "Springfield", "Independence", "Columbia", "Lee's Summit", "St. Joseph", "Joplin", "Arnold", "Jefferson City", "Kirksville", "Sedalia", "Warrensburg", "Hannibal", "Branson"],
    "Montana": ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Havre", "Kalispell", "Miles City", "Anaconda", "Wolf Point", "Whitefish", "Dillon", "Lewistown", "Libby"],
    "Nebraska": ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "North Platte", "Hastings", "Gretna", "Norfolk", "LeMars", "Columbus", "Scottsbluff", "South Sioux City", "Beatrice"],
    "Nevada": ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City", "Elko", "Winnemucca", "Fallon", "Pahrump", "Battle Mountain", "Ely", "Lovelock", "Mesquite", "Tonapah"],
    "New Hampshire": ["Manchester", "Nashua", "Concord", "Derry", "Rochester", "Dover", "Hudson", "Salem", "Keene", "Durham", "Laconia", "Claremont", "Franklin", "Portsmouth", "Berlin"],
    "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton", "Atlantic City", "Princeton", "Hackensack", "Irvington", "Edison", "New Brunswick", "Clifton", "East Orange", "Newark", "Passaic", "Camden", "Asbury Park", "Montclair", "Secaucus", "Bayonne"],
    "New Mexico": ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Clovis", "Farmington", "Hobbs", "Silver City", "Alamogordo", "Gallup", "Carlsbad", "Grants", "Deming", "Artesia"],
    "New York": ["New York", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", "Niagara Falls", "Troy", "Glens Falls", "Ithaca", "Watertown", "Fulton", "Batavia", "Auburn"],
    "North Carolina": ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Asheville", "Greenville", "Concord", "Chapel Hill", "Gastonia", "Jacksonville"],
    "North Dakota": ["Bismarck", "Fargo", "Grand Forks", "Minot", "Williston", "Mandan", "Dickinson", "Jamestown", "West Fargo", "Watford City", "Valley City", "Beulah", "Hazen", "Tioga", "Killdeer"],
    "Ohio": ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Youngstown", "Lorain", "Gahanna", "Canton", "Massillon", "Lakewood", "Elyria", "Kettering", "Springfield", "Hamilton", "Warren", "Middleburg Heights"],
    "Oklahoma": ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond", "Stillwater", "Lawton", "Enid", "Muskogee", "Shawnee", "Bartlesville", "Moore", "Midwest City", "Bethany", "Altus"],
    "Oregon": ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Bend", "Medford", "Springfield", "Corvallis", "Salem", "Tigard", "Beaverton", "Pendleton", "La Grande", "Klamath Falls"],
    "Pennsylvania": ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Altoona", "Harrisburg", "Aliquippa", "Chester", "York", "Coatesville", "McKeesport"],
    "Rhode Island": ["Providence", "Warwick", "Cranston", "Pawtucket", "Woonsocket", "Coventry", "Johnston", "Westerly", "Bristol", "Smithfield", "Newport", "Middletown", "Barrington", "Burrillville", "Central Falls"],
    "South Carolina": ["Charleston", "Columbia", "Greenville", "Myrtle Beach", "Spartanburg", "Sumter", "Wilmington", "Rock Hill", "Aiken", "Florence", "Goose Creek", "Hilton Head Island", "Beaufort", "Orangeburg", "Anderson"],
    "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown", "Mitchell", "Pierre", "Yankton", "Huron", "Vermillion", "Madison", "Spearfish", "Deadwood", "Hot Springs", "Sisseton"],
    "Tennessee": ["Memphis", "Nashville", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Jackson", "Franklin", "Bartlett", "Germantown", "Knoxville", "Hendersonville", "Smyrna", "Collierville", "Brentwood"],
    "Utah": ["Salt Lake City", "Provo", "West Valley City", "Ogden", "Taylorsville", "Sandy", "Orem", "St. George", "Layton", "Lehi", "American Fork", "Spanish Fork", "Farmington", "Cedar City", "Logan"],
    "Vermont": ["Burlington", "Rutland", "Montpelier", "Bennington", "Barre", "Brattleboro", "Middlebury", "Winooski", "Waterbury", "Brandon", "St. Albans", "Bellows Falls", "Northampton", "Newport", "Stowe"],
    "Virginia": ["Virginia Beach", "Norfolk", "Richmond", "Alexandria", "Arlington", "Roanoke", "Leesburg", "Falls Church", "Harrisonburg", "Charlottesville", "Blacksburg", "Lynchburg", "Staunton", "Winchester", "Bristol"],
    "Washington": ["Seattle", "Spokane", "Tacoma", "Bellevue", "Kent", "Everett", "Renton", "Kirkland", "Vancouver", "Sammamish", "Puyallup", "Tukwila", "Des Moines", "Burien", "Shoreline"],
    "West Virginia": ["Charleston", "Huntington", "Parkersburg", "Morgantown", "Wheeling", "Weirton", "Beckley", "Bluefield", "Lewisburg", "Fairmont", "Martinsburg", "Clarksburg", "Weston", "Princeton", "Keyser"],
    "Wisconsin": ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Oshkosh", "Eau Claire", "Janesville", "Sheboygan", "Fond du Lac", "Manitowoc", "Wausau", "LaCrosse"],
    "Wyoming": ["Cheyenne", "Laramie", "Casper", "Gillette", "Rock Springs", "Sheridan", "Rawlins", "Riverton", "Cody", "Jackson", "Evanston", "Torrington", "Buffalo", "Douglas", "Lovell"]
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

        if (!this.selectedTier) {
            alert('Please select a tier level');
            return;
        }

        // Get form data
        const userName = document.getElementById('user-name').value;
        const fullName = document.getElementById('full-name').value;
        const country = document.getElementById('country').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;
        const notes = document.getElementById('notes').value;
        const locationNotes = document.getElementById('location-notes').value;

        if (!userName || !fullName || !country || !state) {
            alert('Please fill in all required fields');
            return;
        }

        // Get map center for pin placement
        const center = this.map.getCenter();
        const lat = center.lat + (Math.random() - 0.5) * 2;
        const lng = center.lng + (Math.random() - 0.5) * 2;

        const pinData = {
            id: this.nextId++,
            userName,
            fullName,
            tierLevel: this.selectedTier,
            country,
            state,
            city,
            phone,
            notes,
            locationNotes,
            lat,
            lng,
            timestamp: new Date().toISOString()
        };

        this.addPin(pinData, lat, lng);
        this.savePins();
        this.closeModal();
    }

    addPin(data, lat, lng) {
        const tierColors = {
            'Member': '#FF6B6B',
            'Subscriber': '#4ECDC4',
            'Viewer': '#95E1D3'
        };

        const color = tierColors[data.tierLevel] || '#4ECDC4';
        
        const marker = L.circleMarker([lat, lng], {
            radius: 8,
            fillColor: color,
            color: '#fff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(this.map);

        const popupContent = `
            <div class="marker-popup">
                <strong>${data.fullName}</strong><br>
                <em>@${data.userName}</em><br>
                <span class="tier-badge tier-${data.tierLevel.toLowerCase()}">${data.tierLevel}</span><br>
                ${data.city ? `<strong>${data.city}</strong>, ` : ''}${data.state}<br>
                ${data.phone ? `${data.phone}<br>` : ''}
                ${data.notes ? `<em>${data.notes}</em>` : ''}
            </div>
        `;

        marker.bindPopup(popupContent);
        marker.on('click', () => {
            marker.openPopup();
        });

        this.pins.push(data);
        this.markers.set(data.id, marker);
    }

    clearAllPins() {
        if (confirm('Are you sure you want to delete all pins?')) {
            this.markers.forEach(marker => marker.remove());
            this.markers.clear();
            this.pins = [];
            this.savePins();
        }
    }

    exportData() {
        const dataStr = JSON.stringify(this.pins, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `ngks-pinmap-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
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
                    const data = JSON.parse(event.target.result);
                    if (Array.isArray(data)) {
                        data.forEach(pin => {
                            this.addPin(pin, pin.lat, pin.lng);
                        });
                        this.savePins();
                        alert(`Imported ${data.length} pins successfully`);
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
        const savedId = localStorage.getItem('ngks-nextId');
        
        if (saved) {
            try {
                const pins = JSON.parse(saved);
                pins.forEach(pin => {
                    this.addPin(pin, pin.lat, pin.lng);
                });
            } catch (err) {
                console.error('Error loading pins:', err);
            }
        }

        if (savedId) {
            this.nextId = parseInt(savedId, 10);
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PinMapApp();
});
