import chalk from 'chalk';
import { openClaude, checkClaude } from '../claude.js';

export function chatCommand() {
  checkClaude();
  console.log(chalk.bold('\n  Opening Claude Code...\n'));
  console.log(chalk.dim('  Freeform mode — type anything, use /commands, or just chat.\n'));
  openClaude();
}
