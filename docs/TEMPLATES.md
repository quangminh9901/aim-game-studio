# Templates

Pre-configured project setups for common game types. Use them with `aim init -t <name>`.

---

## Available Templates

### Platformer

```bash
aim init -t platformer
```

| Setting | Value |
|---------|-------|
| Engine | Godot 4 |
| Genre | Platformer |
| Team | Solo |
| Platform | PC |
| Rigor | Minimal |
| Automation | Full |

Best for: 2D side-scrolling games with jumping, running, collecting, and enemies. Mario-style, Celeste-style, or Hollow Knight-style.

---

### RPG

```bash
aim init -t rpg
```

| Setting | Value |
|---------|-------|
| Engine | Godot 4 |
| Genre | RPG |
| Team | Small (2-4) |
| Platform | PC |
| Rigor | Standard |
| Automation | Balanced |

Best for: Role-playing games with quests, dialogue, inventory, combat, and progression systems.

---

### FPS

```bash
aim init -t fps
```

| Setting | Value |
|---------|-------|
| Engine | Unreal Engine 5 |
| Genre | FPS |
| Team | Medium (5-10) |
| Platform | PC |
| Rigor | Full |
| Automation | Balanced |

Best for: First-person shooters with weapons, multiplayer, maps, and high-fidelity 3D.

---

### Puzzle

```bash
aim init -t puzzle
```

| Setting | Value |
|---------|-------|
| Engine | Godot 4 |
| Genre | Puzzle |
| Team | Solo |
| Platform | Web |
| Rigor | Minimal |
| Automation | Full |

Best for: Brain-teasing puzzle mechanics, logic games, match-3, sliding puzzles.

---

### Survival

```bash
aim init -t survival
```

| Setting | Value |
|---------|-------|
| Engine | Unity |
| Genre | Survival |
| Team | Small (2-4) |
| Platform | PC |
| Rigor | Standard |
| Automation | Balanced |

Best for: Gathering resources, crafting, building, surviving against elements and creatures.

---

### Casual

```bash
aim init -t casual
```

| Setting | Value |
|---------|-------|
| Engine | Unity |
| Genre | Casual |
| Team | Solo |
| Platform | Mobile |
| Rigor | Minimal |
| Automation | Full |

Best for: Quick, addictive gameplay loops for mobile. Hyper-casual, idle games, tap games.

---

### Horror

```bash
aim init -t horror
```

| Setting | Value |
|---------|-------|
| Engine | Unreal Engine 5 |
| Genre | Horror |
| Team | Small (2-4) |
| Platform | PC |
| Rigor | Standard |
| Automation | Balanced |

Best for: Atmospheric horror with exploration, puzzles, scares, and environmental storytelling.

---

### Strategy

```bash
aim init -t strategy
```

| Setting | Value |
|---------|-------|
| Engine | Godot 4 |
| Genre | Strategy |
| Team | Medium (5-10) |
| Platform | PC |
| Rigor | Full |
| Automation | Balanced |

Best for: Real-time or turn-based strategy with resource management, unit control, and base building.

---

## Custom Templates

Don't see your game type? Use the full wizard:

```bash
aim init
```

Or combine flags:

```bash
aim init -n "space-game" -e unreal
```

The wizard lets you pick any combination of engine, genre, team size, and platform.

---

## Template Settings Explained

### Rigor

Controls how much documentation and process the AI agents enforce.

| Level | What it means |
|-------|---------------|
| **Minimal** | Light docs, game brief only, no ADRs required |
| **Standard** | GDDs with 5 core sections, critical ADRs |
| **Full** | Complete GDDs (8 sections), all ADRs, full docs |

### Automation

Controls how much the AI does on its own vs. asking you.

| Level | What it means |
|-------|---------------|
| **Full** | AI handles most routine work, asks for key decisions only |
| **Balanced** | AI does work but checks with you more often |
| **Minimal** | AI asks before every significant action |
