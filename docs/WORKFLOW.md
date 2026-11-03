# Workflow Guide

The recommended process for building a game with AIM Game Studio, from idea to launch.

---

## Overview

```
Phase 1: Setup        aim init → aim start
Phase 2: Design       aim brainstorm → aim design
Phase 3: Plan         aim epic → aim story → aim sprint
Phase 4: Build        aim dev → aim done → aim review → aim test
Phase 5: Ship         aim launch
```

Each phase builds on the previous. You can loop back at any point — game development is iterative.

---

## Phase 1: Project Setup

**Goal:** Create project structure and configure your game studio.

```bash
# Create project with wizard
aim init

# Enter project
cd my-game

# Run onboarding (once)
aim start
```

**Time:** ~10 minutes

**What you'll have after this phase:**
- A fully configured CCGS project
- Engine-specific directory structure
- 49 AI agents ready to work
- `project.yaml` with your settings

---

## Phase 2: Game Design

**Goal:** Define what your game is and how it works.

```bash
# Start with brainstorming
aim brainstorm

# Then design each system
aim design combat
aim design movement
aim design inventory
aim design progression
```

**Time:** 1-4 hours per system, depending on complexity

**What you'll have after this phase:**
- Game Design Documents (GDDs) in `design/gdd/`
- Clear rules, formulas, and edge cases for each system
- Acceptance criteria that will guide development

**Tips:**
- Start with your core mechanic — the thing that makes your game fun
- Don't design everything upfront. Design 2-3 core systems, build them, then design more
- The `game-designer` and `systems-designer` agents help you think through edge cases

---

## Phase 3: Planning

**Goal:** Break your design into buildable pieces.

```bash
# Create epics from your GDDs
aim epic

# Break each epic into stories
aim story EPIC-001
aim story EPIC-002

# Plan your first sprint
aim sprint
```

**Time:** 30 minutes - 1 hour

**What you'll have after this phase:**
- Feature epics in `production/`
- Stories with acceptance criteria
- A sprint plan with prioritized work

**Tips:**
- Start small — your first sprint should have 3-5 stories max
- Prioritize the core gameplay loop first
- Each story should be completable in one session

---

## Phase 4: Build

**Goal:** Implement your game, one story at a time.

This is the main loop you'll repeat:

```bash
# 1. Pick a story and start coding
aim dev EPIC-001-S01

# 2. When done, run QA checks
aim done EPIC-001-S01

# 3. Review your code
aim review

# 4. Run tests
aim test

# 5. Repeat with next story
aim dev EPIC-001-S02
```

**What happens during `aim dev`:**
- Claude assigns the right specialist agent (gameplay, UI, AI, etc.)
- The agent reads relevant GDDs and stories
- You collaborate — Claude writes code, you approve
- Tests are written alongside the code

**What happens during `aim done`:**
- QA agent verifies acceptance criteria
- Tests are run
- Screenshots captured (for visual work)
- Story is marked complete

**Tips:**
- Run `aim status` regularly to see progress
- If you get stuck, use `aim chat` for freeform help
- Use `aim prototype` to test risky ideas before committing

---

## Phase 5: Ship

**Goal:** Verify everything works and prepare for release.

```bash
# Run the launch checklist
aim launch
```

The launch checklist verifies:
- All stories in the sprint are complete
- All tests pass
- No open blockers
- Build succeeds on target platforms
- Required documentation exists

---

## Iteration

Game development is iterative. After shipping a build:

1. **Playtest** — play your game, take notes
2. **Design** — go back to `aim design` for new systems or revisions
3. **Plan** — create new epics and stories
4. **Build** — implement the next iteration
5. **Ship** — repeat

```
aim design → aim epic → aim story → aim sprint → aim dev → aim done → aim launch
     ↑                                                                      |
     └──────────────────────────────────────────────────────────────────────┘
```

---

## Solo vs Team Workflows

### Solo Developer

Run every command yourself. The AI agents are your team:

```bash
aim init -t platformer          # Setup
aim start                       # Onboard
aim brainstorm                  # Ideate alone with AI
aim design movement             # Design with AI help
aim dev EPIC-001-S01            # Code with AI
aim done EPIC-001-S01           # AI runs QA
```

### Small Team (2-4)

One person runs the design/planning commands. Everyone uses `aim dev`:

```
Lead:     aim init → aim start → aim design → aim epic → aim story → aim sprint
Dev A:    aim dev EPIC-001-S01 → aim done EPIC-001-S01
Dev B:    aim dev EPIC-001-S02 → aim done EPIC-001-S02
Lead:     aim review → aim test → aim launch
```

### Medium/Large Team

Same flow, but with more structure:

```
Producer:      aim sprint → aim status → aim launch
Game Designer: aim brainstorm → aim design
Programmers:   aim dev → aim done
QA:            aim test → aim review
```
