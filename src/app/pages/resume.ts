export interface ResumeCard {
  link_anchor: string;
  nav_title: string;
  title: string;
  content: string;
}

let educationMD = `
  **UC Berkeley (Berkeley, CA)** <br>
  Bachelor of Science, Chemistry (Honors in General Scholarship)<br>
  Graduated May 2020<br>
  GPA: 3.807/4.000

  **Diablo Valley College (Pleasant Hill, CA)**<br>
  Associate of Science, Computer Science<br>
  Obtained December 2021<br>
  GPA: 3.935/4.000<br>

  Certificate of achievement: Computer science - Advanced C++ programming<br>
  Obtained July 2021<br>
  GPA: 4.000/4.000 (certificate coursework)
  `
let skillsMD = `
  **Personal**: Problem solver, analytical thinker, eagar to learn

  **Experimental Techniques**: UV/VIS absorption/emission, FT-IR, NMR, XRPD, titrations (acid-base, potentiometric), GC, GCMS, bomb calorimetry, ICP-AES, TLC, Distillation

  **Programming Languages**: Python, C++, SQL, HTML, CSS, SCSS, JavaScript, TypeScript, Angular (framework)
  `
let courseworkMD = `
  **Computer Science**:
  - Computational Techniques in Physics (Python)
  - Advanced Programming (C/C++, Python)
  - Object-Oriented Programming (C++, Python)
  - SQL Programming (T-SQL/SQL Server)
  - Program Design and Data Structures (C++)
  - Assembly Language & Computer Organization
  - Amazon AWS Cloud Foundations

  **Chemistry**:
  - General Chemistry
  - Organic Chemistry
  - Inorganic Chemistry
  - Analytical Chemistry
  - Physical Chemistry
  - Quantum Mechanics and Spectroscopy
  - Special Topics: Computational Quantum Chemistry: Theory and Practice

  **Mathematics**:
  - Calculus I - III
  - Differential Equations
  - Linear Algebra
  - Discrete Mathematics
  `
let labsMD = `
  **Organic Chemistry**
  * I conducted Grignard, Wittig, ester hydrolysis, and Friedel-Crafts acylation reactions.<br>
  * I employed various extraction techniques (acid-base extraction and refluxing) for various lab experiments.<br>
  * I utilized various isolation techniques (distillation, crystallization, and micro recrystallization) in a lab setting.<br>
  * I used different techniques (IR, NMR (<sup>1</sup>H and <sup>13</sup>C), and melting points) to characterize compounds.

  **Analytical and Bioanalytical Chemistry**
  * Lecture covered different statistical methods (confidence intervals, F test, Student’s t, paired t test).<br>
  * Lab covered various techniques (potentiometry, molecular UV/VIS absorption and fluorescence) to quantify compounds/solutions and ion chromatography (isolation technique) <br>

  **Physical Chemistry**
  * Lecture covered error analysis (error propagation and statistical error analysis).<br>
  * Lab covered various physical chemistry topics (FT-IR, NMR, XRPD, bomb calorimetry).
  `
let jobsMD = `
  **John Arnold Group (Berkeley, CA)** <br>
  *Undergraduate Student Researcher (July 2018 - July 2020)*<br>
  Applied quantum chemistry software (Gaussian, Q-Chem, and Multiwfn) to calculate the thermodynamics, electronic structures, and reaction mechanisms of inorganic compounds.
  Research provided theoretical insight into the factors giving rise to the compounds' reactivity.

  **Diablo Valley College (Pleasant Hill, CA)**<br>
  *Chemistry Peer Tutor (Aug. 2017 - May 2018)*<br>
  Assisted peers with general chemistry concepts/questions.

  **Textmunication (Pleasant Hill, CA)**<br>
  *System Administrator (July 2014 - Oct. 2015)*<br>
  * Responsible for general office equipment maintenance, CRM (customer relationship management) system, customer service, and billing
  * Designed and deployed a series of emails for prospects, newly signed up clients, and existing clients
  * Developed applications and scripts to streamline business operations
  * HTML form integrated with Zoho Meeting (web conferencing software) REST API so clients may sign up for webinars. Meeting is then scheduled in webinar host’s calendar.
  * Zoho Deluge scripts for automating CRM system processes such as deployment of emails and record updating/deleting.
  `
let researchMD = `
  **Diverse Reactivity of a Rhenium(V) Oxo Imido Complex: [2 + 2] Cycloadditions, Chalcogen Metathesis, Oxygen Atom Transfer, and Protic and Hydridic 1,2-Additions** <br>
  Journal: Inorganic Chemistry <br>
  Date: July 14, 2020 <br>
  DOI: [10.1021/acs.inorgchem.0c01589](https://doi.org/10.1021/acs.inorgchem.0c01589)

  **Facile Activation of Triarylboranes by Rhenium(V) Oxo Imido Complexes**  <br>
  Journal: Inorganic Chemistry <br>
  Date: April 27, 2020 <br>
  DOI: [10.1021/acs.inorgchem.0c00658](https://doi.org/10.1021/acs.inorgchem.0c00658)
  `

export const cards: ResumeCard[] = [
  {
    link_anchor: 'education',
    nav_title: 'Education',
    title: 'Education',
    content: educationMD
  },
  {
    link_anchor: 'skills',
    nav_title: 'Skills',
    title: 'Skills',
    content: skillsMD
  },
  {
    link_anchor: 'experience',
    nav_title: 'Experience',
    title: 'Experience',
    content: jobsMD
  },
  {
    link_anchor: 'coursework',
    nav_title: 'Analytical Coursework',
    title: 'Analytical Coursework',
    content: courseworkMD
  },
  {
    link_anchor: 'lab',
    nav_title: 'Lab Coursework',
    title: 'Laboratory Coursework',
    content: labsMD
  },
  {
    link_anchor: 'research',
    nav_title: 'Research',
    title: 'Research Publications',
    content: researchMD
  },
]
