export interface Season {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday?: number;
  availableStages?: Array<string>;
}
