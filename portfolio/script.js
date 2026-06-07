document.addEventListener('DOMContentLoaded', () => {
    // ==================== DEFAULT DATA ====================
    const defaultData = {
        name: "Saran K",
        heroDesc: "Driven Computer Science student specialized in Artificial Intelligence & Data Science, with a strong passion for frontend web development, automated workflows, and building smart interactive applications.",
        socials: {
            github: "https://github.com/saran7222",
            linkedin: "https://linkedin.com/in/saran-k-46703b319",
            email: "saransaran7222@gmail.com",
            phone: "+918248820949"
        },
        about: {
            location: "Annur, Coimbatore, India",
            degree: "B.Sc. Computer Science (AI & DS)",
            email: "saransaran7222@gmail.com",
            languages: "English, Tamil",
            title: "Connecting AI & Data Science with Frontend Experiences",
            desc: "I am currently a II-Year B.Sc. Computer Science student focusing on Artificial Intelligence and Data Science at Dr. SNS Rajalakshmi College of Arts and Science. I bridges the gap between analytical data science and user-centric web design. I enjoy crafting interactive, responsive layouts using HTML5, CSS3, and JavaScript, while exploring AI applications like Computer Vision and Generative AI (using Gemini 2.5 Flash). I am also skilled in designing simple automation workflows in n8n and building functional rapid-prototypes using Python Streamlit. I'm actively seeking frontend developer or software intern roles to bring high energy and technical skills to modern dev environments.",
            tags: ["Frontend Development", "AI & Data Science", "Workflow Automation (n8n)", "UI/UX (Figma)", "Problem Solving"]
        },
        education: [
            {
                title: "B.Sc. Computer Science (AI & DS)",
                subtitle: "Dr. SNS Rajalakshmi College of Arts and Science, Coimbatore",
                period: "2024 - Present",
                desc: "Currently in II Year. Developing deep theoretical and practical understanding of Artificial Intelligence, Data Science, Machine Learning, and database concepts like SQL, while active in coding labs and tech events."
            },
            {
                title: "Class XII (HSC)",
                subtitle: "St. Mary's Convent Matric Hr. Sec. School, Annur",
                period: "2022 - 2024",
                desc: "Completed higher secondary education with a focus on Computer Science and Mathematics. Secured 72.0%."
            },
            {
                title: "Class X (SSLC)",
                subtitle: "St. Mary's Convent Matric Hr. Sec. School, Annur",
                period: "2020 - 2022",
                desc: "Secured 69.4% in secondary school board examinations."
            }
        ],
        experience: [
            {
                title: "Frontend Developer Intern",
                subtitle: "Ascentre Technologies",
                period: "Mar - Apr 2025",
                desc: "Developed a fully responsive static frontend website for a commercial drone selling platform using HTML5 and CSS3.\nCreated custom, well-structured grid and flexbox layouts to present products and specifications cleanly.\nImplemented cross-device media queries, ensuring compatibility on mobile, tablet, and desktop viewports.\nTested locally, debugged render-blocking layouts, and learned industry-standard practices for UI structure."
            }
        ],
        skills: [
            {
                category: "Frontend Development",
                icon: "bx-code-alt",
                items: [
                    { name: "HTML5 & CSS3", value: 90 },
                    { name: "Responsive Design", value: 85 },
                    { name: "JavaScript (ES6+)", value: 70 },
                    { name: "Figma (UI Layouts)", value: 75 }
                ]
            },
            {
                category: "AI & Data Science",
                icon: "bx-brain",
                items: [
                    { name: "Python Basics", value: 80 },
                    { name: "Streamlit (Python UIs)", value: 75 },
                    { name: "SQL (Database Basics)", value: 70 },
                    { name: "Generative AI Tools", value: 80 }
                ]
            },
            {
                category: "Tools & Workflows",
                icon: "bx-cog",
                items: [
                    { name: "n8n (Workflow Automation)", value: 75 },
                    { name: "Git & GitHub", value: 75 },
                    { name: "Microsoft Excel", value: 80 },
                    { name: "Problem Solving", value: 80 }
                ]
            }
        ],
        certifications: [
            {
                name: "Enterprise Design Thinking Practitioner",
                issuer: "IBM",
                issuerClass: "ibm",
                desc: "Acquired practical skills in User Research, Ideation, prototyping, and design-led team strategies.",
                date: "2024"
            },
            {
                name: "Computer Vision App with Azure",
                issuer: "Microsoft",
                issuerClass: "microsoft",
                desc: "Built and integrated image recognition application using Azure Cognitive Vision services APIs.",
                date: "2025"
            },
            {
                name: "Nano Banana Image Magic with Gemini 2.5 Flash",
                issuer: "Analytics Vidhya",
                issuerClass: "av",
                desc: "Completed hands-on coding training using multimodal capabilities of Gemini 2.5 Flash for image edits and generation.",
                date: "2025"
            },
            {
                name: "Innovation Ambassador",
                issuer: "Innovation Cell",
                issuerClass: "innovation",
                desc: "Selected to lead and organize technology innovation workshops and collaborative engineering projects.",
                date: "2024"
            },
            {
                name: "AI for Business Professionals",
                issuer: "HP",
                issuerClass: "hp",
                desc: "Understood strategic implementation frameworks of Artificial Intelligence and Data Analytics inside enterprises.",
                date: "2025"
            },
            {
                name: "Microsoft Excel Specialist",
                issuer: "Coursera",
                issuerClass: "coursera",
                desc: "Proficient in spreadsheet modeling, pivot tables, data visualization, and data structuring.",
                date: "2025"
            }
        ],
        web3formsKey: ""
    };

    let activeData = {};
    let isEditMode = false;

    // ==================== STATE LOADER & URL SERIALIZATION ====================
    function loadState() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#data=')) {
            try {
                const encodedData = hash.substring(6);
                const decodedString = decodeURIComponent(escape(atob(encodedData)));
                activeData = JSON.parse(decodedString);
                console.log("State loaded from URL share link.");
                return;
            } catch (e) {
                console.error("Failed to decode share link data: ", e);
            }
        }

        const localData = localStorage.getItem('portfolioData');
        if (localData) {
            try {
                activeData = JSON.parse(localData);
                console.log("State loaded from localStorage.");
                return;
            } catch (e) {
                console.error("Failed to load local state: ", e);
            }
        }

        activeData = JSON.parse(JSON.stringify(defaultData)); // Deep copy default
        console.log("Using default resume state.");
    }

    function saveState() {
        localStorage.setItem('portfolioData', JSON.stringify(activeData));
    }

    function generateShareURL() {
        try {
            const dataString = JSON.stringify(activeData);
            const encodedData = btoa(unescape(encodeURIComponent(dataString)));
            const baseURL = window.location.origin + window.location.pathname;
            return `${baseURL}#data=${encodedData}`;
        } catch (e) {
            console.error("Error creating share link: ", e);
            alert("Could not generate share link: " + e.message);
        }
    }

    // ==================== DOM RENDERING ENGINES ====================
    function renderAll() {
        // Text blocks
        document.getElementById('hero-name').innerText = activeData.name;
        document.getElementById('hero-desc').innerText = activeData.heroDesc;
        
        const keyInput = document.getElementById('admin-web3forms-key');
        if (keyInput) {
            keyInput.value = activeData.web3formsKey || '';
        }
        
        document.getElementById('about-location').innerText = activeData.about.location;
        document.getElementById('about-degree').innerText = activeData.about.degree;
        document.getElementById('about-email').innerText = activeData.about.email;
        document.getElementById('about-languages').innerText = activeData.about.languages;
        document.getElementById('about-title').innerText = activeData.about.title;
        document.getElementById('about-desc').innerText = activeData.about.desc;

        // Contact section updates
        document.getElementById('contact-email-val').innerText = activeData.socials.email;
        document.getElementById('contact-email-val').href = `mailto:${activeData.socials.email}`;
        document.getElementById('contact-phone-val').innerText = activeData.socials.phone;
        document.getElementById('contact-phone-val').href = `tel:${activeData.socials.phone}`;
        document.getElementById('contact-address-val').innerText = activeData.about.location;

        // Social handles links
        document.getElementById('social-github').href = activeData.socials.github;
        document.getElementById('social-linkedin').href = activeData.socials.linkedin;
        document.getElementById('social-email').href = `mailto:${activeData.socials.email}`;
        document.getElementById('social-phone').href = `tel:${activeData.socials.phone}`;

        // Render dynamic parts
        renderTags();
        renderTimeline('education', 'education-timeline');
        renderTimeline('experience', 'experience-timeline');
        renderSkills();
        renderCertifications();
    }

    // Render About me tag pills
    function renderTags() {
        const container = document.getElementById('about-tags-container');
        container.innerHTML = '';
        activeData.about.tags.forEach((tag, index) => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'tag tag-wrapper';
            tagSpan.innerText = tag;
            
            // Delete button for tag in edit mode
            const delBtn = document.createElement('span');
            delBtn.className = 'tag-delete-btn';
            delBtn.innerHTML = "<i class='bx bx-x'></i>";
            delBtn.onclick = (e) => {
                e.stopPropagation();
                activeData.about.tags.splice(index, 1);
                saveState();
                renderTags();
            };
            tagSpan.appendChild(delBtn);
            container.appendChild(tagSpan);
        });
    }

    // Render timeline sections (Education / Experience)
    function renderTimeline(type, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        const list = activeData[type];

        list.forEach((item, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'editable-item-wrapper';

            const delBtn = document.createElement('div');
            delBtn.className = 'item-delete-btn';
            delBtn.innerHTML = "<i class='bx bx-trash'></i>";
            delBtn.title = "Delete Entry";
            delBtn.onclick = () => {
                activeData[type].splice(index, 1);
                saveState();
                renderTimeline(type, containerId);
            };

            const contentCard = document.createElement('div');
            contentCard.className = `timeline-content glass ${type === 'experience' ? 'highlighted-card' : ''}`;
            
            // Add click to edit in edit mode
            contentCard.onclick = () => {
                if (isEditMode) {
                    openTimelineModal(type, index);
                }
            };

            const period = document.createElement('div');
            period.className = 'time-period';
            period.innerHTML = `<i class='bx bx-calendar'></i> ${item.period}`;

            const title = document.createElement('h3');
            title.innerText = item.title;

            const subtitle = document.createElement('h4');
            subtitle.innerText = item.subtitle;

            contentCard.appendChild(period);
            contentCard.appendChild(title);
            contentCard.appendChild(subtitle);

            // Handle description layout (split by newlines for formatting)
            if (item.desc.includes('\n')) {
                const ul = document.createElement('ul');
                ul.className = 'timeline-list';
                item.desc.split('\n').forEach(line => {
                    if (line.trim()) {
                        const li = document.createElement('li');
                        li.innerText = line.replace(/^[•\-\*]\s*/, ''); // Remove leading bullets if any
                        ul.appendChild(li);
                    }
                });
                contentCard.appendChild(ul);
            } else {
                const p = document.createElement('p');
                p.innerText = item.desc;
                contentCard.appendChild(p);
            }

            wrapper.appendChild(delBtn);
            wrapper.appendChild(contentCard);
            container.appendChild(wrapper);
        });
    }

    // Render Skills Category and Bars
    function renderSkills() {
        const container = document.getElementById('skills-grid-container');
        container.innerHTML = '';

        activeData.skills.forEach((category, catIndex) => {
            const catCard = document.createElement('div');
            catCard.className = 'skills-category glass';

            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = `<i class='bx ${category.icon || 'bx-cog'}'></i> <h3>${category.category}</h3>`;
            catCard.appendChild(header);

            const list = document.createElement('div');
            list.className = 'skills-list';

            category.items.forEach((skill, skillIndex) => {
                const itemWrapper = document.createElement('div');
                itemWrapper.className = 'skill-item editable-item-wrapper';
                
                // Clicking skill item opens edit
                itemWrapper.onclick = () => {
                    if (isEditMode) {
                        openSkillModal(catIndex, skillIndex);
                    }
                };

                const delBtn = document.createElement('div');
                delBtn.className = 'item-delete-btn';
                delBtn.style.top = '-5px';
                delBtn.style.right = '-5px';
                delBtn.style.width = '2.4rem';
                delBtn.style.height = '2.4rem';
                delBtn.style.fontSize = '1.3rem';
                delBtn.innerHTML = "<i class='bx bx-x'></i>";
                delBtn.onclick = (e) => {
                    e.stopPropagation();
                    activeData.skills[catIndex].items.splice(skillIndex, 1);
                    saveState();
                    renderSkills();
                };

                const info = document.createElement('div');
                info.className = 'skill-info';
                info.innerHTML = `<span>${skill.name}</span> <span>${skill.value}%</span>`;

                const progress = document.createElement('div');
                progress.className = 'progress-bar';
                
                const span = document.createElement('span');
                // Set directly for rendering; when viewport scrolls, script triggers animation
                span.style.width = `${skill.value}%`;
                
                progress.appendChild(span);
                itemWrapper.appendChild(delBtn);
                itemWrapper.appendChild(info);
                itemWrapper.appendChild(progress);
                list.appendChild(itemWrapper);
            });

            // Add Skill button in Edit Mode
            const addBtnContainer = document.createElement('div');
            addBtnContainer.className = 'edit-actions-skill';
            addBtnContainer.style.marginTop = '2.5rem';
            addBtnContainer.style.display = isEditMode ? 'block' : 'none';
            
            const addBtn = document.createElement('button');
            addBtn.className = 'edit-add-btn';
            addBtn.innerHTML = `<i class='bx bx-plus'></i> Add Skill`;
            addBtn.onclick = () => openSkillModal(catIndex);
            
            addBtnContainer.appendChild(addBtn);
            catCard.appendChild(list);
            catCard.appendChild(addBtnContainer);
            container.appendChild(catCard);
        });
    }

    // Render Certifications Grid
    function renderCertifications() {
        const container = document.getElementById('certifications-grid-container');
        container.innerHTML = '';

        activeData.certifications.forEach((cert, index) => {
            const wrapper = document.createElement('div');
            wrapper.className = 'editable-item-wrapper';

            const delBtn = document.createElement('div');
            delBtn.className = 'item-delete-btn';
            delBtn.innerHTML = "<i class='bx bx-trash'></i>";
            delBtn.onclick = () => {
                activeData.certifications.splice(index, 1);
                saveState();
                renderCertifications();
            };

            const card = document.createElement('div');
            card.className = 'cert-card glass';
            
            // Edit trigger
            card.onclick = () => {
                if (isEditMode) {
                    openCertModal(index);
                }
            };

            const iconRow = document.createElement('div');
            iconRow.className = 'cert-icon';
            
            let iconClass = 'bx bx-award';
            if (cert.issuerClass === 'microsoft') iconClass = 'bx bxl-microsoft';
            else if (cert.issuerClass === 'ibm') iconClass = 'bx bxl-ok-ru';
            
            iconRow.innerHTML = `<i class='bx ${iconClass}'></i> <span class="cert-issuer ${cert.issuerClass || 'default'}">${cert.issuer}</span>`;

            const title = document.createElement('h3');
            title.innerText = cert.name;

            const desc = document.createElement('p');
            desc.innerText = cert.desc;

            const date = document.createElement('div');
            date.className = 'cert-date';
            date.innerText = cert.date;

            card.appendChild(iconRow);
            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(date);

            wrapper.appendChild(delBtn);
            wrapper.appendChild(card);
            container.appendChild(wrapper);
        });
    }

    // ==================== EDIT MODE STATE HANDLER ====================
    const editBtn = document.getElementById('edit-btn');
    const resetBtn = document.getElementById('reset-btn');
    const shareBtn = document.getElementById('share-btn');

    editBtn.addEventListener('click', () => {
        isEditMode = !isEditMode;
        
        const keyContainer = document.getElementById('forms-key-container');
        
        if (isEditMode) {
            document.body.classList.add('edit-mode');
            editBtn.classList.add('active-edit');
            editBtn.querySelector('span').innerText = 'Save & Lock';
            editBtn.querySelector('i').className = 'bx bx-lock-alt';
            
            if (keyContainer) keyContainer.style.display = 'block';
            
            // Show edit support controls
            document.querySelectorAll('.edit-actions-timeline, .edit-actions-cert, .edit-actions-tag').forEach(el => el.style.display = 'block');
            renderSkills(); // Re-render skills to display "Add Skill" buttons
            
            // Enable contenteditable elements
            document.querySelectorAll('[data-editable="true"]').forEach(el => {
                el.contentEditable = 'true';
            });

            // Prompt social edits in edit mode instead of opening links
            document.querySelectorAll('.editable-social').forEach(el => {
                el.onclick = (e) => {
                    e.preventDefault();
                    const site = el.id.replace('social-', '');
                    const newURL = prompt(`Enter custom URL for your ${site}:`, activeData.socials[site] || '');
                    if (newURL !== null) {
                        activeData.socials[site] = newURL;
                        el.href = newURL;
                        saveState();
                        renderAll();
                    }
                };
            });
        } else {
            document.body.classList.remove('edit-mode');
            editBtn.classList.remove('active-edit');
            editBtn.querySelector('span').innerText = 'Edit Mode';
            editBtn.querySelector('i').className = 'bx bx-edit-alt';
            
            if (keyContainer) keyContainer.style.display = 'none';
            
            // Hide edit support controls
            document.querySelectorAll('.edit-actions-timeline, .edit-actions-cert, .edit-actions-tag').forEach(el => el.style.display = 'none');
            
            // Disable contenteditable elements
            document.querySelectorAll('[data-editable="true"]').forEach(el => {
                el.contentEditable = 'false';
            });
            
            // Detach custom social clicks
            document.querySelectorAll('.editable-social').forEach(el => {
                el.onclick = null;
            });

            // Gather inline contenteditable edits
            activeData.name = document.getElementById('hero-name').innerText;
            activeData.heroDesc = document.getElementById('hero-desc').innerText;
            activeData.about.location = document.getElementById('about-location').innerText;
            activeData.about.degree = document.getElementById('about-degree').innerText;
            activeData.about.email = document.getElementById('about-email').innerText;
            activeData.about.languages = document.getElementById('about-languages').innerText;
            activeData.about.title = document.getElementById('about-title').innerText;
            activeData.about.desc = document.getElementById('about-desc').innerText;
            
            const keyInput = document.getElementById('admin-web3forms-key');
            if (keyInput) {
                activeData.web3formsKey = keyInput.value.trim();
            }
            
            saveState();
            renderAll(); // Clean draw
        }
    });

    // Add Tag Listener
    document.getElementById('add-tag-btn').addEventListener('click', () => {
        const tag = prompt("Enter tag name:");
        if (tag && tag.trim()) {
            activeData.about.tags.push(tag.trim());
            saveState();
            renderTags();
        }
    });

    // Reset state
    resetBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to reset all details to Saran's default resume details? This will delete all your local changes!")) {
            localStorage.removeItem('portfolioData');
            window.location.hash = ''; // Clear sharing hash
            isEditMode = false;
            document.body.classList.remove('edit-mode');
            loadState();
            renderAll();
            window.location.reload();
        }
    });

    // Open Share Modal
    shareBtn.addEventListener('click', () => {
        // Force save inline contenteditables if in edit mode
        if (isEditMode) {
            activeData.name = document.getElementById('hero-name').innerText;
            activeData.heroDesc = document.getElementById('hero-desc').innerText;
            activeData.about.location = document.getElementById('about-location').innerText;
            activeData.about.degree = document.getElementById('about-degree').innerText;
            activeData.about.email = document.getElementById('about-email').innerText;
            activeData.about.languages = document.getElementById('about-languages').innerText;
            activeData.about.title = document.getElementById('about-title').innerText;
            activeData.about.desc = document.getElementById('about-desc').innerText;
            saveState();
        }
        
        const shareURL = generateShareURL();
        document.getElementById('share-link-input').value = shareURL;
        document.getElementById('share-feedback').innerText = '';
        openModal('share-modal');
    });

    // ==================== MODAL CONTROLLER FUNCTIONS ====================
    window.openModal = function(id) {
        document.getElementById(id).classList.add('active');
    };

    window.closeModal = function(id) {
        document.getElementById(id).classList.remove('active');
    };

    // Timeline Modal Actions (Education / Experience)
    window.openTimelineModal = function(type, index = null) {
        const modal = document.getElementById('timeline-modal');
        const titleEl = document.getElementById('timeline-modal-title');
        const typeInput = document.getElementById('timeline-item-type');
        const indexInput = document.getElementById('timeline-item-index');
        
        typeInput.value = type;
        indexInput.value = index !== null ? index : '';
        
        if (index !== null) {
            const data = activeData[type][index];
            titleEl.innerText = `Edit ${type === 'education' ? 'Education' : 'Experience'}`;
            document.getElementById('timeline-title-input').value = data.title;
            document.getElementById('timeline-subtitle-input').value = data.subtitle;
            document.getElementById('timeline-period-input').value = data.period;
            document.getElementById('timeline-desc-input').value = data.desc;
        } else {
            titleEl.innerText = `Add ${type === 'education' ? 'Education' : 'Experience'}`;
            document.getElementById('timeline-form').reset();
            typeInput.value = type;
            indexInput.value = '';
        }
        openModal('timeline-modal');
    };

    document.getElementById('timeline-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const type = document.getElementById('timeline-item-type').value;
        const index = document.getElementById('timeline-item-index').value;
        
        const entry = {
            title: document.getElementById('timeline-title-input').value,
            subtitle: document.getElementById('timeline-subtitle-input').value,
            period: document.getElementById('timeline-period-input').value,
            desc: document.getElementById('timeline-desc-input').value
        };

        if (index !== '') {
            activeData[type][index] = entry;
        } else {
            activeData[type].push(entry);
        }

        saveState();
        closeModal('timeline-modal');
        renderTimeline(type, type === 'education' ? 'education-timeline' : 'experience-timeline');
    });

    // Skill Modal Actions
    window.openSkillModal = function(catIndex, itemIndex = null) {
        const modal = document.getElementById('skill-modal');
        const titleEl = document.getElementById('skill-modal-title');
        const catInput = document.getElementById('skill-category-index');
        const itemInput = document.getElementById('skill-item-index');
        
        catInput.value = catIndex;
        itemInput.value = itemIndex !== null ? itemIndex : '';
        
        if (itemIndex !== null) {
            const skill = activeData.skills[catIndex].items[itemIndex];
            titleEl.innerText = "Edit Skill";
            document.getElementById('skill-name-input').value = skill.name;
            document.getElementById('skill-value-input').value = skill.value;
            document.getElementById('skill-value-display').innerText = `${skill.value}%`;
        } else {
            titleEl.innerText = "Add Skill";
            document.getElementById('skill-form').reset();
            document.getElementById('skill-value-display').innerText = "80%";
            catInput.value = catIndex;
            itemInput.value = '';
        }
        openModal('skill-modal');
    };

    document.getElementById('skill-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const catIndex = document.getElementById('skill-category-index').value;
        const itemIndex = document.getElementById('skill-item-index').value;
        
        const skill = {
            name: document.getElementById('skill-name-input').value,
            value: parseInt(document.getElementById('skill-value-input').value, 10)
        };

        if (itemIndex !== '') {
            activeData.skills[catIndex].items[itemIndex] = skill;
        } else {
            activeData.skills[catIndex].items.push(skill);
        }

        saveState();
        closeModal('skill-modal');
        renderSkills();
    });

    // Certificate Modal Actions
    window.openCertModal = function(index = null) {
        const modal = document.getElementById('cert-modal');
        const titleEl = document.getElementById('cert-modal-title');
        const indexInput = document.getElementById('cert-item-index');
        
        indexInput.value = index !== null ? index : '';
        
        if (index !== null) {
            const cert = activeData.certifications[index];
            titleEl.innerText = "Edit Certification";
            document.getElementById('cert-name-input').value = cert.name;
            document.getElementById('cert-issuer-input').value = cert.issuer;
            document.getElementById('cert-desc-input').value = cert.desc;
            document.getElementById('cert-date-input').value = cert.date;
        } else {
            titleEl.innerText = "Add Certification";
            document.getElementById('cert-form').reset();
            indexInput.value = '';
        }
        openModal('cert-modal');
    };

    document.getElementById('cert-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const index = document.getElementById('cert-item-index').value;
        
        const issuer = document.getElementById('cert-issuer-input').value;
        let issuerClass = 'default';
        const lowerIssuer = issuer.toLowerCase();
        
        if (lowerIssuer.includes('ibm')) issuerClass = 'ibm';
        else if (lowerIssuer.includes('microsoft') || lowerIssuer.includes('azure')) issuerClass = 'microsoft';
        else if (lowerIssuer.includes('coursera')) issuerClass = 'coursera';
        else if (lowerIssuer.includes('hp')) issuerClass = 'hp';
        else if (lowerIssuer.includes('analytics vidhya')) issuerClass = 'av';
        else if (lowerIssuer.includes('innovation')) issuerClass = 'innovation';

        const cert = {
            name: document.getElementById('cert-name-input').value,
            issuer: issuer,
            issuerClass: issuerClass,
            desc: document.getElementById('cert-desc-input').value,
            date: document.getElementById('cert-date-input').value
        };

        if (index !== '') {
            activeData.certifications[index] = cert;
        } else {
            activeData.certifications.push(cert);
        }

        saveState();
        closeModal('cert-modal');
        renderCertifications();
    });

    // Copy Share link
    window.copyShareURL = function() {
        const copyText = document.getElementById('share-link-input');
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            navigator.clipboard.writeText(copyText.value);
            document.getElementById('share-feedback').innerHTML = "<i class='bx bx-check-circle'></i> Link copied to clipboard!";
        } catch (err) {
            console.error('Failed to copy: ', err);
            // Fallback
            copyText.focus();
            document.execCommand('copy');
            document.getElementById('share-feedback').innerHTML = "<i class='bx bx-check-circle'></i> Link copied to clipboard!";
        }
    };

    // ==================== FIRST INITIALIZATION ====================
    loadState();
    renderAll();

    // ==================== MOBILE MENU TOGGLE ====================
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // ==================== ACTIVE LINK ON SCROLL ====================
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const navLink = document.querySelector(`.navbar a[href*=${sectionId}]`);
                if (navLink) {
                    document.querySelectorAll('.navbar a').forEach(a => a.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    });

    // ==================== TYPEWRITER EFFECT ====================
    const words = [
        "B.Sc. Computer Science (AI & DS) Student", 
        "Frontend Developer", 
        "Workflow Automation Enthusiast"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const txtElement = document.querySelector('.multiple-text');

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            txtElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            txtElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 1800; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 400; 
        }

        setTimeout(type, typeSpeed);
    }
    
    if (txtElement) {
        type();
    }

    // ==================== SKILLS ANIMATION (ON SCROLL) ====================
    const skillsSection = document.querySelector('#skills');
    
    const animSkillsFixed = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressSpans = document.querySelectorAll('.progress-bar span');
                progressSpans.forEach(span => {
                    const widthVal = span.style.width;
                    span.style.width = '0%';
                    setTimeout(() => {
                        span.style.width = widthVal;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    };

    if (skillsSection) {
        const observerFixed = new IntersectionObserver(animSkillsFixed, { threshold: 0.15 });
        observerFixed.observe(skillsSection);
    }

    // ==================== CONTACT FORM SUBMISSION ====================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const phone = document.getElementById('form-phone').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            formFeedback.className = 'form-feedback';
            formFeedback.textContent = 'Sending message...';
            
            // If Web3Forms Access Key is set, submit to the real API!
            if (activeData.web3formsKey && activeData.web3formsKey.trim() !== '') {
                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: activeData.web3formsKey,
                        name: name,
                        email: email,
                        phone: phone,
                        subject: subject,
                        message: message,
                        from_name: "Portfolio Contact Form"
                    })
                })
                .then(async (response) => {
                    let json = await response.json();
                    if (response.status == 200) {
                        formFeedback.className = 'form-feedback success';
                        formFeedback.innerHTML = `<i class='bx bx-check-circle'></i> Message sent successfully to Saran K!`;
                        contactForm.reset();
                    } else {
                        console.error(json);
                        formFeedback.className = 'form-feedback error';
                        formFeedback.innerHTML = `<i class='bx bx-x-circle'></i> Error: ${json.message || "Failed to send message."}`;
                    }
                })
                .catch(error => {
                    console.error(error);
                    formFeedback.className = 'form-feedback error';
                    formFeedback.innerHTML = `<i class='bx bx-x-circle'></i> Connection error. Try again later.`;
                })
                .finally(() => {
                    setTimeout(() => {
                        formFeedback.style.opacity = '0';
                        setTimeout(() => {
                            formFeedback.textContent = '';
                            formFeedback.style.opacity = '1';
                        }, 500);
                    }, 6000);
                });
            } else {
                // Mock Mode fallback
                setTimeout(() => {
                    formFeedback.className = 'form-feedback success';
                    formFeedback.innerHTML = `<i class='bx bx-check-circle'></i> Thank you, ${name}! Your message was simulated successfully. <span style="font-size: 1.15rem; color: var(--text-muted); display: block; margin-top: 5px;">(To receive real emails, add a Web3Forms Access Key in Edit Mode!)</span>`;
                    
                    contactForm.reset();
                    
                    setTimeout(() => {
                        formFeedback.style.opacity = '0';
                        setTimeout(() => {
                            formFeedback.textContent = '';
                            formFeedback.style.opacity = '1';
                        }, 500);
                    }, 8000);
                }, 1200);
            }
        });
    }
});
