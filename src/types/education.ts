
export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  url: string;
  description?: string;
  certificates?: Certificate[]
}

export interface Certificate {
  photo: string;
}
