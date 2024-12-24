# Cricket Match Score Extension🏏✨

A lightweight browser extension that displays live cricket scores. Stay updated with real-time match updates directly in your browser without the need to visit any external websites.

## Features 🔍

- **Live Cricket Scores**: Real-time updates from cricket matches. ⌚
- **Compact UI**: Easy-to-use interface with a focus on essential match details. 🔄
- **Team Customization**: Quickly access scores for your favorite teams or ongoing matches. ❤️
- **Browser Notifications**: Get instant alerts for significant events such as wickets, milestones, or match results (optional). 🔔
- **Cross-Browser Compatibility**: Works on Chrome, Firefox, and other Chromium-based browsers. 🌐

## Installation ⚙️

### For Chrome or Edge 🔄
1. Clone this repository:
   ```bash
   git clone https://github.com/AbhishekRDJ/Cricket-Match-Score-Extension.git
   ```
2. Open Chrome and navigate to the [Extensions page](chrome://extensions/).
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the cloned project folder.
5. The extension will now appear in your browser toolbar. 🆙

### For Firefox 🔄
1. Clone this repository:
   ```bash
   git clone https://github.com/AbhishekRDJ/Cricket-Match-Score-Extension.git
   ```
2. Open Firefox and navigate to the [Add-ons page](about:addons).
3. Click the gear icon, then select **Debug Add-ons** > **Load Temporary Add-on**.
4. Choose the `manifest.json` file from the cloned project folder.
5. The extension will be loaded temporarily; repeat this step if restarting Firefox.

## Usage 🔧

1. Click on the extension icon in the browser toolbar. 🔹
2. View live cricket scores in the dropdown panel. ⚽
3. Customize your preferences (e.g., favorite teams) if applicable. 💡
4. Enable browser notifications to receive updates about match events. 🔔

## Project Structure 🏛️

```
Cricket-Match-Score-Extension/
├── manifest.json        # Extension configuration and metadata
├── popup.html           # HTML for the extension popup
├── popup.css            # Styles for the extension popup
├── popup.js             # Logic for fetching and displaying scores
├── icons/               # Icons for the extension
└── README.md            # Documentation for the project
```

## API Integration 🔐

This extension fetches live cricket data using an external API. To set up:
1. Obtain an API key from a cricket score provider (e.g., [CricAPI](https://www.cricapi.com/), [SportsRadar](https://www.sportradar.com/)).
2. Replace the placeholder API key in the `popup.js` file with your key:
   ```javascript
   const API_KEY = "your-api-key";
   ```
## Development 🛠️
1. Clone the repository:
   
   ```bash
    git clone https://github.com/AbhishekRDJ/Cricket-Match-Score-Extension.git
   ```
2. Create a new branch for your feature or bugfix:
   ```bash
    git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of your changes"
   ```
4. Push your branch to your forked repository
   ```bash
    git push origin feature-name
   ```
5. Open a Pull Request on the main repository.
   


## Contributing 📚

Contributions are welcome! If you have ideas for improvements or new features:

1. Fork the repository. 🔄
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git push origin feature-name
   ```
4. Open a Pull Request on the main repository. ✨

## License 📃

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments 🎉

- Live score data powered by [CricAPI](https://www.cricapi.com/) or equivalent services.
- Icons sourced from [Freepik](https://www.freepik.com/) and similar resources.

---

Enjoy seamless live cricket score updates while browsing the web! 🌍⚽

## Additional Sections
* Contact: Provide information on how users can contact you for support or inquiries. *
  Gamil: ``` abhisheksangule6@gmail.com ```
