# MindMovie — site do projeto

Site de apresentação do projeto **MindMovie**, uma cadeira de rodas
inteligente controlada por ondas cerebrais.

É um site estático. Não tem build, não tem dependência, não precisa instalar
nada.

## Organização

Cada página vive na sua própria pasta, junto do CSS e do JavaScript que só
ela usa. Assim dá para mexer em uma página sem abrir as outras, e fica claro
qual arquivo pertence a quem.

```
index.html              página inicial, Visão geral
inicio/                 CSS e JavaScript da página inicial
como-utilizar/          página Como utilizar
componentes/            página Componentes e valor
referencias/            página Referências
quem-somos/             página Quem somos
imagens/                imagens gerais
imagens/equipe/         fotos da equipe
videos/                 vídeo de demonstração
```

Dentro de cada pasta de página o padrão é sempre o mesmo:

```
index.html              a página
estilo.css              o CSS só dela
script.js               o JavaScript só dela
```

A página inicial é a exceção, porque o `index.html` dela precisa ficar na
raiz para o site abrir direto. O CSS e o JavaScript dela estão em `inicio/`.

## Endereços das páginas

Como cada pasta tem um `index.html`, os endereços ficam limpos:

| Endereço | Página |
|---|---|
| `/` | Visão geral |
| `/como-utilizar/` | Como utilizar |
| `/componentes/` | Componentes e valor |
| `/referencias/` | Referências |
| `/quem-somos/` | Quem somos |

## Como visualizar

Sirva a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8080
```

Depois abra `http://localhost:8080`.

Abrir o arquivo direto com clique duplo também funciona, mas os endereços de
pasta não resolvem sozinhos em alguns navegadores. Servir a pasta é mais
fiel ao que vai acontecer quando o site estiver publicado.

## Pendência

Falta o arquivo `videos/demonstracao.mp4`, que a página Como utilizar
incorpora. Ele nunca foi publicado no repositório. Veja `videos/LEIA-ME.md`.
