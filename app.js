// 67 Checkpoints sorted into Environment (E), Health (H), Safety (S)
const questionsByCategory = {'E': [{'id': 55, 'originalSr': 55, 'section': 'Air', 'text': 'No Visible fugitive/stack emissions observed', 'type': 'E'}, {'id': 56, 'originalSr': 56, 'section': 'Air', 'text': 'Roads/plants/operating areas are clean and not filled with dust', 'type': 'E'}, {'id': 57, 'originalSr': 57, 'section': 'Water', 'text': 'Separate storm and process water/effluent / waste water drains available', 'type': 'E'}, {'id': 58, 'originalSr': 58, 'section': 'Water', 'text': 'Outlets/outfalls do not have any untreated water discharge', 'type': 'E'}, {'id': 59, 'originalSr': 59, 'section': 'Water', 'text': 'No visible spillage or leakages from pipelines or drains.', 'type': 'E'}, {'id': 60, 'originalSr': 60, 'section': 'Water', 'text': 'Guard ponds and waste storage ponds have enough capacity and structural integrity (no overflows/seepages)', 'type': 'E'}, {'id': 61, 'originalSr': 61, 'section': 'Water', 'text': 'Drainage conditions around the plant are satisfactory (without risk of flooding or leakage inside plant)', 'type': 'E'}, {'id': 62, 'originalSr': 62, 'section': 'Material & Waste', 'text': 'Dedicated material & waste storage spaces with adequate capacity, segregation, containment & safety', 'type': 'E'}, {'id': 63, 'originalSr': 63, 'section': 'Material & Waste', 'text': 'Hazardous wastes are stored covered with proper dyke/containment', 'type': 'E'}, {'id': 64, 'originalSr': 64, 'section': 'Material & Waste', 'text': 'Waste segregation (sanitary, pantry, horticulture, e-waste etc) and disposal in place', 'type': 'E'}, {'id': 65, 'originalSr': 65, 'section': 'Material & Waste', 'text': 'Materials and waste transportation is done without spillage', 'type': 'E'}, {'id': 66, 'originalSr': 66, 'section': 'Energy', 'text': 'Energy conservation is emphasised across the plant (no unattended lights/motors/steam leakage)', 'type': 'E'}, {'id': 67, 'originalSr': 67, 'section': 'Energy', 'text': 'Vehicles and equipment are switched off at idle conditions', 'type': 'E'}], 'H': [{'id': 6, 'originalSr': 6, 'section': 'Transportation & Stoppage', 'text': 'Conditions at stoppage location were acceptable (drinking water, wash rooms, food etc)', 'type': 'H'}, {'id': 11, 'originalSr': 11, 'section': 'Entry & Health Induction', 'text': 'Induction included occupational health & industrial hygiene points (hazard exposure & prevention)', 'type': 'H'}, {'id': 12, 'originalSr': 12, 'section': 'Emergency Contacts', 'text': 'Medical emergency contact numbers (Ambulance, health centre) displayed at prominent places', 'type': 'H'}, {'id': 13, 'originalSr': 13, 'section': 'Health Awareness', 'text': 'Posters/signages displayed (handwashing, potable water, first aid, heat stress, HIV awareness etc.)', 'type': 'H'}, {'id': 19, 'originalSr': 19, 'section': 'Noise Exposure', 'text': 'High-noise areas clearly demarcated with signage + mandatory hearing protection notice', 'type': 'H'}, {'id': 20, 'originalSr': 20, 'section': 'Hearing Protection', 'text': 'Personnel using hearing protection (ear plugs/muffs) in high noise zones', 'type': 'H'}, {'id': 21, 'originalSr': 21, 'section': 'Respiratory Exposure', 'text': 'Personnel using respiratory protection in dust/fume exposure areas', 'type': 'H'}, {'id': 22, 'originalSr': 22, 'section': 'Quantification of Exposure', 'text': 'Site has conducted QNEA in past 4 years to quantify exposure of health hazards', 'type': 'H'}, {'id': 36, 'originalSr': 36, 'section': 'Hygiene & Sanitation', 'text': 'Toilets clean, ventilated, well lit; no leakage/overflow', 'type': 'H'}, {'id': 37, 'originalSr': 37, 'section': 'Hygiene & Sanitation', 'text': 'Male/female washrooms clearly labelled', 'type': 'H'}, {'id': 38, 'originalSr': 38, 'section': 'Hygiene & Sanitation', 'text': 'Washroom for physically challenged - available', 'type': 'H'}, {'id': 39, 'originalSr': 39, 'section': 'Hygiene & Sanitation', 'text': 'Toilet cleaning checklist displayed and records available', 'type': 'H'}, {'id': 40, 'originalSr': 40, 'section': 'Hygiene & Sanitation', 'text': 'Bathing facility available for employees working with hazards', 'type': 'H'}, {'id': 41, 'originalSr': 41, 'section': 'Canteen Hygiene', 'text': 'Canteen kitchen/serving/dining clean; no chemicals stored near kitchen', 'type': 'H'}, {'id': 42, 'originalSr': 42, 'section': 'Canteen Hygiene', 'text': 'Canteen staff using hair net/cap and gloves while serving food', 'type': 'H'}, {'id': 43, 'originalSr': 43, 'section': 'Potable Water', 'text': "Drinking water points sufficient, accessible, and labelled 'Drinking Water'", 'type': 'H'}, {'id': 44, 'originalSr': 44, 'section': 'OHC & First Aid', 'text': 'First aid room/occupational health centre available with proper display', 'type': 'H'}, {'id': 45, 'originalSr': 45, 'section': 'OHC & Ambulance', 'text': 'Ambulance in good condition (roadworthiness, emergency medical equipment, cleanliness, docs)', 'type': 'H'}, {'id': 46, 'originalSr': 46, 'section': 'OHC Medical Staff', 'text': 'Medical staff available for medical emergency', 'type': 'H'}, {'id': 47, 'originalSr': 47, 'section': 'First Aid Facilities', 'text': 'Multiple first aid boxes visible at prominent areas', 'type': 'H'}, {'id': 48, 'originalSr': 48, 'section': 'First Aiders List', 'text': 'List of trained first aiders with contacts displayed near first aid box', 'type': 'H'}], 'S': [{'id': 1, 'originalSr': 1, 'section': 'Transportation & Arrival', 'text': 'Pick-up vehicle had functional seat belts and they were retractable/working', 'type': 'S'}, {'id': 2, 'originalSr': 2, 'section': 'Transportation & Arrival', 'text': 'Driver was not using a mobile phone while driving', 'type': 'S'}, {'id': 3, 'originalSr': 3, 'section': 'Transportation & Arrival', 'text': 'Driver followed speed limits and drove safely', 'type': 'S'}, {'id': 4, 'originalSr': 4, 'section': 'Transportation & Arrival', 'text': 'Seat belts were worn by all occupants (including you)', 'type': 'S'}, {'id': 5, 'originalSr': 5, 'section': 'Transportation & Arrival', 'text': 'A stop or break/s were taken approx. every 2 hours during the journey.', 'type': 'S'}, {'id': 7, 'originalSr': 7, 'section': 'Entry & Safety Induction', 'text': 'A brief visitor/safety induction was given before entry', 'type': 'S'}, {'id': 8, 'originalSr': 8, 'section': 'Emergency Contacts', 'text': 'You were told (or shown) who to contact in case of emergency', 'type': 'S'}, {'id': 9, 'originalSr': 9, 'section': 'Entry Gate', 'text': 'A visitor/entry gate pass was issued', 'type': 'S'}, {'id': 10, 'originalSr': 10, 'section': 'Escort / Host', 'text': 'You were escorted/accompanied by a host throughout the visit', 'type': 'S'}, {'id': 14, 'originalSr': 14, 'section': 'PPEs & Equipment', 'text': 'Required / Mandatory PPE (helmet, safety shoes, jacket, etc.) provided before entering', 'type': 'S'}, {'id': 15, 'originalSr': 15, 'section': 'PPE Condition', 'text': 'PPE provided was in good condition (no visible cracks/damage)', 'type': 'S'}, {'id': 16, 'originalSr': 16, 'section': 'PPE Enforcement', 'text': 'Workers observed were wearing the right PPE for their task', 'type': 'S'}, {'id': 17, 'originalSr': 17, 'section': 'Area PPE', 'text': 'Area-specific PPE requirements communicated & available (gloves/goggles etc.)', 'type': 'S'}, {'id': 18, 'originalSr': 18, 'section': 'Housekeeping', 'text': 'Housekeeping appeared satisfactory at site (floors/ledges/structures)', 'type': 'S'}, {'id': 23, 'originalSr': 23, 'section': 'Traffic & Vehicles', 'text': 'Parked vehicles were secured (wheel chocks used where needed)', 'type': 'S'}, {'id': 24, 'originalSr': 24, 'section': 'Traffic Routes', 'text': 'Pedestrian & vehicle routes clearly marked; separate lanes/paths provided', 'type': 'S'}, {'id': 25, 'originalSr': 25, 'section': 'Speed & Traffic Signs', 'text': 'Speed limit signs/traffic management markings visible inside the plant', 'type': 'S'}, {'id': 26, 'originalSr': 26, 'section': 'Vehicle Speed', 'text': 'Vehicles moving at a safe, controlled speed as per site policy', 'type': 'S'}, {'id': 27, 'originalSr': 27, 'section': 'Vehicle Reversing', 'text': 'Reversing vehicles guided by a spotter/banksman', 'type': 'S'}, {'id': 28, 'originalSr': 28, 'section': 'Workplace Hazards', 'text': 'Walkways/work areas clean and free from slip/trip hazards', 'type': 'S'}, {'id': 29, 'originalSr': 29, 'section': 'Safety Signage', 'text': 'Safety signage (warnings/directions/hazard zones) visible and clear', 'type': 'S'}, {'id': 30, 'originalSr': 30, 'section': 'Overhead Work', 'text': 'Overhead work (if any) properly barricaded below', 'type': 'S'}, {'id': 31, 'originalSr': 31, 'section': 'Emergency Equipment', 'text': 'Fire extinguishers/first-aid boxes/ emergency equipment available and easily accessible', 'type': 'S'}, {'id': 32, 'originalSr': 32, 'section': 'Assembly Point', 'text': 'Assembly point location clearly identified and visible', 'type': 'S'}, {'id': 33, 'originalSr': 33, 'section': 'Evacuation Routes', 'text': 'Emergency evacuation routes/exits clearly marked and unobstructed', 'type': 'S'}, {'id': 34, 'originalSr': 34, 'section': 'Emergency Induction', 'text': 'Emergency preparedness/evacuation arrangements explained during induction', 'type': 'S'}, {'id': 35, 'originalSr': 35, 'section': 'Emergency Alarm', 'text': 'Emergency alarm system appeared available and identifiable', 'type': 'S'}, {'id': 49, 'originalSr': 49, 'section': 'Asset & People', 'text': 'Workers/supervisors aware of and comfortable with safety practices. Clothing appropriate & safe.', 'type': 'S'}, {'id': 50, 'originalSr': 50, 'section': 'Host Proactivity', 'text': 'Host/escort proactively pointed out safety features/hazards', 'type': 'S'}, {'id': 51, 'originalSr': 51, 'section': 'Safety Culture', 'text': 'You felt comfortable raising a safety concern (or felt you could)', 'type': 'S'}, {'id': 52, 'originalSr': 52, 'section': 'Safety Comm', 'text': 'Evidence of recent safety communication (notice boards/toolbox talks etc.)', 'type': 'S'}, {'id': 53, 'originalSr': 53, 'section': 'Plant Maintenance', 'text': 'Overall plant condition is maintained (corrosion, wall coloring, fugitive emissions, etc.)', 'type': 'S'}, {'id': 54, 'originalSr': 54, 'section': 'Environment Quality', 'text': 'Overall work environment is satisfactory (dust in atmosphere, fugitive emissions, smell etc)', 'type': 'S'}]};

