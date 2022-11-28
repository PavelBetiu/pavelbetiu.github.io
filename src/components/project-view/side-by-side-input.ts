export interface Section {
    type: number,
    title: string,
    content: any,
    image: string,
}

export interface SideBySideInput {
    leftSection: Section,
    rightSection: Section
}