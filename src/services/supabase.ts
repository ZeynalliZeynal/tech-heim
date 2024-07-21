import { createClient } from "@supabase/supabase-js";

export type QueryMethods =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "like"
  | "ilike"
  | "is"
  | "in"
  | "contains"
  | "containedBy"
  | "range";

export const isQueryMethod = (method: string): method is QueryMethods => {
  return [
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte",
    "like",
    "ilike",
    "is",
    "in",
    "contains",
    "containedBy",
    "range",
  ].includes(method);
};

export const queryMethodMap = {
  eq: (query: any, field: string, value: any) => query.eq(field, value),
  neq: (query: any, field: string, value: any) => query.neq(field, value),
  gt: (query: any, field: string, value: any) => query.gt(field, value),
  gte: (query: any, field: string, value: any) => query.gte(field, value),
  lt: (query: any, field: string, value: any) => query.lt(field, value),
  lte: (query: any, field: string, value: any) => query.lte(field, value),
  like: (query: any, field: string, value: any) => query.like(field, value),
  ilike: (query: any, field: string, value: any) => query.ilike(field, value),
  is: (query: any, field: string, value: any) => query.is(field, value),
  in: (query: any, field: string, value: any) => query.in(field, value),
  contains: (query: any, field: string, value: any) =>
    query.contains(field, value),
  containedBy: (query: any, field: string, value: any) =>
    query.containedBy(field, value),
  range: (query: any, field: string, value: any) => query.range(field, value),
};

export const supabaseUrl: string = "https://vyhhxsbwqijjsemwtexx.supabase.co";
const supabaseKey: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5aGh4c2J3cWlqanNlbXd0ZXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4OTUyMTcsImV4cCI6MjAzMzQ3MTIxN30.VLnfNTPCBUn9Cr07cgQFK2SYuEBZgkVkjsVmVS6alIM";
export const supabase = createClient(supabaseUrl, supabaseKey);
