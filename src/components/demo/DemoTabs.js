// Packages
import React, { useState } from "react"

import {
    TabsContainer,
    TabsButtonsContainer,
    TabsButton,
    TabsContent,
} from "../ui/Tabs"

function DemoTabs() {
    const [active, setActive] = useState(1)

    return (
        <TabsContainer>
            <TabsButtonsContainer col={3}>
                <TabsButton
                    onClick={() => setActive(1)}
                    className={active === 1 ? "active" : ""}
                >
                    Tab 1
                </TabsButton>

                <TabsButton
                    onClick={() => setActive(2)}
                    className={active === 2 ? "active" : ""}
                >
                    Tab 2
                </TabsButton>

                <TabsButton
                    onClick={() => setActive(3)}
                    className={active === 3 ? "active" : ""}
                >
                    Tab 3
                </TabsButton>
            </TabsButtonsContainer>

            <TabsContent className={active === 1 ? "active" : ""}>
                Content tab 1
            </TabsContent>

            <TabsContent className={active === 2 ? "active" : ""}>
                Content tab 2
            </TabsContent>

            <TabsContent className={active === 3 ? "active" : ""}>
                Content tab 3
            </TabsContent>
        </TabsContainer>
    )
}

export default DemoTabs
