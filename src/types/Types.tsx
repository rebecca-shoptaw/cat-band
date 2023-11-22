import { MouseEventHandler } from "react";

export interface CatProps {
  id: string;
  name: string;
  role: string;
  arr: string[];
}

export interface CatCompProps {
    cat:CatProps,
    playing:boolean,
    handleClick:MouseEventHandler
}

export interface LineupProps {
    [key:string]:boolean
}