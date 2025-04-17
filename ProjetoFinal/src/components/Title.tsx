import { ReactNode } from "react";

type TitleProps = {
    children?: ReactNode;
};

function Title ({children}: TitleProps) {

    return (
        <h1>
            {children || "Clever designs, delivered free"}
        </h1>
    )
};

export default Title;