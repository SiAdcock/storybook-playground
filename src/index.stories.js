import React from "react"
import { storiesOf } from "@storybook/react"
import { Button } from "@storybook/react/demo"

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add(
    "with some emoji",
    () => (
      <Button>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    {
      backgrounds: [
        {
          name: "red",
          value: "rgba(255, 0, 0)",
          default: true
        }
      ]
    }
  )
