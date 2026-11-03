# Architecture

How AIM Game Studio works under the hood.

---

## Overview

```
┌──────────────┐     ┌──────────────┐     ┌──────────────────────┐
│   You type   │────>│   AIM CLI    │────>│     Claude Code       │
│   aim dev    │     │  (Node.js)   │     │  (49 agents, 74 skills│)
└──────────────┘     └──────────────┘     └──────────────────────┘
                           │                        │
                     checks prereqs           reads CLAUDE.md
                     formats command          reads project.yaml
                     spawns process           assigns agent
                                              does the work
```

AIM is a **thin CLI launcher**. It does not contain game-dev logic itself — all the intelligence lives in Claude Code Game Studios (CCGS), which has 49 specialized AI agents and 74 slash-command skills.

---

## Components

### 1. AIM CLI (`bin/aim.js`)

Entry point. Uses [Commander.js](https://github.com/tj/commander.js) to parse commands and route to handlers.

```
aim <command> [args]
      │
      ├── init      → src/commands/init.js     (pure Node.js)
      ├── start     → src/commands/start.js    (spawns Claude)
      ├── dev       → src/commands/dev.js      (spawns Claude)
      ├── design    → src/commands/design.js   (spawns Claude)
      └── chat      → src/commands/chat.js     (spawns Claude)
```

### 2. Claude Bridge (`src/claude.js`)

Handles communication with Claude Code CLI:

- **`runClaude(prompt)`** — one-shot: `claude -p "/command"` — runs, prints output, exits
- **`openClaude(prompt)`** — interactive: `claude --prompt "/command"` — opens a session
- **`checkClaude()`** — verifies Claude Code is installed
- **`checkProject()`** — verifies CWD is a CCGS project

### 3. Config Manager (`src/config.js`)

Reads and writes `project.yaml`:

- **`readConfig(dir)`** — parse YAML into object
- **`writeConfig(dir, config)`** — write object as YAML
- **`generateYaml(data)`** — create config from wizard answers
- **`TEMPLATES`** — pre-defined configs for 8 game types

### 4. Init Wizard (`src/commands/init.js`)

The only command that runs without Claude. Uses [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) for interactive prompts:

1. Collect: name, engine, genre, team size, platform
2. Clone CCGS repo into new directory
3. Generate and write `project.yaml`
4. Print next steps

---

## How Commands Map to CCGS

Every command (except `init` and `chat`) is a one-liner that calls a CCGS slash command:

| AIM Command | CCGS Skill | Agent(s) Involved |
|-------------|-----------|-------------------|
| `aim start` | `/start` | producer, technical-director |
| `aim brainstorm` | `/brainstorm` | creative-director, game-designer |
| `aim design` | `/design-system` | game-designer, systems-designer |
| `aim epic` | `/create-epics` | producer, game-designer |
| `aim story` | `/create-stories` | producer |
| `aim dev` | `/dev-story` | lead-programmer + specialist |
| `aim done` | `/story-done` | qa-lead |
| `aim review` | `/code-review` | technical-director |
| `aim test` | `/smoke-check` | qa-lead |
| `aim sprint` | `/sprint-plan` | producer |
| `aim status` | `/sprint-status` | producer |
| `aim prototype` | `/prototype` | gameplay-programmer |
| `aim launch` | `/launch-checklist` | release-manager |

---

## CCGS Agent Hierarchy

When Claude Code starts in a CCGS project, it reads `CLAUDE.md` which loads the full agent architecture:

```
Tier 1 — Directors (strategic decisions)
  creative-director    technical-director    producer

Tier 2 — Department Leads (domain ownership)
  game-designer        lead-programmer       art-director
  audio-director       narrative-director    qa-lead
  release-manager      localization-lead

Tier 3 — Specialists (hands-on work)
  gameplay-programmer  engine-programmer     ai-programmer
  network-programmer   tools-programmer      ui-programmer
  systems-designer     level-designer        economy-designer
  technical-artist     sound-designer        writer
  ...and more
```

Skills route to the right agent automatically. When you run `aim dev`, Claude reads the story, identifies the domain (gameplay? UI? AI?), and assigns the right specialist.

---

## Data Flow

### Project Creation

```
aim init
  │
  ├─ Inquirer prompts → answers
  ├─ git clone CCGS → project directory
  └─ generateYaml(answers) → project.yaml
```

### Development Cycle

```
aim dev EPIC-001-S01
  │
  ├─ AIM checks: claude installed? In CCGS project?
  ├─ AIM spawns: claude --prompt "/dev-story EPIC-001-S01"
  │
  └─ Claude Code:
       ├─ Reads CLAUDE.md (loads 49 agents)
       ├─ Reads project.yaml (engine, modes)
       ├─ Reads story file
       ├─ Assigns specialist agent
       ├─ Agent reads GDD for context
       ├─ Agent writes code (with your approval)
       ├─ Agent writes tests
       └─ Returns control to you
```

---

## File Structure

```
aim-game-studio/              # This CLI toolkit
├── bin/aim.js                # Entry point
├── src/
│   ├── claude.js             # Claude Code bridge
│   ├── config.js             # project.yaml manager
│   └── commands/             # One file per command
│       ├── init.js           # Setup wizard (no Claude)
│       ├── start.js          # → /start
│       ├── design.js         # → /design-system
│       ├── dev.js            # → /dev-story
│       ├── done.js           # → /story-done
│       ├── chat.js           # → raw Claude session
│       └── ...
├── docs/                     # This documentation
├── package.json
└── README.md

my-game/                      # A created project (CCGS clone)
├── CLAUDE.md                 # Agent architecture config
├── project.yaml              # Project settings (generated by aim init)
├── .claude/
│   ├── agents/               # 49 agent definitions
│   ├── skills/               # 74 slash-command skills
│   ├── hooks/                # 15 automated hooks
│   └── rules/                # 14 coding rules
├── src/                      # Game code (or Assets/ or Source/)
├── design/                   # Game design documents
├── docs/                     # Technical docs
├── tests/                    # Test suites
├── production/               # Sprint plans, session state
└── prototypes/               # Throwaway prototypes
```

---

## Dependencies

Minimal by design:

| Package | Purpose |
|---------|---------|
| `commander` | CLI command parsing |
| `inquirer` | Interactive prompts (init wizard) |
| `chalk` | Terminal colors |
| `js-yaml` | Read/write project.yaml |

No build step. No bundler. No framework. Just Node.js.
