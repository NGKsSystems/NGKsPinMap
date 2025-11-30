# NGKs Pin Map

An Electron application for displaying pin maps.

## Features

- Cross-platform support (Windows, macOS)
- Interactive pin map interface
- Built with Electron for desktop deployment

## Development

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

### Building for Distribution

```bash
# Windows
npm run build-win

# macOS
npm run build-mac

# Linux
npm run build-linux
```

## Automated Builds

This project uses GitHub Actions for automated building and testing on multiple platforms.

- **macOS builds**: Automatically triggered on push to main branch
- **Cross-platform testing**: Runs on macOS, Windows, and Linux runners
- **Artifact storage**: Build artifacts are stored for download

## Project Structure

- `main.js` - Main Electron process
- `app.js` - Renderer process logic
- `styles.css` - Application styling
- `package.json` - Project configuration and dependencies
- `.github/workflows/` - GitHub Actions workflows