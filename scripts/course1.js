document.addEventListener("DOMContentLoaded", () => {
    const certificates = {
        "Web and Computer Programming": {
            container: document.querySelector(".boxcertificate01"),
            totalCreditsElement: document.getElementById("totalCreditsCert01"),
        },
    };

    const courses = [
        {
            subject: "CSE",
            number: 110,
            title: "Introduction to Programming",
            credits: 2,
            certificate: "Web and Computer Programming",
            description: "This course introduces programming fundamentals.",
            technology: ["Python"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 130,
            title: "Web Fundamentals",
            credits: 2,
            certificate: "Web and Computer Programming",
            description: "Intro to HTML, CSS, and careers in web development.",
            technology: ["HTML", "CSS"],
            completed: true,
        },
        {
            subject: "CSE",
            number: 111,
            title: "Programming with Functions",
            credits: 2,
            certificate: "Web and Computer Programming",
            description: "Functions, debugging, testing, error handling.",
            technology: ["Python"],
            completed: true,
        },
        {
            subject: "CSE",
            number: 210,
            title: "Programming with Classes",
            credits: 2,
            certificate: "Web and Computer Programming",
            description: "Intro to classes, encapsulation, inheritance, polymorphism.",
            technology: ["C#"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 131,
            title: "Dynamic Web Fundamentals",
            credits: 2,
            certificate: "Web and Computer Programming",
            description: "Interactive sites using JavaScript.",
            technology: ["HTML", "CSS", "JavaScript"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 231,
            title: "Frontend Web Development I",
            credits: 2,
            certificate: "Web and Computer Programming",
            description: "User experience, accessibility, APIs.",
            technology: ["HTML", "CSS", "JavaScript"],
            completed: false,
        },
    ];

    function outputCourses(courseList) {
        courseList.forEach((course) => {
            const courseDiv = document.createElement("div");
            courseDiv.classList.add("course", course.completed ? "courseComplete" : "courseNoComplete");
            courseDiv.setAttribute("data-subject", course.subject);
            courseDiv.setAttribute("data-credits", course.credits);

            const title = document.createElement("h3");
            title.textContent = `${course.subject} ${course.number}`;
            courseDiv.appendChild(title);

            const cert = certificates[course.certificate];
            if (cert) {
                cert.container.appendChild(courseDiv);
            }

            courseDiv.addEventListener("click", () => displayCourseDetails(course));
        });

        updateCredits("ALL");
    }

    function updateCredits(filter) {
        let totalCredits = 0;
        document.querySelectorAll(".course").forEach((course) => {
            const subject = course.getAttribute("data-subject").toUpperCase();
            const credits = parseInt(course.getAttribute("data-credits"), 10);
            if (filter === "ALL" || subject === filter) {
                totalCredits += credits;
            }
        });

        certificates["Web and Computer Programming"].totalCreditsElement.innerHTML =
            `<strong>Total Credits:</strong> ${totalCredits}`;
    }

    document.querySelectorAll(".boxButton button").forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.value.toUpperCase();
            document.querySelectorAll(".course").forEach((course) => {
                const subject = course.getAttribute("data-subject").toUpperCase();
                course.style.display = (filter === "ALL" || subject === filter) ? "block" : "none";
            });
            updateCredits(filter);
        });
    });

    function displayCourseDetails(course) {
        const modal = document.getElementById("courses-details");
        if (!modal) return;

        modal.innerHTML = `
            <button id="closeModal">X</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p>${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
        `;
        modal.showModal();

        document.getElementById("closeModal").addEventListener("click", () => modal.close());
    }

    outputCourses(courses);
    document.querySelector('.boxButton button[value="all"]')?.click();
});
