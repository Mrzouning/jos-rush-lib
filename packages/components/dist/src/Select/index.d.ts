/// <reference types="react" />
declare type t = string | number;
export interface ListType {
    values: t;
    name: t;
}
interface SelectProps {
    /**
     * 选择一个人物触发的回调
     */
    onChange: (current: ListType) => void;
    /**
     * 可选择的人物列表
     */
    list: ListType[];
    /**
     * 选中的人物
     */
    selected: ListType;
}
declare const Select: ({ selected, onChange, list }: SelectProps) => JSX.Element;
export default Select;
