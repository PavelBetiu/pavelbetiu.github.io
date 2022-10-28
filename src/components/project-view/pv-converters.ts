import { ProjectDTOLong } from "@/data-objects/project-dto";
import { SideBySideInput } from "./side-by-side-input";
import { WaveSectionInput } from "./wave-section-input";

import {
    ABOUT,
    FUNDING_AGENCY,
    OBJECTIVES,
    TEAM,
    PROJECT_ACTIVITIES,
    PROJECT_PHASES,
    DESCRIPTION,
    PUBLICATIONS
} from './section-constants';

export function convertToSideBySideInput(project: ProjectDTOLong, leftType: number, rightType: number | undefined): SideBySideInput | undefined {
    if (leftType === ABOUT && rightType === FUNDING_AGENCY) {
        return {
            leftSection: {
                type: ABOUT,
                title: "About",
                content: {
                    projectNumber: project.projectNumber,
                    contractNumber: project.contractNumber
                },
                image: "about-icon.svg",
            },
            rightSection: {
                type: FUNDING_AGENCY,
                title: "Funding Agency",
                content: {
                    name: project.fundingAgency.name,
                    logo: project.fundingAgency.logo
                },
                image: 'funding-agency-icon.svg'
            },
        };
    }

    if (leftType === OBJECTIVES && rightType === TEAM) {
        return {
            leftSection: {
                type: OBJECTIVES,
                title: "Objectives",
                content: {
                    objectives: project.objectives
                },
                image: "objective-icon.svg",
            },
            rightSection: {
                type: TEAM,
                title: "Team",
                content: {
                    team: project.team
                },
                image: "team-icon.svg",
            },
        };
    }

    if (leftType === PROJECT_ACTIVITIES && rightType === undefined) {
        return {
            leftSection: {
                type: PROJECT_ACTIVITIES,
                title: "Project Activities",
                content: {
                   activities: project.projectActivities
                },
                image: "task.svg",
            },
            rightSection: {
                type: -1,
                title: "",
                content: [],
                image: "",
            }
        };
    }
}

export function convertToWaveSectionInput(project: ProjectDTOLong, type: number): WaveSectionInput | undefined {
    if (type === DESCRIPTION) {
        return {
            type: DESCRIPTION,
            title: "Description",
            content: {
                description: project.description
            },
        };
    }

    if (type === PROJECT_PHASES) {
        return {
            type: PROJECT_PHASES,
            title: "Project Phases",
            content: {
                phases: project.projectPhases
            }
        };
    }

    if (type === PUBLICATIONS) {
        return {
            type: PUBLICATIONS,
            title: "Publications",
            content: {
                journals: project.publications.journals,
                conferences: project.publications.conferences
            }
        };
    }
}