import {AbstractResource} from "../resource-lable";

export interface Goal {
  minute: number;
  extraTime?: any;
  type: string;
  team: AbstractResource;
  scorer: AbstractResource;
  assist: AbstractResource;
}
