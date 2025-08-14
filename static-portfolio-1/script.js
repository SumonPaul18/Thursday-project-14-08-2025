// script.js ফাইল: সমস্ত ডাইনামিক লজিক এবং অ্যানিমেশন

document.addEventListener('DOMContentLoaded', () => {
    // নিশ্চিত করুন appConfig লোড হয়েছে
    if (typeof appConfig === 'undefined') {
        console.error("Error: appConfig is not loaded. Please ensure config.js is loaded before script.js.");
        return;
    }

    // --- নেভিগেশন এবং স্মুথ স্ক্রোলিং ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- হিরো সেকশন লজিক ---
    const userImageElement = document.getElementById('userImage');
    const centerImageWrapper = document.getElementById('centerImageWrapper');
    const logoContainer = document.getElementById('logoContainer');
    const subtitleElement = document.getElementById('subtitle');
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    const contactMeBtn = document.getElementById('contactMeBtn');
    const logos = [];

    // ব্যক্তিগত তথ্য সেট করা
    document.getElementById('heroName').textContent = appConfig.personalInfo.name;
    document.getElementById('footerName').textContent = appConfig.personalInfo.name;
    document.getElementById('footerEmail').textContent = appConfig.personalInfo.email;
    document.getElementById('footerPhone').textContent = appConfig.personalInfo.phone;
    document.getElementById('footerLocation').textContent = appConfig.personalInfo.location;

    // সোশ্যাল লিঙ্ক সেট করা
    const socialLinksMap = {
        github: 'githubLink',
        linkedin: 'linkedinLink',
        twitter: 'twitterLink',
        facebook: 'facebookLink'
    };

    for (const platform in socialLinksMap) {
        const linkElement = document.getElementById(socialLinksMap[platform]);
        if (linkElement && appConfig.personalInfo.socialLinks[platform] && appConfig.personalInfo.socialLinks[platform] !== "#") {
            linkElement.href = appConfig.personalInfo.socialLinks[platform];
        } else if (linkElement) {
            linkElement.style.display = 'none'; // লিঙ্ক না থাকলে আইকন লুকান
        }
    }


    // CV ডাউনলোড বাটন
    if (downloadCvBtn) {
        downloadCvBtn.href = appConfig.personalInfo.cvLink;
    }
    // Contact Me বাটন
    if (contactMeBtn) {
        contactMeBtn.href = "#contact"; // কন্টাক্ট সেকশনে স্ক্রোল করবে
    }


    // centrImageWrapper এর জন্য CSS পরিবর্তন করুন
    centerImageWrapper.style.position = 'relative';
    centerImageWrapper.style.overflow = 'visible';

    // কেন্দ্রীয় ছবির SRC এবং আকার সেট করা (ফলব্যাক লজিক সহ)
    // প্রথমে লোকাল পাথ থেকে লোড করার চেষ্টা করুন
    userImageElement.src = appConfig.heroSection.centralImage.localSrc;
    userImageElement.onerror = () => {
        // যদি লোকাল পাথ থেকে লোড করতে ব্যর্থ হয়, তাহলে অনলাইন ফলব্যাক ব্যবহার করুন
        // Gemini Canvas এনভায়রনমেন্টের জন্য বিশেষ পাথ হ্যান্ডলিং
        if (appConfig.isLocalDevelopment && appConfig.heroSection.centralImage.onlineSrc.startsWith('uploaded:')) {
            userImageElement.src = `chrome-untrusted://gemini/content/${appConfig.heroSection.centralImage.onlineSrc}`;
        } else {
            userImageElement.src = appConfig.heroSection.centralImage.onlineSrc;
        }
        userImageElement.onerror = null; // ইনফিনিট লুপ এড়াতে
    };
    centerImageWrapper.style.width = appConfig.heroSection.centralImage.size;
    centerImageWrapper.style.height = appConfig.heroSection.centralImage.size;

    // লোগো তৈরি এবং অ্যানিমেশন সেটআপ (ফলব্যাক লজিক সহ)
    appConfig.heroSection.logos.forEach((logoData, index) => {
        const img = document.createElement('img');
        img.src = logoData.localSrc;
        img.alt = logoData.name + " Logo";
        img.classList.add('tech-logo');
        img.dataset.name = logoData.name;

        img.onerror = function() {
            this.src = logoData.onlineSrc;
            this.onerror = null; // ইনফিনিট লুপ এড়াতে
        };

        img.style.width = appConfig.heroSection.logoSize;
        img.style.height = appConfig.heroSection.logoSize;
        logoContainer.appendChild(img);

        const radius = appConfig.heroSection.animationSettings.minOrbitRadius +
                        (Math.random() * (appConfig.heroSection.animationSettings.maxOrbitRadius - appConfig.heroSection.animationSettings.minOrbitRadius));
        const speed = appConfig.heroSection.animationSettings.minSpeed +
                      (Math.random() * (appConfig.heroSection.animationSettings.maxSpeed - appConfig.heroSection.animationSettings.minSpeed));
        const direction = Math.random() > 0.5 ? 1 : -1;

        logos.push({
            element: img,
            angle: (index / appConfig.heroSection.logos.length) * 2 * Math.PI,
            radius: radius,
            speed: speed * direction
        });
    });

    // --- ORBITAL ANIMATION LOGIC IMPROVEMENT ---
    let orbitCenterX, orbitCenterY, orbitRadiusBase;
    function updateOrbitCenter() {
        // Use the parent of logoContainer for correct dimensions
        const parent = logoContainer.offsetParent || logoContainer.parentElement;
        const rect = parent.getBoundingClientRect();
        orbitCenterX = rect.width / 2;
        orbitCenterY = rect.height / 2;
        orbitRadiusBase = Math.min(rect.width, rect.height) / 2.2;
        if (window.innerWidth <= 900) orbitRadiusBase *= 0.7;
        if (window.innerWidth <= 600) orbitRadiusBase *= 0.5;
    }

    updateOrbitCenter();
    window.addEventListener('resize', updateOrbitCenter);

    function animate() {
        logos.forEach((logo, i) => {
            const orbitRadius = logo.radius || (orbitRadiusBase + (i % 2 === 0 ? 30 : -30) + (i * 8));
            logo.angle += logo.speed;
            const x = orbitCenterX + orbitRadius * Math.cos(logo.angle) - logo.element.offsetWidth / 2;
            const y = orbitCenterY + orbitRadius * Math.sin(logo.angle) - logo.element.offsetHeight / 2;
            logo.element.style.left = `${x}px`;
            logo.element.style.top = `${y}px`;
            logo.element.style.zIndex = 10 + Math.round(10 * Math.sin(logo.angle));
        });
        requestAnimationFrame(animate);
    }
    animate();

    // সাবটাইটেল টাইপিং অ্যানিমেশন
    let currentSubtitleIndex = 0;
    let currentSubtitleCharIndex = 0;
    let isSubtitleDeleting = false;

    function typeSubtitle() {
        const currentSubtitleText = appConfig.heroSection.subtitles[currentSubtitleIndex];
        if (isSubtitleDeleting) {
            subtitleElement.textContent = currentSubtitleText.substring(0, currentSubtitleCharIndex - 1);
            currentSubtitleCharIndex--;
            if (currentSubtitleCharIndex === 0) {
                isSubtitleDeleting = false;
                currentSubtitleIndex = (currentSubtitleIndex + 1) % appConfig.heroSection.subtitles.length;
                setTimeout(typeSubtitle, appConfig.heroSection.delayBetweenSubtitles);
            } else {
                setTimeout(typeSubtitle, appConfig.heroSection.deletingSpeed);
            }
        } else {
            subtitleElement.textContent = currentSubtitleText.substring(0, currentSubtitleCharIndex + 1);
            currentSubtitleCharIndex++;
            if (currentSubtitleCharIndex === currentSubtitleText.length) {
                isSubtitleDeleting = true;
                setTimeout(typeSubtitle, appConfig.heroSection.delayBetweenSubtitles);
            } else {
                setTimeout(typeSubtitle, appConfig.heroSection.typingSpeed);
            }
        }
    }
    typeSubtitle();

    // --- অ্যাবাউট সেকশন লজিক ---
    document.getElementById('aboutDescription').textContent = appConfig.aboutSection.description;

    // --- স্কিলস সেকশন লজিক ---
    const skillsGrid = document.getElementById('skillsGrid');
    appConfig.skillsSection.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('flex', 'flex-col', 'items-center', 'p-4', 'bg-gray-800', 'rounded-lg', 'shadow-lg', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300');

        const img = document.createElement('img');
        img.src = skill.localSrc;
        img.alt = skill.name + " Logo";
        img.classList.add('w-16', 'h-16', 'mb-2', 'object-contain');
        img.onerror = function() {
            this.src = skill.onlineSrc;
            this.onerror = null;
        };

        const span = document.createElement('span');
        span.classList.add('text-lg', 'font-medium', 'text-gray-200');
        span.textContent = skill.name;

        skillDiv.appendChild(img);
        skillDiv.appendChild(span);
        skillsGrid.appendChild(skillDiv);
    });

    // --- সার্টিফিকেটস সেকশন লজিক ---
    const certificatesContainer = document.getElementById('certificatesContainer');
    appConfig.certificatesSection.certificates.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.classList.add('bg-gray-800', 'p-6', 'rounded-lg', 'shadow-lg', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300');
        certDiv.innerHTML = `
            <h3 class="text-xl font-semibold text-teal-400 mb-2">${cert.title}</h3>
            <p class="text-gray-300 mb-1">${cert.issuer}</p>
            <p class="text-gray-400 text-sm mb-3">${cert.date}</p>
            <a href="${cert.link}" target="_blank" class="text-teal-500 hover:underline">View Certificate &rarr;</a>
        `;
        certificatesContainer.appendChild(certDiv);
    });

    // --- ওয়ার্ক হিস্টরি লজিক ---
    const workHistoryContainer = document.getElementById('workHistoryContainer');
    appConfig.workHistory.experiences.forEach((exp, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('timeline-item', 'relative', 'py-6'); // Custom class for timeline
        itemDiv.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="sm:absolute sm:left-0 sm:w-24 text-gray-400 text-sm font-medium mb-2 sm:mb-0 sm:text-right sm:pr-5">${exp.duration}</div>
            <div class="timeline-content ml-8 sm:ml-32">
                <h4 class="text-xl font-semibold text-white mb-1">${exp.title}</h4>
                <p class="text-teal-400 text-md mb-2">${exp.company}</p>
                <p class="text-gray-300 text-sm">${exp.description}</p>
            </div>
        `;
        workHistoryContainer.appendChild(itemDiv);
    });

    // --- এডুকেশন সেকশন লজিক ---
    const educationHistoryContainer = document.getElementById('educationHistoryContainer');
    appConfig.educationHistory.degrees.forEach((edu, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('education-timeline-item', 'relative', 'group'); // Custom class for education timeline
        itemDiv.innerHTML = `
            <div class="education-timeline-dot"></div>
            <div class="ml-8">
                <h4 class="text-xl font-semibold text-white mb-1">${edu.degree}</h4>
                <p class="text-teal-400 text-md mb-1">${edu.institution}</p>
                <p class="text-gray-400 text-sm mb-2">${edu.duration}</p>
                <p class="text-gray-300 text-sm">${edu.description}</p>
            </div>
        `;
        educationHistoryContainer.appendChild(itemDiv);
    });

    // --- প্রোজেক্টস সেকশন লজিক ---
    const projectsGrid = document.getElementById('projectsGrid');
    appConfig.projectsSection.projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('bg-gray-800', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300');

        const img = document.createElement('img');
        img.src = project.imageLocalSrc;
        img.alt = project.title + " Image";
        img.classList.add('w-full', 'h-48', 'object-cover');
        img.onerror = function() {
            this.src = project.imageOnlineSrc;
            this.onerror = null;
        };

        projectDiv.innerHTML = `
            ${img.outerHTML}
            <div class="p-6">
                <h3 class="text-xl font-semibold text-teal-400 mb-2">${project.title}</h3>
                <p class="text-gray-300 text-sm mb-4">${project.description}</p>
                <div class="flex space-x-4">
                    <a href="${project.viewLink}" target="_blank" class="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">View</a>
                    <a href="${project.codeLink}" target="_blank" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Code</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectDiv);
    });

    // --- ব্লগ পোস্ট সেকশন লজিক ---
    const blogPostsContainer = document.getElementById('blogPostsContainer');
    appConfig.blogPostsSection.posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('bg-gray-800', 'p-6', 'rounded-lg', 'shadow-lg', 'transform', 'hover:scale-105', 'transition-transform', 'duration-300');
        postDiv.innerHTML = `
            <h3 class="text-xl font-semibold text-teal-400 mb-2">${post.title}</h3>
            <p class="text-gray-400 text-sm mb-3">${post.date}</p>
            <p class="text-gray-300 text-sm mb-4">${post.excerpt}</p>
            <a href="${post.link}" target="_blank" class="text-teal-500 hover:underline">Read More &rarr;</a>
        `;
        blogPostsContainer.appendChild(postDiv);
    });

    // --- কন্টাক্ট ফর্ম লজিক ---
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');

    if (contactForm) {
        contactForm.action = appConfig.contactForm.formspreeEndpoint;
        contactForm.method = "POST";

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            statusMessage.textContent = 'Sending...';
            statusMessage.classList.remove('text-green-500', 'text-red-500');
            statusMessage.classList.add('text-gray-400');

            const formData = new FormData(contactForm);
            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    statusMessage.textContent = appConfig.contactForm.successMessage;
                    statusMessage.classList.remove('text-gray-400', 'text-red-500');
                    statusMessage.classList.add('text-green-500');
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        statusMessage.textContent = data.errors.map(error => error.message).join(", ");
                    } else {
                        statusMessage.textContent = 'Oops! There was a problem submitting your form.';
                    }
                    statusMessage.classList.remove('text-gray-400', 'text-green-500');
                    statusMessage.classList.add('text-red-500');
                }
            } catch (error) {
                console.error('Error submitting form:', error);
                statusMessage.textContent = 'Network error. Please try again later.';
                statusMessage.classList.remove('text-gray-400', 'text-green-500');
                statusMessage.classList.add('text-red-500');
            }
        });
    }
});
