// config.js ফাইল: আপনার পোর্টফোলিওর সমস্ত ডেটা এখানে কনফিগার করুন

const appConfig = {
    // এই ফ্ল্যাগটি লোকাল ডেভেলপমেন্ট এনভায়রনমেন্টের জন্য ব্যবহার করা হয়।
    // যখন আপনি VS Code এ Live Server দিয়ে রান করবেন, তখন এটি 'true' রাখুন।
    // যখন আপনি Cloudflare Pages এ ডিপ্লয় করবেন, তখন এটি 'false' করুন।
    // এটি 'chrome-untrusted' পাথ এবং সাধারণ রিলেটিভ পাথের মধ্যে পার্থক্য করতে সাহায্য করে।
    isLocalDevelopment: true,

    // ১. ব্যক্তিগত তথ্য
    personalInfo: {
        name: "Sumon Paul",
        profession: "Software Developer",
        email: "your.email@example.com", // আপনার ইমেল দিন
        phone: "+8801XXXXXXXXX", // আপনার ফোন নম্বর দিন
        location: "Dhaka, Bangladesh",
        cvLink: "assets/cv/your_cv.pdf", // আপনার CV ফাইলের লিঙ্ক দিন (যেমন: 'assets/cv/Sumon_CV.pdf')
        socialLinks: {
            github: "https://github.com/yourusername", // আপনার GitHub প্রোফাইল লিঙ্ক
            linkedin: "https://www.linkedin.com/in/yourusername", // আপনার LinkedIn প্রোফাইল লিঙ্ক
            twitter: "https://twitter.com/yourusername", // আপনার Twitter প্রোফাইল লিঙ্ক (যদি থাকে)
            facebook: "https://facebook.com/yourusername" // আপনার Facebook প্রোফাইল লিঙ্ক (যদি থাকে)
        }
    },

    // ২. হিরো সেকশন সেটিংস
    heroSection: {
        centralImage: {
            // আপনার লোকাল ছবির পাথ (যেমন: 'assets/images/your_profile.png')
            localSrc: 'assets/images/skpaul.png',
            // অনলাইন ফলব্যাক লিংক (যদি লোকাল ছবি না পাওয়া যায়)
            // Gemini Canvas এর জন্য: 'uploaded:Sumon_cv.png-5426d6f4-cd4d-4067-b697-7391abc32c17'
            // অথবা আপনার ছবির একটি পাবলিক URL দিন।
            onlineSrc: 'uploaded:Sumon_cv.png-5426d6f4-cd4d-4067-b697-7391abc32c17',
            size: '220px' // ছবির আকার (যেমন: '150px', '250px')
        },
        logos: [
            // প্রতিটি লোগোর localSrc (লোকাল পাথ) এবং onlineSrc (অনলাইন লিঙ্ক) উভয়ই দিন
            // নিশ্চিত করুন assets/images/ ফোল্ডারে এই নামের .png ফাইলগুলো আছে
            { name: "AWS", localSrc: "assets/images/aws.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/AWS.svg" },
            { name: "GCP", localSrc: "assets/images/gcp.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/GCP.svg" },
            { name: "OpenStack", localSrc: "assets/images/openstack.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/OpenStack.svg" },
            { name: "K8s", localSrc: "assets/images/k8s.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg" },
            { name: "Docker", localSrc: "assets/images/docker.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
            { name: "Jenkins", localSrc: "assets/images/jenkins.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Jenkins.svg" },
            { name: "Git", localSrc: "assets/images/git.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Git.svg" },
            { name: "Python", localSrc: "assets/images/python.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Python.svg" },
            { name: "Shell", localSrc: "assets/images/shell.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Bash.svg" },
            { name: "Linux", localSrc: "assets/images/linux.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Linux.svg" },
            { name: "Prometheus", localSrc: "assets/images/prometheus.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Prometheus.svg" },
            { name: "Grafana", localSrc: "assets/images/grafana.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Grafana.svg" }
        ],
        logoSize: '65px', // লোগোর আকার
        animationSettings: {
            minOrbitRadius: 180, // কেন্দ্রীয় ছবি থেকে লোগোর সর্বনিম্ন দূরত্ব
            maxOrbitRadius: 300, // কেন্দ্রীয় ছবি থেকে লোগোর সর্বোচ্চ দূরত্ব
            minSpeed: 0.002, // সর্বনিম্ন ঘোরার গতি
            maxSpeed: 0.007 // সর্বোচ্চ ঘোরার গতি
        },
        subtitles: [
            "A Passionate Software Developer",
            "Cloud Enthusiast & DevOps Learner",
            "Building Scalable Solutions",
            "Exploring New Technologies"
        ],
        typingSpeed: 100, // প্রতি অক্ষরের টাইপিং গতি (মিলি সেকেন্ড)
        deletingSpeed: 50, // প্রতি অক্ষরের মোছার গতি (মিলি সেকেন্ড)
        delayBetweenSubtitles: 1500 // সাবটাইটেল পরিবর্তনের মাঝে বিরতি (মিলি সেকেন্ড)
    },

    // ৩. অ্যাবাউট সেকশন
    aboutSection: {
        title: "About Me",
        description: `একজন নিবেদিতপ্রাণ সফটওয়্যার ডেভেলপার হিসেবে, আমি অত্যাধুনিক প্রযুক্তি ব্যবহার করে উদ্ভাবনী সমাধান তৈরিতে আগ্রহী। আমার প্রধান লক্ষ্য হল ব্যবহারকারীদের জন্য কার্যকরী, স্কেলেবল এবং নির্ভরযোগ্য অ্যাপ্লিকেশন তৈরি করা। আমি ক্লাউড কম্পিউটিং এবং DevOps অনুশীলনে গভীর জ্ঞান রাখি, যা আমাকে আধুনিক সফটওয়্যার ডেভেলপমেন্ট লাইফসাইকেলে অবদান রাখতে সাহায্য করে। আমি ক্রমাগত নতুন প্রযুক্তি শিখতে এবং আমার দক্ষতা বাড়াতে প্রতিশ্রুতিবদ্ধ।`,
    },

    // ৪. স্কিলস সেকশন
    skillsSection: {
        title: "My Skills",
        skills: [
            { name: "Python", localSrc: "assets/images/python_skill.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Python.svg" },
            { name: "JavaScript", localSrc: "assets/images/javascript.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/JavaScript.svg" },
            { name: "React", localSrc: "assets/images/react.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/React.svg" },
            { name: "Node.js", localSrc: "assets/images/nodejs.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Node.js.svg" },
            { name: "AWS", localSrc: "assets/images/aws_skill.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/AWS.svg" },
            { name: "Docker", localSrc: "assets/images/docker_skill.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Docker.svg" },
            { name: "Kubernetes", localSrc: "assets/images/k8s_skill.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Kubernetes.svg" },
            { name: "Git", localSrc: "assets/images/git_skill.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Git.svg" },
            { name: "Linux", localSrc: "assets/images/linux_skill.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Linux.svg" },
            { name: "SQL", localSrc: "assets/images/sql.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/PostgreSQL.svg" },
            { name: "CI/CD", localSrc: "assets/images/cicd.png", onlineSrc: "https://icon.icepanel.io/Technology/svg/Jenkins.svg" }
        ]
    },

    // ৫. সার্টিফিকেটস সেকশন
    certificatesSection: {
        title: "Certificates",
        certificates: [
            {
                title: "AWS Certified Solutions Architect – Associate",
                issuer: "Amazon Web Services",
                date: "March 2023",
                link: "#" // সার্টিফিকেটের লিঙ্ক দিন
            },
            {
                title: "Certified Kubernetes Administrator (CKA)",
                issuer: "CNCF",
                date: "November 2022",
                link: "#" // সার্টিফিকেটের লিঙ্ক দিন
            },
            {
                title: "Python for Everybody Specialization",
                issuer: "Coursera (University of Michigan)",
                date: "July 2021",
                link: "#" // সার্টিফিকেটের লিঙ্ক দিন
            }
            // আরও সার্টিফিকেট যোগ করুন
        ]
    },

    // ৬. কাজের অভিজ্ঞতা (Work History)
    workHistory: {
        title: "Work History",
        experiences: [
            {
                title: "Software Engineer",
                company: "Tech Innovators Inc.",
                duration: "Jan 2023 - Present",
                description: "ক্লাউড-ভিত্তিক অ্যাপ্লিকেশন ডেভেলপমেন্ট এবং ডেপ্লয়মেন্টে কাজ করছি। মাইক্রোসার্ভিস আর্কিটেকচার ডিজাইন ও বাস্তবায়নে সক্রিয় ভূমিকা পালন করছি।"
            },
            {
                title: "Junior Developer",
                company: "Web Solutions Ltd.",
                duration: "July 2021 - Dec 2022",
                description: "ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টে ফ্রন্ট-এন্ড এবং ব্যাক-এন্ড উভয় দিকেই কাজ করেছি। RESTful APIs তৈরি ও ইন্টিগ্রেশনে সহায়তা করেছি।"
            },
            {
                title: "Intern",
                company: "Startup X",
                duration: "Jan 2021 - June 2021",
                description: "ছোট আকারের প্রজেক্টে ডেভেলপমেন্ট টিমের সাথে কাজ করেছি, কোড রিভিউ এবং টেস্টিং এ সহায়তা করেছি।"
            }
            // আরও কাজের অভিজ্ঞতা যোগ করুন
        ]
    },

    // ৭. শিক্ষাগত যোগ্যতা (Education)
    educationHistory: {
        title: "Education",
        degrees: [
            {
                degree: "B.Sc. in Computer Science & Engineering",
                institution: "University of Dhaka",
                duration: "2017 - 2021",
                description: "সফটওয়্যার ইঞ্জিনিয়ারিং, ডেটা স্ট্রাকচার এবং অ্যালগরিদম, অপারেটিং সিস্টেম এবং নেটওয়ার্কিং এর উপর ফোকাস।"
            },
            {
                degree: "Higher Secondary Certificate (HSC)",
                institution: "Dhaka College",
                duration: "2015 - 2017",
                description: "বিজ্ঞান বিভাগ থেকে উচ্চ মাধ্যমিক সম্পন্ন।"
            }
            // আরও শিক্ষাগত যোগ্যতা যোগ করুন
        ]
    },

    // ৮. প্রোজেক্টস সেকশন
    projectsSection: {
        title: "My Projects",
        projects: [
            {
                title: "E-commerce Platform",
                imageLocalSrc: "assets/images/project_ecommerce.png", // প্রোজেক্ট ছবির লোকাল পাথ
                imageOnlineSrc: "https://placehold.co/400x250/007bff/ffffff?text=E-commerce", // প্রোজেক্ট ছবির অনলাইন লিঙ্ক
                description: "একটি সম্পূর্ণ কার্যকরী ই-কমার্স প্ল্যাটফর্ম যা React, Node.js এবং MongoDB ব্যবহার করে তৈরি করা হয়েছে।",
                viewLink: "#", // লাইভ প্রোজেক্টের লিঙ্ক
                codeLink: "#" // GitHub রিপোজিটরি লিঙ্ক
            },
            {
                title: "Task Management App",
                imageLocalSrc: "assets/images/project_task_app.png",
                imageOnlineSrc: "https://placehold.co/400x250/28a745/ffffff?text=Task+App",
                description: "ব্যবহারকারীদের জন্য একটি সহজ এবং কার্যকরী টাস্ক ম্যানেজমেন্ট অ্যাপ্লিকেশন, যা Python (Django) এবং PostgreSQL ব্যবহার করে তৈরি।",
                viewLink: "#",
                codeLink: "#"
            },
            {
                title: "Cloud Deployment Automation",
                imageLocalSrc: "assets/images/project_cloud_automation.png",
                imageOnlineSrc: "https://placehold.co/400x250/ffc107/000000?text=Cloud+Automation",
                description: "AWS এবং Terraform ব্যবহার করে স্বয়ংক্রিয় ক্লাউড রিসোর্স ডেপ্লয়মেন্টের জন্য একটি স্ক্রিপ্ট সেট।",
                viewLink: "#",
                codeLink: "#"
            }
            // আরও প্রোজেক্ট যোগ করুন
        ]
    },

    // ৯. ব্লগ পোস্ট সেকশন (নমুনা ডেটা)
    blogPostsSection: {
        title: "Latest Blog Posts",
        posts: [
            {
                title: "Understanding Microservices Architecture",
                date: "July 10, 2024",
                excerpt: "মাইক্রোসার্ভিস আর্কিটেকচার কি এবং কেন এটি আধুনিক অ্যাপ্লিকেশন ডেভেলপমেন্টে গুরুত্বপূর্ণ, তা নিয়ে একটি বিস্তারিত আলোচনা।",
                link: "#" // ব্লগ পোস্টের লিঙ্ক
            },
            {
                title: "Getting Started with Docker Containers",
                date: "June 25, 2024",
                excerpt: "ডকার কন্টেইনারের মৌলিক ধারণা এবং কিভাবে আপনার প্রথম ডকারাইজড অ্যাপ্লিকেশন তৈরি করবেন, তা শিখুন।",
                link: "#" // ব্লগ পোস্টের লিঙ্ক
            },
            {
                title: "Introduction to Serverless Computing",
                date: "June 01, 2024",
                excerpt: "সার্ভারলেস কম্পিউটিং এর সুবিধা এবং অসুবিধা সম্পর্কে জানুন এবং আপনার প্রজেক্টে এটি কিভাবে ব্যবহার করবেন তা বুঝুন।"
            }
            // আরও ব্লগ পোস্ট যোগ করুন
        ]
    },

    // ১০. কন্টাক্ট ফর্ম সেটিংস
    contactForm: {
        // Formspree.io থেকে আপনার ফর্ম এন্ডপয়েন্ট লিঙ্ক দিন
        // উদাহরণ: "https://formspree.io/f/yourformid"
        formspreeEndpoint: "https://formspree.io/f/yourformid", // এখানে আপনার Formspree লিঙ্ক দিন
        successMessage: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমি শীঘ্রই আপনার সাথে যোগাযোগ করব।"
    }
};
