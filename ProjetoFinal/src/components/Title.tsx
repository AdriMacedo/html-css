import "./Title.scss";

import { ReactNode } from "react";

type TitleProps = {
    children?: ReactNode;
    className?: string;
};

function Title ({children, className}: TitleProps) {

    return (
        <h1 className={className}>
            {children || "Clever designs, delivered free"}
        </h1>
    )
};

export default Title;