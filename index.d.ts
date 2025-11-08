declare module '@apiverve/dnslookup' {
  export interface dnslookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface dnslookupResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class dnslookupWrapper {
    constructor(options: dnslookupOptions);

    execute(callback: (error: any, data: dnslookupResponse | null) => void): Promise<dnslookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: dnslookupResponse | null) => void): Promise<dnslookupResponse>;
    execute(query?: Record<string, any>): Promise<dnslookupResponse>;
  }
}
