export interface Person {
	firstName: string;
	lastName: string;
	email: string;
	address: string;
	zipCode: string;
	city: string;
	country: string;
	languages?: Language[];
	work?: Work[];
	projects?: Project[];
}

export interface Language {}

export interface Work {
	companyName: string;
	start: string;
	end: string;
	role?: Role[];
	description?: string;
	link?: string;
	projects?: Project[];
}

export interface Project {
	clientName: string;
	role?: Role[];
	description?: string;
	link?: string;
}

export interface Role {
	name: string;
}

export const person: Person = {
	firstName: 'Felix',
	lastName: 'Sauer',
	email: 'l8ter@fxsr.de',
	address: 'Engelbold Strasse 73',
	zipCode: '70569',
	city: 'Stuttgart',
	country: 'Germany'
};

export enum LanguageEnum {
	German = 'German',
	English = 'English'
}

export const languages: Language[] = [LanguageEnum.German, LanguageEnum.English];

export enum RoleEnum {
	ITConsultant = 'IT Consultant',
	SoftwareEngineer = 'Software Engineer',
	FrontendEngineer = 'Frontend Engineer',
	BackendEngineer = 'Backend Engineer',
	IncidentManager = 'Incident Manager',
	DevOpsEngineer = 'DevOps Engineer',
	DataEntryClerk = 'Data Entry Clerk'
}
