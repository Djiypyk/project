declare module '*.scss' {
    interface IClassName {
        [className: string]: string
    }
    const classNames: IClassName;
    export = classNames
}

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'

declare const __IS_DEV__: boolean;