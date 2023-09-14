/**
 * DTO for fetching short descriptions of projects
 */
export interface ProjectDTOShort {
    title: string,
    link: string,
    description: string,
    image: string,
    imageDescription: string
}

/**
 * DTOs for fetching detailed information about a single project
 */
export interface ProjectTeamMemberDTO {
    name: string,
    links: {
        dblp?: string,
        gscholar?: string,
        linkedin?: string,
        rgate?: string
    }
}

export interface ProjectPhaseDTO {
    phase: string,
    description: string
}

export interface ProjectActivityDTO {
    activityNumber: string,
    activityName: string,
    dateStart: string,
    dateEnd: string
}

export interface PublicationDTO {
    title: string,
    url: string
}

export interface ProjectDTOLong {
    title: string,
    acronym: string,
    projectNumber?: string | undefined,
    mysims?: string | undefined,
    contractNumber: string,
    fundingAgency: {
        name: string,
        logo: string,
    },
    description: string,
    descriptionImage?: string,
    objectives: string[],
    team: ProjectTeamMemberDTO[],
    projectPhases?: ProjectPhaseDTO[],
    projectActivities?: ProjectActivityDTO[],
    notableResults?: undefined,
    publications: {
        journals: PublicationDTO[],
        conferences: PublicationDTO[],
    },
    ue?: boolean,
    link: string // Used for fetching the project's detailed information
}