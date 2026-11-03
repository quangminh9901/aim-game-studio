import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import yaml from 'js-yaml';

export function readConfig(dir) {
  const path = resolve(dir || process.cwd(), 'project.yaml');
  if (!existsSync(path)) return null;
  try {
    return yaml.load(readFileSync(path, 'utf8'));
  } catch {
    return null;
  }
}

export function writeConfig(dir, config) {
  const path = resolve(dir, 'project.yaml');
  writeFileSync(path, yaml.dump(config, { lineWidth: -1, noRefs: true }), 'utf8');
}

export function generateYaml(data) {
  const codeRoot = { godot: 'src/', unity: 'Assets/', unreal: `Source/${data.name.replace(/\s+/g, '')}/` };
  const langMap = { godot: 'GDScript', unity: 'C#', unreal: 'C++ / Blueprint' };
  const rigorMap = { solo: 'minimal', small: 'standard', medium: 'full', large: 'full' };
  const automationMap = { solo: 'full', small: 'balanced', medium: 'balanced', large: 'minimal' };

  return {
    schema_version: 1,
    framework: { version: '1.2.0' },
    engine: {
      name: data.engine,
      version: data.engine === 'godot' ? '4.7' : data.engine === 'unity' ? '6000.0' : '5.5',
      language: langMap[data.engine],
    },
    project: {
      name: data.name,
      genre: data.genre,
      code_root: codeRoot[data.engine],
    },
    team: { size: data.team },
    platform: { primary: data.platform },
    modes: {
      rigor: rigorMap[data.team],
      automation: automationMap[data.team],
    },
  };
}

export const TEMPLATES = {
  platformer:  { engine: 'godot',  genre: 'platformer', team: 'solo',   platform: 'pc' },
  rpg:         { engine: 'godot',  genre: 'rpg',        team: 'small',  platform: 'pc' },
  fps:         { engine: 'unreal', genre: 'fps',        team: 'medium', platform: 'pc' },
  puzzle:      { engine: 'godot',  genre: 'puzzle',     team: 'solo',   platform: 'web' },
  survival:    { engine: 'unity',  genre: 'survival',   team: 'small',  platform: 'pc' },
  casual:      { engine: 'unity',  genre: 'casual',     team: 'solo',   platform: 'mobile' },
  horror:      { engine: 'unreal', genre: 'horror',     team: 'small',  platform: 'pc' },
  strategy:    { engine: 'godot',  genre: 'strategy',   team: 'medium', platform: 'pc' },
};
