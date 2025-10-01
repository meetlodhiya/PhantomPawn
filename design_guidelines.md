# Cybersecurity Portfolio Design Guidelines - PhantomPawn

## Design Approach: Hacker/Cybersecurity Aesthetic
Reference-based approach drawing from Matrix aesthetics, terminal interfaces, and modern cybersecurity tools like Kali Linux, Metasploit, and Burp Suite. The design evokes digital forensics terminals while maintaining professional polish.

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary)**
- Background: 0 0% 0% (pure black)
- Primary Text: 120 100% 50% (neon green #00FF00)
- Secondary Text: 120 60% 70% (muted green for body text)
- Accent: 120 100% 35% (darker green for borders/highlights)
- Tertiary: 120 20% 20% (very dark green for cards/sections)
- Danger/Alert: 0 100% 50% (red for security warnings)

**Typography Emphasis**: Use green on black with subtle glow effects on headers for terminal/matrix aesthetic.

### B. Typography
- **Primary Font**: 'Share Tech Mono' or 'Roboto Mono' (monospace for hacker aesthetic)
- **Display Font**: 'Orbitron' or 'Exo 2' (for name/headers - futuristic tech feel)
- Hero Name: 4xl to 6xl, bold, with subtle green text-shadow glow
- Tagline: 2xl to 3xl, tracking-wide, uppercase
- Headers: xl to 3xl, medium weight
- Body: base to lg, regular weight in muted green
- Code snippets: sm, monospace in bright green

### C. Layout System
Use Tailwind spacing: 4, 8, 12, 16, 24, 32 units
- Section padding: py-24 md:py-32
- Container: max-w-7xl mx-auto px-4
- Card spacing: p-8
- Grid gaps: gap-8 to gap-12

### D. Component Library

**Hero Section**
- Full viewport height with animated matrix-style background (CSS particles/lines)
- Centered content: Name in display font, tagline below, brief intro
- Subtle scan line animation overlay
- Terminal-style cursor blink on tagline

**Navigation**
- Fixed top nav with black bg, green text links
- Glowing underline on hover (green)
- Mobile: Hamburger menu with slide-in drawer

**Certification Cards**
- Dark green card backgrounds (120 20% 15%)
- Green borders with glow effect
- Badge-style icons or shields
- Certification name, organization, year
- 2-column grid on desktop

**Experience Timeline**
- Vertical timeline with green connecting line
- Company name in bright green
- Role and responsibilities in muted green
- Date badges with green border

**Skills Grid**
- 3-4 column grid of skill cards
- Icon + skill name format
- Hexagonal or octagonal borders (cyber theme)
- Hover: Subtle glow and scale effect

**Professional Summary**
- Full-width section with terminal window aesthetic
- Green border frame mimicking command line interface
- Monospace font with blinking cursor at end
- Dark green background card

**Contact Section**
- Two-column layout: Contact form + direct contact info
- Email and LinkedIn displayed as terminal commands
- Form inputs: Green borders, black bg, green text
- Submit button: Green bg with black text, hover inverts

**Footer**
- Copyright, social links in green
- Terminal prompt style (e.g., "phantompawn@security:~$")

### E. Visual Elements

**Images Section**
- **Hero Background**: Abstract digital network/circuit board pattern in dark green tones on black (subtle, not overpowering text)
- **Skills Icons**: Use Font Awesome or custom SVG icons for security tools (shield, lock, terminal, magnifying glass)
- **Certification Badges**: Shield or badge-style graphics in green wireframe style
- No large hero image - focus on animated background patterns instead

**Interactive Effects**
- Scanline animation overlay on hero (subtle horizontal lines moving)
- Glowing green borders on hover for cards
- Text shadow glow on headers
- Terminal-style typing animation for tagline (on load)
- Matrix-style falling code rain in background (very subtle, low opacity)

**Animations** (Minimal)
- Hero text fade-in with typing effect
- Skill cards subtle hover lift
- Navigation underline slide-in
- NO excessive animations - maintain professional hacker aesthetic

## Design Specifications

**Sections to Include:**
1. Hero (full viewport) - Name, tagline, brief intro
2. Professional Summary - Terminal-style presentation
3. Certifications - 2 cards showcasing CIOSE & CCDP
4. Experience - Timeline with Trios Cyber internship details
5. Skills - Grid of 6 skills (VAPT, WAPT, Mobile Security, Forensics, Crypto, Stego)
6. Contact - Form + direct contact information

**Accessibility:**
- Ensure green text meets WCAG contrast ratios (use 120 60% 70% for body)
- Keyboard navigation with visible focus states (green outline)
- Screen reader friendly labels
- Alt text for all visual elements

**Responsive Behavior:**
- Mobile: Single column, reduced spacing (py-12)
- Tablet: 2 columns for certifications/skills
- Desktop: Full multi-column layouts

This design creates an immersive cybersecurity professional portfolio that balances technical aesthetic with usability and professionalism.