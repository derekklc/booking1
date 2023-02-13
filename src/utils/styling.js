export const mq = (size) => {
    if (size === undefined || size === null || isNaN(size)) {
        return {
            up: "",
            down: "",
        }
    }
    return {
        up: `@media (width >= ${size}px)`,
        down: `@media (width < ${size}px)`,
    }
}
