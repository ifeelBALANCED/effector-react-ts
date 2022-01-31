import { Button } from "@chakra-ui/react";
import { useEvent, useStore } from "effector-react";
import { FC, memo } from "react";

import { $increment } from "@/features/counter/events";
import { $count } from "@/features/counter/model";

const textFontSizes = [16, 18, 24, 30];

const Counter: FC = () => {
  const counter = useStore($count);
  const counterApi = useEvent({ $increment });

  return (
    <Button
      colorScheme="blue"
      fontSize={textFontSizes}
      marginTop="2"
      onClick={() => counterApi.$increment()}
    >
      count is: {counter}
    </Button>
  );
};

export default memo(Counter);
