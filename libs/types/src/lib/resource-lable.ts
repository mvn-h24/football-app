export type ResourceLabel<T> = Omit<T, 'id'|'name'>
export interface ResourceWithLable{
  id: number;
  name: string;
}

export type AbstractResource = ResourceLabel<ResourceWithLable>
