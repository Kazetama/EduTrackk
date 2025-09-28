export interface Pagination<T> {
    data: T[];
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from?: number;
    to?: number;
    links?: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
}
