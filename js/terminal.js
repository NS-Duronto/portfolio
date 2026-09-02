/**
 * Interactive Developer Terminal Widget
 * Real CLI experience inside the browser
 * Profile: Nazmus Sakib (Junior Web Developer & Support Engineer)
 */
class InteractiveTerminal {
  constructor() {
    this.terminalBody = document.getElementById('terminal-body');
    this.terminalInput = document.getElementById('terminal-input');
    this.terminalPrompt = document.getElementById('terminal-prompt-user');
    
    if (!this.terminalBody || !this.terminalInput) return;

    this.commandHistory = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => this.helpCommand(),
      about: () => this.aboutCommand(),
      skills: () => this.skillsCommand(),
      projects: () => this.projectsCommand(),
      experience: () => this.experienceCommand(),
      contact: () => this.contactCommand(),
      clear: () => this.clearCommand(),
      whoami: () => `<span class="terminal-output highlight">sakib@portfolio:~$ Nazmus Sakib — Junior Web Developer & Support Engineer based in Dhaka, Bangladesh.</span>`,
      date: () => `<span class="terminal-output">${new Date().toUTCString()}</span>`,
      theme: (args) => this.themeCommand(args),
      mode: (args) => this.modeCommand(args),
      sudo: () => `<span class="terminal-output error">Permission denied: Superuser operations are restricted on this environment.</span>`
    };

