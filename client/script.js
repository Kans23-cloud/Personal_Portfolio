const roles = [
    "Web Developer",
    "Java Developer",
    "Full Stack Developer"
];

let index = 0;

setInterval(() => {

    document.getElementById("typing").innerHTML =
    roles[index];

    index++;

    if(index === roles.length)
    {
        index = 0;
    }

},2000);

loadProjects();

async function loadProjects()
{
    const response =
    await fetch(
    "http://localhost:5000/api/projects"
    );

    const projects =
    await response.json();

    const container =
    document.getElementById(
    "projectContainer"
    );

    container.innerHTML = "";

    projects.forEach(project =>
    {
        container.innerHTML +=
        `
        <div class="project-card">

            <h3>
                ${project.title}
            </h3>

            <p>
                ${project.description}
            </p>

            <p>
                <strong>Tech:</strong>
                ${project.technologies}
            </p>

            <div class="links">

                <a
                href="${project.github_link}"
                target="_blank">
                GitHub
                </a>

                <a
                href="${project.live_link}"
                target="_blank">
                Live Demo
                </a>

            </div>

        </div>
        `;
    });
}

document
.getElementById("contactForm")
.addEventListener(
"submit",
async function(e)
{
    e.preventDefault();

    const response =
    await fetch(
    "http://localhost:5000/api/contact",
    {
        method:"POST",
        headers:{
            "Content-Type":
            "application/json"
        },
        body:JSON.stringify({
            name:
            document.getElementById("name").value,

            email:
            document.getElementById("email").value,

            message:
            document.getElementById("message").value
        })
    });

    const data =
    await response.json();

    alert(data.message);

    this.reset();
});