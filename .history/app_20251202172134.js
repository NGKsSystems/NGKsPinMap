// NGKs Pin Map Application Logic

class PinMap {
    constructor() {
        this.pins = [];
        this.markers = [];
        this.nextId = 1;
        this.initializeMap();
        this.initializeEventListeners();
        this.loadPins();
    }

    initializeMap() {
        this.map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    initializeEventListeners() {
        // Add pin button
        document.getElementById('add-pin').addEventListener('click', () => {
            this.showModal();
        });

        // Clear pins button
        document.getElementById('clear-pins').addEventListener('click', () => {
            this.clearAllPins();
        });

        // Export data button
        document.getElementById('export-data').addEventListener('click', () => {
            this.exportData();
        });

        // Modal close
        document.querySelector('.close').addEventListener('click', () => {
            this.hideModal();
        });

        // Form submit
        document.getElementById('pin-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('modal-pin-name').value.trim();
            const desc = document.getElementById('pin-description').value.trim();
            if (name) {
                this.addPin(name, desc);
                this.hideModal();
                document.getElementById('modal-pin-name').value = '';
                document.getElementById('pin-description').value = '';
            }
        });
    }

    showModal() {
        document.getElementById('pin-modal').style.display = 'block';
    }

    hideModal() {
        document.getElementById('pin-modal').style.display = 'none';
    }

    addPin(name, description) {
        const center = this.map.getCenter();
        this.addPinAt(center, name, description);
    }

    addPinAt(latlng, name, description) {
        const pin = {
            id: this.nextId++,
            name: name,
            description: description,
            lat: latlng.lat,
            lng: latlng.lng,
            timestamp: new Date().toISOString()
        };

        this.pins.push(pin);
        this.renderPin(pin);
        this.savePins();
    }

    renderPin(pin) {
        const marker = L.marker([pin.lat, pin.lng], { draggable: true }).addTo(this.map);
        marker.pinId = pin.id;
        marker.bindPopup(`<b>${pin.name}</b><br>${pin.description}<br>ID: ${pin.id}<br>Created: ${new Date(pin.timestamp).toLocaleString()}`);
        marker.on('dragend', (e) => {
            const newLatLng = e.target.getLatLng();
            pin.lat = newLatLng.lat;
            pin.lng = newLatLng.lng;
            this.savePins();
        });
        this.markers.push(marker);
    }

    clearAllPins() {
        if (confirm('Are you sure you want to clear all pins?')) {
            this.pins = [];
            this.nextId = 1;
            this.markers.forEach(marker => this.map.removeLayer(marker));
            this.markers = [];
            this.savePins();
        }
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
            this.pins.forEach(pin => this.renderPin(pin));
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