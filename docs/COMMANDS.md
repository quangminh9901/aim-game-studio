# Commands Reference

Complete reference for all `aim` commands.

---

## Project Setup

### `aim init`

Interactive wizard to create a new game project.

```bash
aim init                          # Full interactive wizard
aim init -n "my-game"             # Pre-set project name
aim init -e godot                 # Pre-set engine
aim init -t platformer            # Use template
aim init -t rpg -n "dragon-quest" # Template + custom name
```

**Options:**

| Flag | Description |
|------|-------------|
| `-n, --name <name>` | Project name |
| `-e, --engine <engine>` | Engine: `godot`, `unity`, `unreal` |
| `-t, --template <name>` | Template: `platformer`, `rpg`, `fps`, `puzzle`, `survival`, `horror`, `strategy`, `casual` |

**What it does:**
1. Prompts for project configuration (or uses template)
2. Clones the CCGS framework into a new directory
3. Generates `project.yaml` with your settings
4. Prints next steps

**Does NOT require Claude Code** — this is the only command that runs without it.

---

### `aim start`

Run the guided onboarding wizard.

```bash
cd my-game
aim start
```

Opens Claude Code with the `/start` skill. Claude will:
- Verify your engine and language
- Set up project directory structure
- Configure engine-specific settings
- Create your first design document
- Explain available workflows

**Run this once after `aim init`.**

---

## Design Phase

### `aim brainstorm`

Brainstorm game concepts and ideas.

```bash
aim brainstorm
```

Opens Claude with `/brainstorm`. Good for:
- Exploring game mechanics
- Ideating themes and settings
- Comparing approaches
- Getting creative suggestions

### `aim design [system]`

Create a Game Design Document (GDD) for a specific system.

```bash
aim design              # Claude asks which system
aim design combat       # Design the combat system
aim design inventory    # Design the inventory system
aim design movement     # Design the movement system
```

A GDD includes (depending on your rigor level):
- Overview
- Player fantasy
- Detailed rules
- Formulas and math
- Edge cases
- Dependencies
- Tuning knobs
- Acceptance criteria

---

## Planning Phase

### `aim epic`

Create feature epics from your game design documents.

```bash
aim epic
```

Claude reads your GDDs and breaks them into major feature epics (e.g., "Core Combat", "Inventory System", "Level 1").

### `aim story [epic]`

Break an epic into development stories.

```bash
aim story              # Claude asks which epic
aim story EPIC-001     # Specific epic
```

Stories are small, implementable tasks with acceptance criteria.

### `aim sprint`

Plan a sprint — organize stories into a time-boxed iteration.

```bash
aim sprint
```

---

## Development Phase

### `aim dev [story]`

Start coding a story. Claude assigns the right specialist agent.

```bash
aim dev                  # Claude asks which story
aim dev EPIC-001-S01     # Specific story
```

The appropriate specialist agent handles the work:
- `gameplay-programmer` for gameplay code
- `ui-programmer` for UI work
- `ai-programmer` for game AI
- `engine-programmer` for engine systems
- etc.

### `aim done [story]`

Mark a story complete. Runs QA checks and collects evidence.

```bash
aim done                 # Claude asks which story
aim done EPIC-001-S01    # Specific story
```

Checks:
- Required tests pass
- Screenshots captured (for visual/UI stories)
- Design doc references intact
- Code quality passes

### `aim review`

Run code review on current changes.

```bash
aim review
```

### `aim test`

Run tests and smoke checks.

```bash
aim test
```

### `aim prototype`

Quick throwaway prototype to test an idea.

```bash
aim prototype
```

Code goes in `prototypes/` — not in the main codebase.

---

## Production Phase

### `aim status`

Show sprint and project status.

```bash
aim status
```

Outputs current sprint progress, blocked stories, and overall project health.

### `aim launch`

Pre-release checklist — verify everything before shipping.

```bash
aim launch
```

Checks:
- All stories complete
- Tests passing
- No open blockers
- Build succeeds
- Platform requirements met

---

## Utility

### `aim chat`

Open Claude Code for freeform work.

```bash
aim chat
```

No pre-set prompt — full access to all 74 CCGS slash commands. Type `/help` inside Claude to see them all.

### `aim help-all`

Show all available CCGS slash commands.

```bash
aim help-all
```

### `aim --help`

Show AIM command list.

```bash
aim --help
aim init --help
aim design --help
```