let activeCategory = 'E'; // Default category: Environment
const responses = {};
let backendWebhookUrl = localStorage.getItem('onedrive_webhook_url') || (typeof CONFIG !== 'undefined' ? CONFIG.ONEDRIVE_WEBHOOK_URL : '');

document.addEventListener('DOMContentLoaded', () => {
    switchCategory('E');
    updateProgress();

    document.getElementById('openSettingsBtn').addEventListener('click', openSettings);
    document.getElementById('visitDate').valueAsDate = new Date();
});

function switchCategory(catKey) {
    activeCategory = catKey;

    // Update Tab Styles
    ['E', 'H', 'S'].forEach(k => {
        const btn = document.getElementById(`tab-${k}`);
        if (k === activeCategory) {
            let borderCol = k === 'E' ? 'border-emerald-400' : k === 'H' ? 'border-purple-400' : 'border-blue-400';
            btn.className = `py-2.5 px-2 rounded-xl text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center space-y-0.5 sm:space-y-0 sm:space-x-1.5 bg-white text-slate-900 shadow-sm border-2 ${borderCol}`;
        } else {
            btn.className = `py-2.5 px-2 rounded-xl text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center space-y-0.5 sm:space-y-0 sm:space-x-1.5 text-slate-600 hover:text-slate-800`;
        }
    });

    // Update Banner Info
    const banner = document.getElementById('categoryBanner');
    const title = document.getElementById('categoryTitle');
    const subtitle = document.getElementById('categorySubtitle');
    const badge = document.getElementById('categoryCountBadge');

    if (catKey === 'E') {
        banner.className = "p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex justify-between items-center text-xs";
        title.className = "font-black text-emerald-950 text-sm flex items-center space-x-1.5";
        title.innerHTML = `<i class="fa-solid fa-leaf text-emerald-600"></i><span>1. Environment Checkpoints (E)</span>`;
        subtitle.innerText = "Air Emissions, Water/Effluents, Material & Waste Storage, Energy Conservation";
        badge.className = "bg-emerald-200 text-emerald-900 px-3 py-1 rounded-xl font-bold text-xs";
        badge.innerText = "13 Items";
    } else if (catKey === 'H') {
        banner.className = "p-3.5 rounded-2xl bg-purple-50 border border-purple-200 flex justify-between items-center text-xs";
        title.className = "font-black text-purple-950 text-sm flex items-center space-x-1.5";
        title.innerHTML = `<i class="fa-solid fa-heart-pulse text-purple-600"></i><span>2. Health & Hygiene Checkpoints (H)</span>`;
        subtitle.innerText = "Occupational Health, Hygiene, Washrooms, Canteen, Water, OHC & First Aid";
        badge.className = "bg-purple-200 text-purple-900 px-3 py-1 rounded-xl font-bold text-xs";
        badge.innerText = "21 Items";
    } else if (catKey === 'S') {
        banner.className = "p-3.5 rounded-2xl bg-blue-50 border border-blue-200 flex justify-between items-center text-xs";
        title.className = "font-black text-blue-950 text-sm flex items-center space-x-1.5";
        title.innerHTML = `<i class="fa-solid fa-user-shield text-blue-600"></i><span>3. Safety & Traffic Checkpoints (S)</span>`;
        subtitle.innerText = "Transportation, PPEs, Plant Traffic, Emergency Preparedness, Workplaces & People";
        badge.className = "bg-blue-200 text-blue-900 px-3 py-1 rounded-xl font-bold text-xs";
        badge.innerText = "33 Items";
    }

    renderCheckpoints(catKey);
    updateNavButtons();
}

