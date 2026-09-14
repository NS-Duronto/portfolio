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
      github: () => this.githubCommand(),
      linkedin: () => this.linkedinCommand(),
      whatsapp: () => this.whatsappCommand(),
      email: () => this.emailCommand(),
      clear: () => this.clearCommand(),
      whoami: () => `<span class="terminal-output highlight">sakib@portfolio:~$ Nazmus Sakib — Junior Web Developer & Support Engineer based in Mirpur, Dhaka, Bangladesh.</span>`,
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

    this.appendLine(`<div class="terminal-input-echo"><span class="terminal-prompt">${this.terminalPrompt ? this.terminalPrompt.textContent : 'sakib@portfolio:~$'}</span> <span>${this.escapeHTML(input)}</span></div>`);

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
  &nbsp;&nbsp;<strong>experience</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Professional role & responsibilities at iNiLabs<br>
  &nbsp;&nbsp;<strong>projects</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Real GitHub repositories & projects<br>
  &nbsp;&nbsp;<strong>github</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Open GitHub profile (NS-Duronto)<br>
  &nbsp;&nbsp;<strong>linkedin</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Open LinkedIn profile<br>
  &nbsp;&nbsp;<strong>whatsapp</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Chat on WhatsApp (+880 1312-008372)<br>
  &nbsp;&nbsp;<strong>email</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Display email address<br>
  &nbsp;&nbsp;<strong>contact</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- All contact channels & location<br>
  &nbsp;&nbsp;<strong>mode [dark|light]</strong>&nbsp;- Switch between Dark Mode and Normal/Light Mode<br>
  &nbsp;&nbsp;<strong>theme [color]</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Switch accent theme (emerald, blue, laravel, cyan, amber)<br>
  &nbsp;&nbsp;<strong>date</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Display current date & UTC time<br>
  &nbsp;&nbsp;<strong>whoami</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Print developer positioning<br>
  &nbsp;&nbsp;<strong>clear</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Clear the terminal screen
</div>`;
  }

  aboutCommand() {
    return `<div class="terminal-output">
  <span class="highlight">NAZMUS SAKIB | Junior Web Developer & Support Engineer</span><br>
  Based in Mirpur, Dhaka, Bangladesh.<br>
  I build and maintain dependable web applications using PHP, Laravel, Vue.js, and MySQL, while also handling end-user technical support, application debugging, and server troubleshooting.
</div>`;
  }

  experienceCommand() {
    return `<div class="terminal-output">
  <span class="highlight">PROFESSIONAL EXPERIENCE:</span><br>
  • <strong>Junior Web Developer & Support Engineer — iNiLabs</strong> (Aug 2023 – Present)<br>
  &nbsp;&nbsp;- Developing & maintaining Laravel/Vue.js applications (e-commerce, restaurant & school management)<br>
  &nbsp;&nbsp;- Handling live production issues, SQL query optimization & server troubleshooting (Linux/cPanel)<br>
  • <strong>IT Executive — Saralrekha Prokashona Sangstha</strong> (2022 – 2023)<br>
  &nbsp;&nbsp;- IT support, computer & peripheral maintenance, LAN/network operations<br>
  • <strong>Web Developer Intern — Smart Software Ltd.</strong> (Mar 2023 – Jun 2023)<br>
  &nbsp;&nbsp;- Web application testing, development support & agile workflows
</div>`;
  }

  skillsCommand() {
    return `<div class="terminal-output">
  <span class="highlight">PRACTICAL TECHNICAL SKILLS:</span><br>
  • <strong style="color:var(--primary-light)">Backend:</strong> PHP 8.2, Laravel, Realtime Pusher/WebSockets, REST APIs, Eloquent ORM, Payment Gateways (bKash, Nagad, Stripe, PayPal)<br>
  • <strong style="color:var(--primary-light)">Specialized Domains:</strong> Realtime Food Delivery, eCommerce & POS, Multi-Branch Inventory Management, KDS & Thermal AutoPrint<br>
  • <strong style="color:var(--primary-light)">Frontend:</strong> Vue.js, Vue 3, Nuxt 3, JavaScript (ES6+), HTML5, CSS3, Blade, Bootstrap, Tailwind<br>
  • <strong style="color:var(--primary-light)">Database:</strong> MySQL, MariaDB, Relational Database Architecture & Query Optimization<br>
  • <strong style="color:var(--primary-light)">Server & Support:</strong> Linux (Ubuntu), Apache, cPanel Hosting, Production Debugging & Technical Support<br>
  • <strong style="color:var(--primary-light)">Tools:</strong> Git, GitHub, VS Code, Postman, Composer
