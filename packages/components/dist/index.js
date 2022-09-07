import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { Fragment as Fragment$1 } from 'react';
import cn from 'classnames';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/24/solid';

/**
 * Primary UI component for user interaction
 */ const Button = ({ primary =false , size ="medium" , backgroundColor , label , ...props })=>{
    return /*#__PURE__*/ jsx("button", {
        type: "button",
        className: cn("bg-primary text-red-300 px-2 w-[80px]h-8", "after:content-['']", "hover:bg-emerald-400 transition duration-150 first-letter:text-red-500"),
        style: {
            backgroundColor
        },
        ...props,
        children: label
    });
};

const Loading = ()=>{
    return /*#__PURE__*/ jsx(Fragment, {
        children: "Loading..."
    });
};

const HandleBundary = ({ query , children , loadingComponent =/*#__PURE__*/ jsx(Loading, {}) ,  })=>{
    if (query.isLoading) return loadingComponent;
    if (query.isSuccess) return children(query.data);
    return /*#__PURE__*/ jsxs("div", {
        children: [
            /*#__PURE__*/ jsx("p", {
                className: "my-4 text-purple-300",
                children: "请求发生错误\uD83E\uDD71，\uD83C\uDFB9\uD83D\uDE97❌"
            }),
            /*#__PURE__*/ jsx("button", {
                onClick: ()=>query.refetch(),
                children: "点击重试"
            })
        ]
    });
};

const Select = ({ selected , onChange , list  })=>{
    // const [selected, setSelected] = useState(people[0]);
    return /*#__PURE__*/ jsx("div", {
        className: "fixed top-16 w-72",
        children: /*#__PURE__*/ jsx(Listbox, {
            value: selected,
            onChange: onChange,
            children: /*#__PURE__*/ jsxs("div", {
                className: "relative mt-1",
                children: [
                    /*#__PURE__*/ jsxs(Listbox.Button, {
                        className: "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
                        children: [
                            /*#__PURE__*/ jsx("span", {
                                className: "block truncate",
                                children: selected.name
                            }),
                            /*#__PURE__*/ jsx("span", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                children: /*#__PURE__*/ jsx(ChevronDownIcon, {
                                    className: "h-5 w-5 text-gray-400",
                                    "aria-hidden": "true"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx(Transition, {
                        as: Fragment$1,
                        leave: "transition ease-in duration-100",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ jsx(Listbox.Options, {
                            className: "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
                            children: list.map((item, idx)=>/*#__PURE__*/ jsx(Listbox.Option, {
                                    className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"}`,
                                    value: item,
                                    children: ({ selected  })=>/*#__PURE__*/ jsxs(Fragment, {
                                            children: [
                                                /*#__PURE__*/ jsx("span", {
                                                    className: `block truncate ${selected ? "font-medium" : "font-normal"}`,
                                                    children: item.name
                                                }),
                                                selected ? /*#__PURE__*/ jsx("span", {
                                                    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600",
                                                    children: /*#__PURE__*/ jsx(CheckIcon, {
                                                        className: "h-5 w-5",
                                                        "aria-hidden": "true"
                                                    })
                                                }) : null
                                            ]
                                        })
                                }, idx))
                        })
                    })
                ]
            })
        })
    });
};

export { Button, HandleBundary, Loading, Select };
