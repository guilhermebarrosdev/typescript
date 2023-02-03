async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  console.log(data);
  mostrarCursos(data);
}

fetchCursos();

interface Curso {
  nome: string;
  aulas: number;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  tags: string[];
  nivel: 'iniciante' | 'avançado';
}

function mostrarCursos(cursos: Curso[]) {
  cursos.forEach((curso) => {
    let color;
    if (curso.nivel === 'iniciante') {
      color = 'blue';
    } else if (curso.nivel === 'avançado') {
      color = 'red';
    }

    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color};">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
        <p>Tags: ${curso.tags.join(', ')}</>
        <p>Aulas: ${curso.idAulas.join(' | ')}</>
      </div>
    `;
  });
}
