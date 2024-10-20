import { Button } from "./styles";

const button = ({children, ...props}) => {
    return (
        <Button{...props}>{children}</Button>
    )
}

export default button;