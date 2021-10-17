export interface DownloadDocumentCommand {
    id: string
};

export interface DeleteDocumentCommand {
    id: string
};

export interface CreateDocumentCommand {
    title: string,
    description?: string
};

export interface ReadDocumentCommand {
    id: string
};

export interface UpdateDocumentCommand {
    id: string
    title: string,
    description?: string
};

export interface DocumentViewModel{
    id: string,
    title: string,
    description: string,
    fileName: string,
    extension: string,
    mimeType: string,
    metadata: MetadataViewModel
};

export interface LoginRequest{
    username: string;
    password: string;
}

export interface CreateContactCommand {
    name: string,
    email: string,
    subject: string,
    message: string
}

export interface MetadataViewModel{
    createdAt: string,
    updatedAt: string,	
    createdBy: string,	
    createdByName: string,	
    updatedBy: string,	
    updatedByName: string,
    isDeleted:	boolean
}

export interface ContactViewModel{
    id:	string,
    name: string,
    email: string,
    subject: string,
    message: string,
    markAsRead:	boolean,
    metadata: MetadataViewModel
}

export interface CreateNewsletterCommand {
    fullName: string,
    email: string
}

export interface ErrorResponse {
    code: number,
    message: string,
    errores: any[]
}