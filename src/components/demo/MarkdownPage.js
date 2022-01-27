// Packages
import React, { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import Link from "../utils/LinkScroll"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import PageLayout from "./PageLayout"
import CodeContainer from "./CodeContainer"

// Demo components
import DemoColors from "../demo/DemoColors"
import DemoShadows from "./DemoShadows"
import DemoInputs, {
    DemoValidate,
    DemoPassword,
    DemoCounter,
    DemoMarkdown,
    DemoImage,
} from "./DemoInputs"
import DemoSuggestions from "./DemoSuggestions"
import DemoBreadcrumbs from "./DemoBreadcrumbs"
import { DemoAccordionRounded, DemoAccordionBasic } from "./DemoAccordion"
import DemoDropdown from "./DemoDropdown"
import DemoModal from "./DemoModal"
import DemoPagination from "./DemoPagination"
import DemoTabs from "./DemoTabs"
import DemoSlideshow from "./DemoSlideshow"
import DemoBurger from "./DemoBurger"
import { DemoMessaging, DemoMessagesEmpty } from "./DemoMessaging"
import DemoUtils from "./DemoUtils"

// Components to import
import Grid from "../layouts/Grid"
import Wrapper from "../layouts/Wrapper"
import Main from "../layouts/Main"
import Aside from "../layouts/Aside"
import Icon from "../ui/Icon"
import Image from "../ui/Image"
import Video from "../ui/Video"
import Avatar from "../ui/Avatar"
import Button from "../ui/Button"
import ButtonIcon from "../ui/ButtonIcon"
import Tag from "../ui/Tag"
import Badge from "../ui/Badge"
import Input from "../ui/Input"
import CheckInput from "../ui/CheckInput"
import ListSuggestions from "../ui/ListSuggestions"
import ButtonsContainer from "../ui/ButtonsContainer"
import Form from "../ui/Form"
import Loader from "../ui/Loader"
import {
    Breadcrumbs,
    BreadcrumbsLink,
    BreadcrumbsActive,
} from "../ui/Breadcrumbs"
import { Accordion, AccordionItem } from "../ui/Accordion"
import { DropdownContainer, Dropdown } from "../ui/Dropdown"
import Toast from "../ui/Toast"
import { BasicCard, ImageCard } from "../ui/Card"
import Modal from "../ui/Modal"
import { Pagination, PaginationButton } from "../ui/Pagination"
import ProgressBar from "../ui/ProgressBar"
import Alert from "../ui/Alert"
import TitleFlex from "../ui/TitleFlex"
import Hr from "../ui/Hr"
import MarkdownContainer from "../ui/MarkdownContainer"
import Helmet from "../ui/Helmet"

const options = {
    forceBlock: true,

    wrapper: PageLayout,

    overrides: {
        Font: {
            component: Font,
        },

        h1: {
            component: Font.H1,
        },

        H1: {
            component: Font.H1,
        },

        h2: {
            component: Font.H2,
        },

        H2: {
            component: Font.H2,
        },

        h3: {
            component: Font.H3,
        },

        H3: {
            component: Font.H3,
        },

        h4: {
            component: Font.H4,
        },

        H4: {
            component: Font.H4,
        },

        h5: {
            component: Font.H5,
        },

        H5: {
            component: Font.H5,
        },

        h6: {
            component: Font.H6,
        },

        p: {
            component: Font.P,
        },

        P: {
            component: Font.P,
        },

        strong: {
            component: Font.Strong,
        },

        Strong: {
            component: Font.Strong,
        },

        em: {
            component: Font.Em,
        },

        Em: {
            component: Font.Em,
        },

        ul: {
            component: Font.List,
        },

        List: {
            component: Font.List,
        },

        small: {
            component: Font.Small,
        },

        Small: {
            component: Font.Small,
        },

        Link: {
            component: Link,
        },

        pre: {
            component: CodeContainer,
        },

        img: {
            component: Image,
        },

        DemoColors,
        DemoShadows,
        DemoInputs,
        DemoSuggestions,
        DemoValidate,
        DemoPassword,
        DemoCounter,
        DemoMarkdown,
        DemoImage,
        DemoBreadcrumbs,
        DemoAccordionBasic,
        DemoAccordionRounded,
        DemoDropdown,
        Variables,
        DemoModal,
        DemoPagination,
        DemoTabs,
        DemoSlideshow,
        DemoBurger,
        DemoMessaging,
        DemoMessagesEmpty,
        DemoUtils,

        Grid,
        Wrapper,
        Main,
        Aside,
        Icon,
        Image,
        Video,
        Avatar,
        Button,
        ButtonIcon,
        Tag,
        Badge,
        Input,
        CheckInput,
        ListSuggestions,
        ButtonsContainer,
        Form,
        Loader,
        Breadcrumbs,
        BreadcrumbsLink,
        BreadcrumbsActive,
        Accordion,
        AccordionItem,
        Dropdown,
        DropdownContainer,
        Toast,
        BasicCard,
        ImageCard,
        Modal,
        Pagination,
        PaginationButton,
        ProgressBar,
        Alert,
        TitleFlex,
        Hr,
        MarkdownContainer,
        Helmet,
    },
}

function MarkdownPage({ content }) {
    const [post, setPost] = useState("")

    useEffect(() => {
        import(`../../markdown/${content.toLowerCase()}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })

    return <Markdown options={options}>{post}</Markdown>
}

export default MarkdownPage