function renderCheckpoints(catKey) {
    const container = document.getElementById('checkpointsContainer');
    container.innerHTML = '';

    const list = questionsByCategory[catKey];

    list.forEach((q, idx) => {
        const savedChoice = responses[q.id]?.choice || '';
        const savedComment = responses[q.id]?.comment || '';

        const card = document.createElement('div');
        card.className = `bg-white p-4 rounded-2xl border transition shadow-sm space-y-3 ${
            savedChoice ? 'border-emerald-300 bg-emerald-50/20' : 'border-slate-200'
        }`;
        card.id = `q-card-${q.id}`;

        card.innerHTML = `
            <div class="flex justify-between items-start gap-2">
                <div class="flex items-start space-x-2">
                    <span class="bg-slate-100 text-slate-800 font-extrabold text-[11px] px-2 py-0.5 rounded-md border border-slate-200">#${q.originalSr}</span>
                    <div>
                        <span class="text-[10px] font-bold uppercase tracking-wide text-slate-400 block">${q.section}</span>
                        <p class="text-xs font-bold text-slate-800 leading-snug mt-0.5">${q.text}</p>
                    </div>
                </div>
            </div>

            <!-- Touch-Friendly Radio Choices -->
            <div class="grid grid-cols-3 gap-1.5 pt-1">
                <button type="button" onclick="recordAnswer(${q.id}, 'Yes')" class="py-2.5 px-2 rounded-xl text-xs font-bold border transition text-center ${
                    savedChoice === 'Yes' ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }">
                    <i class="fa-solid fa-circle-check text-xs mr-1"></i> Yes
                </button>
                <button type="button" onclick="recordAnswer(${q.id}, 'No')" class="py-2.5 px-2 rounded-xl text-xs font-bold border transition text-center ${
                    savedChoice === 'No' ? 'bg-rose-600 text-white border-rose-600 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }">
                    <i class="fa-solid fa-circle-xmark text-xs mr-1"></i> No
                </button>
                <button type="button" onclick="recordAnswer(${q.id}, 'Did not observe')" class="py-2.5 px-2 rounded-xl text-xs font-bold border transition text-center ${
                    savedChoice === 'Did not observe' ? 'bg-amber-500 text-white border-amber-500 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }">
                    N/A
                </button>
            </div>

            <!-- Optional Remarks -->
            <input type="text" value="${savedComment}" placeholder="Add brief remarks (optional)..." class="w-full text-xs px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-slate-50" oninput="recordComment(${q.id}, this.value)">
        `;

        container.appendChild(card);
    });
}

