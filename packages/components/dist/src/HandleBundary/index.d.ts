import { ReactElement } from "react";
import { UseQueryResult } from "@tanstack/react-query";
export interface HandleBundaryProps<T, E> {
    /**
     * useQuery返回值
     */
    query: UseQueryResult<T, E>;
    /**
     * data为请求的相应结果
     */
    children: (data: T) => ReactElement;
    /**
     * loading组件
     */
    loadingComponent?: ReactElement;
}
declare const HandleBundary: <T extends unknown, E = unknown>({ query, children, loadingComponent, }: HandleBundaryProps<T, E>) => JSX.Element;
export default HandleBundary;
