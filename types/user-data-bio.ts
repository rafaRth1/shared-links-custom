export interface LinksBio {
  _id: string;
  url: string;
  platformName: string;
  customName: string;
  position: number;
}

export interface UserDataBio {
  _id?: string;
  name: string;
  title: string;
  description: string;
  imageProfile: string;
  bannerImage: string;
  links: LinksBio[];
  createdAt?: string;
  updatedAt?: string;
  user: string;
}
