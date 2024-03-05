export interface DB {
  create: (statement: any) => Promise<any>
  update: (statement: any) => Promise<any>
  remove: (statement: any) => Promise<any>
  list: (statement: any) => Promise<any[]>
}