function recordAnswer(qId, choice) {
    if (!responses[qId]) responses[qId] = {};
    responses[qId].choice = choice;
    renderCheckpoints(activeCategory);
    updateProgress();
}

function recordComment(qId, value) {
    if (!responses[qId]) responses[qId] = {};
    responses[qId].comment = value;
}

function updateProgress() {
    const answeredCount = Object.keys(responses).filter(k => responses[k].choice).length;
    const pct = Math.round((answeredCount / 67) * 100);

    document.getElementById('answeredCount').innerText = answeredCount;
    document.getElementById('percentageText').innerText = `${pct}%`;
    document.getElementById('progressBar').style.width = `${pct}%`;

    // Category Badges
    ['E', 'H', 'S'].forEach(cat => {
        const catQuestions = questionsByCategory[cat];
        const catAnswered = catQuestions.filter(q => responses[q.id]?.choice).length;
        document.getElementById(`badge-${cat}`).innerText = `${catAnswered}/${catQuestions.length}`;
    });
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevCatBtn');
    const nextBtn = document.getElementById('nextCatBtn');
    const submitBtn = document.getElementById('submitFormBtn');
    const catText = document.getElementById('currentCatText');

    if (activeCategory === 'E') {
        prevBtn.disabled = true;
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
        submitBtn.classList.remove('flex');
        catText.innerText = "1 of 3 (Environment)";
    } else if (activeCategory === 'H') {
        prevBtn.disabled = false;
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
        submitBtn.classList.remove('flex');
        catText.innerText = "2 of 3 (Health)";
    } else if (activeCategory === 'S') {
        prevBtn.disabled = false;
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        submitBtn.classList.add('flex');
        catText.innerText = "3 of 3 (Safety)";
    }
}

