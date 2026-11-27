export interface Member {
  id: string;
  name: string;
  sector: string;
  description?: string;
  membership?: string;
  website?: string;
  /** Put logos in public/members and use a path such as /members/shop.png. */
  logo?: string;
  confirmed: boolean;
  publishPermission: boolean;
  logoPermission: boolean;
}

export interface NetworkConfig {
  contactEmail: string;
  membershipYear: string;
  members: Member[];
  impact: { confirmedExchanges: number; itemsReused: number };
}

export type EnquiryKind = "membership" | "question";
export type InformationKind = "recognition" | "privacy";
export type NetworkDialog = EnquiryKind | InformationKind | null;