</div>`;
  }

  projectsCommand() {
    return `<div class="terminal-output">
  <span class="highlight">REAL-WORLD PRODUCTION & GITHUB PROJECTS:</span><br>
  1. <strong>Realtime Food Delivery & Restaurant Platform</strong> - Live order tracking, Pusher WebSockets, KDS, rider dispatch, POS counter & thermal printing (<a href="https://github.com/NS-Duronto/Restaurant-Management-System" target="_blank" style="color:var(--primary-light);text-decoration:underline;">View Code</a>)<br>
  2. <strong>Modern eCommerce & Inventory Management Platform</strong> - Dynamic product catalog, variant SKU inventory, POS checkout, invoice PDF & payment gateways<br>
  3. <strong>Visitor-Management-System</strong> - Digital visitor security logging & passes (<a href="https://github.com/NS-Duronto/Visitor-Management-System" target="_blank" style="color:var(--primary-light);text-decoration:underline;">View Code</a>)<br>
  4. <strong>LMS</strong> - Learning Management System for courses & enrollments (<a href="https://github.com/NS-Duronto/LMS" target="_blank" style="color:var(--primary-light);text-decoration:underline;">View Code</a>)<br>
  5. <strong>Nuxt_Practice</strong> - Modern web application with Nuxt 3, Vue 3 & TypeScript (<a href="https://github.com/NS-Duronto/Nuxt_Practice" target="_blank" style="color:var(--primary-light);text-decoration:underline;">View Code</a>)<br>
  6. <strong>Photocard</strong> - Card customization & generation web app (<a href="https://github.com/NS-Duronto/photocard" target="_blank" style="color:var(--primary-light);text-decoration:underline;">View Code</a>)<br>
  7. <strong>Tafsir</strong> - Digital Quranic reference web platform (<a href="https://github.com/NS-Duronto/tafsir" target="_blank" style="color:var(--primary-light);text-decoration:underline;">View Code</a>)<br>
  8. <strong>Portfolio & CLI</strong> - Interactive Developer Portfolio (<a href="https://github.com/NS-Duronto/portfolio" target="_blank" style="color:var(--primary-light);text-decoration:underline;">View Code</a>)<br>
  <em>* Explore the Real-World Projects section above for full details.</em>
</div>`;
  }

  githubCommand() {
    return `<div class="terminal-output success">
  <strong>GitHub:</strong> <a href="https://github.com/NS-Duronto" target="_blank" style="color:var(--primary-light);text-decoration:underline;">https://github.com/NS-Duronto</a><br>
  Explore open-source repositories and code contributions.
</div>`;
  }

  linkedinCommand() {
    return `<div class="terminal-output success">
  <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nazmus-sakib-678142318/" target="_blank" style="color:var(--primary-light);text-decoration:underline;">https://www.linkedin.com/in/nazmus-sakib-678142318/</a><br>
  Connect with Nazmus Sakib for career opportunities and networking.
</div>`;
  }

  whatsappCommand() {
    return `<div class="terminal-output success">
  <strong>WhatsApp:</strong> <a href="https://wa.me/8801312008372" target="_blank" style="color:var(--primary-light);text-decoration:underline;">+880 1312-008372</a> (01312008372)<br>
  Click the link above to start a direct WhatsApp chat.
</div>`;
  }

  emailCommand() {
    return `<div class="terminal-output success">
  <strong>Email:</strong> <a href="mailto:sakibnazmus875@gmail.com" style="color:var(--primary-light);text-decoration:underline;">sakibnazmus875@gmail.com</a>
</div>`;
  }

  contactCommand() {
    return `<div class="terminal-output success">
  <span class="highlight">CONTACT INFORMATION:</span><br>
  • <strong>Email:</strong> <a href="mailto:sakibnazmus875@gmail.com" style="color:var(--primary-light);text-decoration:underline;">sakibnazmus875@gmail.com</a><br>
  • <strong>WhatsApp:</strong> <a href="https://wa.me/8801312008372" target="_blank" style="color:var(--primary-light);text-decoration:underline;">+880 1312-008372</a> (01312008372)<br>
  • <strong>GitHub:</strong> <a href="https://github.com/NS-Duronto" target="_blank" style="color:var(--primary-light);text-decoration:underline;">github.com/NS-Duronto</a><br>
  • <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/nazmus-sakib-678142318/" target="_blank" style="color:var(--primary-light);text-decoration:underline;">linkedin.com/in/nazmus-sakib-678142318</a><br>
  • <strong>Location:</strong> Mirpur, Dhaka, Bangladesh<br>
  • <strong>Status:</strong> Open to Full-Time, Remote & Contract roles
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
    const validThemes = ['emerald', 'blue', 'laravel', 'cyan', 'amber'];
    if (!args || args.length === 0) {
      return `<span class="terminal-output error">Usage: theme [${validThemes.join(' | ')}]</span>`;
    }
    const themeName = args[0].toLowerCase();
    if (validThemes.includes(themeName)) {
      if (window.applyTheme) {
        window.applyTheme(themeName, false);
      } else {
        if (themeName === 'emerald') {
          document.documentElement.removeAttribute('data-theme');
        } else {
          document.documentElement.setAttribute('data-theme', themeName);
        }
        localStorage.setItem('portfolio-theme', themeName);
      }

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