function navigatePrevCategory() {
    if (activeCategory === 'H') switchCategory('E');
    else if (activeCategory === 'S') switchCategory('H');
    window.scrollTo({ top: 120, behavior: 'smooth' });
}

function navigateNextCategory() {
    if (activeCategory === 'E') switchCategory('H');
    else if (activeCategory === 'H') switchCategory('S');
    window.scrollTo({ top: 120, behavior: 'smooth' });
}

// Formatted Excel Output Generation (Sorted by E, H, S)
function generateFormattedExcel(triggerDownload = false) {
    const site = document.getElementById('siteName').value || 'Unspecified Site';
    const location = document.getElementById('locationName').value || 'Unspecified';
    const gscMember = document.getElementById('gscMember').value || 'Unspecified';
    const visitDate = document.getElementById('visitDate').value || new Date().toISOString().slice(0, 10);

    // Calculate Scores per Category
    const getCatStats = (catKey) => {
        let yes = 0, no = 0, na = 0;
        questionsByCategory[catKey].forEach(q => {
            const c = responses[q.id]?.choice;
            if (c === 'Yes') yes++;
            else if (c === 'No') no++;
            else if (c === 'Did not observe') na++;
        });
        return { yes, no, na, total: questionsByCategory[catKey].length };
    };

    const eStats = getCatStats('E');
    const hStats = getCatStats('H');
    const sStats = getCatStats('S');

    const totalYes = eStats.yes + hStats.yes + sStats.yes;
    const totalNo = eStats.no + hStats.no + sStats.no;
    const totalNA = eStats.na + hStats.na + sStats.na;

    // Master Formatted Sheet Array
    const sheetData = [
        ["EHS SITE VISIT AUDIT REPORT"],
        ["Organized & Sorted by Environment (E), Health (H), and Safety (S) Categories"],
        [""],
        ["1. AUDIT & SITE METADATA"],
        ["Site Name:", site, "", "Visit Date:", visitDate],
        ["Location:", location, "", "GSC Member:", gscMember],
        [""],
        ["2. EHS CATEGORY SCORECARD SUMMARY"],
        ["EHS Category", "Total Checkpoints", "Yes (Pass)", "No (Fail)", "Did Not Observe (N/A)"],
        ["Environment (E)", eStats.total, eStats.yes, eStats.no, eStats.na],
        ["Health (H)", hStats.total, hStats.yes, hStats.no, hStats.na],
        ["Safety (S)", sStats.total, sStats.yes, sStats.no, sStats.na],
        ["TOTAL OVERALL", 67, totalYes, totalNo, totalNA],
        [""],
        ["3. DETAILED CHECKPOINT AUDIT LOG (SORTED BY E, H, S)"],
        ["Original #", "EHS Category", "Sub-Section", "Checkpoint Description", "Status Response", "Remarks / Comments"]
    ];

    // Populate Environment (E) Questions
    questionsByCategory['E'].forEach(q => {
        sheetData.push([
            q.originalSr,
            "Environment (E)",
            q.section,
            q.text,
            responses[q.id]?.choice || "Not Answered",
            responses[q.id]?.comment || ""
        ]);
    });

    // Populate Health (H) Questions
    questionsByCategory['H'].forEach(q => {
        sheetData.push([
            q.originalSr,
            "Health (H)",
            q.section,
            q.text,
            responses[q.id]?.choice || "Not Answered",
            responses[q.id]?.comment || ""
        ]);
    });

    // Populate Safety (S) Questions
    questionsByCategory['S'].forEach(q => {
        sheetData.push([
            q.originalSr,
            "Safety (S)",
            q.section,
            q.text,
            responses[q.id]?.choice || "Not Answered",
            responses[q.id]?.comment || ""
        ]);
    });

    const ws = XLSX.utils.aoa_to_sheet(sheetData);

    // Format Column Widths for clean viewing
    ws['!cols'] = [
        { wch: 12 }, // Original #
        { wch: 18 }, // EHS Category
        { wch: 28 }, // Sub-Section
        { wch: 75 }, // Checkpoint Text
        { wch: 22 }, // Response
        { wch: 35 }  // Remarks
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "EHS_Master_Audit");

    const sanitizedSite = site.replace(/[^a-zA-Z0-9]/g, '_');
    const fileName = `EHS_Audit_${sanitizedSite}_${visitDate}.xlsx`;

    if (triggerDownload) {
        XLSX.writeFile(wb, fileName);
    }

    return { wb, fileName, eStats, hStats, sStats, totalYes, totalNo, totalNA };
}

