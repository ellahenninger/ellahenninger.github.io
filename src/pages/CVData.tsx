import React from 'react';

export interface CVSection {
    title: string;
    items: CVItemData[];
}

export interface CVItemData {
    years?: string;
    title?: string;
    content?: string | React.ReactNode;
}

export const cvSections: CVSection[] = [
    {
        title: 'Education',
        items: [
            {
                years: 'since July 2023',
                title: 'PhD in Political Science – ETH Zurich',
                content: `Chair for International Political Economy and Environmental Politics
SNIS Project “Designing Environmentally Effective and Politically Feasible Policies for Cleaner Urban Air in the Global South”`,
            },
            {
                years: 'Sept. 2021 – June 2023',
                title: 'Master of Arts in Political Science – University of Mannheim',
                content: 'MA Thesis “The Environmental Price of Economic Inequality – Decomposing the Effect of Income Disparities on Exposure to Air Pollution”',
            },
            {
                years: 'Aug. 2022 – Dec. 2022',
                title: 'Exchange Student at the School of Public and European Affairs, Sciences Po Paris',
            },
            {
                years: 'Oct. 2018 – Sept. 2021',
                title: 'Bachelor of Arts (Dual-subject) Geography and Political Science – University of Münster',
                content: 'BA Thesis “Analysis of the wind directions at two nearby meteorological stations”',
            },
            {
                years: 'Oct. 2017 – July 2018',
                title: 'Studium Generale – University of Tübingen, Leibniz Kolleg',
            },
        ],
    },
    {
        title: 'Working Experience',
        items: [
            {
                years: 'Jan. 2022 – May 2023',
                title: 'Research Assistant',
                content: `Chair for Quantitative Methods in the Social Sciences (Prof. Thomas Gschwend), University of Mannheim
Data collection, manual video annotation, and further research assistance`,
            },
            {
                years: 'Apr. 2021 – Sept. 2021',
                title: 'Tutor',
                content: `Research Unit Comparative Public Policy-Analysis and Empirical Methods (Prof. Oliver Treib), Institute of Political Science, University of Münster
Three weekly tutorials on various empirical methods and government activity`,
            },
            {
                years: 'Oct. 2020 – March 2021',
                title: 'Tutor',
                content: `Research Unit Empirical Methods (Prof. Bernd Schlipphak), Institute of Political Science, University of Münster
Two weekly tutorials on OLS regression and maximum likelihood estimation`,
            },
        ],
    },
    {
        title: 'Scholarships',
        items: [
            {
                years: 'Sept. 2022 – May 2023',
                title: 'Associate Membership at the Center for Doctoral Studies in Social and Behavioral Sciences of the University of Mannheim',
            },
            {
                years: 'Oct. 2019 – Sept. 2021',
                title: 'ProTalent Scholarship of the University of Münster',
            },
        ],
    },
    {
        title: 'Skills',
        items: [
            { title: 'Computing', content: 'R, LaTeX, Office Programs' },
            { title: 'German', content: 'Mother Tongue' },
            { title: 'English', content: 'Fluent (TOEFL iBT 113/120)' },
            { title: 'French', content: 'Advanced (B2)' },
            { title: 'Spanish', content: 'Basic (B1)' },
        ],
    },
    {
        title: 'Publications',
        items: [
            {
                content: <span>Bernauer T, Böhmelt T, Henninger E. (2025): Shifting environmental pollution abroad contributes to lower emissions in democracies. <i>PLOS Clim.</i> 4(5): e0000602. <a href="https://doi.org/10.1371/journal.pclm.0000602" target="_blank" rel="noopener noreferrer">doi</a></span>,
            },
            {
                content: <span>Smith, E. K, Fournier de Lauriere, C, Henninger E. (2025): Persistent inequalities in global air quality monitoring should not delay pollution mitigation. <i>PNAS</i> 122(18): e2423259122. <a href="https://doi.org/10.1073/pnas.2423259122" target="_blank" rel="noopener noreferrer">doi</a></span>,
            },
            {
                content: <span>Bernauer T, Böhmelt T, Henninger E. (2025): Can Democracy Protect Lower-Income Countries From Becoming Pollution Havens? <i>The Journal of Environment & Development.</i> 0(0): 1-20. <a href="https://doi.org/10.1177/10704965251317436" target="_blank" rel="noopener noreferrer">doi</a></span>,
            },
            {
                content: <span>Henninger E, Smith KE. (2024): Beyond the haze: Decomposing the effect of economic inequality on global air quality from 2000 to 2020. <i>Ecological Economics.</i> 222(108210): 1-12. <a href="https://doi.org/10.1016/j.ecolecon.2024.108210" target="_blank" rel="noopener noreferrer">doi</a></span>,
            },
            {
                content: <span>Klemm O, Ahrens A, Arnswald M, Bethke R, Berger DF, Blankenhaus K, Blauth L, Breuer B, Buchholz S, Burek F, Ehrnsperger L, Funken S, Henninger E, Hohl J, Jöllenbeck N, Kirgasser P, Kuhls M, Paas B, Roters LA, Schaller C, Schlüter H. (2022): The Impact of Traffic and Meteorology on Urban Particle Mass and Particle Number Concentrations: Student-Led Studies Using Mobile Measurements before, during, and after the COVID-19 Pandemic Lockdowns. <i>Atmosphere.</i> 13(62): 1-16. <a href="https://doi.org/10.3390/atmos13010062" target="_blank" rel="noopener noreferrer">doi</a></span>,
            },
        ],
    },
    {
        title: 'Reviews',
        items: [
            { content: 'British Journal of Political Science, Environmental Politics, Global Environmental Politics, Environment and Development Economics' },
        ],
    },
    {
        title: 'Conferences',
        items: [
            { content: '2025 Environmental Politics and Governance, ECPR, SPSA' },
            { content: '2024 EPSA, SPSA' },
        ],
    },
    {
        title: 'Workshops and Summer Schools',
        items: [
            { content: '2024 GESIS Workshop Multi-level Structural Equation Modeling, Mannheim.' },
            { content: '2024 GESIS Workshop Cross-cultural Survey Design and Questionnaire Translation and Pretesting.' },
            { content: '2024 GESIS Workshop Earth Observational Data in the Social Sciences, Cologne.' },
            { content: '2023 GESIS Workshop Geodata and Spatial Regression Analysis, Mannheim.' },
            { content: '2023 Summer School Women in Political Methodology, Basel.' },
            { content: '2023 GESIS Workshop Earth Observational Data in the Social Sciences, Cologne.' },
        ],
    },
];
