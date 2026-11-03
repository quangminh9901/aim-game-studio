# AIM Game Studio

CLI toolkit for AI-powered game development. Type `aim` and let 49 AI agents build your game.

Built on [Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios).

## Install

```bash
npm install -g aim-game-studio
```

Or clone and link:

```bash
git clone https://github.com/quangminh9901/aim-game-studio.git
cd aim-game-studio
npm install
npm link
```

**Requires:** [Node.js 18+](https://nodejs.org) and [Claude Code](https://claude.ai/code) (`npm i -g @anthropic-ai/claude-code`)

## Quick Start

```bash
# Create a new game project (interactive wizard)
aim init

# Enter your project
cd my-game

# Run guided onboarding — sets up engine, structure, agents
aim start

# Start building!
aim dev
```

## Commands

| Command | What it does |
|---------|-------------|
| `aim init` | Interactive project setup wizard (engine, name, genre, team) |
| `aim init -t rpg` | Create from template (platformer, rpg, fps, puzzle, survival, horror, strategy, casual) |
| `aim start` | Guided onboarding — engine setup, project structure, first design doc |
| `aim design [system]` | Create a game design document (e.g. `aim design combat`) |
| `aim brainstorm` | Brainstorm game concepts and ideas |
| `aim epic` | Create feature epics from your game design |
| `aim story [epic]` | Break an epic into development stories |
| `aim dev [story]` | Start coding a story |
| `aim done [story]` | Mark story complete, run QA checks |
| `aim review` | Code review on current changes |
| `aim test` | Run tests and smoke checks |
| `aim sprint` | Sprint planning |
| `aim status` | Show sprint/project status |
| `aim prototype` | Quick throwaway prototype |
| `aim launch` | Pre-release checklist |
| `aim chat` | Open Claude for freeform work |

## How It Works

1. `aim init` clones the CCGS framework and generates `project.yaml`
2. Every other command runs Claude Code with the appropriate skill
3. 49 specialized agents handle design, programming, art, audio, QA, and production
4. You make decisions, they do the work

## Workflow

```
aim init          Set up project
    |
aim start         Onboarding wizard
    |
aim brainstorm    Game concept
    |
aim design        Design documents (GDD)
    |
aim epic          Feature planning
    |
aim story         Break into tasks
    |
aim dev           Code a task
    |
aim done          QA & complete
    |
aim review        Code review
    |
aim test          Test suite
    |
aim launch        Ship it!
```

## Supported Engines

| Engine | Language | Best For |
|--------|----------|----------|
| Godot 4 | GDScript | 2D, lightweight 3D, indie |
| Unity | C# | Cross-platform, mobile |
| Unreal 5 | C++ / Blueprint | AAA, high-fidelity 3D |

## License

MIT
