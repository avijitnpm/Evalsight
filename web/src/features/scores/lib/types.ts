import { type ScoreDataTypeType, type ScoreSourceType } from "@evalsight/shared";

export type ScoreData = {
  key: string;
  name: string;
  dataType: ScoreDataTypeType;
  source: ScoreSourceType;
};
