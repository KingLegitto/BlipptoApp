import { ReactComponent as Guard } from "../assets/Guard.svg";
import { ReactComponent as Facilities } from "../assets/Facilities.svg";
import { ReactComponent as Users } from "../assets/Users.svg";
import { ReactComponent as Staffs } from "../assets/Staffs.svg";
import { ReactComponent as Bills } from "../assets/bills.svg";
import { ReactComponent as Keypad } from "../assets/keypad.svg";
import { ReactComponent as Services } from "../assets/Services.svg";
import { ReactComponent as Friends } from "../assets/friend.svg";
import { ReactComponent as Invite } from "../assets/invite.svg";
import { ReactComponent as Profile } from "../assets/profile.svg";
import { ReactComponent as Verification } from "../assets/verification.svg";
import { ReactComponent as Visits } from "../assets/visit.svg";
import { ReactComponent as Home } from "../assets/Home.svg";


export const staffCategories = [
    {
        icon: Home,
        title: "Home",
        route: "/dashboard/home",
    },
    {
        icon: Users,
        title: "Residents",
        route: "/dashboard/residents",
    },
    {
        icon: Facilities,
        title: "Facilities",
        route: "/dashboard/facility",
    },
    {
        icon: Keypad,
        title: "Check-In",
        route: "/dashboard/keypad",
    },
    {
        icon: Bills,
        title: "Bills",
        route: "/dashboard/billing",
    },
    {
        icon: Staffs,
        title: "Staffs",
        route: "/dashboard/staffs",
    },
    {
        icon: Guard,
        title: "Guards",
        route: "/dashboard/guards",
    },
    {
        icon: Services,
        title: "Services",
        route: "/dashboard/services",
    },
];

export const userCategories = [
    {
        icon: Friends,
        title: "Friends",
        route: "/dashboard/friend",
    },
    {
        icon: Visits,
        title: "Visits",
        route: "/dashboard/visit",
    },
    {
        icon: Verification,
        title: "Verification",
        route: "/dashboard/verification",
    },
    {
        icon: Profile,
        title: "Profile",
        route: "/dashboard/profile",
    },
];

export const residentCategories = [
    {
        icon: Friends,
        title: "Friends",
        route: "/dashboard/friend",
    },
    {
        icon: Invite,
        title: "Invite",
        route: "/dashboard/invite",
    },
    {
        icon: Visits,
        title: "Visits",
        route: "/dashboard/visit",
    },
    {
        icon: Verification,
        title: "Verification",
        route: "/dashboard/verification",
    },
    {
        icon: Profile,
        title: "Profile",
        route: "/dashboard/profile",
    },
    {
        icon: Facilities,
        title: "Facilities",
        route: "/dashboard/facilities",
    },
    {
        icon: Services,
        title: "Services",
        route: "/dashboard/services",
    },
];