import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function sprintCommand() {
  checkClaude();
  checkProject();
  console.log(chalk.bold('\n  Opening sprint planner...\n'));
  openClaude('/sprint-plan');
}
