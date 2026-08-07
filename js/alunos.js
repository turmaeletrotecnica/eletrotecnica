async function carregarAlunos() {

    const container = document.getElementById("lista-alunos");

    if (!container) return;

    try {

        const resposta = await fetch("./JSON/alunos.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar alunos.json");
            console.log("Erro ao carregar alunos.json");
        }

        const alunos = await resposta.json();

        container.innerHTML = "";

        alunos.forEach(aluno => {

            const card = document.createElement("article");

            card.className = "student-card";

            card.innerHTML = `
                <div class="student-photo">
                    <img
                        src="${aluno.foto}"
                        alt="${aluno.nome}"
                        loading="lazy"
                    >
                </div>

                <h3>${aluno.nome}</h3>

                <span>${aluno.curso}</span>

                <div class="student-links">

                    <a
                        href="${aluno.whatsapp || '#'}"
                        aria-label="WhatsApp"
                    >
                        ☎
                    </a>

                    <a
                        href="${aluno.linkedin || '#'}"
                        aria-label="LinkedIn"
                    >
                        in
                    </a>

                    <a
                        href="${aluno.email ? `mailto:${aluno.email}` : '#'}"
                        aria-label="E-mail"
                    >
                        ✉
                    </a>

                </div>
            `;

            container.appendChild(card);

        });

    } catch (erro) {

        console.error(erro);

        container.innerHTML = `
            <p>
                Não foi possível carregar os alunos.
            </p>
        `;
    }
}


document.addEventListener("DOMContentLoaded", carregarAlunos);