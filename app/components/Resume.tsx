"use client";

export type ResumeItem = {
  title: string;
  org?: string;
  period?: string;
  bullets?: string[];
};

export default function Resume() {
  const education: ResumeItem[] = [
    {
      title: "B.Eng (Hons) Robotics & Mechatronics",
      org: "Swinburne University of Technology (Sarawak)",
      period: "2021 — 2025",
      bullets: [
        "Key coursework: Robotics, Controls, Machine Dynamics, Kinematics, CAD, Cloud Computing Architecture, Computer Vision, IoT.",
        "CGPA: 3.81/4.0",
      ],
    },
    {
      title: "B.Eng (Hons) Robotics & Mechatronics [Exchange Programme]",
      org: "Swinburne University of Technology (Melbourne)",
      period: "Jul 2023 — Dec 2023",
      bullets: [
        "Key coursework: Robotics, Controls, Computer Vision, Artificial Intelligence, Web Development",
        "CGPA: 3.59/4.0",
      ],
    },
  ];

  const experience: ResumeItem[] = [
    {
      title: "Engineering Intern (Project Delivery)",
      org: "Sarawak Energy Berhad",
      period: "Jan 2024 — Mar 2024",
      bullets: [
        "Conducted quality audits and verified project documentation.",
        "Assisted in site inspections and coordinated with cross-functional teams.",
        "Compiled findings in Excel to support decision-making.",
      ],
    },
    {
      title: "Scholar",
      org: "Sarawak Energy Berhad",
      period: "2020 — Present",
      bullets: ["Full Scholarship Grant."],
    },
  ];

  const skills: string[] = [
    "Python (CV/ML)",
    "C/C++ (Robotics)",
    "TypeScript (Next.js)",
    "AWS / Serverless",
    "Arduino",
    "MATLAB",
    "SolidWorks",
  ];

  const languages: string[] = [
    "English",
    "Mandarin",
    "Bahasa Malaysia",
    "Bidayuh",
  ];

  return (
    <div className="max-w-none">
      {/* Header + actions */}
      <section>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Chrysander Soliment
            </h1>
            <p className="muted">
              Robotics & Mechatronics Engineering Graduate •
              chrysandersoliment@gmail.com
            </p>
          </div>
          <div className="flex gap-2">
            <a className="btn" href="/resume.pdf" download>
              Download PDF
            </a>
            <button className="btn" onClick={() => window.print()}>
              Print to PDF
            </button>
          </div>
        </div>
      </section>

      <hr className="my-6 border-zinc-200 dark:border-zinc-800" />

      {/* Summary */}
      <section>
        <h2 className="section-title">Summary</h2>
        <p className="muted">
          Robotics and Mechatronics focused on robotics, computer vision,
          embedded AI, automation, cloud architecture and web development. Keen
          on building reliable systems that bridge hardware and software in
          solving real-world problems.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-8">
        <h2 className="section-title">Experience</h2>
        <div className="grid gap-4">
          {experience.map((e, i) => (
            <div key={i} className="card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {e.title}
                  </h3>
                  <p className="muted">{e.org}</p>
                </div>
                <p className="muted text-sm">{e.period}</p>
              </div>
              {e.bullets && (
                <ul className="mt-3 list-disc pl-5 muted">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-8">
        <h2 className="section-title">Education</h2>
        <div className="grid gap-4">
          {education.map((e, i) => (
            <div key={i} className="card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {e.title}
                  </h3>
                  <p className="muted">{e.org}</p>
                </div>
                <p className="muted text-sm">{e.period}</p>
              </div>
              {e.bullets && (
                <ul className="mt-3 list-disc pl-5 muted">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-8">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-800"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="mt-8">
        <h2 className="section-title">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-800"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Print-only footer */}
      <footer className="print:block hidden mt-10 text-sm">
        <p>
          Chrysander Soliment · chrysandersoliment@gmail.com · LinkedIn:
          https://www.linkedin.com/in/chrysandersoliment/
        </p>
      </footer>
    </div>
  );
}
