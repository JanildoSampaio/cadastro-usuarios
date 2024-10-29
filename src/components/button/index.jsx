import { Button } from "./styles";

const button = ({children, theme, ...props}) => {
    return (
        <Button{...props} theme={theme}>{children}</Button>
    )
}

export default button;