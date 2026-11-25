# Git-Flow

# Comandos principais de Git e GitFlow

## Clonagem e configuração
- `git clone <url>`: clona um repositório remoto para a máquina local.
- `git status`: mostra o estado atual da *working tree* e da *staging area*.

## Commits e envio
- `git add <ficheiro>` ou `git add .`: adiciona alterações para o próximo *commit*.
- `git commit -m "mensagem"`: regista as alterações no histórico local.
- `git push origin <branch>`: envia os *commits* locais para o repositório remoto.
- `git commit --amend -m "nova mensagem"`: altera a mensagem ou inclui ajustes no último *commit*.

## Branches e GitFlow
- `git branch`: lista as *branches* locais.
- `git checkout -b <nome-branch>` ou `git switch -c <nome-branch>`: cria e muda para uma nova *branch*.
- `git checkout <nome-branch>` ou `git switch <nome-branch>`: troca de *branch*.
- Fluxo GitFlow: usar `main` (ou `master`) para versões estáveis, `develop` para integração contínua e *branches* como `feature/...`, `release/...` e `hotfix/...` conforme a tarefa.