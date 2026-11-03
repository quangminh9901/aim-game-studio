import chalk from 'chalk';
import { openClaude, checkClaude, checkProject } from '../claude.js';

export function storyCommand(epic) {
  checkClaude();
  checkProject();
  const prompt = epic ? `/create-stories ${epic}` : '/create-stories';
  console.log(chalk.bold('\n  Breaking epic into stories...\n'));
  if (epic) {
    console.log(chalk.dim(`  Epic: ${epic}\n`));
  }
  openClaude(prompt);
}
