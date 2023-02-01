export const mq = (size) => {
    if (size == undefined || size == null || isNaN(size)) {
        return {
            up: "",
            down: "",
        }
    }
    return {
        up: `@media (width >= ${size})`,
        down: `@media (width < ${size})`,
    }
}
