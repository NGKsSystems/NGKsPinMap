// NGKs Pin Map Application Logic

class PinMap {
    constructor() {
        this.pins = [];
        this.nextId = 7; // Starting after the demo pins
        this.initializeEventListeners();
        this.loadPins();
    }

    initializeEventListeners() {
        // Add pin button
        document.getElementById('add-pin').addEventListener('click', () => {
            this.addPin();
        });

        // Clear pins button
        document.getElementById('clear-pins').addEventListener('click', () => {
            this.clearAllPins();
        });

        // Export data button
        document.getElementById('export-data').addEventListener('click', () => {
            this.exportData();
        });

        // Pin click handlers
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('pin')) {
                this.selectPin(e.target);
            }
        });
    }

    addPin() {
        const pinName = prompt('Enter pin name:');
        if (pinName && pinName.trim()) {
            const pin = {
                id: this.nextId++,
                name: pinName.trim(),
                x: Math.random() * 80 + 10, // Random position
                y: Math.random() * 80 + 10,
                timestamp: new Date().toISOString()
            };

            this.pins.push(pin);
            this.renderPin(pin);
            this.savePins();
        }
    }

    renderPin(pin) {
        const mapContainer = document.getElementById('map');
        const pinElement = document.createElement('div');
        pinElement.className = 'pin';
        pinElement.setAttribute('data-id', pin.id);
        pinElement.style.left = pin.x + '%';
        pinElement.style.top = pin.y + '%';
        pinElement.innerHTML = `📍 ${pin.name}`;
        pinElement.title = `ID: ${pin.id}, Created: ${new Date(pin.timestamp).toLocaleString()}`;

        mapContainer.appendChild(pinElement);
    }

    selectPin(pinElement) {
        // Remove selection from all pins
        document.querySelectorAll('.pin').forEach(pin => {
            pin.classList.remove('selected');
        });

        // Select clicked pin
        pinElement.classList.add('selected');

        const pinId = parseInt(pinElement.getAttribute('data-id'));
        const pin = this.pins.find(p => p.id === pinId);

        if (pin) {
            alert(`Pin: ${pin.name}\nID: ${pin.id}\nCreated: ${new Date(pin.timestamp).toLocaleString()}\nPosition: (${pin.x.toFixed(1)}%, ${pin.y.toFixed(1)}%)`);
        }
    }

    clearAllPins() {
        if (confirm('Are you sure you want to clear all pins?')) {
            this.pins = [];
            this.nextId = 1;
            this.updateMapDisplay();
            this.savePins();
        }
    }

    updateMapDisplay() {
        const mapContainer = document.getElementById('map');
        const pins = mapContainer.querySelectorAll('.pin:not(.map-placeholder *)');

        pins.forEach(pin => pin.remove());

        this.pins.forEach(pin => {
            this.renderPin(pin);
        });
    }

    exportData() {
        const data = {
            exportDate: new Date().toISOString(),
            totalPins: this.pins.length,
            pins: this.pins
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `pinmap-data-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    savePins() {
        localStorage.setItem('ngks-pinmap-pins', JSON.stringify(this.pins));
        localStorage.setItem('ngks-pinmap-nextId', this.nextId.toString());
    }

    loadPins() {
        const savedPins = localStorage.getItem('ngks-pinmap-pins');
        const savedNextId = localStorage.getItem('ngks-pinmap-nextId');

        if (savedPins) {
            this.pins = JSON.parse(savedPins);
            this.updateMapDisplay();
        }

        if (savedNextId) {
            this.nextId = parseInt(savedNextId);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PinMap();
});