function downloadExcelFile() {
    generateFormattedExcel(true);
}

async function handleFormSubmit() {
    const site = document.getElementById('siteName').value.trim();
    const location = document.getElementById('locationName').value.trim();
    const gscMember = document.getElementById('gscMember').value.trim();

    if (!site || !location || !gscMember) {
        alert("Please enter Site Name, Location, and GSC Member before submitting.");
        return;
    }

    const { fileName, eStats, hStats, sStats, totalYes, totalNo, totalNA } = generateFormattedExcel(false);

    document.getElementById('createdFileName').innerText = fileName;
    document.getElementById('successModal').classList.remove('hidden');

    // Auto-push to OneDrive using backend configured URL
    const targetUrl = backendWebhookUrl || (typeof CONFIG !== 'undefined' ? CONFIG.ONEDRIVE_WEBHOOK_URL : '');

    if (targetUrl && targetUrl.startsWith('http')) {
        document.getElementById('oneDriveSyncResult').innerText = "Pushing to OneDrive in backend...";
        document.getElementById('oneDriveSyncResult').className = "font-bold text-emerald-600";

        try {
            const payload = {
                fileName: fileName,
                site: site,
                location: location,
                gscMember: gscMember,
                visitDate: document.getElementById('visitDate').value,
                scores: { eStats, hStats, sStats, totalYes, totalNo, totalNA },
                environmentCheckpoints: questionsByCategory['E'].map(q => ({
                    srNo: q.originalSr,
                    checkpoint: q.text,
                    response: responses[q.id]?.choice || "Not Answered",
                    remarks: responses[q.id]?.comment || ""
                })),
                healthCheckpoints: questionsByCategory['H'].map(q => ({
                    srNo: q.originalSr,
                    checkpoint: q.text,
                    response: responses[q.id]?.choice || "Not Answered",
                    remarks: responses[q.id]?.comment || ""
                })),
                safetyCheckpoints: questionsByCategory['S'].map(q => ({
                    srNo: q.originalSr,
                    checkpoint: q.text,
                    response: responses[q.id]?.choice || "Not Answered",
                    remarks: responses[q.id]?.comment || ""
                }))
            };

            const res = await fetch(targetUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                document.getElementById('oneDriveSyncResult').innerText = "Successfully Pushed to OneDrive!";
                document.getElementById('oneDriveSyncResult').className = "font-bold text-emerald-600";
            } else {
                throw new Error("HTTP Status Error");
            }
        } catch (err) {
            console.error("OneDrive Sync Error:", err);
            document.getElementById('oneDriveSyncResult').innerText = "Sync Pending - Downloaded Excel Locally";
            document.getElementById('oneDriveSyncResult').className = "font-bold text-amber-600";
            generateFormattedExcel(true);
        }
    } else {
        document.getElementById('oneDriveSyncResult').innerText = "Downloaded Locally (Add OneDrive link in config.js)";
        document.getElementById('oneDriveSyncResult').className = "font-bold text-slate-600";
        generateFormattedExcel(true);
    }
}

function resetForm() {
    Object.keys(responses).forEach(k => delete responses[k]);
    document.getElementById('checklistForm').reset();
    switchCategory('E');
    updateProgress();
    document.getElementById('successModal').classList.add('hidden');
}

function openSettings() {
    document.getElementById('webhookUrlInput').value = backendWebhookUrl;
    document.getElementById('settingsModal').classList.remove('hidden');
}

function closeSettings() {
    document.getElementById('settingsModal').classList.add('hidden');
}

function saveSettings() {
    backendWebhookUrl = document.getElementById('webhookUrlInput').value.trim();
    localStorage.setItem('onedrive_webhook_url', backendWebhookUrl);
    closeSettings();
}
