# Mobile EHS Site Visit Checklist (Sorted by Environment, Health & Safety)

A fully mobile-responsive web application designed for EHS Site Visits, sorted strictly by **Environment (E)**, **Health (H)**, and **Safety (S)** categories, with formatted **Excel (`.xlsx`) report generation** and **backend OneDrive integration**.

---

## 📱 Key Mobile & Functional Features

1. **E, H, S Categorized & Sorted View**:
   * 🌿 **Environment (E)** — 13 Checkpoints (Air, Water, Material & Waste, Energy)
   * 🩺 **Health (H)** — 21 Checkpoints (Hygiene, Washrooms, Canteen, Water, OHC, First Aid)
   * 🛡️ **Safety (S)** — 33 Checkpoints (Transportation, PPEs, Plant Traffic, Workplaces, Emergency)

2. **Mobile-First Responsive Design**:
   * Large touch controls for radio choices (`Yes`, `No`, `Did not observe`).
   * Sticky top category switcher bar with real-time completion badges.
   * Fixed bottom navigation bar for quick `Prev`, `Next`, and `Submit` actions on mobile devices.

3. **Formatted Excel Report Output (`.xlsx`)**:
   * **Site Metadata**: Site Name, Location, Visit Date, GSC Member.
   * **Category Scorecard**: Independent pass/fail counts for Environment, Health, and Safety.
   * **Sorted Audit Log**: Grouped by E, H, and S with original checkpoint reference numbers, response status, and remarks.

4. **Backend OneDrive Link Configuration**:
   * Open `config.js` and paste your Power Automate / OneDrive Webhook link in `CONFIG.ONEDRIVE_WEBHOOK_URL`.
   * When users submit on mobile, the application automatically pushes the data to your OneDrive in the background without asking the user for setup!

---

## 🛠️ GitHub Pages Hosting Setup

1. **Upload Files to GitHub**:
   * Upload `config.js`, `index.html`, `app.js`, `styles.css`, and `README.md` to your GitHub repository.

2. **Set Backend OneDrive Link in `config.js`**:
   ```javascript
   const CONFIG = {
       ONEDRIVE_WEBHOOK_URL: "https://your-power-automate-onedrive-webhook-url",
       AUTO_PUSH_TO_ONEDRIVE: true
   };
   ```

3. **Enable GitHub Pages**:
   * Go to **Settings** > **Pages** in your GitHub repo.
   * Under **Build and deployment**, select `main` branch and `/ (root)`.
   * Access the mobile checklist on any phone or browser at: `https://<your-username>.github.io/<repo-name>/`.
