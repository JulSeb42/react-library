// Packages
import React, { useState } from "react"

import {
    TabsContainer,
    TabsButtonsContainer,
    TabsButton,
    TabsContent,
} from "../components/Tabs"

const TabsPage = () => {
    const [active, setActive] = useState(1)

    return (
        <TabsContainer>
            <TabsButtonsContainer col={3}>
                <TabsButton
                    onClick={() => setActive(1)}
                    active={active === 1 && true}
                >
                    Tab 1
                </TabsButton>

                <TabsButton
                    onClick={() => setActive(2)}
                    active={active === 2 && true}
                >
                    Tab 2
                </TabsButton>

                <TabsButton
                    onClick={() => setActive(3)}
                    active={active === 3 && true}
                >
                    Tab 3
                </TabsButton>
            </TabsButtonsContainer>

            <TabsContent active={active === 1 && true}>
                Content tab 1
            </TabsContent>

            <TabsContent active={active === 2 && true}>
                Content tab 2
            </TabsContent>

            <TabsContent active={active === 3 && true}>
                Content tab 3
            </TabsContent>
        </TabsContainer>
    )
}

export default TabsPage