    this.init();
  }

  init() {
    this.terminalInput.addEventListener('keydown', (e) => this.handleKeyDown(e));
    
    // Focus terminal when clicking inside container
    const terminalBox = document.querySelector('.terminal-box');
    if (terminalBox) {
      terminalBox.addEventListener('click', () => {
        this.terminalInput.focus();
      });
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      const rawInput = this.terminalInput.value.trim();
      if (!rawInput) return;

      this.commandHistory.push(rawInput);
      this.historyIndex = this.commandHistory.length;

      this.executeCommand(rawInput);
      this.terminalInput.value = '';
      this.scrollToBottom();
    } else if (e.key === 'ArrowUp') {
      if (this.historyIndex > 0) {
        this.historyIndex--;
        this.terminalInput.value = this.commandHistory[this.historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (this.historyIndex < this.commandHistory.length - 1) {
        this.historyIndex++;
        this.terminalInput.value = this.commandHistory[this.historyIndex];
      } else {
        this.historyIndex = this.commandHistory.length;
        this.terminalInput.value = '';
      }
      e.preventDefault();
    }
  }

  executeCommand(input) {
    const parts = input.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Print command line
    this.appendLine(`<span class="terminal-prompt">sakib@portfolio:~$</span> <span>${this.escapeHTML(input)}</span>`);

    if (this.commands[cmd]) {
      const output = this.commands[cmd](args);
      if (output) {
        this.appendLine(output);
      }
    } else {
      this.appendLine(`<span class="terminal-output error">command not found: "${this.escapeHTML(cmd)}". Type <strong style="color:var(--primary-light)">'help'</strong> for available commands.</span>`);
    }
  }

  helpCommand() {
    return `
<div class="terminal-output">
  <span style="color:var(--secondary);font-weight:700;">AVAILABLE COMMANDS:</span><br>
  &nbsp;&nbsp;<strong>about</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Professional background & developer profile<br>
  &nbsp;&nbsp;<strong>skills</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Technical skills (PHP, Laravel, MySQL, Vue.js, Linux)<br>
  &nbsp;&nbsp;<strong>experience</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Professional role & responsibilities at IniLabs<br>
  &nbsp;&nbsp;<strong>projects</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Real-world projects worked on<br>
  &nbsp;&nbsp;<strong>mode [dark|light]</strong>&nbsp;- Switch between Dark Mode and Normal/Light Mode<br>
  &nbsp;&nbsp;<strong>theme [color]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Switch accent theme (violet, cyan, emerald, sunset, rose)<br>
  &nbsp;&nbsp;<strong>contact</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Location & contact details<br>
  &nbsp;&nbsp;<strong>date</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Display current date & UTC time<br>
  &nbsp;&nbsp;<strong>whoami</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print developer positioning<br>
  &nbsp;&nbsp;<strong>clear</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear the terminal screen
</div>`;
  }

  aboutCommand() {
    return `<div class="terminal-output">
  <span class="highlight">NAZMUS SAKIB | Junior Web Developer & Support Engineer</span><br>
  Based in Dhaka, Bangladesh.<br>
  I build and maintain reliable web applications using PHP and Laravel, while also handling technical support, server troubleshooting, deployment, and customer assistance for production software.
</div>`;
  }

  experienceCommand() {
    return `<div class="terminal-output">
  <span class="highlight">CURRENT ROLE: IniLabs</span><br>
  <strong>Position:</strong> Junior Web Developer & Support Engineer<br>
  <strong>Responsibilities:</strong><br>
  • Developing and maintaining PHP/Laravel web applications & MySQL databases<br>
  • Working on Vue.js frontend components, POS modules, and bug fixing<br>
  • Handling technical support, investigating application & deployment errors<br>
  • Server configuration & troubleshooting on Linux, Apache, and cPanel environments
</div>`;
  }

  skillsCommand() {
    return `<div class="terminal-output">
  <span class="highlight">PRACTICAL TECHNICAL SKILLS:</span><br>
  • <strong style="color:var(--primary-light)">Backend:</strong> PHP, Laravel, REST API, MVC, Eloquent ORM, Artisan, Composer<br>
  • <strong style="color:var(--primary-light)">Frontend:</strong> HTML5, CSS3, JavaScript, Vue.js, Vue 3, Inertia.js, Vite, Bootstrap, Tailwind CSS<br>
  • <strong style="color:var(--primary-light)">Database:</strong> MySQL, MariaDB, Database Design, SQL, Laravel Migrations<br>
  • <strong style="color:var(--primary-light)">Server & Deployment:</strong> Linux (Ubuntu), Apache, cPanel, Storage Linking, Rewrite Rules, Permissions<br>
  • <strong style="color:var(--primary-light)">Support & Troubleshooting:</strong> Application debugging, PHP/server error investigation, Customer support
</div>`;
  }

  projectsCommand() {
    return `<div class="terminal-output">
  <span class="highlight">PROJECTS WORKED ON:</span><br>
  1. <strong>TIMS</strong> - Training Institute Management System (Demo: <a href="https://lms.rovixor.com/" target="_blank" style="color:var(--primary-light);text-decoration:underline;">lms.rovixor.com</a>)<br>
  2. <strong>Shopperzz</strong> - PWA eCommerce CMS with POS & WhatsApp Ordering (Laravel, Vue 3, Pinia)<br>
  3. <strong>FoodKing</strong> - Restaurant eCommerce & Ordering System (PrintNode POS integration, Support)<br>
  4. <strong>GoSchool ERP</strong> - School & Education Management ERP (Students, Exams, Fees, HR)<br>
  5. <strong>ShopKing</strong> - eCommerce & Retail Software Product<br>
  6. <strong>QuickPass</strong> - Visitor Management System<br>
  7. <strong>FoodScan</strong> - Digital Food Menu & Ordering<br>
  8. <strong>iTest</strong> - Online Assessment & Examination Platform<br>
  9. <strong>Bontado</strong> - Multi-Tenant SaaS Web Application<br>
  <em>* Explore the Featured Projects section above for full descriptions and features.</em>
</div>`;
  }

  contactCommand() {
    return `<div class="terminal-output success">
  Location: Dhaka, Bangladesh<br>
  Role: Junior Web Developer & Support Engineer<br>
  Specialization: PHP / Laravel Development & Technical Support<br>
  Get in touch via the Contact section below.
</div>`;
  }

  modeCommand(args) {
    if (!args || args.length === 0) {
      const current = document.documentElement.getAttribute('data-mode') === 'light' ? 'light (normal)' : 'dark';
      return `<span class="terminal-output">Current mode: <strong>${current}</strong>. Usage: mode [dark | light]</span>`;
    }
    const targetMode = args[0].toLowerCase();
    if (targetMode === 'light' || targetMode === 'normal') {
      document.documentElement.setAttribute('data-mode', 'light');
      localStorage.setItem('portfolio-mode', 'light');
      return `<span class="terminal-output success">Switched to <strong>Normal / Light Mode</strong>.</span>`;
    } else if (targetMode === 'dark') {
      document.documentElement.removeAttribute('data-mode');
      localStorage.setItem('portfolio-mode', 'dark');
      return `<span class="terminal-output success">Switched to <strong>Dark Mode</strong>.</span>`;
    } else {
      return `<span class="terminal-output error">Invalid mode. Choose either 'dark' or 'light'.</span>`;
    }
  }

  themeCommand(args) {
    if (!args || args.length === 0) {
      return `<span class="terminal-output error">Usage: theme [violet | cyan | emerald | sunset | rose]</span>`;
    }
    const themeName = args[0].toLowerCase();
    const validThemes = ['violet', 'cyan', 'emerald', 'sunset', 'rose'];
    if (validThemes.includes(themeName)) {
      document.documentElement.setAttribute('data-theme', themeName);
      localStorage.setItem('portfolio-theme', themeName);
      
      // Update UI theme dots
      document.querySelectorAll('.theme-dot').forEach(dot => {
        dot.classList.toggle('active', dot.getAttribute('data-set-theme') === themeName);
      });

      return `<span class="terminal-output success">Theme successfully switched to: <strong>${themeName}</strong></span>`;
    } else {
      return `<span class="terminal-output error">Invalid theme. Choose from: ${validThemes.join(', ')}</span>`;
    }
  }

  clearCommand() {
    const lines = this.terminalBody.querySelectorAll('.terminal-line:not(.initial-line)');
    lines.forEach(l => l.remove());
    return null;
  }

  appendLine(htmlContent) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = htmlContent;
    this.terminalBody.appendChild(line);
  }

  scrollToBottom() {
    this.terminalBody.scrollTop = this.terminalBody.scrollHeight;
  }

  escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new InteractiveTerminal();
});
