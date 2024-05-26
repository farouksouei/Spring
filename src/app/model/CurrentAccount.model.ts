export interface CurrentAccount{
  id: string;
  balance: number;
  createdAt: Date;
  accountStatus: string;
  type: string;
  overDraft : number;
}
