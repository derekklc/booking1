import { PageNames } from "../constants"

export const homeMocks = {
    homeMenu: [
        {
            label: "Online Bookings",
            icon: "booking",
            pageId: PageNames.Bookings,
        },
        { label: "About HerbCure", icon: "about", pageId: PageNames.About },
        {
            label: "Herbal Products",
            icon: "products",
            pageId: PageNames.Products,
        },
        { label: "Contact Us", icon: "contant", pageId: PageNames.Contact },
    ],
}
